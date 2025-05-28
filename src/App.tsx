import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/common/Nav';

// Pages
import Map from './pages/Map';
import Alarm from './pages/Alarm';
import Appointment from './pages/Appointment';
import Notification from './pages/Notification';
import Setting from './pages/Setting';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/map" element={<Map />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
