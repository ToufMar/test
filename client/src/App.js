import React, { Component } from 'react';
import  Header  from './components/Header';
import Body  from './components/body.jsx';

class App extends Component {
  state = {
    response: ''
  };
  
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express.lol }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/index');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <p className="App-intro">{this.state.response}</p> */}
        <Body {...this.state}/>
        
      </div>
    );
  }
}

export default App;
