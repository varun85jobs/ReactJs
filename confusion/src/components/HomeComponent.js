import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({ item, isLoading, errorMessage }) {

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errorMessage) {
        return (
            <h4>{errorMessage}</h4>
        );
    }
    else {
        let cardSubtitle = null;
        if (item.designation) {
            cardSubtitle = <CardSubtitle>{item.designation}</CardSubtitle>;
        }

        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {cardSubtitle}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading}
                        errorMessage={props.dishesErrorMessage} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;