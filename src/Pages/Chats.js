import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chats = () => {
  const [chats, setChats] = useState([])
  const fetchChats = async()=>{
    debugger
    const {data} = await axios.get("/api/chats")
    console.log(data)
    setChats(data)
  }
  useEffect(()=>{
    fetchChats()
  },[])
  return (
    <div>
      {
        chats.map((chat)=>(
          <h1 key={chat._id}>{chat.chatName}</h1>
        ))
      }
    </div>
  )
}

export default Chats