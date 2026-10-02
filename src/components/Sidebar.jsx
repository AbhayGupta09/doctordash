import { NavLink } from 'react-router-dom'
import { IconDashboard, IconCalendar, IconUsers, IconPulse } from './Icons.jsx'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: IconDashboard, end: true },
  { to: '/appointments', label: 'Appointments', icon: IconCalendar },
  { to: '/patients', label: 'Patients', icon: IconUsers },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-mark">
          <IconPulse />
        </span>
        <div>
          <p className="brand-name">MediCare</p>
          <p className="brand-sub">Doctor Dashboard</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}
          >
            <Icon />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-promo">
        <p className="promo-title">Better Care<br />Healthier Lives</p>
        <span className="promo-underline" />
      </div>
    </aside>
  )
}
