import Home from "./home";
import { routerType } from "../types/router.types";
import React from "react";
import Focus from "./focus";
import FocusBasic from "./focus-basic";
import Gallery from "./gallery";
import Groceries from "./groceries";
import Message from "./message";
import Points from "./points";
import Username from "./username";

const pagesData: routerType[] = [
    {
      path: "",
      element: <Home/>,
      title: "home"
    },
    {
      path: "username",
      element: <Username />,
      title: "username"    
    },
    {
      path: "points",
      element: <Points />,
      title: "points"    
    },
    {
      path: "focus",
      element: <Focus />,
      title: "focus"    
    },
    {
      path: "focus-basic",
      element: <FocusBasic />,
      title: "focus-basic"    
    },
    {
      path: "groceries",
      element: <Groceries />,
      title: "groceries"
    },
    {
      path: "gallery",
      element: <Gallery />,
      title: "Gallery"
    },
    {
      path: "message",
      element: <Message />,
      title: "Message"
    }
  ];
  
  export default pagesData;