import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Appointments from './pages/Appointments.jsx';
import Patients from './pages/Patients.jsx';
import Login from './patient/Login.jsx';

export default function App() {
  return (
    <Routes>
      {/* Login WITHOUT Layout */}
      <Route path="/patient/login" element={<Login />} />

      {/* All these pages WITH Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
      </Route>
    </Routes>
  );
}
