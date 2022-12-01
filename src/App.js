import React,{useEffect, useState} from 'react'
import "./css/style.css";
import Charts from './components/charts';
import Slider from './components/slider';
import Tables from './components/tables'
import Overview from './pages/overview';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar'
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../src/theme/GlobalStyles';
import {useTheme} from '../src/theme/useTheme';
import ThemeSelector from './ThemeSelector';
const App = () => {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [newTheme, setNewTheme] = useState();
  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);
  const [toggle , setToggle] = useState(true);
  const toggleClass = !toggle ? "is-active" : "";
  const toggleClick = () => {
    setToggle(!toggle);
}    
  return (
   <>
     {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Navbar/>
        <div className={ `color_box ${toggleClass}`} style={{fontFamily: selectedTheme.font}}>
          {/* <button className="btn" onClick={ manageDialog }>Create a Theme</button>
          <Dialog 
            header="Create a Theme"
            body={ <CreateThemeContent create={ createTheme }/> }
            open={ showDialog } 
            callback = { manageDialog }/> */}
            <div className="open_color_theme" onClick={toggleClick}><i className="fa fa-cog" aria-hidden="true"></i></div>
          <ThemeSelector setter={ setSelectedTheme } newTheme={ newTheme }/>
        </div>
        
       
        </ThemeProvider>
}
  
 
   <Routes>
      <Route exact path='/' element={<Dashboard/>} />
      <Route exact path='/chart' element={<Charts/>} />
      <Route exact path='/overview' element={<Overview/>} />
   </Routes>
   </>
  );
}

export default App;
