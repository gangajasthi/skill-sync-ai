import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ResumeAnalysis from './pages/ResumeAnalysis.jsx'
import SkillGap from './pages/SkillGap.jsx'
import LearningRoadmap from './pages/LearningRoadmap.jsx'
import MockInterview from './pages/MockInterview.jsx'
import Jobs from './pages/Jobs.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume-analysis" element={<ResumeAnalysis />} />
      <Route path="/skill-gap" element={<SkillGap />} />
      <Route path="/roadmap" element={<LearningRoadmap />} />
      <Route path="/mock-interview" element={<MockInterview />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
