import React from 'react'

function NavButton({ btnname, link }) {
  return (
    <div>
        <button><a href={link}>{btnname}</a></button>
    </div>
  )
}

export default NavButton;