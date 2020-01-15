import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    ListGroup,
    ListGroupItem
} from 'reactstrap'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems } from '../actions/ItemActions'

class AddQuoteItem extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    state = {
        modal: false,
        items: []
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onListClick = (item) => {
        console.log("click " + item)
        this.props.toEstimate(item)
        this.toggle()
    }

    render() {
        const { items } = this.props.item

        return (
            <div>
                <Button
                    color="primary"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add quote item</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >
                        <ModalHeader
                            toggle={this.toggle}
                        >Pick a material</ModalHeader>
                        <ModalBody>
                        <ListGroup>
                            {items.map(( item ) => (
                            <ListGroupItem 
                            key={item._id}
                            onClick={ this.onListClick.bind (this, item) }>
                                {item.name}, {item.price}
                            </ListGroupItem>
                        ))}
                        </ListGroup>
                        </ModalBody>
                </Modal>
            </div>
        )
    }
}

AddQuoteItem.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(AddQuoteItem)