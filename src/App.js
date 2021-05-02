import React, { useState } from "react";
import "./index.css";

function App() {
  const [inputlist, setinputlist] = useState();
  const [items, setitems] = useState([]);
  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };
  const listofitem = () => {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist("");
  };
  const deleteitem = (index) => {
    setitems((olditems) => {
      return olditems.filter((arrElement, index1) => {
        return index !== index1;
      })
    })
  }


  return (<>
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add an Item" onChange={itemEvent} value={inputlist}></input>
        <button onClick={listofitem}>+</button>
        <ol>

          {items.map((itemval, index) => {
            return (<><div className="todo_style">
            <ul><i className="fas fa-times-circle" onClick={() => {
                deleteitem(index)
              }}>
              </i>{itemval}</ul></div></>)
          })}

        </ol>


      </div>

    </div>
  </>
  );
}

export default App;
