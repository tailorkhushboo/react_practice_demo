import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Hey, Khush');
    const handleupClick = () => {
        // console.log('Hey Sweetu..' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handlelowerClick = () => {
        // console.log('Hey Sweetu..' + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleonchange = (event) => {
        // console.log('Hey bebs..')
        setText(event.target.value)
    }
    // setText('Hey,Chirag');
  return (
    <div>
        <h3>{props.heading}</h3>
        
        <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowerClick}>Convert to lowercase</button>

        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}
