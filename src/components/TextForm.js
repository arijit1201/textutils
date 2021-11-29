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
        setText(txt)
        let numberOfWords = txt.trim().split(/\s+/).length
        let numberOfChars = txt.trim().length
        setNumWords(numberOfWords)
        setNumChars(numberOfChars)
    }

    let handleClearField = () => {
        //console.log(text.split(/\s+/))
        setText("")
        setNumWords(0)
        setNumChars(0)
    }
    return (
        <>
        <div className="container">
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="inputBox" rows="8" placeholder={sampletext} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-dark mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
            <div className="my-3">
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
