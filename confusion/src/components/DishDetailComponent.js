import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import Moment from 'react-moment';
import ConfusionBreadcrumb from './ConfusionBreadcrumbComponent';

function RenderDish(props) {
    if (props.dish === undefined) {
        return <div></div>
    } else {
        return (
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function RenderComments(props) {
    if (props.comments === undefined) {
        return <div></div>
    } else {
        const commentItems = props.comments.map((comment) =>
            <li key={comment.id}>
                <p className="text-left">{comment.comment}</p>
                <p className="text-left">--{comment.author}, <Moment format="MMM DD, YYYY">{comment.date}</Moment></p>
            </li>
        );

        return (
            <ul className="list-unstyled">{commentItems}</ul>
        );
    }
}

function DishDetail(props) {
    return (
        <div className="container">
            <ConfusionBreadcrumb parent={'Menu'} active={props.dish.name} />
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;