import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import ConfusionBreadcrumb from './ConfusionBreadcrumbComponent';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-sm-6">
                    <Link to={`/menu/${dish.id}`} >
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
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

export default Menu;