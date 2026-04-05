import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Inline map SVG — generic grid with home and store pins
function ConfirmMap() {
  return (
    <div className="relative overflow-hidden rounded-xl" style={{ height: 180 }}>
      <svg viewBox="0 0 340 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {/* Background */}
        <rect width="340" height="180" fill="#ede9e2" />

        {/* City blocks — uniform grid */}
        {[10,55,100,145,190,235,280,325].map(x =>
          [8,52,96,140].map(y => (
            <rect key={`${x}-${y}`} x={x} y={y} width={38} height={36} rx="2" fill="#e2ddd6" />
          ))
        )}

        {/* Horizontal roads */}
        {[44,88,132,176].map(y => (
          <rect key={`h${y}`} x={0} y={y} width={340} height={8} fill="#ffffff" />
        ))}
        {/* Vertical roads */}
        {[48,93,138,183,228,273,318].map(x => (
          <rect key={`v${x}`} x={x} y={0} width={8} height={180} fill="#ffffff" />
        ))}

        {/* Store pin — orange, top right area */}
        <g transform="translate(248, 28)">
          <ellipse cx="10" cy="28" rx="5" ry="3" fill="rgba(0,0,0,0.12)" />
          <path d="M10 26 C10 26 2 15 2 9 C2 4.6 5.7 1 10 1 C14.3 1 18 4.6 18 9 C18 15 10 26 10 26Z" fill="#FF6B35"/>
          <circle cx="10" cy="9" r="5" fill="white" />
          <rect x="6.5" y="7" width="7" height="5.5" rx="0.8" stroke="#FF6B35" strokeWidth="1.2" fill="none"/>
          <path d="M8 7 C8 5.3 12 5.3 12 7" stroke="#FF6B35" strokeWidth="1.2" fill="none"/>
        </g>

        {/* Home pin — green, center */}
        <g transform="translate(148, 80)">
          <ellipse cx="12" cy="32" rx="6" ry="3" fill="rgba(0,0,0,0.12)" />
          <path d="M12 30 C12 30 2 17 2 10 C2 4.9 6.5 1 12 1 C17.5 1 22 4.9 22 10 C22 17 12 30 12 30Z" fill="#43B02A"/>
          <circle cx="12" cy="10" r="7" fill="white" />
          <polygon points="12,4 6,10 18,10" fill="#43B02A"/>
          <rect x="8.5" y="10" width="7" height="5.5" rx="0.5" fill="#43B02A"/>
          <rect x="10.5" y="11.5" width="3" height="4" rx="0.3" fill="white"/>
        </g>
      </svg>
    </div>
  )
}

// Icon components matching wireframe style
function PinIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="9" strokeWidth="0" fill="white" opacity="0"/>
        <path strokeLinecap="round" d="M12 7v5l3 3" />
      </svg>
    </div>
  )
}

function RobotCarIcon() {
  return (
    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="9" width="20" height="10" rx="2" />
        <path d="M7 9V7a2 2 0 012-2h6a2 2 0 012 2v2" />
        <circle cx="7" cy="19" r="2" fill="currentColor" stroke="none" />
        <circle cx="17" cy="19" r="2" fill="currentColor" stroke="none" />
        <path d="M8 13h8" strokeLinecap="round" />
        <circle cx="10" cy="13" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="13" r="1" fill="currentColor" stroke="none" />
      </svg>
    </div>
  )
}

function StoreIcon() {
  return (
    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 21V11H7v10M3 21h18M3 7l9-4 9 4M5 21V9m14 12V9" />
      </svg>
    </div>
  )
}

function CardIcon() {
  return (
    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" strokeLinecap="round" />
        <rect x="6" y="14" width="4" height="2" rx="0.5" fill="currentColor" stroke="none" />
      </svg>
    </div>
  )
}

export default function Screen3Confirm() {
  const navigate = useNavigate()
  const TOTAL = 5
  const [seconds, setSeconds] = useState(TOTAL)

  useEffect(() => {
    if (seconds <= 0) {
      navigate('/order/confirmed')
      return
    }
    const t = setTimeout(() => setSeconds(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds, navigate])

  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  const display = `${min}:${sec.toString().padStart(2, '0')}`
  // Progress: 0→1 as timer counts down (elapsed fraction)
  const elapsed = (TOTAL - seconds) / TOTAL

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ background: '#EDEBE5' }}>
      {/* Floating card */}
      <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Title */}
        <div className="px-5 pt-5 pb-4">
          <h1 className="font-bold text-[22px] text-gray-900 leading-snug">Confirming delivery order...</h1>
        </div>

        {/* Map embedded in card */}
        <div className="px-4 pb-4">
          <ConfirmMap />
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mx-4" />

        {/* Info rows */}
        <div className="px-5">

          {/* Address */}
          <div className="flex items-start gap-3.5 py-4 border-b border-gray-100">
            <PinIcon />
            <div>
              <div className="text-[15px] font-semibold text-gray-900 leading-snug">123 Pine Street, 4B</div>
              <div className="text-[14px] text-gray-600 leading-snug">New York, NY 10001</div>
              <div className="text-[14px] text-gray-500 leading-snug">Leave at the door</div>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start gap-3.5 py-4 border-b border-gray-100">
            <ClockIcon />
            <div>
              <div className="text-[15px] font-semibold text-gray-900">Delivery Today, 12:14pm</div>
              <div className="text-[14px] text-gray-500">– 1:14pm</div>
            </div>
          </div>

          {/* Autonomous delivery */}
          <div className="flex items-start gap-3.5 py-4 border-b border-gray-100">
            <RobotCarIcon />
            <div>
              <div className="text-[15px] font-semibold text-gray-900">Autonomous Delivery</div>
              <div className="text-[14px] text-gray-500">Delivery will be made by a Serve Robot</div>
            </div>
          </div>

          {/* Store */}
          <div className="flex items-start gap-3.5 py-4 border-b border-gray-100">
            <StoreIcon />
            <div>
              <div className="text-[15px] font-semibold text-gray-900">ALDI</div>
              <div className="text-[14px] text-gray-500">5 items</div>
            </div>
          </div>

          {/* Payment */}
          <div className="flex items-center gap-3.5 py-4">
            <CardIcon />
            <div className="text-[15px] font-semibold text-gray-900">Apple Pay</div>
          </div>

        </div>

        {/* Countdown button with progress fill */}
        <div className="px-4 pb-4">
          <button
            onClick={() => navigate('/order/confirmed')}
            className="relative w-full rounded-full overflow-hidden"
            style={{ height: 54 }}
          >
            {/* Base green */}
            <div className="absolute inset-0 bg-[#43B02A]" />
            {/* Elapsed darker fill from left */}
            <div
              className="absolute inset-0 bg-[#2D8C1C] transition-all duration-1000 ease-linear origin-left"
              style={{ transform: `scaleX(${elapsed})`, transformOrigin: 'left' }}
            />
            <span className="relative z-10 text-white font-bold text-[17px]">
              Looks good ({display})
            </span>
          </button>
        </div>

        {/* Go back */}
        <button
          onClick={() => navigate('/')}
          className="w-full text-center font-bold text-[17px] text-gray-900 pb-6 pt-1"
        >
          Go back
        </button>

      </div>
    </div>
  )
}
