interface Props {
  robotId?: string
}

export default function RobotCard({ robotId = '894' }: Props) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
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
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm">
          <span className="text-[#43B02A]">Serve</span>
          <span className="text-gray-900"> Robot • {robotId}</span>
        </div>
        <div className="text-xs text-gray-500 mt-0.5">Autonomous delivery</div>
      </div>
      <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}
