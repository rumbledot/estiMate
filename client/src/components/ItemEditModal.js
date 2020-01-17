import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { updateItem } from '../actions/ItemActions'
import PropTypes from 'prop-types'

class ItemEditModal extends Component {
    state = {
        modal: false,
        name: '',
        measured_by: '',
        price: '',
        category: '',
        editedItem: this.props.edittedItem
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
            )
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            name: this.state.name,
            measured_by: this.state.measured_by,
            price: this.state.price,
            category: this.state.category
        }

        this.props.updateItem(this.props.id, newItem)
        this.toggle()
    }

    render() {
        // console.log("edit item : " + editedItem)

        // for(const i of item) {
        //     if (i._id === this.state.itemID) {
        //         editItem = i
        //     }
        // }

        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >edit</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >
                        <ModalHeader
                            toggle={this.toggle}
                        >Edit material</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="item">Name</Label>
                                    <Input 
                                        type="text" 
                                        name="name" 
                                        id="itemName" 
                                        placeholder={this.state.editedItem.name} 
                                        onChange={this.onChange}/>
                                    <Label for="item">Measured by</Label>
                                    <Input 
                                        type="text"
                                        name="measured_by"
                                        id="itemMeasuredBy" 
                                        placeholder={this.state.editedItem.measured_by} onChange={this.onChange}/>
                                    <Label for="item">Price</Label>
                                    <Input 
                                        type="text" 
                                        name="price" 
                                        id="itemPrice" 
                                        placeholder={this.state.editedItem.price} onChange={this.onChange}/>
                                    <Label for="item">Category</Label>
                                    <Input 
                                        type="text" 
                                        name="category" 
                                        id="itemCategory" 
                                        placeholder={this.state.editedItem.category} onChange={this.onChange}/>
                                    <Button
                                        color="dark"
                                        style={{marginTop: '2rem'}}
                                        block
                                        >Save</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps,{ updateItem })(ItemEditModal)