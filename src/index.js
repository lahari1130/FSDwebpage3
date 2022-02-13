import React from "react";
import ReactDOM from 'react-dom';
import Table from "./table.js";


const App =()=> {

  return(
      <>
    <Table name="lena"/>
   
    </>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)