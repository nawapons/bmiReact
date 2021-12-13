import React, { useState } from "react";

export default function App() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [text,setText] = useState(0);
  const [pic,setPic] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height / 100) ** 2;
    if(bmi >= 25.00){
      setText("อ้วนมาก");
      setPic("very_fat");
    }else if(bmi >= 23.00){
      setText("อ้วน");
      setPic("fat");
    }else if(bmi >= 18.50){
      setText("ปกติ");
      setPic("normal");
    }else{
      setText("น้ำหนักน้อย");
      setPic("skinny");
    }
    setBmi(bmi.toFixed(2));
  };

  return (
    <div className="App">
      
        <div className="container w-50 mt-2">
       
       <div className="card shadow" align="center">
          <div className="card-header  text-white" style={{backgroundColor: "#ee9b00"}}>
          <h4 align="center"> คำนวณ ค่า BMI </h4>
          </div>
          <div className="card-body" style={{backgroundColor: "#e9d8a6"}}>
          <form onSubmit={calculate}>
        <div>
          <label>ส่วนสูง (cm) :</label>
          <input value={height} className="form-control"  onChange={(e) => setHeight(e.target.value)} required/>
        </div>

        <div>
          <label>น้ำหนัก (kg) : </label>
          <input value={mass}  className="form-control"  onChange={(e) => setMass(e.target.value)} required/>
        </div>

        <button type="submit" className="btn  btn-success mt-2">คำนวณ</button>
       
      </form>
      <p className="mt-2">ค่า BMI : {bmi}</p>
      <p className="mt-2">ผลลัพธ์ : {text}</p>
      <div>
          <img src={`img/${pic}.png`} alt="รูปภาพ" width="120px"/>
        </div>
      <p></p>
        </div>
          </div>
        
     
        </div>
        </div>
  );
}