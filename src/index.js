import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

//Import Font Awesome Stuff
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faEnvelope,
  faRing,
  faBriefcase,
  faMoneyBill,
  faGlobe,
  faBirthdayCake,
  faVenusMars,
  faCalendarAlt,
  faBaby,
  faMapMarkerAlt,
  faUser,
  faCamera,
  faBook,
  faFilter
} from "@fortawesome/free-solid-svg-icons";

// Imported Components
import Information from "./components/userInformation";
import ProfilePicture from "./components/profilePicture";
import Module from "./components/module";
import Modules from "./components/modules";
import FilterModules from "./components/filterModule"

library.add(
  faGraduationCap,
  faEnvelope,
  faRing,
  faBriefcase,
  faMoneyBill,
  faGlobe,
  faBirthdayCake,
  faVenusMars,
  faCalendarAlt,
  faBaby,
  faMapMarkerAlt,
  faUser,
  faCamera,
  faBook,
  faFilter
);
ReactDOM.render(<Modules />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
