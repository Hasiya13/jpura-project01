import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import ForgotPassword from './components/ForgotPassword';
import OTPVerification from './components/OTPVerification';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AddItem from './pages/AddItem';
import Community from './pages/Community.JSX';
import About from './pages/About';
import UserDetails from './pages/UserDetails';



function AppContent() {
  const location = useLocation();
  
  
  const hideNavbar = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div className="App">
     
      {!hideNavbar && <Navbar />} 
      
      <Routes>
        
        <Route path="/" element={<UserDetails />} />
        
        {/* Authentication Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        
        {/* Main Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
         <Route path="/user/:id" element={<UserDetails />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;