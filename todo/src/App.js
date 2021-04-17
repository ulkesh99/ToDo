import './App.css';

import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';
import{ Button } from '@material-ui/core';
import { db } from "./firebase_config";
import firebase from "firebase";
import TListItem from './Todo';

function App() {

  const [todos, setTodos] = useState([]);
  const [todoInput, settodoInput] = useState("");

  useEffect(() => {
      getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
     setTodos(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo : doc.data().todo,
        is_in_progress : doc.data().is_in_progress

      }))
     );
    });
  }

  function addToDo(e) {
    e.preventDefault()
    
    db.collection("todos").add({
      is_in_progress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    settodoInput("");
  }

  return (
    
    <div 
      className="App" 
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E7F2F8",
        height: "100vh",
        width: "100%"
        }}>
    

      
      <h1 style={{alignItems:"center", justifyContent:"center"}}>TODO LIST ✔️</h1>
       <form>
       <TextField id="standard-basic" label="Write a Todo" style={{width : "40vw", maxwidth: "40px"}}
        value = {todoInput}
        onChange = {(e) => {
          settodoInput(e.target.value);
        }}
        />
        <Button type="submit" variant="contained" color="primary" onClick={addToDo} style={{display:"none"}}> Primary</Button>
 
       </form>
      
      <div style={{width : "40vw", maxwidth: "40px", marginTop: "25px"}}>
       {todos.map((todo) => (
         <TListItem todo={todo.todo} is_in_progress={todo.is_in_progress} id={todo.id} />
       ))}
      </div>
    </div>    
  );
}

export default App;
