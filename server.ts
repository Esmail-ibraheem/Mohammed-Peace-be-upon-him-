import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { buildGroundedContext } from './src/utils/seerahEngine.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.post('/api/ask-seerah', async (req, res) => {
    const rawQuestion = typeof req.body?.question === 'string' ? req.body.question.trim() : '';
    const lang = req.body?.lang === 'ar' ? 'ar' : 'en';

    if (!rawQuestion || rawQuestion.length < 3) {
      res.status(400).json({
        error:
          lang === 'ar'
            ? 'يرجى كتابة سؤال واضح حول السيرة النبوية (٣ أحرف على الأقل).'
            : 'Please enter a clear question about the Seerah (at least 3 characters).',
      });
      return;
    }

    const { hits, contextText } = buildGroundedContext(rawQuestion);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      res.status(503).json({
        error:
          lang === 'ar'
            ? 'مفتاح Gemini غير مُعدّ حالياً على الخادم. يمكنك مراجعة المصادر الموثّقة المستخرجة مباشرةً من الموسوعة أدناه.'
            : 'Gemini AI synthesis is unavailable because GEMINI_API_KEY is not configured in Settings > Secrets. Verified matching entries from the archive are shown below.',
        citations: hits,
      });
      return;
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const systemInstruction =
        lang === 'ar'
          ? `أنت باحث متخصص في السيرة النبوية ضمن موسوعة «الرحلة النبوية». أجب بدقة ووقار باللغة العربية اعتماداً على المدخلات الموثقة المزوّدة أدناه فقط. اذكر درجة التوثيق (قرآن، صحيح، حسن، مختلف فيه، ضعيف، تاريخي) والمصادر بوضوح، ولا تختلق أحداثاً أو أحاديث غير موثقة. اجعل الإجابة مركّزة ومرتبة في فقرتين إلى ثلاث فقرات.`
          : `You are a careful Seerah researcher for "The Prophetic Journey" digital encyclopedia. Answer concisely and respectfully in English grounded in the verified archive entries provided below. Explicitly distinguish between Qur'an, Sahih, Hasan, Disputed, Da'if, and Historical reports, cite the exact sources mentioned, and never fabricate narrations. Keep the answer clear and structured in 2–3 short paragraphs.`;

      const prompt = `User question: ${rawQuestion}\n\nVerified Encyclopedia Context:\n${contextText}`;

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: prompt,
        config: {
          systemInstruction,
        },
      });

      res.json({
        answer: response.text ?? '',
        citations: hits,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Unable to reach Gemini API.';
      res.status(502).json({
        error:
          lang === 'ar'
            ? `تعذّر إتمام التحليل عبر Gemini حالياً (${message}). المصادر المطابقة من الأرشيف متاحة أدناه.`
            : `Gemini synthesis encountered an error (${message}). Verified matching entries from the archive remain available below.`,
        citations: hits,
      });
    }
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      const indexFile = path.join(distPath, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Build output not found.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`The Prophetic Journey server running on http://localhost:${PORT}`);
  });
}

startServer();
