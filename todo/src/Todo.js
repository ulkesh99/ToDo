
import React from 'react'
import { Button, ListItem, ListItemText } from '@material-ui/core'
import { db } from './firebase_config';
export default function TListItem({todo,is_in_progress,id}) {

    function toggleInProgress() {
        db.collection("todos").doc(id).update({
          is_in_progress : !is_in_progress,
        });
      }

    function todoDelete() {
        db.collection("todos").doc(id).delete()
    }

    return (
        <div style={{display:"flex"}}>
            <ListItem> 
                <ListItemText primary={todo} secondary={is_in_progress ? " In Progress" : "Completed"} />
            </ListItem>

            <Button onClick={toggleInProgress}>{is_in_progress ? "Done" : "UnDone"}</Button>
            <Button onClick={todoDelete}>x</Button>
        </div>
    )
}
