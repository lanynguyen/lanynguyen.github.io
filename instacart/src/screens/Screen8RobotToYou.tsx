import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MapView from '../components/MapView'
import SkipButton from '../components/SkipButton'

export default function Screen8RobotToYou() {
  const navigate = useNavigate()
  const [showHelp, setShowHelp] = useState(false)
  const [helpSubmitted, setHelpSubmitted] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">

      {/* MAP */}
      <div className="relative flex-shrink-0" style={{ height: 260 }}>
        <MapView height="260px" showRobotDot={true} robotProgress={0.4} />

        {/* X button */}
        <button
          onClick={() => navigate('/order/shopping-complete')}
          className="absolute top-4 left-4 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 text-base z-10"
        >
          ✕
        </button>

        {/* Help button */}
        <button
          onClick={() => setShowHelp(true)}
          className="absolute top-4 right-4 bg-white rounded-full shadow-md px-5 py-2 text-sm font-semibold text-gray-800 z-10"
        >
          Help
        </button>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="overflow-y-auto no-scrollbar flex flex-col gap-3 pb-8">

        {/* Main order card */}
        <div className="bg-white shadow-sm overflow-hidden">
          <div className="px-4 pt-5 pb-4">
            <h1 className="font-bold text-[22px] text-gray-900 leading-tight mb-0.5">Robot heading to you</h1>
            <div className="text-sm text-gray-500 mb-5">Arriving in 7 minutes</div>

            {/* Progress stepper: check → cart → car (active) → home */}
            <div className="flex items-center mb-5">
              {/* Step 1: checkmark */}
              <div className="w-9 h-9 rounded-full bg-[#43B02A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 h-0.5 bg-[#43B02A]" />
              {/* Step 2: cart */}
              <div className="w-9 h-9 rounded-full bg-[#43B02A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1 h-0.5 bg-[#43B02A]" />
              {/* Step 3: car (current active) */}
              <div className="w-9 h-9 rounded-full bg-[#43B02A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM4 11l1.5-6h13l1.5 6M4 11h16M4 11H2m18 0h2" />
                </svg>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200" />
              {/* Step 4: home (inactive) */}
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>

            {/* Address + payment */}
            <button className="flex items-center justify-between w-full py-3.5 border-t border-gray-100">
              <div className="text-left">
                <div className="font-semibold text-sm text-gray-900">123 Pine Street, 4B</div>
                <div className="text-sm text-gray-500 mt-0.5">Paid with MasterCard 1234</div>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mx-4" />

          {/* View items */}
          <button className="flex items-center justify-between w-full px-4 py-4">
            <span className="text-[#43B02A] text-base font-semibold">View items (4)</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Robot delivery card */}
        <div className="bg-white shadow-sm px-4 py-4">
          <div className="font-bold text-base text-gray-900 mb-3">Your order will be delivered by:</div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0">
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
            <div>
              <div className="text-base font-semibold">
                <span className="text-[#43B02A]">Serve</span>
                <span className="text-gray-500"> Robot</span>
                <span className="text-gray-900"> • 894</span>
              </div>
              <div className="text-sm text-gray-500 mt-0.5">Autonomous delivery</div>
            </div>
          </div>
        </div>

        {/* Chase offer card */}
        <div className="bg-white shadow-sm px-4 py-4">
          <div className="text-sm text-gray-500 mb-2">You have an offer today</div>
          <div className="flex items-center gap-3">
            {/* Chase logo */}
            <div className="w-10 h-10 rounded-lg bg-[#117ACA] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <rect x="4" y="4" width="15" height="15" rx="1" fill="white"/>
                <rect x="21" y="4" width="15" height="15" rx="1" fill="white"/>
                <rect x="4" y="21" width="15" height="15" rx="1" fill="white"/>
                <rect x="21" y="21" width="15" height="15" rx="1" fill="white"/>
              </svg>
            </div>
            <div className="flex-1 text-sm text-gray-700">
              <span className="bg-yellow-200 font-bold px-0.5">5% back + $50 credit</span>
              {' '}on Instacart
            </div>
            <button className="bg-[#43B02A] text-white text-sm font-bold rounded-full px-4 py-2 flex-shrink-0">
              Learn more
            </button>
          </div>
        </div>

        {/* Receipt card */}
        <div className="bg-white shadow-sm px-4 py-4">
          <button className="flex items-center justify-between w-full">
            <div className="text-left">
              <div className="font-bold text-base text-gray-900">Receipt</div>
              <div className="text-sm text-gray-500 mt-0.5">Paid with MasterCard 1234</div>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      <SkipButton to="/order/robot-arrived" />

      {/* Help modal backdrop */}
      {showHelp && (
        <div
          className="absolute inset-0 bg-black/40 z-20 flex items-end"
          onClick={() => { setShowHelp(false); setHelpSubmitted(null) }}
        >
          <div
            className="bg-white rounded-t-3xl w-full px-5 pt-5 pb-10 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-5" />

            {helpSubmitted ? (
              <div className="flex flex-col items-center py-6 gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#43B02A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-bold text-lg text-gray-900 text-center">Request received</div>
                <div className="text-sm text-gray-500 text-center leading-relaxed">
                  {helpSubmitted === 'stuck'
                    ? 'A remote operator has been notified and will assist shortly.'
                    : 'Your drop-off spot change is being reviewed. The robot will update its route within the geofence.'}
                </div>
                <button
                  onClick={() => { setShowHelp(false); setHelpSubmitted(null) }}
                  className="mt-4 w-full bg-[#43B02A] text-white rounded-full py-4 text-base font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-xl text-gray-900 mb-1">Need help?</h2>
                <p className="text-sm text-gray-500 mb-5">What's the issue with your delivery?</p>

                <button
                  onClick={() => setHelpSubmitted('stuck')}
                  className="w-full flex items-start gap-4 bg-gray-50 rounded-2xl px-4 py-4 mb-3 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Robot seems stuck?</div>
                    <div className="text-xs text-gray-500 mt-0.5">Connect with a remote operator for live support</div>
                  </div>
                </button>

                <button
                  onClick={() => setHelpSubmitted('dropoff')}
                  className="w-full flex items-start gap-4 bg-gray-50 rounded-2xl px-4 py-4 mb-5 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Change drop-off spot?</div>
                    <div className="text-xs text-gray-500 mt-0.5">Limited modification available within the geofence</div>
                  </div>
                </button>

                <button
                  onClick={() => { setShowHelp(false); setHelpSubmitted(null) }}
                  className="w-full text-center text-gray-400 text-sm py-2"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
