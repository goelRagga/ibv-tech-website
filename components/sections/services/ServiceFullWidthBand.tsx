'use client';

interface ServiceFullWidthBandProps {
  /** Optional absolute path to an image from /public */
  imageSrc?: string;
  /** Tailwind height classes, e.g. "h-64 lg:h-80" */
  heightClass?: string;
}

export function ServiceFullWidthBand({
  imageSrc,
  heightClass = 'h-64 lg:h-80',
}: ServiceFullWidthBandProps) {
  return (
    <div className={`w-full ${heightClass} relative overflow-hidden bg-[#0f0d0c]`}>
      {/* Optional photo layer */}
      {imageSrc && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${imageSrc}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Warm dark gradient overlay — makes gradient-only mode feel like a moody photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(120deg, #0d0b09 0%, #1e1208 25%, #2a1a0a 50%, #1a1208 75%, #0f0c0a 100%)',
          opacity: imageSrc ? 0.72 : 1,
        }}
      />

      {/* Subtle warm radial highlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 55% 45%, rgba(160,100,40,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Left-edge red bleed */}
      <div
        className="absolute inset-y-0 left-0 w-[1px]"
        style={{ background: 'rgba(227,10,19,0.5)' }}
      />
    </div>
  );
}
