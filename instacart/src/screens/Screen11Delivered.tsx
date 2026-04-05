import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MapView from '../components/MapView'
import RobotCard from '../components/RobotCard'

export default function Screen11Delivered() {
  const navigate = useNavigate()
  const [showRating, setShowRating] = useState(false)
  const [rating, setRating] = useState(0)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const feedbackTags = ['Easy to find', 'Items in good condition', 'Took too long', 'Hard to unlock']

  function toggleTag(tag: string) {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-4 py-3 bg-white border-b border-gray-100">
        <button
          onClick={() => navigate('/')}
          className="w-9 h-9 flex items-center justify-center text-gray-700 text-xl font-light"
        >✕</button>
        <h1 className="flex-1 text-center text-[17px] font-bold text-gray-900 pr-9">
          Delivery by autonomous vehicle
        </h1>
      </div>

      {/* Map */}
      <div className="relative" style={{ height: '50vh' }}>
        <MapView height="50vh" showRobotDot={true} robotProgress={1} />

        {/* Map controls */}
        <div className="absolute right-3 bottom-4 flex flex-col gap-2 z-10">
          <button className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </button>
          <button className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <button className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pt-5 pb-8">
        <h2 className="font-bold text-[22px] text-gray-900 leading-tight mb-5">
          Your order has been delivered by an autonomous vehicle
        </h2>

        <RobotCard robotId="894" />

        <div className="h-px bg-gray-100 my-4" />

        {/* View receipt */}
        <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-xl">🧾</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">View receipt</div>
              <div className="text-xs text-gray-500">123 Pine Street, 4B · MasterCard 1234</div>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={() => setShowRating(true)}
          className="w-full bg-[#43B02A] text-white rounded-full py-4 text-base font-semibold mt-6"
        >
          Rate your experience
        </button>
      </div>

      {/* Bottom sheet backdrop */}
      {showRating && (
        <div
          className="absolute inset-0 bg-black/30 z-20"
          onClick={() => setShowRating(false)}
        />
      )}

      {/* Rating bottom sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-30 shadow-2xl transition-transform duration-300 ease-out ${
          showRating ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-4">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        <div className="px-6 pb-10">
          {/* ALDI logo + robot image */}
          <div className="flex items-end gap-3 mb-5">
            {/* ALDI logo badge */}
            <div className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
              <div className="text-center leading-tight">
                <div className="font-bold text-xs text-gray-900 tracking-wide">ALDI</div>
                <div className="text-[9px] text-gray-500 tracking-widest">EXPRESS</div>
              </div>
            </div>
            {/* Robot */}
            <div className="w-16 h-16">
              <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
                <rect x="12" y="28" width="40" height="24" rx="4" fill="#e5e7eb"/>
                <rect x="12" y="28" width="40" height="24" rx="4" stroke="#d1d5db" strokeWidth="1"/>
                <rect x="16" y="14" width="32" height="18" rx="3" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1"/>
                <circle cx="32" cy="23" r="5" fill="#9ca3af"/>
                <circle cx="32" cy="23" r="3" fill="#4b5563"/>
                <circle cx="30.5" cy="21.5" r="1" fill="white" opacity="0.6"/>
                <rect x="31" y="6" width="1.5" height="10" fill="#ef4444"/>
                <rect x="31" y="6" width="8" height="5" rx="0.5" fill="#ef4444"/>
                <ellipse cx="20" cy="53" rx="5" ry="4" fill="#6b7280"/>
                <ellipse cx="20" cy="53" rx="3" ry="2.5" fill="#9ca3af"/>
                <ellipse cx="44" cy="53" rx="5" ry="4" fill="#6b7280"/>
                <ellipse cx="44" cy="53" rx="3" ry="2.5" fill="#9ca3af"/>
                <rect x="6" y="32" width="6" height="12" rx="2" fill="#d1d5db"/>
                <rect x="52" y="32" width="6" height="12" rx="2" fill="#d1d5db"/>
                <rect x="20" y="34" width="24" height="12" rx="2" fill="#f3f4f6"/>
                <text x="32" y="43" textAnchor="middle" fontSize="6" fill="#6b7280" fontFamily="sans-serif">SERVE</text>
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-bold text-[28px] text-gray-900 leading-tight mb-2">
            How was your order?
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-6">
            Serve Robot delivered 4 items<br />
            Apr 5, 2026 at 11:30am
          </p>

          {/* Star rating */}
          <div className="flex justify-start gap-3 mb-5">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="text-5xl transition-transform active:scale-110"
              >
                <span className={rating >= star ? 'text-yellow-400' : 'text-gray-200'}>★</span>
              </button>
            ))}
          </div>

          {/* Feedback tags */}
          {rating > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {feedbackTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-[#43B02A] text-white border-[#43B02A]'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#43B02A] text-white rounded-full py-4 text-base font-semibold"
          >
            Rate your order
          </button>
        </div>
      </div>
    </div>
  )
}
