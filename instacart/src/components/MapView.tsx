interface Props {
  zoomed?: boolean
  height?: string
  showRobotDot?: boolean
  robotProgress?: number // 0–1, how close robot is to home
}

export default function MapView({ zoomed = false, height = '220px', showRobotDot = false, robotProgress = 0.5 }: Props) {
  const w = 390
  const h = 260

  // Simple color palette
  const roadColor = '#ffffff'
  const blockColor = '#e2ddd6'
  const bgColor = '#ede9e2'

  // Home position
  const homeX = zoomed ? 195 : 200
  const homeY = zoomed ? 160 : 140

  // Store position
  const storeX = zoomed ? 300 : 320
  const storeY = zoomed ? 90 : 80

  // Robot position (moves from store toward home)
  const robotX = storeX + (homeX - storeX) * robotProgress
  const robotY = storeY + (homeY - storeY) * robotProgress

  // Grid spacing
  const blockW = 40
  const blockH = 35

  return (
    <div style={{ height, overflow: 'hidden', position: 'relative', background: bgColor }}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {/* Background */}
        <rect width={w} height={h} fill={bgColor} />

        {/* City blocks — uniform grid */}
        {[20, 70, 120, 170, 220, 270, 320, 370].map(x =>
          [10, 55, 100, 145, 190, 235].map(y => (
            <rect key={`${x}-${y}`} x={x} y={y} width={blockW} height={blockH} rx={2} fill={blockColor} opacity={0.9} />
          ))
        )}

        {/* Horizontal roads */}
        {[45, 90, 135, 180, 225].map(y => (
          <rect key={`h${y}`} x={0} y={y} width={w} height={9} fill={roadColor} />
        ))}
        {/* Vertical roads */}
        {[10, 60, 110, 160, 210, 260, 310, 360].map(x => (
          <rect key={`v${x}`} x={x} y={0} width={9} height={h} fill={roadColor} />
        ))}

        {/* Route line from store to home */}
        {showRobotDot && (
          <path
            d={`M ${storeX} ${storeY} L ${storeX} ${homeY} L ${homeX} ${homeY}`}
            stroke="#43B02A"
            strokeWidth="3"
            strokeDasharray="6 4"
            fill="none"
            opacity="0.8"
          />
        )}

        {/* Store pin — orange */}
        <g transform={`translate(${storeX - 10}, ${storeY - 26})`}>
          <ellipse cx="10" cy="28" rx="5" ry="3" fill="rgba(0,0,0,0.15)" />
          <path d="M10 26 C10 26 2 15 2 9 C2 4.6 5.7 1 10 1 C14.3 1 18 4.6 18 9 C18 15 10 26 10 26Z" fill="#FF6B35"/>
          <circle cx="10" cy="9" r="5" fill="white" />
          {/* Store bag icon */}
          <rect x="6.5" y="7" width="7" height="5.5" rx="0.8" stroke="#FF6B35" strokeWidth="1.2" fill="none"/>
          <path d="M8 7 C8 5.3 12 5.3 12 7" stroke="#FF6B35" strokeWidth="1.2" fill="none"/>
        </g>

        {/* Home pin — green */}
        <g transform={`translate(${homeX - 12}, ${homeY - 30})`}>
          <ellipse cx="12" cy="32" rx="6" ry="3" fill="rgba(0,0,0,0.15)" />
          <path d="M12 30 C12 30 2 17 2 10 C2 4.9 6.5 1 12 1 C17.5 1 22 4.9 22 10 C22 17 12 30 12 30Z" fill="#43B02A"/>
          <circle cx="12" cy="10" r="7" fill="white" />
          {/* House icon */}
          <polygon points="12,4 6,10 18,10" fill="#43B02A"/>
          <rect x="8.5" y="10" width="7" height="5.5" rx="0.5" fill="#43B02A"/>
          <rect x="10.5" y="11.5" width="3" height="4" rx="0.3" fill="white"/>
        </g>

        {/* Robot dot */}
        {showRobotDot && (
          <g transform={`translate(${robotX - 12}, ${robotY - 12})`}>
            <circle cx="12" cy="12" r="13" fill="white" opacity="0.9" />
            <circle cx="12" cy="12" r="11" fill="#43B02A" />
            {/* Simple robot face */}
            <rect x="7" y="8" width="10" height="8" rx="2" fill="white" opacity="0.9"/>
            <rect x="9" y="10" width="2.5" height="2" rx="0.5" fill="#43B02A"/>
            <rect x="12.5" y="10" width="2.5" height="2" rx="0.5" fill="#43B02A"/>
            <rect x="9.5" y="13.5" width="5" height="1" rx="0.5" fill="#43B02A"/>
          </g>
        )}
      </svg>
    </div>
  )
}
