import { useNavigate } from 'react-router-dom'
import SkipButton from '../components/SkipButton'

export default function Screen5RobotToStore() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <button onClick={() => navigate('/order/confirmed')} className="w-9 h-9 flex items-center justify-center text-gray-500 text-lg">✕</button>
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
            <h1 className="font-bold text-[22px] text-gray-900 leading-tight mb-1">Robot heading to the store</h1>
            <div className="text-sm text-gray-500 mb-5">Arriving between 12:14pm - 1:14pm</div>

            {/* Progress stepper */}
            <div className="flex items-center mb-5">
              {/* Step 1: checkmark (completed/active) */}
              <div className="w-9 h-9 rounded-full bg-[#43B02A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Green line after step 1 */}
              <div className="flex-1 h-0.5 bg-[#43B02A]" />
              {/* Step 2: cart (inactive) */}
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          {/* Add, edit, or view items */}
          <div className="flex items-center justify-between px-4 py-4">
            <button className="text-[#43B02A] text-base font-semibold">Add, edit, or view items (4)</button>
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
                {/* Body */}
                <rect x="12" y="28" width="40" height="24" rx="4" fill="#e5e7eb"/>
                <rect x="12" y="28" width="40" height="24" rx="4" stroke="#d1d5db" strokeWidth="1"/>
                {/* Head/screen area */}
                <rect x="16" y="14" width="32" height="18" rx="3" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1"/>
                {/* Camera lens */}
                <circle cx="32" cy="23" r="5" fill="#9ca3af"/>
                <circle cx="32" cy="23" r="3" fill="#4b5563"/>
                <circle cx="30.5" cy="21.5" r="1" fill="white" opacity="0.6"/>
                {/* Flag/antenna */}
                <rect x="31" y="6" width="1.5" height="10" fill="#ef4444"/>
                <rect x="31" y="6" width="8" height="5" rx="0.5" fill="#ef4444"/>
                {/* Wheels */}
                <ellipse cx="20" cy="53" rx="5" ry="4" fill="#6b7280"/>
                <ellipse cx="20" cy="53" rx="3" ry="2.5" fill="#9ca3af"/>
                <ellipse cx="44" cy="53" rx="5" ry="4" fill="#6b7280"/>
                <ellipse cx="44" cy="53" rx="3" ry="2.5" fill="#9ca3af"/>
                {/* Side panels */}
                <rect x="6" y="32" width="6" height="12" rx="2" fill="#d1d5db"/>
                <rect x="52" y="32" width="6" height="12" rx="2" fill="#d1d5db"/>
                {/* Logo area on body */}
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

        {/* Replacement preferences card */}
        <div className="bg-white rounded-2xl shadow-sm px-4 py-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-3">
              <div className="font-semibold text-base text-gray-900 mb-1">Replacement preferences</div>
              <div className="text-sm text-gray-500 leading-snug">Let your shopper know what to do if something is out of stock</div>
            </div>
            <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* You've still got time to shop card */}
        <div className="bg-white rounded-2xl shadow-sm px-4 pt-4 pb-5">
          <div className="font-bold text-[17px] text-gray-900 mb-3">You've still got time to shop</div>

          {/* Search bar */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2.5 mb-5">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm text-gray-400">Search ALDI Express</span>
          </div>

          {/* Kick back and enjoy */}
          <div className="font-bold text-[17px] text-gray-900 mb-3">Kick back and enjoy</div>

          {/* Product placeholders: square, circle, square, circle, square, circle */}
          <div className="flex gap-3">
            {[0, 1, 2].map(i => (
              <div key={i} className="flex flex-col gap-2 flex-shrink-0">
                <div className="w-20 h-20 bg-gray-200 rounded-xl" />
                <div className="w-14 h-2.5 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <SkipButton to="/order/preparing" />
    </div>
  )
}
