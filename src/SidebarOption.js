import React from 'react'
import "./sidebarOption.css"

const SidebarOption = ({title,Icon}) => {
    // const {title}=props
  return (
<div className='sidebarOption'>
    {Icon && <Icon className="sidebarOption__icon"/>}
    {Icon ? <h4>{title}</h4>:<p>{title}</p>}
</div>      
      

)
}

export default SidebarOption