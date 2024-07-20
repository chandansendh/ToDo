// import React, { useState } from 'react'
// import List from './List';
// import logo from "../img/todo.jpg"
// import { IoMdAdd } from 'react-icons/io';

// const ToDo = () => {
//     const [inputList, setInputList] = useState("");
//     const [Items, setItems] = useState([]);

//     const listOfItem = (items) => {
//       setInputList(items.target.value);
//     };

//     const addList = () => {
//         if(inputList){
//       setItems((oldList) => {
//         return [inputList, ...oldList];
//       });
//       setInputList("");
//     }else{
//         alert("Please Add A Task");
//     }
//     };
//     const deleteitem = (id) => {
//       setItems((old) => {
//         return old.filter((val, index) => {
//           return id !== index;
//         });
//       });
//     };
//   return (
//     <>
//       <div className="main-div">
//         <div className="head">
//           <img src={`${logo}`} alt="logo" />
//           <h1>ToDo</h1>
//         </div>
//         <div className="input-fild">
//           <input
//             type="text"
//             placeholder="Add A Task"
//             onChange={listOfItem}
//             value={inputList}
//           />
//           <div class="main-section" onClick={addList}>
//             <button class="first-button">
//               <IoMdAdd />
//             </button>
//             <button class="second-button">Add</button>
//           </div>
//         </div>
//         <div className="task-list">
//           <ol>
//             {Items.map((itemVal, ind) => {
//               return (
//                 <List id={ind} key={ind} text={itemVal} onSelect={deleteitem} />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ToDo


// ToDo.jsx

// ToDo.jsx

import React, { useState, useEffect } from 'react';
import List from './List';
import logo from '../img/todo.jpg';
import { IoMdAdd } from 'react-icons/io';

const ToDo = () => {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);

  // Load items from local storage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('todoItems'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // Update local storage whenever Items state changes
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(Items));
  }, [Items]);

  const listOfItem = (items) => {
    setInputList(items.target.value);
  };

  const addList = () => {
    if (inputList.trim()) {
      setItems((oldList) => {
        return [inputList, ...oldList];
      });
      setInputList('');
    } else {
      alert('Please Add A Task');
    }
  };

  const deleteitem = (id) => {
    setItems((old) => {
      return old.filter((val, index) => {
        return id !== index;
      });
    });
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('todoItems');
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="head">
          <img src={`${logo}`} alt="logo" />
          <h1>ToDo</h1>
        </div>
        <div className="input-fild">
          <input
            type="text"
            placeholder="Add A Task"
            onChange={listOfItem}
            value={inputList}
          />
          <div className="main-section" onClick={addList}>
            <button className="first-button">
              <IoMdAdd />
            </button>
            <button className="second-button">Add</button>
          </div>
        </div>
        <div className="task-list">
          <ol>
            {Items.map((itemVal, ind) => {
              return (
                <List
                  id={ind}
                  key={ind}
                  text={itemVal}
                  onSelect={deleteitem}
                />
              );
            })}
          </ol>
          {Items.length > 0 && (
            <button onClick={clearLocalStorage} className='clear'>Clear All Tasks</button>
          )}
        </div>
      </div>
    </>
  );
};

export default ToDo;
