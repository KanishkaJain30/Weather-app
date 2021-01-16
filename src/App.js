import React, { Component, isValidElement }from 'react';
import './App.css';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      posts:[]
    };
  }
  componentWillMount=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').
    then(res=>res.json()).
    then(posts=>this.setState({posts:posts})
        );
  }
  render(){
  return (
    <div>
      {
        this.state.posts.map((val,index)=>{
          return(
            <ul>
              
              <li key={val.id}>{val.id}
              <br></br>
              {val.body}
              </li>
            </ul>
          )
        })
  }
    </div>
  );
}
}

export default App;
