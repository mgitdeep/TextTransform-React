// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"


function App() {
    
    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        if ( mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = "#061b35"
        } 
        else {
            setMode('light')
            document.body.style.backgroundColor = "white"
        }
        
    }

    return (
        <>
            <Navbar title="TextTransform" aboutText="About" contactUs="Contact" mode= {mode} toggleMode={toggleMode}/>
            <div className="container my-5">
                <TextForm heading="Enter the text to analyze below" mode= {mode}/>
            </div>

            {/* <About /> */}
        </>
    )
}


export default App;
  