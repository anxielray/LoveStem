import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Physics01 from './pages/Physics[0]';

export default function PhysicsLearnApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physics01" element={<Physics01 />} />
        {/* <Route path="/lessons" element={<Lessons />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}
