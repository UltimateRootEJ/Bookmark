
import React,{useState} from "react";
import '../css/addBookmark.css'
import '../css/displayBookmark.css'

export default function AddBookmark()
{
    const [newBookmark,setBookmarknew]=useState('');
    const [updateBookmark,setUpdateBookmark]=useState('');
    const addBookmark=()=>{
        
    }
    const deleteBookmark=()=>{}
    const cancelUpdate=()=>{}
    const changeBookmark=()=>{}
    const updateTheBookmark=()=>{}
return(


    <div className="addDiv" >
        <div className="bookmarkHeading"><h1>Add Bookmark</h1></div>
        <input placeholder="Brand name"/><br></br>
        <input placeholder="Model"/><br></br>
        <input placeholder="Image"/><br></br>
        
        <button id="buttonAdd" >Add</button>

    </div>

    
 
)

}
