import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, FormFeedback } from 'reactstrap';

class CommentForm extends Component{

    constructor(props){
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isModalOpen: false,
            rating : 1,
            name : '',
            comment : '',
            touched : {
                name : false
            }
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
      }

    handleBlur = (event) => {
        this.setState({
            touched: { [event.target.name] : true },
        });
    }

    validate(name) {
        let error = ''
        if (this.state.touched.name && name.length < 3)
            error = 'Name should be >= 3 characters';
        else if (this.state.touched.name && name.length > 15)
            error = 'Name should be <= 15 characters';
        return error;
    }

    submitComment(event){
        this.toggleModal();
        alert("Name: " + this.state.name + " Comment: " + this.state.comment
            +  " rating: " + this.state.rating + " dishId: " + this.props.dishId);
        this.props.postComment(this.props.dishId, this.state.rating, this.state.name, this.state.comment)    
        event.preventDefault();
    }

    render(){
        const error = this.validate(this.state.name);
        const disabled = (error !== '' || this.state.touched.name === false) ? true : false; 
        return (
            <div>
                <Button className="btn btn-light border-dark" onClick={this.toggleModal}><span className="fa fa-edit"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><strong>Submit Comment</strong></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitComment}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" name="rating" id="rating"
                                    value={this.state.rating}
                                    onChange={this.handleChange}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Input type="text" id="name" name="name"
                                    placeholder="Your Name"
                                    value={this.state.name}
                                    valid={error === ''}
                                    invalid={error !== ''}
                                    onBlur={this.handleBlur}
                                    onChange={this.handleChange} />
                                <FormFeedback>{error}</FormFeedback>    
                            </FormGroup>
                            <FormGroup> 
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment" rows="6"
                                    value={this.state.comment}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" 
                                disabled={disabled} >Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;