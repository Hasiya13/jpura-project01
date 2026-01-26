import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import ForgotPassword from './components/ForgotPassword';
import OTPVerification from './components/OTPVerification';

function App() {
  return (
    <Routes>
      {/* මුලින්ම යද්දී Sign In එක පෙන්වන්න */}
      <Route path="/" element={<Navigate to="/signin" />} />
      
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<OTPVerification />} />
      
    </Routes>
  )
}

export default App;