import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const tipOptions = ['7%', '12%', '17%', '22%', 'Other']

export default function Screen2Summary() {
  const navigate = useNavigate()
  const [tip, setTip] = useState('17%')

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button onClick={() => navigate('/')} className="w-9 h-9 flex items-center justify-center text-gray-700 text-xl">←</button>
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 bg-[#FF6B00] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm italic">i</span>
          </div>
          <span className="font-bold text-base text-gray-900">instacart</span>
        </div>
        <button className="w-9 h-9 flex items-center justify-center text-gray-700">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Summary section */}
        <div className="px-4 pt-4">
          <div className="font-bold text-base text-gray-900 mb-3">Summary</div>

          {/* Tip */}
          <div className="py-3 border-b border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700 font-medium">Delivery Tip</span>
              <span className="text-sm font-semibold text-gray-900">$6.05</span>
            </div>
            <div className="text-[11px] text-gray-400 mb-3">100% of your tip goes to the delivery person</div>
            <div className="flex gap-2">
              {tipOptions.map(t => (
                <button
                  key={t}
                  onClick={() => setTip(t)}
                  className={`flex-1 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    tip === t
                      ? 'bg-[#43B02A] text-white border-[#43B02A]'
                      : 'bg-white text-gray-700 border-gray-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-sm text-gray-700">19 items</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">$77.96</span>
              <span className="text-sm font-semibold text-gray-900">$83.68</span>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-sm text-gray-700">Delivery fee</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">$3.99</span>
              <span className="text-sm font-semibold text-gray-900">$1.99</span>
            </div>
          </div>

          {/* Service fee */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-700">Service fee</span>
              <span className="text-gray-400 text-sm">ℹ️</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">$3.31</span>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="font-bold text-base text-gray-900">Total</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">$104.38</span>
              <span className="font-bold text-base text-gray-900">$77.78</span>
            </div>
          </div>

          {/* Savings badge */}
          <div className="flex items-center gap-2 py-3 border-b border-gray-100">
            <div className="flex items-center gap-1.5 bg-green-50 rounded-full px-3 py-1.5">
              <span className="text-sm">🏷️</span>
              <span className="text-[#43B02A] text-sm font-semibold">You're saving $6.96</span>
            </div>
          </div>
        </div>

        <div className="h-2 bg-gray-50 my-3" />

        {/* Pay with */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-base text-gray-900">Pay with</span>
            <button className="text-[#43B02A] text-sm font-semibold">Edit</button>
          </div>

          <div className="flex items-center gap-3 py-3 border-b border-gray-100">
            <div className="w-10 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold"> </span>
              <svg viewBox="0 0 38 16" className="w-8 h-4 fill-white">
                <path d="M18.5 2.4C17.1 1 15.2.2 13.1.2c-2 0-3.9.8-5.3 2.2L5.1 5.1 2.4 7.8 0 10.2c1.4 1.4 3.3 2.2 5.3 2.2 2 0 3.9-.8 5.3-2.2l2.7-2.7 2.7 2.7c1.4 1.4 3.3 2.2 5.3 2.2 2 0 3.9-.8 5.3-2.2L23.9 7.5l-2.1-2.1-3.3-3z"/>
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Apple Pay</div>
              <div className="text-xs text-gray-500">Applied to tip and remaining balance</div>
            </div>
          </div>
        </div>

        {/* Promo */}
        <div className="mx-4 mt-3 bg-[#43B02A] rounded-xl px-4 py-3">
          <div className="text-white font-semibold text-sm">Free Instacart+?</div>
          <div className="text-green-100 text-xs mt-0.5">Get 6 free mos. of Instacart+</div>
          <button className="mt-2 bg-white text-[#43B02A] text-xs font-semibold rounded-full px-4 py-1.5">Learn more</button>
        </div>

        {/* Payment buttons */}
        <div className="px-4 mt-4 flex flex-col gap-2">
          <button className="w-full bg-black text-white rounded-xl py-3.5 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span className="font-semibold text-sm">Pay with Apple Pay</span>
          </button>
          <button className="w-full bg-white border-2 border-gray-200 rounded-xl py-3.5 flex items-center justify-center gap-2">
            <span className="font-bold text-sm"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span>
            <span className="font-semibold text-sm text-gray-700">Pay</span>
          </button>
        </div>
      </div>

      {/* Sticky footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <button
          onClick={() => navigate('/confirm')}
          className="w-full bg-[#43B02A] text-white rounded-full py-4 text-base font-semibold"
        >
          Place order
        </button>
      </div>
    </div>
  )
}
