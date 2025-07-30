import { Component } from "react";
import Counter from "./Counter";
class CounterWrapper extends Component {

  state = {
    counters: [],
  };

   
  //   addCounter = (index) => {
  // this.state.counters.push(0);
  // console.log(this.state.counters);
  //     this.setState({
  //     counters: [...this.state.counters , ], // [0, 2,0,0]
  //   })
  //   };

  //map  =====   singleCounter=(value,index)=>{
  //     return <Counter value={value} key={index} />
  //   }

  // singleCounter is a Callback Function

  deleteCounter = (id) => {
   
    const updatedCounters = this.state.counters.filter((counter, index) => {
      if ( id === index) {
        return false;
      } else {
        return true;
      }
    });
console.log("object");
    this.setState({ counters: updatedCounters });
    console.log(this.state.counters, updatedCounters );
  };






  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              counters: [...this.state.counters,0],
            });
          }}>
          add Counter
        </button>

        {this.state.counters.map((value, index ,) => {
          return (
            <div>
              <br />
              <Counter
                value={value}
                key={index}
                index={index} 
                deleteCounter={this.deleteCounter}
                counters={this.state.counters}
              />

              <br />
            </div>
          );
        })}
      </>
    );
  }
}
export default CounterWrapper;

/*
   <Counter/> 
   const counter = new Counter()
   counter.render()
   const counter =  {state, increment(),decrement(),render(),setState() }




   <Counter/> 
    const counter2 = new Counter()
    const counter2 =  {state, increment(),decrement(),render(),setState() }



class Array{
map(){
}
find(){
}
}







class Array {
    map(callback) {
        const counterArray = [];

        for (i = 1; i < arr.length i++; ) {
        
        }

        counterArray.push(this.callback(i , index)); //[<Counter />]
        counterArray.push(this.callback()); //[<Counter />, <Counter />]
        counterArray.push(this.callback());
        counterArray.push(this.callback());
        counterArray.push(this.callback()); //[<Counter />, <Counter />, <Counter />, <Counter />,<Counter />]

        return counterArray







 */
