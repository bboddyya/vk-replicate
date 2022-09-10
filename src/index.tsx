import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesComponent from "./routes/Routes";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// firebase.initializeApp({
//   apiKey: "AIzaSyB5h6mds9Yaj_QeHhmhtuJbXlMpTkbP6gQ",
//   authDomain: "vk-replication.firebaseapp.com",
//   projectId: "vk-replication",
//   storageBucket: "vk-replication.appspot.com",
//   messagingSenderId: "376516683433",
//   appId: "1:376516683433:web:733c99f3c8346a56f52bb8",
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);
