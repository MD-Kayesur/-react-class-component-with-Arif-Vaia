import { Component } from "react";
import Navber from "./Navber";
import Vedio from "./Vedio";
import Vediolist from "./Vediolist";

export class App extends Component {


    render  (){
        return(
            <div>
                <Navber></Navber>
              <div className="flex w-10/12 mx-auto items-center">
                  <Vedio />
                <Vediolist />
              </div>
            </div>
        )
    }

}