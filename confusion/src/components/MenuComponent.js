import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import ConfusionBreadcrumb from './ConfusionBreadcrumbComponent';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class Menu extends Component {

    render() {
        const props = this.props;
        if (props.dishes.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if (props.dishes.errorMessage) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.dishes.errorMessage}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            const menu = props.dishes.dishes.map((dish) => {
                return (
                    <div key={dish.id} className="col-12 col-sm-6">
                        <Link to={`/menu/${dish.id}`} >
                            <Card>
                                <CardImg width="100%" src={ baseUrl + dish.image} alt={dish.name} />
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </Link>
                    </div>
                );
            });

            return (
                <div className="container">
                    <ConfusionBreadcrumb parent={'home'} active={'Menu'} />
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
        }
    }
}

export default Menu;