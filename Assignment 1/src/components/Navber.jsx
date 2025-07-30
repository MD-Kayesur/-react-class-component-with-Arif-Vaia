// Navber.jsx
import React, { Component } from "react";
import { Allicons } from "../icons/AllIcons";
import { Search } from "../search/Search";
import { DropDown } from "./DropDown";

class Navber extends Component {
  render() {
    return (
      <div className="flex justify-between items-center py-5 px-10">
        <div>
          <Allicons icon="youtube" className="text-5xl text-red-600" />
        </div>
        <Search />
        <div>
         
          <DropDown />
        </div>
      </div>
    );
  }
}

export default Navber;
