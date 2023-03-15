// import About from "./components/About";
import { useState } from "react";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"


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

            <div className="container my-5">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode= {mode}/>
            </div>

            {/* <About /> */}
        </>
    )
}


export default App;
  