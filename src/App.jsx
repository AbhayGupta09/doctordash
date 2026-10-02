import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Appointments from './pages/Appointments.jsx'
import Patients from './pages/Patients.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </Layout>
  )
}
