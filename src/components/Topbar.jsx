import { IconSearch, IconBell, IconChevronDown } from './Icons.jsx'
import { doctor } from '../data.js'

export default function Topbar() {
  return (
    <header className="topbar">
      <label className="search-box">
        <IconSearch />
        <input type="text" placeholder="Search patient by ID or name..." />
      </label>

      <div className="topbar-right">
        <button className="icon-btn" aria-label="Notifications">
          <IconBell />
          <span className="notif-dot" />
        </button>

        <button className="profile-btn">
          <span className="avatar">{doctor.avatarInitials}</span>
          <span className="profile-text">
            <span className="profile-name">{doctor.name}</span>
            <span className="profile-title">{doctor.title}</span>
          </span>
          <IconChevronDown className="profile-chevron" />
        </button>
      </div>
    </header>
  )
}
