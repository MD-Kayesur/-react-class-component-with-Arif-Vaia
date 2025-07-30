import { Component } from "react";

 export class VedioListData extends Component {
  render() {
    const data = [
       
      {
        title: "game",
      },
      {
        title: "criket",
      },
      {
        title: "football",
      },
      {
        title: "volliball",
      },
    ];
    return (
      <div className={this.props.divClass} >
        <ul className={this.props.ulClass}>
           {data.map((singleData, index) => {
            return <li key={index} className={this.props.LiClass}>{singleData.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
