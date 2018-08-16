import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

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
        if (item !== undefined) {
            var cardSubtitle = item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : <div/>;

            return (
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {cardSubtitle}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return <div/>
        }
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
                    <RenderCard item={props.promotion} isLoading={props.promotionLoading}
                        errorMessage={props.promotionErrorMessage} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leaderLoading}
                        errorMessage={props.leaderErrorMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Home;