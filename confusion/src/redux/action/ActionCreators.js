import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            console.log('comment resoinse ' + JSON.stringify(response))
            return response.json()})
        .then(comments => dispatch(addComments(comments)))
        .catch(error => console.log('error' + JSON.stringify(error)));
};

export const commentsFailed = (errorMessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMessage
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromos(promotions)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
});


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errorMessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMessage
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});