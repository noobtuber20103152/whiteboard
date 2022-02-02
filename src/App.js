import './App.css';
import React, { useState } from 'react'
import CanvasDraw from 'react-canvas-draw';
export default function App() {
  const [color, setcolor] = useState('black')
  // const [backColor, setbackColor] = useState('white')
  const [brushsize, setbrushsize] = useState(1)
  window.onclick = () => {
    setcolor(document.getElementById('color').value);
    console.log(document.getElementById('back'));
    console.log(document.getElementById("customRange1").value);
    setbrushsize(document.getElementById("customRange1").value / 7==0?1:document.getElementById("customRange1").value / 6)

  }
  let colorchoose = () => {
    setbrushsize(1);
  }
  let click = () => {
    document.getElementById('color').value = "#FFFFFF";
    setcolor(document.getElementById('color').value)
    setbrushsize(20);
  }
  let stl = { width: '100%', height: '550px', boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)", background: "white", borderRadius: "10px" }
  return (
    <>
      <div id='canvas' className='container-fluid mx-0 ' style={{ height: '100vh' }}>
        <div id='canvas' className="container-fluid">
          <CanvasDraw hideGrid={true} enablePanAndZoom={true} brushColor={color} gridColor='white' catenaryColor={color} lazyRadius={0} immediateLoading={false} style={stl} loadTimeOffset={1} brushRadius={brushsize} />
        </div>
        <div className="row my-3">
          <div id='edit' className="col-md-6 d-flex justify-content-center align-items-center">
            <input onClick={colorchoose} type="color" name="" id="color" />
            <button style={{ boxShadow: 'none' }} onClick={click} className="btn mx-2 btn-primary ">Eraser</button>
          </div>
          <div className="col-md-6 d-flex">
            <div className="w-25 mx-4">
              <input className='mx-2' type="range" class="form-range" id="customRange1"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
