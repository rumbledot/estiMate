import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5/experiment';
import {timesClicked} from '../p5/experiment';

function getCoords(){
    console.log(arguments);
}

class App extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <div className="App">
                <P5Wrapper sketch={sketch} getCoords={getCoords}/>
            </div>
        );
    }
}

export default App;

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        console.log(timesClicked);
    }
}