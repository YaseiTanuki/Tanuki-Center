/*BEGIN IMPORT*/
//Packages
import {Routes, Route} from 'react-router-dom';

//Components
import NavigationBar from "./components/NavigationBar/NavigationBar";

//Pages
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
//styles
import './App.scss';
/*END IMPORT*/

function App() {

  return (
    <>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </>
  )
}

export default App
