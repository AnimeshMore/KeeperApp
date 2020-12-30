import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded , setExpanded] = useState(false);
  const [fullNote , setNote] = useState({
    title : "",
    content :""
  });

  function handleChange(event){
    const {name , value} = event.target;

    setNote(prevfullNote =>{
     return{ ...prevfullNote,
      [name] : value }
    } 
      )
  }

  function handleClicked(event){
    props.onAdd(fullNote);
    setNote({
        title : "",
        content :""}
    )
  event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input name="title" onChange={handleChange} placeholder="Title" value={fullNote.title} /> : null}
        <textarea name="content" onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 :1} value={fullNote.content} />
        <Zoom in={isExpanded}>
        <Fab onClick={handleClicked}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;