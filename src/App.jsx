import { useState } from 'react'
import './App.css'
import { Client } from 'appwrite';

const client = new Client();
client.setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);
function App() {
  

  return (
   <>
   <div className="">Hello world</div>
   </>
  )
}

export default App
