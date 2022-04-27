import React,{useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{;
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='conatainer'>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'#212529':'white',color:props.mode==='light'?'#212529':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Conver to Lowercase</button>
        </div>
        <div className="container">
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes reading time</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
        
    )
}
