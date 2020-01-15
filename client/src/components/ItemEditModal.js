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
import { editItem, updateItem } from '../actions/ItemActions'

class ItemEditModal extends Component {
    state = {
        modal: false,
        name: '',
        measured_by: '',
        price: '',
        category: ''
    }

    componentDidMount() {
        this.props.editItem(this.props.id)
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
                        >Add a new material</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="item">Name</Label>
                                    <Input 
                                        type="text" 
                                        name="name" 
                                        id="itemName" 
                                        placeholder="Specify material's name" onChange={this.onChange}/>
                                    <Label for="item">Measured by</Label>
                                    <Input 
                                        type="text"
                                        name="measured_by"
                                        id="itemMeasuredBy" 
                                        placeholder="Specify how material's is measured" onChange={this.onChange}/>
                                    <Label for="item">Price</Label>
                                    <Input 
                                        type="text" 
                                        name="price" 
                                        id="itemPrice" 
                                        placeholder="Specify material's price" onChange={this.onChange}/>
                                    <Label for="item">Category</Label>
                                    <Input 
                                        type="text" 
                                        name="category" 
                                        id="itemCategory" 
                                        placeholder="Specify material's category" onChange={this.onChange}/>
                                    <Button
                                        color="dark"
                                        style={{marginTop: '2rem'}}
                                        block
                                        >Add material</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item:state.item
})

export default connect(mapStateToProps,{ editItem })(ItemEditModal)