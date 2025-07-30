import { Component } from "react";
import { Allicons } from "../icons/AllIcons";

export class DropDown extends Component{
    render(){
        return(
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
  <Allicons icon="contact" className="text-5xl -ml-1 -mt-1 fill-error text-gray-400" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
 
 
        )
    }
}