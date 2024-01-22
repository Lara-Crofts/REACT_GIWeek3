// App.jsx
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Easy from './page/Easy';
import Medium from './page/Medium';
import Hard from './page/Hard';
import TaskDetail from './page/TaskDetail'; 


function App() {
  return (
    <div className="App">
      <Router>
        <nav className='mainNav'>
          <Link to='/Easy'>Easy</Link>
          <Link to='/Medium'>Medium</Link>
          <Link to='/Hard'>Hard</Link>
        </nav>

        <Routes>
          <Route path='/Easy' element={<Easy />}></Route>
          <Route path='/Medium' element={<Medium />}></Route>
          <Route path='/Hard' element={<Hard />}></Route>
          <Route path='/TaskDetail/:taskId' element={<TaskDetail />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
