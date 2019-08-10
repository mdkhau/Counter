import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './components/counter';
import './App.css';

export default class App extends Component {
//create state of counter and event
    constructor(props){
        super();
        this.state= {
            count:0,
            isEven:true

        }
    }
//incremnet counter on click
    incrementCounter= () => {
        this.setState({
            count:this.state.count+1
        })
        this.isEven()
    }
//clear counter on button click
    clearCounter= () => {
        this.setState({
            count:this.state.count=0
        })
        this.isEven()
    }
isEven=()=>{


            this.setState({
                isEven:this.state.count % 2 == 0
            })

}

    render() {
        let { count } =this.state
        return (
          //html rendering for the view
            <div>
        <div onClick={this.incrementCounter} id="container" >
            <div class="border" className={this.state.isEven ? 'white' : 'border'}>
            <div class="item">{count}</div>
            </div>

            </div>
        <Counter
        title = { "Reset" }
        task = { this.clearCounter }
        />
        </div>
    );
    }

}
