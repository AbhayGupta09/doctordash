import { useState } from 'react'
import { patients as initialPatients } from '../data.js'
import AddVisitModal from '../components/AddVisitModal.jsx'

const tabs = ['Overview', 'Medical History', 'Prescriptions', 'Test Reports', 'Appointments']

export default function Patients() {
  const [patients, setPatients] = useState(initialPatients)
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(initialPatients[0].id)
  const [activeTab, setActiveTab] = useState('Overview')
  const [modalOpen, setModalOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  const patient = patients.find((p) => p.id === selectedId) || patients[0]
  const visits = [...(patient.visits || [])].reverse()

  function handleSearch(e) {
    e.preventDefault()
    const match = patients.find(
      (p) => p.id.toLowerCase() === query.trim().toLowerCase() || p.name.toLowerCase().includes(query.trim().toLowerCase()),
    )
    if (match) setSelectedId(match.id)
  }

  function handleSaveVisit(visit) {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === patient.id
          ? { ...p, visits: [...(p.visits || []), visit], lastVisit: visit.date }
          : p,
      ),
    )
    setModalOpen(false)
    setActiveTab('Medical History')
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Patients</h1>
          <p className="page-subtitle">Search and view complete patient details and history.</p>
        </div>
      </div>

      <form className="patient-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Patient ID (e.g. P0001)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <section className="card patient-card">
        <div className="patient-header">
          <div className="patient-avatar">
            {patient.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div className="patient-heading">
            <p className="patient-id">Patient ID: {patient.id}</p>
            <h2>{patient.name}</h2>
            <p className="patient-meta">
              Age: {patient.age} Years &nbsp;|&nbsp; Gender: {patient.gender} &nbsp;|&nbsp; Phone: {patient.phone}
            </p>
          </div>
          <div className="patient-header-actions">
            <button className="btn-primary" onClick={() => setModalOpen(true)}>
              + Add Visit
            </button>
            <button className="edit-btn">Edit Details</button>
          </div>
        </div>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={'tab' + (activeTab === tab ? ' active' : '')}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === 'Medical History' && visits.length > 0 && (
                <span className="tab-count">({visits.length})</span>
              )}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <div className="patient-info-grid">
            <div className="info-block">
              <h3>Personal Information</h3>
              <dl>
                <div><dt>Patient ID</dt><dd>{patient.id}</dd></div>
                <div><dt>Name</dt><dd>{patient.name}</dd></div>
                <div><dt>Age</dt><dd>{patient.age} Years</dd></div>
                <div><dt>Gender</dt><dd>{patient.gender}</dd></div>
                <div><dt>Phone</dt><dd>{patient.phone}</dd></div>
                <div><dt>Address</dt><dd>{patient.address}</dd></div>
              </dl>
            </div>
            <div className="info-block">
              <h3>Medical Summary</h3>
              <dl>
                <div><dt>Known Conditions</dt><dd>{patient.conditions.join(', ')}</dd></div>
                <div><dt>Allergies</dt><dd>{patient.allergies}</dd></div>
                <div><dt>Current Medications</dt><dd>{patient.medications.join(', ')}</dd></div>
                <div><dt>Blood Group</dt><dd>{patient.bloodGroup}</dd></div>
                <div><dt>Last Visit</dt><dd>{patient.lastVisit}</dd></div>
              </dl>
            </div>
          </div>
        )}

        {activeTab === 'Medical History' && (
          <div className="visit-list">
            {visits.length === 0 && <p className="tab-placeholder">No visits recorded yet.</p>}
            {visits.map((visit) => (
              <div key={visit.id} className="visit-card">
                <div className="visit-card-main">
                  <div className="visit-card-top">
                    <span className="visit-date">{visit.date}</span>
                    <span className="visit-doctor">{visit.doctorName}</span>
                  </div>
                  <p className="visit-diagnosis">{visit.diagnosis}</p>
                  {visit.notes && <p className="visit-notes">{visit.notes}</p>}
                </div>
                {visit.prescriptionImage && (
                  <button
                    type="button"
                    className="visit-thumb"
                    onClick={() => setLightboxImage(visit.prescriptionImage)}
                  >
                    <img src={visit.prescriptionImage} alt="Prescription" />
                    <span>View Rx</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab !== 'Overview' && activeTab !== 'Medical History' && (
          <p className="tab-placeholder">No {activeTab.toLowerCase()} on record yet.</p>
        )}
      </section>

      <AddVisitModal
        open={modalOpen}
        patientName={patient.name}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveVisit}
      />

      {lightboxImage && (
        <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && setLightboxImage(null)}>
          <div className="lightbox">
            <button className="modal-close" aria-label="Close" onClick={() => setLightboxImage(null)}>
              ×
            </button>
            <img src={lightboxImage} alt="Prescription enlarged" />
          </div>
        </div>
      )}
    </div>
  )
}
