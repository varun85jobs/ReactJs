import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
        this.onDishSelected = this.onDishSelected.bind(this);
    }

    onDishSelected(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes} onDishSelected={this.onDishSelected}/>
                    <DishDetailComponent dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
                </div>
            </div>
        );
    }
}

export default Main;
