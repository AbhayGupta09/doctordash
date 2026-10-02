import { IconCalendar, IconUsers, IconFile, IconClock } from './Icons.jsx'

const iconMap = { calendar: IconCalendar, users: IconUsers, file: IconFile, clock: IconClock }

export function StatCard({ stat }) {
  const Icon = iconMap[stat.icon]
  return (
    <div className={`stat-card tone-${stat.tone}`}>
      <span className="stat-icon">
        <Icon />
      </span>
      <p className="stat-label">{stat.label}</p>
      <p className="stat-value">{stat.value}</p>
      <p className={`stat-note ${stat.noteTone === 'positive' ? 'positive' : ''}`}>
        {stat.noteTone === 'positive' && '↑ '}
        {stat.note}
      </p>
    </div>
  )
}

const statusClass = {
  Completed: 'status completed',
  'In Visit': 'status in-visit',
  Upcoming: 'status upcoming',
  Cancelled: 'status cancelled',
}

export function StatusBadge({ status }) {
  return <span className={statusClass[status] || 'status'}>{status}</span>
}
