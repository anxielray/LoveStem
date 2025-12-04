import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Physics01 from './pages/Physics[0]';
import Math01 from './pages/math[0]';
import ScienceVideosPage from './pages/more';
import VideoPage from './pages/video';

export default function LoveStemApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physics01" element={<Physics01 />} />
        <Route path="/math01" element={<Math01 />} />
        <Route path="/more" element={<ScienceVideosPage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        {/* <Route path="/lessons" element={<Lessons />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}
