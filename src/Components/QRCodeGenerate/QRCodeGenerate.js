import React, { useState } from "react";
import QRCode from "react-qr-code"

const QRCodeGenerate = () => {
    const [input,setInput] =useState("");
    const [qr, setQr]  = useState("");
    function clickHandler(){
        console.log(input)
        setQr(input)
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <input
          type="text"
          placeholder="Type Here"
          onChange={(event)=>setInput(event.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button disabled={input && input.length>0 ? false:true } onClick={clickHandler} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          Generate QR Code
        </button>
      </div>
      <div className="mt-7 "> {qr && qr.length>0 &&<QRCode id="qr-code-value" value={qr}/>}</div>
    </div>
  );
};

export default QRCodeGenerate;


