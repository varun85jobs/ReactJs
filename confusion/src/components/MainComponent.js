import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <div className="container">
                    <Header/>
                    <Menu dishes={this.state.dishes} onDishSelected={this.onDishSelected}/>
                    <DishDetailComponent dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
                    <Footer/>
                </div>
        );
    }
}

export default Main;
