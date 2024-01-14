import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfileDoctorPatientList from './pages/ProfileDoctorPatientList';
import ProfileDoctorNewPatient from "./pages/ProfileDoctorNewPatient";
import ProfileDoctorSickNotes from "./pages/ProfileDoctorSickNotes"
import ProfileDoctorSickNotesSelect from "./pages/ProfileDoctorSickNotesSelect";
import profileDoctorNewExam from "./pages/ProfileDoctorNewExam";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDoctorNewExam from "./pages/ProfileDoctorNewExam";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/newmedicalexam"} element={<ProfileDoctorNewExam />} />
                <Route path={"/sicknotesview"} element={<ProfileDoctorSickNotesSelect />} />
                <Route path={"/sicknotes"} element={<ProfileDoctorSickNotes />} />
                <Route path={"/newpatient"} element={<ProfileDoctorNewPatient />} />
                <Route path={"/patientlist"} element={<ProfileDoctorPatientList />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
