
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
    
    const [mode, setMode] = useState('light')

    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout( () => {
            setAlert(null)
        }, 1500)
    }

    const toggleMode = () => {
        if ( mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = "#061b35"

            showAlert(": Dark Mode has been enabled!", "success")
            // setInterval(() => {
            //     document.title = "Install Now!"
            // }, 2000);
            // setInterval(() => {
            //     document.title = "Install the App!"
            // }, 1500);
        } 
        else {
            setMode('light')
            document.body.style.backgroundColor = "white"

            showAlert(": Light Mode has been enabled!", "success")
        }
        
    }

    return (
        <>
            <Navbar title="TextTransform" aboutText="About" contactUs="Contact" mode= {mode} toggleMode={toggleMode}/>

            <Alerts alert={alert}/>

            {/* <div className="container my-5">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode= {mode}/>
            </div> */}

            {/* <About /> */}
            <div className="container my-5">
            <Routes>
                <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode= {mode}/>} />
                <Route path="/about" element={<About mode= {mode}/>} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
        </>
    )
}


export default App;
  


// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";
  
//   <Router>
//         <Navbar title="TextUtils" mode={mode} onChangeMode={handleChangeMode}/>
//         <Alert alert = {alert}/>  
//         <div className="container my-3">
//           <Routes>   
//             <Route path="/about" element={<About />} />
//             <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
//           </Routes>
//         </div>
//      </Router>