/**
 * FimoLogo — brand logo component
 *
 * CÁCH THÊM LOGO THẬT:
 *   1. Đặt file vào /public/brand/logo-full.png  (logo ngang: icon + chữ fimoPAY)
 *   2. Đặt file vào /public/brand/logo-icon.png  (icon vuông)
 *   3. Bun run dev hoặc reload — ảnh tự hiện ngay.
 *
 * Khi chưa có file, hiển thị SVG fallback đúng brand.
 */

import { useState } from 'react'

// Website_fimopay.png = icon vuông (dùng làm icon cho cả full và icon variant)
// Chữ "fimoPAY" luôn được render bằng code bên cạnh icon ảnh
const SRC_ICON = '/brand/Website_fimopay.png'

interface FimoLogoProps {
  variant?: 'full' | 'icon'
  height?: number
  className?: string
}

// ── SVG Fallback — luôn đúng brand khi chưa có file ảnh ──────────
function FimoSVGFallback({ height, variant }: { height: number; variant: 'full' | 'icon' }) {
  const iconSize = height
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height }}>
      {/* Icon: rounded square gradient + 2 interlocked rings */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect width="40" height="40" rx="10" fill="url(#fimo-bg-svg)" />
        {/* Left ring */}
        <circle cx="15" cy="20" r="7.5" stroke="white" strokeWidth="3.5" fill="none" />
        {/* Right ring — slightly transparent to show overlap */}
        <circle cx="25" cy="20" r="7.5" stroke="white" strokeWidth="3.5" fill="none" strokeOpacity="0.65" />
        <defs>
          <linearGradient id="fimo-bg-svg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#5fbeff" />
            <stop offset="100%" stopColor="#1a6fff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark — only for full variant */}
      {variant === 'full' && (
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 2 }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: Math.round(height * 0.58),
            letterSpacing: '-0.03em',
            color: '#0f2340',
            lineHeight: 1,
          }}>
            fimo
          </span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: Math.round(height * 0.30),
            letterSpacing: '0.05em',
            color: '#1a6fff',
            lineHeight: 1,
            textTransform: 'uppercase' as const,
            alignSelf: 'flex-start',
            marginTop: Math.round(height * 0.04),
          }}>
            PAY
          </span>
        </span>
      )}
    </span>
  )
}

// ── Main component ────────────────────────────────────────────────
export default function FimoLogo({
  variant = 'full',
  height = 36,
  className = '',
}: FimoLogoProps) {
  const [imgFailed, setImgFailed] = useState(false)
  const iconH = height

  // Nếu ảnh lỗi → dùng SVG fallback hoàn toàn
  if (imgFailed) {
    return <FimoSVGFallback height={height} variant={variant} />
  }

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: 8, height }}
      aria-label="fimoPAY"
    >
      {/* Icon ảnh thật */}
      <img
        src={SRC_ICON}
        alt=""
        aria-hidden="true"
        style={{ height: iconH, width: iconH, objectFit: 'contain', display: 'block', flexShrink: 0 }}
        onError={() => setImgFailed(true)}
      />

      {/* Chữ fimo + PAY — luôn hiện kèm theo ảnh */}
      {variant === 'full' && (
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 2 }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: Math.round(height * 0.58),
            letterSpacing: '-0.03em',
            color: '#0f2340',
            lineHeight: 1,
          }}>
            fimo
          </span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: Math.round(height * 0.30),
            letterSpacing: '0.05em',
            color: '#1a6fff',
            lineHeight: 1,
            textTransform: 'uppercase' as const,
            alignSelf: 'flex-start',
            marginTop: Math.round(height * 0.04),
          }}>
            PAY
          </span>
        </span>
      )}
    </span>
  )
}

// ── LogoWithFallback — alias dùng ở Header ───────────────────────
export function LogoWithFallback(props: FimoLogoProps) {
  return <FimoLogo {...props} />
}
