import Navbar from "./Navbar";
import {Routes, Route} from 'react-router-dom'
import Palette from "./Palette"
import MainPage from "./MainPage";
import Book from "./Book";

function App() {
  return (
    <div className="main_page">
      <Navbar />
      <Routes>
        <Route path='/palette' element={<Palette/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
