import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VECTRIX - UX/UI for Critical Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: '#0B0E11',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(42, 49, 64, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 49, 64, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Red glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle, rgba(234, 62, 62, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#FFFFFF',
              letterSpacing: '0.05em',
              marginBottom: 40,
            }}
          >
            VECTRIX
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#FFFFFF',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            INTERFACES FOR
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#EA3E3E',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            CRITICAL SYSTEMS
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 20,
              color: '#8B9AAB',
              marginTop: 32,
              maxWidth: 600,
            }}
          >
            UX/UI for defense, infrastructure, and mission-critical platforms
          </div>
        </div>

        {/* Corner accent */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 60,
            width: 80,
            height: 80,
            border: '2px solid rgba(234, 62, 62, 0.3)',
            borderRadius: 8,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
