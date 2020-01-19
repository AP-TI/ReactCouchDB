import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './Form';
import { Productenlijst } from './Productenlijst';

class App extends Component {
  state = {
    producten: []
  }

   getData = () => {
     this.setState({producten: []})
    fetch('http://localhost:5984/producten/_all_docs')
      .then(response => response.json())
      .then(json => {
        for (let prop in json.rows) {
          fetch(`http://localhost:5984/producten/${json.rows[prop].key}`)
            .then(response => response.json())
            .then(json => {
              let temp = this.state.producten;
              temp.push(json);
              this.setState({producten: temp});
              console.log(this.state.producten)
            })
        }
      });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Form updateData={this.getData} />
          <Productenlijst producten={this.state.producten} updateData={this.getData}/>
        </header>
      </div>
    );
  }
}

export default App;
