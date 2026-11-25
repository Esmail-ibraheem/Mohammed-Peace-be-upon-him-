import { useState } from 'react';
import { Compass } from 'lucide-react';

interface ArchivalImageProps {
  src?: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectClass?: string;
}

export function ArchivalImage({
  src,
  alt,
  caption,
  className = '',
  aspectClass = 'aspect-[16/9]',
}: ArchivalImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden bg-[#101B17] ${aspectClass}`}
      >
        {src && !failed ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#101B17] via-[#172721] to-[#272521] p-6 text-center text-[#F2E8D5]">
            <Compass className="mb-3 h-7 w-7 text-[#C5A46D]" aria-hidden="true" />
            <span className="font-editorial text-lg text-[#F9F6EF]">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 font-editorial text-xs italic text-[#5E594F]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
