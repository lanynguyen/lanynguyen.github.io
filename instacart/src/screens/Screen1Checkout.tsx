import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type DeliveryOption = 'autonomous' | 'fast' | 'schedule'

export default function Screen1Checkout() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<DeliveryOption>('autonomous')
  const [instacartPlus, setInstacartPlus] = useState(false)
  const [showLearnMore, setShowLearnMore] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F7F8]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#F6F7F8]">
        <button className="w-9 h-9 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
          <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
          <div className="text-center leading-tight">
            <div className="font-bold text-xs text-gray-900 tracking-wide">ALDI</div>
            <div className="text-[9px] text-gray-500 tracking-widest">EXPRESS</div>
          </div>
        </div>
        <div className="w-9" />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-28">

        {/* Deliver to section */}
        <div className="bg-white px-4 pt-4 pb-3 mb-1">
          <div className="text-xl font-bold text-gray-900 mb-3">Deliver to</div>
          <button className="w-full flex items-center justify-between">
            <div className="text-left">
              <div className="font-bold text-base text-gray-900 leading-tight">123 Pine Street, 4B, New York...</div>
              <div className="text-sm text-gray-500 mt-0.5">Leave at the door • Add instructions</div>
            </div>
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Instacart+ banner */}
        <div className="bg-white px-4 py-3 mb-1 flex items-center gap-3">
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-sm text-gray-800">Get </span>
            <span className="text-sm font-bold text-gray-900 bg-yellow-200 px-0.5">$0 delivery</span>
            <span className="text-sm text-gray-800"> fee with Instacart+</span>
            <div className="text-xs text-gray-500 mt-0.5">$99/year. Service fees apply.</div>
          </div>
          <button
            onClick={() => setInstacartPlus(!instacartPlus)}
            className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${instacartPlus ? 'bg-[#43B02A]' : 'bg-gray-300'}`}
          >
            <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${instacartPlus ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
        </div>

        {/* Delivery options */}
        <div className="bg-white px-4 py-4 mb-1">

          {/* Autonomous delivery — selected */}
          <button
            onClick={() => setSelected('autonomous')}
            className={`w-full flex items-start gap-3 rounded-xl border-2 px-4 py-3.5 mb-3 transition-all ${
              selected === 'autonomous' ? 'border-gray-900 bg-white' : 'border-transparent bg-gray-50'
            }`}
          >
            <svg className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
            <div className="flex-1 text-left">
              <div className="font-semibold text-sm text-gray-900">Autonomous delivery</div>
              <div className="text-xs text-gray-500 mt-0.5">Today, 12:14pm – 1:14pm</div>
              <div className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Hand-picked by a store associate, delivered by autonomous robot to your curb. No tip charged if matched.
              </div>
              <button
                onClick={e => { e.stopPropagation(); setShowLearnMore(true) }}
                className="text-xs text-[#43B02A] font-semibold mt-1 underline"
              >
                Learn more
              </button>
            </div>
          </button>

          {/* Fast */}
          <button
            onClick={() => setSelected('fast')}
            className={`w-full flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 mb-3 transition-all ${
              selected === 'fast' ? 'border-gray-900 bg-white' : 'border-transparent bg-gray-50'
            }`}
          >
            <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            <div className="flex-1 text-left">
              <div className="font-semibold text-sm text-gray-900">Fast</div>
              <div className="text-xs text-gray-500 mt-0.5">Today, 2:30pm – 4:00pm</div>
            </div>
          </button>

          {/* Schedule and save */}
          <button
            onClick={() => setSelected('schedule')}
            className={`w-full flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 transition-all ${
              selected === 'schedule' ? 'border-gray-900 bg-white' : 'border-transparent bg-gray-50'
            }`}
          >
            <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <div className="flex-1 text-left">
              <div className="font-semibold text-sm text-gray-900">Schedule and save</div>
              <div className="text-xs text-gray-500 mt-0.5">As soon as 6pm today</div>
            </div>
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white px-4 py-4 mb-1">
          <div className="font-bold text-xl text-gray-900 mb-4">Summary</div>

          {/* 5 items */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-sm text-gray-700">5 items</span>
            <span className="text-sm font-semibold text-gray-900">$40.00</span>
          </div>

          {/* Delivery fee */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-sm text-gray-700">Delivery fee</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">$3.99</span>
              <span className="text-sm font-semibold text-[#43B02A]">FREE</span>
            </div>
          </div>

          {/* Service fee */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-700">Service fee</span>
              <span className="text-gray-400 text-xs">ℹ️</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">$2.50</span>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="font-bold text-base text-gray-900">Total</span>
            <span className="font-bold text-base text-gray-900">$42.50</span>
          </div>

          {/* Autonomous delivery savings card */}
          <div className="mt-4 bg-gradient-to-r from-[#43B02A] to-[#2D8C1C] rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Saving $3.99 with Autonomous Delivery</div>
              <div className="text-green-100 text-xs mt-0.5">Faster, direct-to-door robot delivery</div>
            </div>
          </div>
        </div>

        {/* Pay with */}
        <div className="bg-white px-4 py-4 mb-1">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-base text-gray-900">Pay with</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Apple Pay</span>
              <div className="bg-black rounded-md px-2 py-1">
                <span className="text-white text-xs font-semibold tracking-wide"> Pay</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            By clicking the button below, you agree to the{' '}
            <span className="text-[#43B02A] font-medium">Terms of Service</span> and{' '}
            <span className="text-[#43B02A] font-medium">Privacy Policy</span>.
          </p>
        </div>

      </div>

      {/* Sticky footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4">
        <button
          onClick={() => navigate('/confirm')}
          className="w-full bg-[#43B02A] text-white rounded-full py-4 text-base font-semibold"
        >
          Place order
        </button>
      </div>

      {/* Learn More modal backdrop */}
      {showLearnMore && (
        <div
          className="absolute inset-0 bg-black/40 z-20 flex items-end"
          onClick={() => setShowLearnMore(false)}
        >
          <div
            className="bg-white rounded-t-3xl w-full px-5 pt-5 pb-10 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-5" />
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#43B02A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
            </div>
            <h2 className="font-bold text-xl text-gray-900 mb-3">Autonomous Delivery</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When your order qualifies (within service area and payload limit), a <strong>Serve robot</strong> will deliver your groceries directly to your curb — no driver, no wait.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-5">
              <li className="flex items-start gap-2"><span className="text-[#43B02A] font-bold mt-0.5">•</span>Your items are hand-picked by a store associate</li>
              <li className="flex items-start gap-2"><span className="text-[#43B02A] font-bold mt-0.5">•</span>Delivered autonomously to your curb</li>
              <li className="flex items-start gap-2"><span className="text-[#43B02A] font-bold mt-0.5">•</span>No tip charged if matched with a robot</li>
              <li className="flex items-start gap-2"><span className="text-[#43B02A] font-bold mt-0.5">•</span>You'll unlock the cargo bay with your phone</li>
            </ul>
            <button
              onClick={() => setShowLearnMore(false)}
              className="w-full bg-[#43B02A] text-white rounded-full py-4 text-base font-semibold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
