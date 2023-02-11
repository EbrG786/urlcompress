import Axios from 'axios';
import { useState } from 'react';
import { BrandExample } from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


function App() {
  const[text,setText] = useState('')
  const[url,setUrl] = useState('')

  const fetchUrl = () =>{
    Axios.get(`https://api.shrtco.de/v2/shorten?url=${text}`).then((res)=>{setUrl(res.data.result.short_link)})
  }
  const handleUserInput = (event) =>{
    setText(event.target.value)
  }
  const resetInputField = () => {
    setText("");
    setUrl('');
  };

  return (
    <div className='App'>
    <BrandExample/>
    <input type="text" style={{margin: 'auto',display: 'block',width:'50%',height:'30%',padding:'20px',marginBottom:'20px',borderRadius: '15px'}} placeholder="Enter a url eg.https://www.youtube.com/" value={text} onChange={handleUserInput}/>
    <Stack gap={3} className="col-md-5 mx-auto mb-4">
    <Button md={{ span: 6, offset: 3 }} variant="outline-dark" size="lg" onClick={fetchUrl}>Generate Your shorted link:</Button>
    <Button variant="outline-dark" size="lg" onClick={resetInputField}>Reset</Button>
    </Stack>
    <h1 className="text-center">Your url is: {url}</h1>
    </div>
  );
}

export default App;
