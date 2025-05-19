
import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TotoItem from "./components/todo-item";
import TotoDetails from "./components/todo-details";
import Hello from "./components/hello";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchTodoData() {
    try {
      setLoading(true);
      const reponse = await fetch("https://dummyjson.com/todos");
      const result = await reponse.json();

      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg("");
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("some error occured");
    }
  }

  async function fetchTodoDetails(getId) {
    try {
      const res = await fetch(`https://dummyjson.com/todos/${getId}`);
      const result = await res.json();
      if (result) {
        setTodoDetails(result);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodoData();
  }, []);

  if (loading) {
    return <Skeleton variant="rectangular" width={560} height={560}/>
  }

  return (
    <>
      <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>
          Simple To Do App Using Material UI
        </h1>
        <div className={classes.todoListWrapper}>
          {todoList && todoList?.length > 0
            ? todoList.map((todoitem) => (
                <TotoItem todo={todoitem} fetchTodoDetails={fetchTodoDetails} />
              ))
            : null}
        </div>
        <TotoDetails setTodoDetails={setTodoDetails} setOpenDialog={setOpenDialog} todoDetails={todoDetails} openDialog={openDialog}/>
       
      </div>
    </>
  );
}

export default App;
