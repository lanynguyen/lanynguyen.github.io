import { useNavigate } from 'react-router-dom'
import SkipButton from '../components/SkipButton'

export default function Screen7ShoppingComplete() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <button onClick={() => navigate('/order/preparing')} className="w-9 h-9 flex items-center justify-center text-gray-500 text-lg">✕</button>
        {/* ALDI logo */}
        <div className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
          <div className="text-center leading-tight">
            <div className="font-bold text-xs text-gray-900 tracking-wide">ALDI</div>
            <div className="text-[9px] text-gray-500 tracking-widest">EXPRESS</div>
          </div>
        </div>
        <button className="text-gray-800 text-sm font-semibold border border-gray-300 rounded-full px-4 py-1.5">Help</button>
      </div>

      <div className="overflow-y-auto no-scrollbar pb-8 flex flex-col gap-3 pt-3 px-3">

        {/* Main order card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 pt-5 pb-4">
            {/* Title */}
            <h1 className="font-bold text-[22px] text-gray-900 leading-tight mb-1">Shopping complete</h1>
            <div className="text-sm text-gray-500 mb-5">Arriving between 11:17am - 11:47am</div>

            {/* Progress stepper — steps 1 & 2 completed (green) */}
            <div className="flex items-center mb-5">
              {/* Step 1: checkmark (completed) */}
              <div className="w-9 h-9 rounded-full bg-[#43B02A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Green line */}
              <div className="flex-1 h-0.5 bg-[#43B02A]" />
              {/* Step 2: cart (completed) */}
              <div className="w-9 h-9 rounded-full bg-[#43B02A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              {/* Gray line */}
              <div className="flex-1 h-0.5 bg-gray-200" />
              {/* Step 3: car (inactive) */}
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM4 11l1.5-6h13l1.5 6M4 11h16M4 11H2m18 0h2" />
                </svg>
              </div>
              {/* Gray line */}
              <div className="flex-1 h-0.5 bg-gray-200" />
              {/* Step 4: home (inactive) */}
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>

            {/* Address + payment */}
            <div className="flex items-center justify-between py-3.5 border-t border-gray-100">
              <div>
                <div className="font-semibold text-sm text-gray-900">123 Pine Street, 4B</div>
                <div className="text-sm text-gray-500 mt-0.5">Paid with MasterCard 1234</div>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mx-4" />

          {/* View items */}
          <div className="flex items-center justify-between px-4 py-4">
            <button className="text-[#43B02A] text-base font-semibold">View items (4)</button>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Robot delivery card */}
        <div className="bg-white rounded-2xl shadow-sm px-4 py-4">
          <div className="font-bold text-base text-gray-900 mb-3">Your order will be delivered by:</div>
          <div className="flex items-center gap-4">
            {/* Robot illustration */}
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
                <span className="text-gray-900"> Robot • 894</span>
              </div>
              <div className="text-sm text-gray-500 mt-0.5">Autonomous delivery</div>
            </div>
          </div>
        </div>

        {/* Offer banner card */}
        <div className="bg-white rounded-2xl shadow-sm px-4 py-4">
          <div className="text-xs text-gray-500 mb-2.5">You have an offer today</div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-sm font-bold bg-yellow-200 px-0.5">5% back + $50 credit</span>
                <div className="text-sm text-gray-700 mt-0.5">on Instacart</div>
              </div>
            </div>
            <button className="bg-[#43B02A] text-white text-sm font-semibold rounded-full px-4 py-2 flex-shrink-0">
              Learn more
            </button>
          </div>
        </div>

        {/* Receipt card */}
        <div className="bg-white rounded-2xl shadow-sm px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-base text-gray-900">Receipt</div>
              <div className="text-sm text-gray-500 mt-0.5">Paid with MasterCard 1234</div>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Invite friends card */}
        <div className="bg-white rounded-2xl shadow-sm px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <span className="text-xl font-bold text-gray-800 mt-0.5 flex-shrink-0">$</span>
              <div className="min-w-0">
                <div className="font-bold text-base text-gray-900 leading-snug">Invite friends, earn money!</div>
                <div className="mt-0.5">
                  <span className="text-sm font-medium bg-yellow-300 px-0.5">$10 for you, $10 for a friend</span>
                </div>
              </div>
            </div>
            <button className="bg-gray-100 text-gray-700 text-sm font-semibold rounded-full px-5 py-2 flex-shrink-0">
              Invite
            </button>
          </div>
        </div>

        {/* Popular restaurants */}
        <div className="bg-white rounded-2xl shadow-sm px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="font-bold text-[17px] text-gray-900">Popular restaurants</div>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {['🍔', '🍕', '🍣'].map((emoji, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center gap-1.5">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">{emoji}</div>
                <div className="w-14 h-2.5 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <SkipButton to="/order/robot-to-you" />
    </div>
  )
}
