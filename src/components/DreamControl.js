import React, { useState } from "react";
import DreamDetail from "./DreamDetail";
import DreamList from "./DreamList";


function DreamControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedDream, setSelectedDream] = useState(null);
  const [mainDreamList, setMainDreamList] = useState([])

  const handleClick = () => {
    if (setFormVisibleOnPage !== false) {
      setFormVisibleOnPage(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleChangingSelectedDream = (id) => {
    const selection = mainDreamList.filter(dream => dream.id === id)[0];
    setSelectedDream(selection)
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (selectedDream != null) {
    currentlyVisibleState = 
    <DreamDetail
    dream={selectedDream}
    // more stuff goes here
    />
    buttonText= "Return to the Dreamscape";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = 
    <React.Fragment>
      <h3>If you are reading this, your dreams are too loud.</h3>
    </React.Fragment>
    buttonText = "Dare you to Press";
  } else {
    currentlyVisibleState=
    <DreamList
      onDreamSelection={handleChangingSelectedDream}
      dreamList={mainDreamList}

    />;
    buttonText = "Press if you Dare";
  }
  
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  )
}









export default DreamControl;