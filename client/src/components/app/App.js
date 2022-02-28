import React from "react";
import Card from "../card/card"
import TrelloList from "../treloList/trelloList";
import './App.css';

function App() {
  return (
    <div>
      <TrelloList title="test"/>
      <Card/>
    </div>
  )
}


export default App;