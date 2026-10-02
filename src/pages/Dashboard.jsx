import { Link } from 'react-router-dom'
import { stats, diagnosisBreakdown, timeline, doctor } from '../data.js'
import { StatCard, StatusBadge } from '../components/UI.jsx'
import DonutChart from '../components/DonutChart.jsx'
import { IconArrowRight } from '../components/Icons.jsx'

const totalAppointments = diagnosisBreakdown.reduce((sum, d) => sum + d.count, 0)

export default function Dashboard() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p className="page-subtitle">Welcome back, {doctor.name}! Here&rsquo;s your overview for today.</p>
        </div>
        <div className="date-pill">Saturday, 27 Sep 2026</div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="dash-grid">
        <section className="card chart-card">
          <h2>Appointments by Diagnosis (Today)</h2>
          <div className="chart-row">
            <DonutChart data={diagnosisBreakdown} centerLabel="Appointments" centerValue={totalAppointments} />
            <ul className="legend">
              {diagnosisBreakdown.map((d) => (
                <li key={d.label}>
                  <span className="legend-dot" style={{ background: d.color }} />
                  <span className="legend-label">{d.label}</span>
                  <span className="legend-value">
                    {d.count} ({d.percent}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card timeline-card">
          <div className="card-header-row">
            <h2>Today&rsquo;s Appointment Timeline</h2>
            <Link to="/appointments" className="view-all">
              View All <IconArrowRight />
            </Link>
          </div>
          <ul className="timeline">
            {timeline.map((item, i) => (
              <li key={item.name} className="timeline-item">
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-rail">
                  <span className="timeline-dot" />
                  {i !== timeline.length - 1 && <span className="timeline-line" />}
                </div>
                <div className="timeline-avatar" aria-hidden="true">
                  {item.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="timeline-info">
                  <p className="timeline-name">{item.name}</p>
                  <p className="timeline-reason">{item.reason}</p>
                </div>
                <StatusBadge status={item.status} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
