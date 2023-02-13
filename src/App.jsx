import './App.css'
import LoginPage from './components/LogInPage/Login'
import { Route, Routes } from 'react-router-dom'
import CreateMem from './components/CreateMemberPage/CreateMem'
import Attendance from './components/TablePage/Attendance'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/create' element={<CreateMem/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
      </Routes>
    </div>
  )
}

export default App
