import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

export default function TotoItem({ todo,fetchTodoDetails }) {

  return (
    <div>
      <Card
        sx={{
          minWidth: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
         
        }}
      >
        <CardContent>
          <Typography variant="h5" color={"text.secondary"}>
            {todo?.todo}
          </Typography>
        </CardContent>
      <CardActions>
        <Button
        onClick={()=>fetchTodoDetails(todo?.id)}
        sx={{
          
            background:'#000000',
            color:'#fff',
            opacity:'0.75',
            '&:hover':{
                background:'#000000',
                color:'#fff',
                opacity:'1'
            },
        }}> Detail</Button>
      </CardActions>
      </Card>
    </div>
  );
}


