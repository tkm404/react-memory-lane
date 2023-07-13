import React, { useState, useEffect } from "react";
import DreamDetail from "./DreamDetail";
import DreamList from "./DreamList";
import DreamSubmitForm from "./DreamSubmitForm";
import EditDreamForm from "./EditDreamForm";
import { db, auth } from './../firebase.js';
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import BlueDreamCatcher from "./../img/dream-catcher-blue.gif";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';





function DreamControl() {

  // state control--------------------------------
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedDream, setSelectedDream] = useState(null);
  const [mainDreamList, setMainDreamList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);


  const blueCatcher = {
    width: 'auto',
    height: 'auto',
    display: 'block',
    margin: 'auto'
  }

// -------------------------------handles------------------
  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "dreams"),
      (collectionSnapshot) => {
        const dreams = [];
        collectionSnapshot.forEach((doc) => {
          dreams.push({
            dreamUser: doc.data().dreamUser, //user info?
            genre: doc.data().genre,
            lucid: doc.data().lucid,
            intensity: doc.data().intensity,
            rem: doc.data().rem,
            perceivedLength: doc.data().perceivedLength,
            emotionalState: doc.data().emotionalState,
            condition: doc.data().condition,
            age: doc.data().age,
            id: doc.id
          });
        });
        setMainDreamList(dreams);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedDream !== null) {
      setFormVisibleOnPage(false);
      setSelectedDream(null);
      setEditing(false);
      setChecked(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleChangingSelectedDream = (id) => {
    const selection = mainDreamList.filter(dream => dream.id === id)[0];
    setSelectedDream(selection);
  }

  const handleDeletingDream = async (id) => {
    await deleteDoc(doc(db, "dreams", id));
    setSelectedDream(null);
  }

  const handleEditClick = () => {
    setEditing(true);
    setChecked(false);
  }

  const handleEditingDreamInList = async (dreamToEdit) => {
    const dreamRef = doc(db, "dreams", dreamToEdit.id);
    await updateDoc(dreamRef, dreamToEdit);
    setEditing(false);
    setSelectedDream(null);
    setChecked(false);
  }

  const handleAddingNewDreamToList = async (newDreamData) => {
    const collectionRef = collection(db, "dreams");
    await addDoc(collectionRef, newDreamData);
    setFormVisibleOnPage(false);
    setChecked(false);
  }

  const handleCheckboxIsChecked = () => {
    setChecked(!checked);
  }

// ----------------View Control-----------vvvv----------------

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the Dream State.</h1>
        <div style={blueCatcher}> 
        <img src={BlueDreamCatcher} alt="a blue dreamcatcher"/>
        </div>
      </React.Fragment>
    )
  
  } else if (auth.currentUser != null) {
    
    const displayName = auth.currentUser.displayName;

    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error accessing your Dream State: {error}</p>
    } else if (editing) {
      currentlyVisibleState =
        <EditDreamForm
          dream={selectedDream}
          onEditDream={handleEditingDreamInList}
          boxNotChecked={checked}
          onCheckboxChecked={handleCheckboxIsChecked}
        />
      buttonText = "Return to the Dreamscape";

    } else if (selectedDream != null) {
      currentlyVisibleState =
        <DreamDetail
          dream={selectedDream}
          onClickingDelete={handleDeletingDream}
          onClickingEdit={handleEditClick}
        />
      buttonText = "Return to the Dreamscape";

    } else if (formVisibleOnPage) {
      currentlyVisibleState =
        <DreamSubmitForm
          dreamUser = {displayName}
          onDreamSubmission={handleAddingNewDreamToList}
          boxNotChecked={checked}
          onCheckboxChecked={handleCheckboxIsChecked}
        />
      buttonText = "Return to the Dreamscape";

    } else {
      currentlyVisibleState =
      
        <DreamList
          onDreamSelection={handleChangingSelectedDream}
          dreamList={mainDreamList}
        />;
      buttonText = "Log A Dream";
    }

    return (
      <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Button variant="secondary" onClick={handleClick}>{buttonText}</Button> 
      </Stack>       
        {currentlyVisibleState}

      </React.Fragment>
    )
  }
}

export default DreamControl;