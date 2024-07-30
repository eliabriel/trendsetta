import React from 'react'

function NavButton({ btnname, link }) {
  return (
    <div>
        <button className='italic'><a href={link}>{btnname}</a></button>
    </div>
  )
}

export default NavButton;