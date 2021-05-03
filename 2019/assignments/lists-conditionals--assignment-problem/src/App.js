import './App.css';
import React, { Component } from 'react';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    textChars: [],
    textLength: 0
  };

  lengthTextHandler = event => {
    const length = event.target.value.length;
    const chars = event.target.value.split('');
    
    this.setState({
      textChars: chars,
      textLength: length
    });
  }

  deleteCharHandler = index => {
    const chars = [...this.state.textChars];

    chars.splice(index, 1);

    const length = chars.join('').length;

    this.setState({
      textChars: chars,
      textLength: length
    });
  };
  
  render() {
    let chars = this.state.textChars.map((char, index) => {
      return (
        <CharComponent key={index} char={char}
          clickEvent={() => this.deleteCharHandler(index)}/>
      );
    });

    return (
      <div className="App">
        <input type='text' onChange={event => this.lengthTextHandler(event)}
          value={this.state.textChars.join('')}/>
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength}/>
        {chars}
      </div>
    );
  }
}

export default App;