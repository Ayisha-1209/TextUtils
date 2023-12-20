import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = () => {
        console.log("UpperCase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case.","success")
    }

    const handleLoClick = () => {
        console.log("LowerCase Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case.","success")
    }

    const handleClear = () => {
        console.log("Clear text Clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text.","success")
    }


    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied Text.","success")
    }

    const handleExtraSpaces = () => {
        console.log("Extra Spaces Clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces.","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
  return (
    <>
    <div className = "container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1 className = "mb-4">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743',
         color: props.mode==='light'?'black':'white'}} id="MyBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  )
}
