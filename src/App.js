import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AllRoutes } from './routes/AllRoutes';


function App() {
  return (
    <div className='bg-blue-950'>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
