import React from "react";
import Card from "../card/card"
import Typography from '@mui/material/Typography';


function App() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
    </Card>
  )
}


export default App;