import React from "react";
import TrelloCards from "../trelloCards/trelloCards"
import "./trelloList.scss"

const TrelloList = ({title}) =>{
  return (
    <div className="trelloList">
      <h4>{title}</h4>
      <TrelloCards/>
    </div>
  )
}

export default TrelloList