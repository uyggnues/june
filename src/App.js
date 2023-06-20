import Navbar from "./component/Navbar";
import {Routes, Route} from 'react-router-dom'
import Palette from "./component/Palette"
import MainPage from "./component/MainPage";

function App() {
  return (
    <div className="main_page">
      <Navbar />
      <Routes>
        <Route path='/palette' element={<Palette/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
