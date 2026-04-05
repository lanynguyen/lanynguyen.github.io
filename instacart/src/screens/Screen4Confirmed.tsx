import { useState, useEffect } from 'react'
import SkipButton from '../components/SkipButton'

export default function Screen4Confirmed() {
  const [showNotif, setShowNotif] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowNotif(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6] relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <button className="w-9 h-9 flex items-center justify-center text-gray-500 text-lg">✕</button>
        {/* ALDI logo */}
        <div className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
          <div className="text-center leading-tight">
            <div className="font-bold text-xs text-gray-900 tracking-wide">ALDI</div>
            <div className="text-[9px] text-gray-500 tracking-widest">EXPRESS</div>
          </div>
        </div>
        <button className="text-gray-800 text-sm font-semibold border border-gray-300 rounded-full px-4 py-1.5">Help</button>
      </div>

      {/* Push notification toast */}
      <div className={`absolute top-16 left-3 right-3 z-20 transition-all duration-500 ${showNotif ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="bg-gray-900 text-white rounded-2xl px-4 py-3 shadow-xl flex items-start gap-3">
          <div className="w-8 h-8 bg-[#43B02A] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-300 mb-0.5">Instacart</div>
            <div className="text-sm font-medium leading-snug">An autonomous vehicle has been matched and is on its way — arriving by 12:14pm.</div>
          </div>
          <button onClick={() => setShowNotif(false)} className="text-gray-400 text-lg leading-none flex-shrink-0 mt-0.5">✕</button>
        </div>
      </div>

      <div className="overflow-y-auto no-scrollbar pb-8 flex flex-col gap-3 pt-3 px-3">

        {/* Main order card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 pt-5 pb-4">
            {/* Title */}
            <h1 className="font-bold text-[22px] text-gray-900 leading-tight mb-1">Your order is confirmed</h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 mb-5">
              <span>Arriving</span>
              <span className="font-semibold text-gray-700">today</span>
              <span>between 10am - 12pm</span>
            </div>

            {/* Progress stepper */}
            <div className="flex items-center mb-5">
              {/* Step 1: checkmark (active) */}
              <div className="w-9 h-9 rounded-full bg-[#43B02A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Line */}
              <div className="flex-1 h-0.5 bg-gray-200" />
              {/* Step 2: cart */}
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              {/* Line */}
              <div className="flex-1 h-0.5 bg-gray-200" />
              {/* Step 3: car */}
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM4 11l1.5-6h13l1.5 6M4 11h16M4 11H2m18 0h2" />
                </svg>
              </div>
              {/* Line */}
              <div className="flex-1 h-0.5 bg-gray-200" />
              {/* Step 4: home */}
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>

            {/* Address */}
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
            <span className="text-sm text-gray-400">Search ALDI</span>
          </div>

          {/* Kick back and enjoy */}
          <div className="font-bold text-[17px] text-gray-900 mb-3">Kick back and enjoy</div>

          {/* Product placeholders */}
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

      <SkipButton to="/order/robot-to-store" />
    </div>
  )
}
