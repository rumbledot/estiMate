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

class EstimatePage extends Component {

    state = {
        quotedItems: [],
        itemTotal: [],
        grandTotal: 0.0
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