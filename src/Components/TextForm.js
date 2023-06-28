import React, {useState} from 'react'


export default function TextForm(props) {
    const handleOnChange= (event) => {
        // console.log("on Change");
        setText(event.target.value);
    }
    const handleUpClick= () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        
        if(newText.length > 0){
            props.showAlert("Converted to Uppercase!","success")
        }
        else{
            props.showAlert("Enter the Text !","danger")
        }
    }
    const handleLowClick= () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        if(newText.length > 0){
            props.showAlert("Converted to Lowercase!","success")
        }
        else{
            props.showAlert("Enter the Text !","danger")
        }
    }
    const handleClearClick= () => {
        // console.log("clear text was clicked");
        setText("");
        
        if(text.length > 0){
            props.showAlert("Text is cleared!","success")
        }
        else{
            props.showAlert("Enter the Text !","danger")
        }
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        
        if(text.value.length > 0){
            props.showAlert("Copied to clipboard!","success")
        }
        else{
            props.showAlert("Enter the Text !","danger")
        }
    }
    
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        
        if(newText.length > 0){
            props.showAlert("Removed Extra Spaces!","success")
        }
        else{
            props.showAlert("Enter the Text !","danger")
        }
    }
    const [text, setText] = useState("");
    
    return (
        <>
        <div className='container' style={{color: props.mode === 'light'?'#343a40':'white' }}>
        
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} placeholder='Enter Text Here' onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'light'?'white':'#343a40', color: props.mode === 'light'?'#343a40':'white' }}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 " onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick} >Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace} >Remove Extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'#343a40':'white' }}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !==0} ).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
