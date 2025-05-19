import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

function TotoDetails({ setTodoDetails, setOpenDialog, todoDetails, openDialog }) {
  const handleClose = () => {
    setOpenDialog(false);
    setTodoDetails(null);
    console.log(openDialog,todoDetails,"iii");
    
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle>Todo Details</DialogTitle>
      <DialogContent>
        {todoDetails ? (
          <>
            <Typography>ID: {todoDetails.id}</Typography>
            <Typography>Todo: {todoDetails.todo}</Typography>
            <Typography>Completed: {todoDetails.completed ? 'Yes' : 'No'}</Typography>
            <Typography>User ID: {todoDetails.userId}</Typography>
          </>
        ) : (
          <Typography>No details available</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default TotoDetails;
