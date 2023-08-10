import React, {useState} from 'react'

export default function TextForm(props) {
    const [ text, setText] = useState('Hey, Khush');
    const handleupClick = () => {
        // console.log('Hey Sweetu..' + text)
        let newText = text.toString().toUpperCase();
        setText(newText)
    }

    const handlelowerClick = () => {
        // console.log('Hey Sweetu..' + text)
        let newText = text.toString().toLowerCase();
        setText(newText)
    }

    const handleclearClick = () => {
        // console.log('Hey Sweetu..' + text)
        let newText = "";
        setText(newText)
    }

    const handleonchange = (event) => {
        // console.log('Hey bebs..')
        setText(event.target.value)
    }
    // const [previousText, setPreviousText] = useState('');

    const handleundoClick = (steps = 1) => {
        console.log(Number(text));
        // setPreviousText(text); // Store the current text as the previous text
        setText(Math.max(0, Number(text) - (Number(steps) || 1)));
      };
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
        <button className="btn btn-primary mx-2" onClick={handleclearClick}> Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleundoClick}> Undo text</button>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.toString().split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.toString().split(" ").length} Minutes read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}
