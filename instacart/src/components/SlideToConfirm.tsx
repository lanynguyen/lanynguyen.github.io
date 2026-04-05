import { useRef, useState, useCallback } from 'react'

interface Props {
  onConfirm: () => void
}

export default function SlideToConfirm({ onConfirm }: Props) {
  const [progress, setProgress] = useState(0)
  const [confirmed, setConfirmed] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const handlePercent = useCallback((clientX: number) => {
    if (!trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const handleWidth = 48
    const maxTravel = rect.width - handleWidth - 8
    const traveled = Math.max(0, Math.min(clientX - rect.left - 4, maxTravel))
    const pct = traveled / maxTravel
    setProgress(pct)
    if (pct >= 0.95) {
      setProgress(1)
      setConfirmed(true)
      dragging.current = false
      setTimeout(onConfirm, 400)
    }
  }, [onConfirm])

  const onMouseDown = (_e: React.MouseEvent) => {
    dragging.current = true
    const onMove = (me: MouseEvent) => { if (dragging.current) handlePercent(me.clientX) }
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); if (progress < 0.95) setProgress(0) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (_e: React.TouchEvent) => {
    dragging.current = true
    const onMove = (te: TouchEvent) => { if (dragging.current) handlePercent(te.touches[0].clientX) }
    const onEnd = () => { dragging.current = false; window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd); if (!confirmed) setProgress(0) }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  const trackWidth = trackRef.current?.getBoundingClientRect().width ?? 300
  const handleWidth = 48
  const maxTravel = trackWidth - handleWidth - 8
  const handleLeft = 4 + progress * maxTravel

  return (
    <div
      ref={trackRef}
      className="slide-to-confirm-track select-none"
      style={{ height: 56 }}
    >
      {/* Fill */}
      <div
        className="slide-to-confirm-fill"
        style={{ width: `${handleLeft + handleWidth / 2}px`, opacity: confirmed ? 1 : 0.6 }}
      />
      {/* Label */}
      <div
        className="absolute inset-0 flex items-center justify-center text-sm text-gray-400 font-medium pointer-events-none"
        style={{ opacity: 1 - progress * 2 }}
      >
        Slide to confirm →
      </div>
      {/* Handle */}
      <div
        className="slide-to-confirm-handle"
        style={{ left: `${handleLeft}px`, background: confirmed ? '#43B02A' : 'white' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {confirmed ? (
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  )
}
