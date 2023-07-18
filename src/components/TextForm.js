import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Hey, Khush');
    const handleupClick = () => {
        console.log('Hey Sweetu..' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleonchange = (event) => {
        console.log('Hey bebs..')
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
        <button className="btn btn-primary" onClick={handleupClick}>Convert to uppercase</button>
    </div>
  )
}
