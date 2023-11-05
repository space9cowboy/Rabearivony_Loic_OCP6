import React from 'react'
import "./DropdownMenu.scss"
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function DropdownMenu(props) {

    const options = ['one', 'two', 'three', 'four', 'five'];
    const title = "Description";

  return (
    <div>
        <Dropdown className="dick" options={props.options} 
         placeholder={props.title} />
    </div>
  )
}

export default DropdownMenu