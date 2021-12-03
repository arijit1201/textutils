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
    }

    let handleLowClick = () => {
        //console.log("LowerCase was clicked")
        let updatedText = text.toLowerCase()
        setText(updatedText)
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
    }

    let handleCopy = () => {
        navigator.clipboard.writeText(text)
    }

    let handleExtraSpaces = () => {
        let txt = text.split(/\s+/)
        updateText(txt.join(" ").trim())
    }
    return (
        <>
        <div className="container">
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control mx-3 my-1" id="inputBox" rows="8" placeholder={sampletext} value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className = "container-fluid">
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-dark mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            </div>
            <div className="mx-1 my-3 container-fluid">
            <button className="btn btn-outline-primary my-3" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
            </div>
            <div className="mx-1 my-3 container-fluid">
            <button className="btn btn-outline-danger" onClick={handleClearField}>Clear</button>
            </div>
        </div>
        <div className="container my-4">
            <h2>
                Your text summary
            </h2>
            <p>{numWords} words and {numChars} characters</p>
            <p>Your average reading time will be {numWords * 0.008} minutes</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
