import React, {useState} from 'react'

let sampletext = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ducimus enim velit aliquid, similique tempora beatae incidunt ut expedita molestias at exercitationem quia iure delectus adipisci debitis eaque quod possimus."
export default function TextForm(props) {
    const [text, setText] = useState("")
    const [numWords, setNumWords] = useState(0)
    const [numChars, setNumChars] = useState(0)
    let handleUpClick = () => {
        //console.log("UpperCase was clicked")
        let updatedText = text.toUpperCase()
        setText(updatedText)
        props.showAlert("Converted to Upper Case","Success")
    }

    let handleLowClick = () => {
        //console.log("LowerCase was clicked")
        let updatedText = text.toLowerCase()
        setText(updatedText)
        props.showAlert("Converted to Lower Case","Success")
    }
    let handleOnChange = (event) => {
        //console.log(text)
        let txt = event.target.value
        // setText(txt)
        // let numberOfWords = txt.trim().split(/\s+/).length
        // let numberOfChars = txt.trim().length
        // setNumWords(numberOfWords)
        // setNumChars(numberOfChars)
        updateText(txt)
    }

    let updateText = (txt) => {
        setText(txt)
        let numberOfWords = 0
        let updatedTextArray = txt.trim().split(" ").filter(e => {return e===0 || e})
        if(!(updatedTextArray.length===1 && updatedTextArray[0]===""))
            numberOfWords = updatedTextArray.length
        let numberOfChars = txt.length
        setNumWords(numberOfWords)
        setNumChars(numberOfChars)
    }

    let handleClearField = () => {
        //console.log(text.split(/\s+/))
        setText("")
        setNumWords(0)
        setNumChars(0)
        props.showAlert("CLeared!","Success")
    }

    let handleCopy = () => {
        let copyText = text.select()
        copyText.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(copyText)
        props.showAlert("Copied to clipboard","Success")
    }

    let handleExtraSpaces = () => {
        let txt = text.split(/\s+/)
        updateText(txt.join(" ").trim())
        props.showAlert("Extra Spaces trimmed","Success")
    }

    let darkTextstyle = {
        color: props.mode==='dark'?'white':'black'
    }
    return (
        <>
        <div className="container-fluid" style={darkTextstyle}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control mx-3 my-1" style={{
                    backgroundColor: props.mode==='dark'?'#0b1826':'white',
                    color: props.mode==='dark'?'white':'black'
                }} id="inputBox" rows="8" placeholder={sampletext} value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className = "container-fluid">
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-dark mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            </div>
            <div className="mx-1 my-3 container-fluid">
            <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
            </div>
            <div className="mx-1 my-3 container-fluid">
            <button className="btn btn-danger" onClick={handleClearField}>Clear</button>
            </div>
        </div>
        <div className="container my-4" style={darkTextstyle}>
            <h2>
                Your text summary
            </h2>
            <p>{numWords} words and {numChars} characters</p>
            <p>Your average reading time will be {numWords * 0.008} minutes</p>

            <h2>Preview</h2>
            <p id="previewText">{text.length>0?text:"Enter Text to preview"}</p>
        </div>
        </>
    )
}
