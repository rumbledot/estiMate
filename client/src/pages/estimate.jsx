import React, { Component } from 'react'
import AppNavbar from '../components/AppNavbar'
import AddQuoteItem from '../components/AddQuoteItem'

import { 
    Container, 
    ListGroup, 
    ListGroupItem,
    Input,
    Button
} from 'reactstrap'

import { Provider } from 'react-redux'
import store from '../store'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

import p5 from 'p5';

const P5 = ({ setup, draw }) => {
    const sketch = p5 => {
    p5.setup = () => setup(p5);
    p5.draw = () => draw(p5);
    };
    new p5(sketch);

    return <></>;
};

class p5Line {
    constructor(sx, sy, ex, ey) {
        this.sx = sx
        this.sy = sy
        this.ex = ex
        this.ey = ey
    }

    sx() {
        return this.sx;
    }

    sy() {
        return this.sy;
    }

    ex() {
        return this.ex;
    }

    ey() {
        return this.ey;
    }

    setsx(sx) {
        this.sx = sx
    }

    setsy(sy) {
        this.sy = sy
    }

    setex(ex) {
        this.ex = ex
    }

    setey(ey) {
        this.ey = ey
    }
}

/*** P5 Drawing vars ***/
    var graphic = null

    var lineOrigin = null

    var grid = 20
    var lines = []

    function drawOnGraphic(p5) {
        if (lineOrigin == null) {
            lineOrigin = [(Math.floor(p5.mouseX / grid)) * grid, (Math.floor(p5.mouseY / grid)) * grid]
        } else {
            p5.strokeWeight(4)
            p5.stroke(60)
            let destX = (Math.floor(p5.mouseX / grid)) * grid
            let destY = (Math.floor(p5.mouseY / grid)) * grid
            p5.line(lineOrigin[0], lineOrigin[1], destX, destY)
        }
    }

    function onMouseQuit(p5) {
    if (lineOrigin != null) {
        graphic.strokeWeight(4)
        graphic.stroke(30)
        graphic.line(lineOrigin[0], lineOrigin[1], (Math.floor(p5.mouseX / grid)) * grid, (Math.floor(p5.mouseY / grid)) * grid)

        let newLine = new p5Line(lineOrigin[0], lineOrigin[1], (Math.floor(p5.mouseX / grid)) * grid, (Math.floor(p5.mouseY / grid)) * grid)
        lines.push(newLine)
        console.log(lines)

        lineOrigin = null
        }
    }

    function reDrawLines(p5) {
        for (let i = 0; i < lines.length; i++) {
            let exist = lines[i]
            graphic.strokeWeight(4)
            graphic.stroke(30)
            graphic.line(exist.sx, exist.sy, exist.ex, exist.ey)
        }
    }

class EstimatePage extends Component {

    state = {
        quotedItems: [],
        itemTotal: [],
        grandTotal: 0.0,
        lines: []
    }

    setup(p5) {
        var cnv = p5.createCanvas(280,640)
        var x = (p5.windowWidth - p5.width) / 2
        var y = (p5.windowHeight - p5.height) / 2
        cnv.position(10, y)
        graphic = p5.createGraphics(280, 640)
        graphic.background(122)

        p5.ellipseMode(p5.CENTER)
        reDrawLines(p5)
    }

    draw(p5) {
        p5.background(122)
        p5.image(graphic, 0, 0)

        p5.strokeWeight(1)
        p5.noFill()
        let gX = (Math.floor(p5.mouseX / grid)) * grid
        let gY = (Math.floor(p5.mouseY / grid)) * grid
        p5.ellipse(gX, gY, 10, 10)

        if (p5.mouseIsPressed) {
            drawOnGraphic(p5)
        } else {
            onMouseQuit(p5)
        }
    }

    getQuoteItem = (item) => {
        var joined = this.state.quotedItems.concat(item)
        // console.log("add new item :" + joined)
        // console.log("add new item :" + this.state.quotedItems)
        this.setState({ quotedItems: joined })
        // console.log(this.state.quotedItems)
    }

    onChange = (e) => {
        if (parseInt(e.target.value)) {
            // console.log("change" + e.target.value * e.target.name)
            const t = parseInt(e.target.value) * parseInt(e.target.name)
            const i = parseInt(e.target.id)

            this.state.itemTotal[i] = t
            this.setState(this.state.itemTotal)

            this.getGrandTotal()

            // console.log("total item: at index" + i +" is " + this.state.itemTotal[i])
        } else {
            e.target.value=''
            e.target.placeholder = "Please enter valid a number"
            // console.log("not number")
        }
    }

    getGrandTotal = () => {
        for (let i=0; i < this.state.itemTotal.length; i++) {
            this.state.grandTotal += this.state.itemTotal[i]
        }
        console.log("Grand total" + this.state.grandTotal)
        this.forceUpdate()
        // this.setState(this.state.grandTotal)
    }

    render() {
        return (
            <Provider store={store}>
            <div>
                <AppNavbar/>
                <P5 setup={this.setup} draw={this.draw}/>
                <Container>
                    <h1>Estimate your house's cost</h1>
                    <br></br>
                    <h4>Estimated total cost : ${this.state.grandTotal}</h4>
                    <br></br>
                    <AddQuoteItem toEstimate = { this.getQuoteItem }/>
                    <ListGroup>
                        {this.state.quotedItems.map(( item, index ) => (
                            <ListGroupItem 
                            key={index}>
                                {item.name} - Price per unit ${item.price}
                            <Input 
                                type="text"
                                pattern="[0-9]*"
                                name={item.price}
                                id={index}
                                placeholder={item.measured_by}
                                onChange={this.onChange}/>
                            <p id={index}>Item cost ${this.state.itemTotal[index]}</p>
                            <Button
                                color="danger"
                                className="btn btn-sm"
                            >&times;</Button>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </div>
            </Provider>
        )
    }
}

// const EstimatePage = () => {

//     const quotedItems = []
//     const name = ''

//     const getQuoteItem = (name) => {
//         quotedItems.add(name)
//     }

//     return (
//         <Provider store={store}>
//         <div>
//             <AppNavbar/>
//             <Container>
//                 <h1>Estimate you house cost</h1>
//                 <br></br>
//                 <h4>Estimated total cost : 0.00 $</h4>
//                 <br></br>
//                 <AddQuoteItem toEstimate = { this.getQuoteItem }/>
//             </Container>
//         </div>
//         </Provider>
//     )
// }

export default EstimatePage