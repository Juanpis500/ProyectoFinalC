import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ReserveHome from './components/ReserveTable/ReserveHome';

function App() {
  return (
    <body>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/reserve-online' element={<ReserveHome/>}></Route>
      </Routes>
    </body>
  );
}

export default App;
