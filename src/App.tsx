import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import LearnMore from './pages/LearnMore/LearnMore';

function App() {
  return (
    <div className="app-root">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/LearnMore" element={<LearnMore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
