import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="app-content">{children}</main>
      </div>
    </div>
  )
}
