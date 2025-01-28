import React, { useState } from "react";
import data from "./Data";
import "./styles.css";

//single selection
//multiple selection

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, SetenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiselection(getCurrentId) {
    let cpyMultiple = [...multiple];
    let indexOfItem = cpyMultiple.indexOf(getCurrentId);
    if (indexOfItem === -1) {
      cpyMultiple.push(getCurrentId);
      setMultiple(cpyMultiple);
    } else {
      cpyMultiple.splice(indexOfItem, 1);
      setMultiple(cpyMultiple);
    }
    
    console.log(multiple);
    console.log(getCurrentId)
  }
  return (
    <div className="wrapper">
      <button onClick={() => SetenableMultiSelection(!enableMultiSelection)}>
        Enable Multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiselection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id) !==-1? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
