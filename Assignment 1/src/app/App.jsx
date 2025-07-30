import { Component } from "react";
import Navber from "../components/Navber";
import Vedio from "../components/Vedio";
import Vediolist from "../components/Vediolist";

export class App extends Component {


    render  (){
        return(
            <div>
                <Navber></Navber>
              <div className="flex w-10/12 mt-20 mx-auto justify-between items-center">
                  <Vedio />
                <Vediolist />
              </div>
            </div>
        )
    }

}