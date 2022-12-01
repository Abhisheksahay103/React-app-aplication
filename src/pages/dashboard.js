import React, { useState, useEffect } from 'react';

import "../css/style.css";
import Navbar from "../components/navbar";
import Slider from "../components/slider"
import Table from "../components/tables";
import Charts from "../../src/components/charts";
const Dashboard = (props) => {
//   const {theme, themeLoaded, getFonts} = useTheme();
//   const [selectedTheme, setSelectedTheme] = useState(theme);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newTheme, setNewTheme] = useState();
  
//  useEffect(() => {
//     WebFont.load({
//       google: {
//         families: getFonts()
//       }
//     });
//   });

//   useEffect(() => {
//     setSelectedTheme(theme);
//   }, [themeLoaded]);

//   const manageDialog = () => {
//     setShowDialog(!showDialog);
//   }

//   const createTheme = newTheme => {
//     console.log(newTheme);
//     setShowDialog(false);
//     setNewTheme(newTheme);
//   }
  
//   const [toggle , setToggle] = useState(true);
//   const toggleClass = !toggle ? "is-active" : "";
//   const toggleClick = () => {
//     setToggle(!toggle);
// }    
  return (
    <>
     <div className='card_group'>
            <div className='card'>
            <div className='section_two'>
                  <p>Warning Limit is 60%</p>
                  <div className='form_group'>
                    <select name="cars" id="cars">
                      <option value="volvo">Monthly</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Aug 22</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <i className='fa fa-file-pdf-o'></i>
                  </div>
              </div>
              <div className='top_section'>
                <h4>Tier 1</h4>
               <div className='circlegroup'>
                <div className='redmeter'>2</div>
                <div className='yellowmeter'>47</div>
                <div className='greenmeter'>124</div>
                
               </div>
              </div>
            
               
            </div>
            <div className='card'>
            <div className='section_two'>
                  <p>Warning Limit is 60%</p>
                  <div className='form_group'>
                    <select name="cars" id="cars">
                      <option value="volvo">Monthly</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Aug 22</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <i className='fa fa-file-pdf-o'></i>
                  </div>
              </div>
              <div className='top_section'>
                <h4>Tier 1</h4>
               <div className='circlegroup'>
                <div className='redmeter'>2</div>
                <div className='yellowmeter'>47</div>
                <div className='greenmeter'>124</div>
                
               </div>
              </div>
            
               
            </div>
            <div className='card'>
            <div className='section_two'>
                  <p>Warning Limit is 60%</p>
                  <div className='form_group'>
                    <select name="cars" id="cars">
                      <option value="volvo">Monthly</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Aug 22</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <i className='fa fa-file-pdf-o'></i>
                  </div>
              </div>
              <div className='top_section'>
                <h4>Tier 1</h4>
               <div className='circlegroup'>
                <div className='redmeter'>2</div>
                <div className='yellowmeter'>47</div>
                <div className='greenmeter'>124</div>
                
               </div>
              </div>
            
               
            </div>
        </div>
   <Slider/>
        <Charts/>
        <Table/>
    {/* {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Navbar/>
        <div className='card_group'>
            <div className='card'>
            <div className='section_two'>
                  <p>Warning Limit is 60%</p>
                  <div className='form_group'>
                    <select name="cars" id="cars">
                      <option value="volvo">Monthly</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Aug 22</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <i className='fa fa-file-pdf-o'></i>
                  </div>
              </div>
              <div className='top_section'>
                <h4>Tier 1</h4>
               <div className='circlegroup'>
                <div className='redmeter'>2</div>
                <div className='yellowmeter'>47</div>
                <div className='greenmeter'>124</div>
                
               </div>
              </div>
            
               
            </div>
            <div className='card'>
            <div className='section_two'>
                  <p>Warning Limit is 60%</p>
                  <div className='form_group'>
                    <select name="cars" id="cars">
                      <option value="volvo">Monthly</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Aug 22</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <i className='fa fa-file-pdf-o'></i>
                  </div>
              </div>
              <div className='top_section'>
                <h4>Tier 1</h4>
               <div className='circlegroup'>
                <div className='redmeter'>2</div>
                <div className='yellowmeter'>47</div>
                <div className='greenmeter'>124</div>
                
               </div>
              </div>
            
               
            </div>
            <div className='card'>
            <div className='section_two'>
                  <p>Warning Limit is 60%</p>
                  <div className='form_group'>
                    <select name="cars" id="cars">
                      <option value="volvo">Monthly</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="volvo">Aug 22</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <i className='fa fa-file-pdf-o'></i>
                  </div>
              </div>
              <div className='top_section'>
                <h4>Tier 1</h4>
               <div className='circlegroup'>
                <div className='redmeter'>2</div>
                <div className='yellowmeter'>47</div>
                <div className='greenmeter'>124</div>
                
               </div>
              </div>
            
               
            </div>
        </div>
       
        <Slider/>
        <Charts/>
        <Table/>
        <div className={ `color_box ${toggleClass}`} style={{fontFamily: selectedTheme.font}}>
          
            <div className="open_color_theme" onClick={toggleClick}><i className="fa fa-cog" aria-hidden="true"></i></div>
          <ThemeSelector setter={ setSelectedTheme } newTheme={ newTheme }/>
        </div>
      </ThemeProvider>
    } */}
     
    </>
  );
}

export default Dashboard;
