import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"


function App() {

    return (
        <>
            <Navbar title="TextTransform" aboutText="About" contactUs="Contact"/>
            <div className="container my-5">
                <TextForm heading="Enter the text to analyze below"/>
            </div>
        </>
    )
}


export default App;
  