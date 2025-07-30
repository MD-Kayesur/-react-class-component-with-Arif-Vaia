import { Component } from "react";
import { data } from "react-router-dom";
class Counter extends Component {
  constructor(props) {
    super(props);

    console.log(typeof this.props.counters);
    console.log(Object.entries (this.props.counters));
   const data = Object.entries (this.props.counters)
   console.log(data);
     data.forEach(element => {
        console.log(element);
       });
    // const data = this.props.value + 1
  }




  handleIncrement = ( ) => {
    // console.log("object");
    //  const value= this.props.counters[0] + 1
    //  console.log(value);
    this.setState({
    //   // value: this.data,
      value: this.props.counters + 1,
        
      
     
    });
  };
  handleDecrement = () => {
    this.setState({

      
      value: this.props.value - 1,
      // value: this.props.value - 1,
    });
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400",
            margin: "auto",
          }}>
          <button onClick={this.handleIncrement}>increment</button>
          <h2>{this.props.value}</h2>
          <button onClick={this.handleDecrement}>decrement</button>
          <button
            onClick={() => {
              this.props.deleteCounter(this.props.index);
            }}>
            Delete Counter
          </button>
        </div>
      </>
    );
  }
}
export default Counter;
