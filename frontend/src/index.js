import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfileDoctorPatientList from './pages/ProfileDoctorPatientList';
import ProfileDoctorNewPatient from "./pages/ProfileDoctorNewPatient";
import ProfileDoctorSickNotes from "./pages/ProfileDoctorSickNotes";
import ProfileDoctorSickNotesSelect from "./pages/ProfileDoctorSickNotesSelect";
import ProfileDoctorNewExam from "./pages/ProfileDoctorNewExam";
import ProfileDoctorMedicalFile from "./pages/ProfileDoctorMedicalFile";
import ProfileDoctorSpecialistExam from "./pages/ProfileDoctorSpecialistExam";
import ProfileDoctorPatientProfile from "./pages/ProfileDoctorPatientProfile";
import ProfileDoctorMedicalReport from "./pages/ProfileDoctorMedicalReport";
import ProfileDoctorMedicalReportOpened from "./pages/ProfileDoctorMedicalReportOpened";
import ProfileDoctorMedicalReportMessage from "./pages/ProfileDoctorMedicalReportMessage";
import ProfilePediatricianPatientList from "./pages/ProfilePediatricianPatientList";
import ProfilePediatricianNewExam from "./pages/ProfilePediatricianNewExam";
import ProfilePediatricianMedicalFile from "./pages/ProfilePediatricianMedicalFile";
import ProfilePediatricianSpecialistExam from "./pages/ProfilePediatricianSpecialistExam";
import ProfilePediatricianMedicalReport from "./pages/ProfilePediatricianMedicalReport";
import ProfilePediatricianMedicalReportOpened from "./pages/ProfilePediatricianMedicalReportOpened";
import ProfilePediatricianMedicalReportMessage from "./pages/ProfilePediatricianMedicalReportMessage";
import ProfilePediatricianPatientProfile from "./pages/ProfilePediatricianPatientProfile";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/pediatrician/patientprofile"} element={<ProfilePediatricianPatientProfile />} />
                <Route path={"/pediatrician/medicalreports/medicalreport/message"} element={<ProfilePediatricianMedicalReportMessage />} />
                <Route path={"/pediatrician/medicalreports/medicalreport"} element={<ProfilePediatricianMedicalReportOpened />} />
                <Route path={"/pediatrician/medicalreports"} element={<ProfilePediatricianMedicalReport />} />
                <Route path={"/pediatrician/specialistexam"} element={<ProfilePediatricianSpecialistExam />} />
                <Route path={"/pediatrician/medicalfile"} element={<ProfilePediatricianMedicalFile />} />
                <Route path={"/pediatrician/newexam"} element={<ProfilePediatricianNewExam />} />
                <Route path={"/pediatrician/patientlist"} element={<ProfilePediatricianPatientList />} />
                <Route path={"/doctor/patientprofile/:oib/medicalreports/medicalreport/message"} element={<ProfileDoctorMedicalReportMessage />} />
                <Route path={"/doctor/patientprofile/:oib/medicalreports/medicalreport/:reportId"} element={<ProfileDoctorMedicalReportOpened />} />
                <Route path={"/doctor/patientprofile/:oib/medicalreports"} element={<ProfileDoctorMedicalReport />} />
                <Route path={"/doctor/patientprofile/:oib"} element={<ProfileDoctorPatientProfile />} />
                <Route path={"/doctor/patientprofile/:oib/specialistexam"} element={<ProfileDoctorSpecialistExam />} />
                <Route path={"/doctor/patientprofile/:oib/medicalfile"} element={<ProfileDoctorMedicalFile />} />
                <Route path={"/doctor/patientprofile/:oib/newmedicalexam"} element={<ProfileDoctorNewExam />} />
                <Route path={"/doctor/sicknotesview"} element={<ProfileDoctorSickNotesSelect />} />
                <Route path={"/doctor/sicknotes"} element={<ProfileDoctorSickNotes />} />
                <Route path={"/doctor/newpatient"} element={<ProfileDoctorNewPatient />} />
                <Route path={"/doctor/patientlist"} element={<ProfileDoctorPatientList />} />
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
