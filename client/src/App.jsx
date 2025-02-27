import { AuthProvider } from './pages/AuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
import { Routes, Route } from 'react-router';
import './App.css';
// LAYOUT
import LandingPageLayout from './layouts/LandingPageLayout';
import DashboardLayout from './layouts/DashboardLayout';

// PAGES
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ExploreRecipe from './pages/ExploreRecipe';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route element={<LandingPageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<ExploreRecipe />} />
          <Route path="/signup" element={<Register />} />

          <Route path="/about" element={<About />} />
        </Route>

        {/* Protected Routes */}
        {/* <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Route> */}

        {/* FOR DEVELOPMENT */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
