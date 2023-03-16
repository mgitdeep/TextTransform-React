// import { useState } from "react";

export default function About(props) {

    // const [ myStyle, setmyStyle ] = useState({
    //     color: '#1d242a',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    // const handleThemeChange = () => {

    //   if (myStyle.color === '#061b35') {
    //     setmyStyle({color: 'white',
    //     backgroundColor: '#061b35',
    //     border: '1px solid white'})

    //     setBtnText('Enable Light Mode')
    //   }
    //   else {
    //     setmyStyle({color: '#061b35',
    //     backgroundColor: 'white'})

    //     setBtnText('Enable Dark Mode')
    //   }
        
    // }
    // console.log(props.mode)
    
  return (
    <>
    <div className="container my-5" >
        <h1 className="my-3" style={{ color: props.mode==='dark'?'white':'black' }}>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={{backgroundColor: `${props.mode}`==='dark'?'#2c2f32':'white', color: props.mode==='dark'?'white':'black' }}>
          <h2 className="accordion-header" id="headingOne" >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: `${props.mode}`==='dark'?'#2c2f32':'white', color: props.mode==='dark'?'white':'black' }}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: `${props.mode}`==='dark'?'#2c2f32':'white', color: props.mode==='dark'?'white':'black' }}>
          <h2 className="accordion-header" id="headingTwo" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: `${props.mode}`==='dark'?'#2c2f32':'white', color: props.mode==='dark'?'white':'black' }}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: `${props.mode}`==='dark'?'#2c2f32':'white', color: props.mode==='dark'?'white':'black' }}>
          <h2 className="accordion-header" id="headingThree" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: `${props.mode}`==='dark'?'#2c2f32':'white', color: props.mode==='dark'?'white':'black' }}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
      <button type="button" className="btn btn-primary my-3" onClick={handleThemeChange}>{btnText}</button>
      </div> */}
    </div>
    </>
  );
}
