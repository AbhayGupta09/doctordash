export const doctor = {
  name: 'Dr. Abhay Gupta',
  title: 'General Physician',
  avatarInitials: 'AG',
}

export const stats = [
  {
    id: 'appointments',
    label: "Today's Appointments",
    value: 18,
    note: '+3 from yesterday',
    noteTone: 'positive',
    icon: 'calendar',
    tone: 'blue',
  },
  {
    id: 'patients',
    label: 'Total Patients',
    value: 243,
    note: 'Registered',
    noteTone: 'neutral',
    icon: 'users',
    tone: 'green',
  },
  {
    id: 'diagnoses',
    label: 'Diagnoses Today',
    value: 15,
    note: 'In 8 different categories',
    noteTone: 'neutral',
    icon: 'file',
    tone: 'red',
  },
  {
    id: 'pending',
    label: 'Pending Appointments',
    value: 4,
    note: 'Later today',
    noteTone: 'neutral',
    icon: 'clock',
    tone: 'purple',
  },
]

export const diagnosisBreakdown = [
  { label: 'Fever', count: 5, percent: 28, color: '#5B8DEF' },
  { label: 'Respiratory', count: 4, percent: 22, color: '#3B6FE0' },
  { label: 'Diabetes', count: 3, percent: 17, color: '#34C38F' },
  { label: 'Blood Pressure', count: 2, percent: 11, color: '#F76E9C' },
  { label: 'Stomach/GI', count: 2, percent: 11, color: '#F7B2CE' },
  { label: 'Others', count: 2, percent: 11, color: '#A78BFA' },
]

export const timeline = [
  { time: '09:00 AM', name: 'Ramesh Kumar', reason: 'Fever, Cold', status: 'Completed' },
  { time: '09:30 AM', name: 'Priya Sharma', reason: 'Diabetes Follow-up', status: 'In Visit' },
  { time: '10:00 AM', name: 'Amit Singh', reason: 'Blood Pressure', status: 'Upcoming' },
  { time: '10:30 AM', name: 'Neha Verma', reason: 'Stomach Pain', status: 'Upcoming' },
]

export const appointmentsToday = [
  { id: 1, time: '09:00 AM', name: 'Ramesh Kumar', age: 45, gender: 'M', reason: 'Fever, Cold', status: 'Completed' },
  { id: 2, time: '09:30 AM', name: 'Priya Sharma', age: 32, gender: 'F', reason: 'Diabetes Follow-up', status: 'In Visit' },
  { id: 3, time: '10:00 AM', name: 'Amit Singh', age: 50, gender: 'M', reason: 'Blood Pressure', status: 'Upcoming' },
  { id: 4, time: '10:30 AM', name: 'Neha Verma', age: 28, gender: 'F', reason: 'Stomach Pain', status: 'Upcoming' },
  { id: 5, time: '11:00 AM', name: 'Suresh Pal', age: 60, gender: 'M', reason: 'Joint Pain', status: 'Upcoming' },
  { id: 6, time: '11:30 AM', name: 'Kavita Yadav', age: 35, gender: 'F', reason: 'Skin Allergy', status: 'Upcoming' },
]

export const patients = [
  {
    id: 'P0001',
    name: 'Ramesh Kumar',
    age: 45,
    gender: 'Male',
    phone: '9876543210',
    address: 'Kasganj, Uttar Pradesh',
    lastVisit: '15 Sep 2026',
    bloodGroup: 'B+',
    conditions: ['Diabetes', 'Hypertension'],
    allergies: 'None Known',
    medications: ['Metformin', 'Amlodipine'],
    visits: [
      {
        id: 'V-P0001-1',
        date: '15 Sep 2026',
        doctorName: 'Dr. Abhay Gupta',
        diagnosis: 'Routine diabetes follow-up',
        notes: 'Blood sugar stable. Continue current dosage.',
        prescriptionImage: null,
      },
    ],
  },
  {
    id: 'P0002',
    name: 'Priya Sharma',
    age: 32,
    gender: 'Female',
    phone: '9876501234',
    address: 'Mathura, Uttar Pradesh',
    lastVisit: '20 Sep 2026',
    bloodGroup: 'A+',
    conditions: ['Type 2 Diabetes'],
    allergies: 'Penicillin',
    medications: ['Metformin'],
    visits: [
      {
        id: 'V-P0002-1',
        date: '20 Sep 2026',
        doctorName: 'Dr. Abhay Gupta',
        diagnosis: 'Type 2 diabetes follow-up',
        notes: 'HbA1c improved. Advised diet control.',
        prescriptionImage: null,
      },
    ],
  },
  {
    id: 'P0003',
    name: 'Amit Singh',
    age: 50,
    gender: 'Male',
    phone: '9876512345',
    address: 'Aligarh, Uttar Pradesh',
    lastVisit: '18 Sep 2026',
    bloodGroup: 'O+',
    conditions: ['Hypertension'],
    allergies: 'None Known',
    medications: ['Amlodipine'],
    visits: [
      {
        id: 'V-P0003-1',
        date: '18 Sep 2026',
        doctorName: 'Dr. Abhay Gupta',
        diagnosis: 'Blood pressure check-up',
        notes: 'BP well controlled on current medication.',
        prescriptionImage: null,
      },
    ],
  },
]
