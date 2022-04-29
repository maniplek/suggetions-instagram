import React from 'react'
import "../button/button.css";
import { AiOutlineUserAdd } from "react-icons/ai";
const Button = ({text , onClick, isFollowing}) => {
  

  return (
    <div >
        <button className={`btn${isFollowing ? ' isFollowing' : '' }`} onClick={onClick}>{ !isFollowing &&<AiOutlineUserAdd size='16px' className='icon' />}{text}</button>
 
    </div>
  )
}

export default Button