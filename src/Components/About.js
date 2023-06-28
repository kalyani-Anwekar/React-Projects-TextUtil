import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  
  // const darkMode = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({ color: "black", backgroundColor: "white" });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setmystyle({ color: "white", backgroundColor: "black" , border: "1px solid white"});
  //     setBtnText("Enable Light Mode");
  //   }
  // };
  return (
    <div className="container " style={{ color: props.mode === 'light'?'#343a40':'white' }}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }}>
              Textutils gives you a way to analyze your text quickly and efficiently be it work count, character count and many more
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }}>
            <button
              className="accordion-button collapsed"
              type="button"
              style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Free to Use </strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }}>
             Textutils is a free character counter tool that provides instant character count & 
             word count statistics for a given text. Text util reports the number of words and characters.
             Thus it is suitable for writing text with words/characters limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body " style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }} >
              This application works in any web browser such as chrome, Firefox, IE, Safari, Opera.
              It suits to count words in blog, books, document, pdf, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" onClick={darkMode}  className="btn btn-primary my-2">
        {btnText}
      </button> */}
    </div>
  );
}
