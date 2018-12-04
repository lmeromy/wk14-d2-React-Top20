import React from 'react';

const Song = (props) => {

  return (
    <>
      <div>
        <li>
          {props.title} by {props.artist} <img src={props.image}/>
        </li>
      </div>
    </>
  )

}

export default Song;
