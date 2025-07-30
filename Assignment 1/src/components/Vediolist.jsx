import { Component } from "react";
import { VedioListData } from "../data/VedeoListData";

class Vediolist extends Component {
  render() {
    return (
      <VedioListData
        divClass="pt-30"
        ulClass="flex flex-col gap-2"
        LiClass=" border rounded  btn-primary px-15 py-3 btn btn-outline"
      />
    );
  }
}
export default Vediolist;
