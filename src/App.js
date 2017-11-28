import React, { Component } from 'react';
import _ from 'lodash';



class App extends Component {
  constructor(props){
    super(props);
    
          
    
    this.state =
               {
                 rows: 
         [{name:'vandita',age:26,company:'globaalign'},
         {name:'abc',age:27,company:'IBM'},
         {name:'def',age:28,company:'CTS'}],
                filteredDataList:[],
                flag:true
               };
    this.onFilterChange= this.onFilterChange.bind(this);
    }

    onFilterChange(value) {
   const tofilteredarray = this.state.rows;
   const filteredList = _.filter(tofilteredarray,function(o){return o.name.startsWith(value) == true;}) 
   console.log(filteredList);
  this.setState({
    filteredDataList: filteredList,
    flag :false
  });
}

    // this.renderFruits= this.renderFruits.bind(this);
   
  
  // renderFruits(){
  //      return fruits.map((index,fruit)=>fruit[index])
  // }
  render() {
   
 return(
    <div>
    <input type="search" onChange={(e)=>this.onFilterChange(e.target.value)}/>
    <table>
    <thead>
    <tr>
    <td>
    name</td>
    <td>age</td>
    <td>company</td>
    </tr>
    </thead>
    <tbody>
    {this.state.rows && this.state.flag ? this.state.rows.map((i)=>(<tr>
      <td>{i.name}</td>
      <td>{i.age}</td>
      <td>{i.company}</td>
      </tr>))
      : this.state.filteredDataList.map((i)=>(<tr>
      <td>{i.name}</td>
      <td>{i.age}</td>
      <td>{i.company}</td>
      </tr>))
    }
    </tbody>
   </table>
    </div>

  );
}
}

export default App;
