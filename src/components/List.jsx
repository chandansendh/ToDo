import React from 'react'
import { MdDelete } from 'react-icons/md';

const List = (props) => {
  return (
    <>
      <div className="list">
        <button
          className="delete-btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <MdDelete />
        </button>
        <li>{props.text}</li>
      </div>
      <hr />
    </>
  );
}

export default List;