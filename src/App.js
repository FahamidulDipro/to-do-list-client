import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';
import ToDo from './components/ToDo/ToDo';
import Calender from './components/Calender/Calender';
import NotFound from './components/NotFound/NotFound';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <div className="App">
    
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/edit/:taskId' element={<Edit></Edit>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     </div>
  );
}

export default App;
