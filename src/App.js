import React, { useState } from 'react';

//import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

//import 'quill/dist/quill.snow.css'; // Add css for snow theme
import Editor from './editor';
// import 'quill/dist/quill.bubble.css'; // Add css for bubble them
function App(){
  //const { quill, quillRef } = useQuill();

 // console.log(quill);    // undefined > Quill Object
 // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

 const [val,setVal] = useState(false);

 function toggle(){
  setVal(true);
  console.log(val);
 }

  return (
    <div className='container'>
      <div>
      <h1> Hi there this is a basic text editor made with ReactQuill </h1>
      <button className='btn btn-light' onClick={toggle}> <h1> + </h1></button>
           {val ? <div><Editor/></div> : null} 
      </div>

      <h4>you can see the submitted output in console</h4>
    </div>
  );
};

export default App;


