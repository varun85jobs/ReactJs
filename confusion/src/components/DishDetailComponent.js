import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import Moment from 'react-moment';

class DishDetailComponent extends Component {

    renderComments(dish) {
        const commentItems = dish.comments.map((comment) => 
            <li key={comment.id}>
                <p className="text-left">{comment.comment}</p>
                <p className="text-left">--{comment.author}, <Moment format="MMM DD, YYYY">{comment.date}</Moment></p>
            </li>
        );

        return (
            <ul className="list-unstyled">{commentItems}</ul>
        );

    }

    render() {
        let dish = this.props.dish;
        if(dish === undefined){
            return <div></div>
        }else{
            return (
            <div className="row">
                <div className="col-12 col-sm-5 mt-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-7 mt-1">
                    <h3 className="text-left">Comments</h3>
                    {this.renderComments(dish)}
                </div>
            </div>
            );
        }
    }   
}

export default DishDetailComponent;