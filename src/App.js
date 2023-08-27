import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Palette from "./components/Palette"
import MainPage from "./components/MainPage";
import Book from "./components/Book";

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
