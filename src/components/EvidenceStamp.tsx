import { DATE_PRECISION_LABEL, EVIDENCE_META, t } from '../data/i18n';
import type { DatePrecision, EvidenceGrade, Language } from '../types/seerah';

interface EvidenceStampProps {
  grade: EvidenceGrade;
  lang: Language;
  datePrecision?: DatePrecision;
  dateText?: string;
  darkSurface?: boolean;
}

export function EvidenceStamp({
  grade,
  lang,
  datePrecision,
  dateText,
  darkSurface = false,
}: EvidenceStampProps) {
  const meta = EVIDENCE_META[grade];
  const gradeColor = darkSurface
    ? grade === 'disputed' || grade === 'daif'
      ? 'text-[#E3BE83]'
      : 'text-[#C5A46D]'
    : meta.accentClass;

  const mutedColor = darkSurface ? 'text-[#F2E8D5]/75' : 'text-[#5E594F]';

  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${mutedColor}`}>
      <span
        className={`font-semibold tracking-wide ${gradeColor}`}
        title={t(meta.description, lang)}
      >
        {t(meta.label, lang)}
      </span>
      {dateText && (
        <>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{dateText}</span>
        </>
      )}
      {datePrecision && datePrecision !== 'exact' && (
        <>
          <span aria-hidden="true">·</span>
          <span className="italic">{t(DATE_PRECISION_LABEL[datePrecision], lang)}</span>
        </>
      )}
    </div>
  );
}
