export default function DonutChart({ data, centerLabel, centerValue, size = 200 }) {
  const radius = 70
  const stroke = 28
  const circumference = 2 * Math.PI * radius
  let offsetAcc = 0

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className="donut">
      <g transform="rotate(-90 100 100)">
        {data.map((slice) => {
          const dash = (slice.percent / 100) * circumference
          const gap = circumference - dash
          const el = (
            <circle
              key={slice.label}
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={slice.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offsetAcc}
              strokeLinecap="butt"
            />
          )
          offsetAcc += dash
          return el
        })}
      </g>
      <text x="100" y="96" textAnchor="middle" className="donut-value">
        {centerValue}
      </text>
      <text x="100" y="118" textAnchor="middle" className="donut-label">
        {centerLabel}
      </text>
    </svg>
  )
}
