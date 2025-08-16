import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read'
import Edit from './components/Edit';

function App() {
  return (
    <div className="container mt-4">
      <div className="card shadow p-4 rounded">
        <Routes>
          <Route exact path='/' element={<Read />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
//exact means exact URL match