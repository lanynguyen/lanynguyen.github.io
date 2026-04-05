export default function OfferBanner() {
  return (
    <div className="flex items-center justify-between bg-[#F0FAF0] border border-[#C8E6C9] rounded-xl px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="text-[#43B02A] font-bold text-base">💳</span>
        <div>
          <div className="text-xs font-semibold text-gray-800">5% back + $50 credit on Instacart</div>
          <div className="text-[11px] text-gray-500">Instacart Mastercard® offer</div>
        </div>
      </div>
      <button className="text-[#43B02A] text-xs font-semibold border border-[#43B02A] rounded-full px-3 py-1 flex-shrink-0">
        Learn more
      </button>
    </div>
  )
}
