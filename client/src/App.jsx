import { AuthProvider } from './pages/AuthContext';
import './App.css';
import LandingPage from './routes/LandingPage';
function App() {
  return (
    <AuthProvider>
        <LandingPage />
    </AuthProvider>
  );
}

export default App;
