// import React from 'react';

// export default class BlogCompo extends React.Component{
//     constructor(promps){
//         super(promps)
//         this.state = {
//             count : 0
//         }
//     }
//      increase = ()=>{
//         this.setState({
//             count : this.state.count + 1
//         })
//     }
//     decrease = ()=>{
//         this.setState({
//             count : this.state.count - 1
//         })
//     }
//  render(){

//     return <div>
//         <h1>
//             this is my first heading {this.state.count}
//         </h1>
//         {/* <button type='button' onClick={this.increase()}>Incarese by 1</button>
//         <button type='button'  onClick={this.decrease()}>decrease by 1</button>   this giving error */}

//         <button type='button' onClick={this.increase}>Incarese by 1</button>
//         <button type='button'  onClick={this.decrease}>decrease by 1</button>   it's not giving error 
//     </div>
//  }   
// }

import React, { Component } from "react";
import { Container, Card, Button,ButtonGroup, ButtonToolbar} from "react-bootstrap";
import { Link } from "react-router-dom";

import { upperCase } from "text-case"; //https://www.npmjs.com/package/text-case

class textCase extends Component {
  state = {
    input: "",
  };

  render() {
    return (
      <>
        <div className="App">
          <Container container-lg>
            <div class="services-grid">
              <div class="text-case">
                <Card>
                  <Card.Header>Paste your text below</Card.Header>
                  <textarea
                    rows={15}
                    onChange={(e) => {
                      this.setState({
                        input: e.target.value,
                      });
                    }}
                  ></textarea>
                </Card>
                <p>{this.state.output}</p>
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button onClick={this.convertTextToUpperCase}>
                      Uppercase
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }

  convertTextToUpperCase = () => {
    this.state.output = upperCase(this.state.input);
  };
}

export default textCase;