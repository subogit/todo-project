import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
// import { RouterProvider } from "react-dom/client";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import Protect from "./protect";
import "./About.css";
import AccountInfo from "./AccountInfo";
import LoginProtect from "./loginProtect";
import "./App.css";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  remove,
} from "firebase/database";
import { useEffect, useState } from "react";
// import Modal from './modal /Modalone';

import Modal from "./modal123";
// import { getDatabase } from "firebase/database";
// import { getDatabase, ref, child, get } from "firebase/database";

import { app1 } from "./firebase";
// import React from "react";

function App() {
  const [data, setData] = useState("");
  const [statusVal, setStatusVal] = useState("");
  const [titleVal, setTitleVal] = useState("");
  const [userDb, setUserDb] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [snap, setSnap] = useState(['falj','flas']);
  const [filterValue, setFilterValue] = useState([]);
  const [deleteItem, setDeleteItem] = useState("");
  const db = getDatabase(app1);
  // const stringUserDb = String(userDb);
  // console.log("----------", stringUserDb);

  const newElement = {
    status: statusVal,
    title: titleVal,
  };
  const addTask = () => {
    let snapData = [...snap, newElement];
    if (snap.length) {
      console.log("      @              ",snapData)
      // const result = set(ref(db), JSON.parse(JSON.stringify(snapData)));
      // console.log("((((((((((", result);
    }
    // snap.length > 0 && set(ref(db), snapData);
    setOpen(false);
  };

  useEffect(() => {
    getData();
    console.log("getData");
  }, []);

  // useEffect(() => {
  //   snap.length > 0 && set(ref(db), snap);
  // }, [snap]);
  // // Did update lifecycle

  const getData = () => {
    console.log("cccccc@@@");
    const dbRef = ref(db);
    onValue(dbRef, (snapshot) => {
      const snapVal = Object.values(snapshot.val());
      console.log("@@@@@@@@@@@@@@", snapshot.key);
      console.log("snap----->", snapVal);
      // snapVal.forEach((item) => {
      //   console.log("itemmmmmmm", item.title);
      // });
      setSnap(snapVal);
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    console.log("handle");
    setOpen(true);
  };

  // const handleDeleteData = () => {
  //   // const dataRef = database.ref(`/yourDataCollection/${dataKeyToDelete}`);

  //   // dataRef
  //   //   .remove()
  //   //   .then(() => {
  //   //     console.log("Data deleted successfully");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error deleting data:", error);
  //   //   });
  // };

  const handleDeleteData = (item) => {
    // console.log("------i---", item.title);
    // let chatRef = db.ref(item);
    //   chatRef.child("5ZuZvUyByDcbteclgpM0t08beVn1").remove();
    // console.log(deleteItem);
    // console.log(item)
    // set(ref(db, item), {
    //   title: null,
    //   status: null,
    // });
    // console.log(item.title);
  };
  const handleUpdateData = () => {
    setOpen(true);
    console.log("handleUpdate");
  };

  return (
    <div>
      <div className="todoDiv">
        <h1> TODO APP </h1>
        <header>
          <button className="modalButton" type="button" onClick={handleOpen}>
            Add Task
          </button>
          <select
            onChange={(e) => setStatusVal(e.target.value)}
            name="statusOption"
            id="filterOption"
          >
            <option value="All">All</option>
            <option value="incomplete">incomplete</option>
            <option value="complete">complete</option>
          </select>
        </header>
        {snap?.map((item) => {
          return (
            <div className="itemDiv">
              {String(statusVal).toLowerCase() === "complete" &&
                String(item.status).toLowerCase() === "complete" && (
                  <>
                    {item.title}
                    {item.status}
                    <button onClick={()=>handleDeleteData(item)}>
                      &#10006;           
                    </button>
                    <button onClick={() => handleUpdateData()}>
                      &#128221;
                    </button>
                  </>
                )}

              {String(statusVal).toLowerCase() === "incomplete" &&
                String(item.status).toLowerCase() === "incomplete" && (
                  <>
                    {item.title}
                    {item.status}

                    <button onClick={()=>handleDeleteData(item)}>&#10006;</button>
                    <button onClick={() => handleUpdateData()}>
                      &#128221;
                    </button>
                  </>
                )}

              {String(statusVal).toLowerCase() === "all" && (
                <>
                  <p>
                    {item.title}
                    <button onClick={()=>handleDeleteData(item)}>&#10006;</button>
                    <button onClick={() => handleUpdateData()}>
                      &#128221;
                    </button>
                  </p>
                  {/* Add any additional content or buttons for the "all" status here */}
                </>
              )}
            </div>
          );
        })}
      </div>

      <Modal isOpen={open}>
        <>
          <h2>add Task</h2>
          <input
            placeholder="Title"
            onChange={(e) => setTitleVal(e.target.value)}
          ></input>
          <select
            onChange={(e) => setStatusVal(e.target.value)}
            name="statusOption"
            id="statusOption"
          >
            <option value="incomplete">incomplete</option>
            <option value="complete">complete</option>
          </select>
          <footer>
            <button onClick={addTask}>addTask</button>
            <button onClick={handleClose}>cancel</button>
          </footer>
        </>
      </Modal>
    </div>
  );
}

export default App;
