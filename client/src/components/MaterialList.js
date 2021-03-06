import React, { Component } from 'react'
import { 
    Container, 
    ListGroup, 
    ListGroupItem,
    Button 
} from 'reactstrap'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem, editItem } from '../actions/ItemActions'
import PropTypes from 'prop-types'

import ItemEditModal from '../components/ItemEditModal'

class MaterialList extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    onDeleteClick = id => {
        this.props.deleteItem(id)
    }

    onEditClick = id => {
        // this.props.editItem(id)
    }
    
    render() {
        const { items } = this.props.item

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {items.map(( item ) => (
                            <CSSTransition key={item._id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                {/* <Button
                                    className="edit-btn"
                                    color="primary"
                                    size="sm"
                                    onClick={this.onEditClick.bind(this, this._id)}
                                >edit</Button> */}
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, item._id)}
                                >&times;</Button>
                                {item.name}, {item.measured_by}, {item.price}, {item.category}
                                {/* <ItemEditModal edittedItem={item}/> */}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

MaterialList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItem, editItem })(MaterialList)