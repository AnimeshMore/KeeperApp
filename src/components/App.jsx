import React, { useState } from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"; 
import Note from "./Note.jsx";
import CreateArea from "./createArea";





function App(){

const [notes , setNotes] = useState([]);


    function addNote(fullNote){
        setNotes(prevNotes =>{
            return(
                [...prevNotes , fullNote]
            )
        }
            )
    }
function deleteNote(id) {
    setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index ) => {
        return index!==id;
    });
});
}


    return(
     <div>
    <Header />
    <CreateArea onAdd={addNote} />
    {notes.map((noteItem , index) => {
        return (
          <Note
            id ={index}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete ={deleteNote}
         />)})}
    <Footer />
     </div>
    
    );
}

export default App;