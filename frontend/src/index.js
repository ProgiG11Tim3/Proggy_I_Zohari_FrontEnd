import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PatientPage from './pages/PatientPage';
import ProfileDoctorPatientList from './pages/ProfileDoctorPatientList';
import ProfileDoctorNewPatient from "./pages/ProfileDoctorNewPatient";
import ProfileDoctorSickNotes from "./pages/ProfileDoctorSickNotes";
import ProfileDoctorSickNotesSelect from "./pages/ProfileDoctorSickNotesSelect";
import ProfileDoctorNewExam from "./pages/ProfileDoctorNewExam";
import TemplateTwoPart from "./components/TemplateTwoPart";
import ProfileDoctorMedicalFile from "./pages/ProfileDoctorMedicalFile";
import ProfileDoctorSpecialistExam from "./pages/ProfileDoctorSpecialistExam";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/specialistexam"} element={<ProfileDoctorSpecialistExam />} />
                <Route path={"/medicalfile"} element={<ProfileDoctorMedicalFile />} />
                <Route path={"/test"} element={<TemplateTwoPart />} />
                <Route path={"/newmedicalexam"} element={<ProfileDoctorNewExam />} />
                <Route path={"/sicknotesview"} element={<ProfileDoctorSickNotesSelect />} />
                <Route path={"/sicknotes"} element={<ProfileDoctorSickNotes />} />
                <Route path={"/newpatient"} element={<ProfileDoctorNewPatient />} />
                <Route path={"/patientlist"} element={<ProfileDoctorPatientList />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/patient/:oib" element={<PatientPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
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
