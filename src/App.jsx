import { Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';

function App() {
  return (
    <div className="min-vh-100">
      <nav className="navbar navbar-light bg-primary shadow-sm sticky-top">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            ⚡ STUDENT CATALOG
          </span>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
