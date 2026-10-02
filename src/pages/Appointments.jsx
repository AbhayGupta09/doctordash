import { useMemo, useState } from 'react'
import { appointmentsToday } from '../data.js'
import { StatusBadge } from '../components/UI.jsx'

const tabs = ['Today', 'Upcoming', 'Completed', 'Cancelled']

export default function Appointments() {
  const [activeTab, setActiveTab] = useState('Today')

  const rows = useMemo(() => {
    if (activeTab === 'Today') return appointmentsToday
    if (activeTab === 'Upcoming') return appointmentsToday.filter((a) => a.status === 'Upcoming')
    if (activeTab === 'Completed') return appointmentsToday.filter((a) => a.status === 'Completed')
    return []
  }, [activeTab])

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Appointments</h1>
          <p className="page-subtitle">All your appointments for today. Manage and view patient details.</p>
        </div>
        <div className="date-pill">Saturday, 27 Sep 2026</div>
      </div>

      <section className="card table-card">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={'tab' + (activeTab === tab ? ' active' : '')}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === 'Today' && <span className="tab-count">({appointmentsToday.length})</span>}
            </button>
          ))}
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Time</th>
                <th>Patient Name</th>
                <th>Age / Gender</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.id}>
                  <td>{i + 1}</td>
                  <td>{row.time}</td>
                  <td className="cell-strong">{row.name}</td>
                  <td>
                    {row.age} / {row.gender}
                  </td>
                  <td>{row.reason}</td>
                  <td>
                    <StatusBadge status={row.status} />
                  </td>
                  <td>
                    <button className="link-btn">View</button>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={7} className="empty-row">
                    No appointments in this view.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
