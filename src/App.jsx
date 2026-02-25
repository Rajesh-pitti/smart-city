import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'

// Public Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageServices from './pages/admin/ManageServices'
import Infrastructure from './pages/admin/Infrastructure'
import Reports from './pages/admin/Reports'
import AdminFeedback from './pages/admin/Feedback'

// User Pages
import UserDashboard from './pages/user/UserDashboard'
import Services from './pages/user/Services'
import ReportIssue from './pages/user/ReportIssue'
import UserFeedback from './pages/user/Feedback'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin Routes */}
        <Route
          element={
            <ProtectedRoute requiredRole="admin">
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/services" element={<ManageServices />} />
          <Route path="/admin/infrastructure" element={<Infrastructure />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/feedback" element={<AdminFeedback />} />
        </Route>

        {/* User Routes */}
        <Route
          element={
            <ProtectedRoute requiredRole="user">
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/services" element={<Services />} />
          <Route path="/user/report-issue" element={<ReportIssue />} />
          <Route path="/user/feedback" element={<UserFeedback />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
