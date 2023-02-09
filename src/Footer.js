// src/Footer.js

import './Footer.css';

function Footer(props) {
  const {name, copyright_year} = props
  return (
    <div className='Footer'>
      <div>{props.name}</div>
      <div>{props.copyright_year}</div>
    </div>

  )
}

export default Footer