import React, {useState} from 'react'

function Likes() {
    const[like,setLike]=useState(0);
const HandleLike=()=>{
    setLike(like+1);
}
const HandleDisLike=()=>{
    setLike(like-1);
}
const  HandleReset=()=>{
setLike(0);
}
  return (
    <div>
        <h4>Likes</h4>   
           <b> {like}K</b>
      <div className=''>
        <button onClick={HandleLike}>Like👍</button>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <button onClick={HandleDisLike}>DisLike👎</button>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <button onClick={HandleReset}>Reset⛔</button>
      </div>

    </div>
  )
}

export default Likes
