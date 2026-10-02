import { useEffect, useRef, useState } from 'react'
import { doctor } from '../data.js'

const today = new Date().toISOString().slice(0, 10)

const emptyForm = {
  date: today,
  doctorName: doctor.name,
  diagnosis: '',
  notes: '',
}

export default function AddVisitModal({ open, patientName, onClose, onSave }) {
  const [form, setForm] = useState(emptyForm)
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setForm(emptyForm)
      setImageFile(null)
      setImagePreview(null)
      setError('')
    }
  }, [open])

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview)
    }
  }, [imagePreview])

  if (!open) return null

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG, etc.)')
      return
    }
    setError('')
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  function handleRemoveImage() {
    setImageFile(null)
    setImagePreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function formatDate(iso) {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return iso
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.diagnosis.trim()) {
      setError('Diagnosis is required.')
      return
    }
    if (!form.doctorName.trim()) {
      setError('Doctor name is required.')
      return
    }

    onSave({
      id: `V-${Date.now()}`,
      date: formatDate(form.date),
      doctorName: form.doctorName.trim(),
      diagnosis: form.diagnosis.trim(),
      notes: form.notes.trim(),
      prescriptionImage: imagePreview,
      prescriptionFileName: imageFile?.name || null,
    })
  }

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div>
            <h2>Add New Visit</h2>
            <p className="modal-subtitle">{patientName ? `For ${patientName}` : 'Log a new patient visit'}</p>
          </div>
          <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="form-field">
              <span>Visit Date</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange('date', e.target.value)}
                required
              />
            </label>

            <label className="form-field">
              <span>Doctor Name</span>
              <input
                type="text"
                value={form.doctorName}
                onChange={(e) => handleChange('doctorName', e.target.value)}
                placeholder="Dr. Name"
                required
              />
            </label>
          </div>

          <label className="form-field">
            <span>Diagnosis</span>
            <input
              type="text"
              value={form.diagnosis}
              onChange={(e) => handleChange('diagnosis', e.target.value)}
              placeholder="e.g. Fever, Viral Infection"
              required
            />
          </label>

          <label className="form-field">
            <span>Visit Notes (optional)</span>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Symptoms, advice, follow-up instructions..."
            />
          </label>

          <div className="form-field">
            <span>Prescription Image (optional)</span>

            {!imagePreview ? (
              <label className="upload-drop">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
                <span className="upload-icon" aria-hidden="true">
                  ⬆
                </span>
                <span className="upload-text">Click to upload a prescription photo</span>
                <span className="upload-hint">PNG or JPG</span>
              </label>
            ) : (
              <div className="upload-preview">
                <img src={imagePreview} alt="Prescription preview" />
                <div className="upload-preview-info">
                  <p>{imageFile?.name}</p>
                  <button type="button" className="link-btn danger" onClick={handleRemoveImage}>
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Visit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
