import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const handleServerResponse = response => {
    if (response.ok) {
        return response;
    } else {
        var error = new Error('Error ' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
    }
}

export const handleServerError = error => {
    var errorMessage = new Error(error.message);
    throw errorMessage;
}

export const addComment = comment => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = { dishId, rating, author, comment }
    newComment.date = new Date().toISOString;
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(handleServerResponse, handleServerError)
        .then(response => response.json())
        .then(storedComment => dispatch(addComment(storedComment)))
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + 'dishes')
        .then(handleServerResponse, handleServerError)
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}


export const fetchLeaders = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + 'leaders')
        .then(handleServerResponse, handleServerError)
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(handleServerResponse, handleServerError)
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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
        .then(handleServerResponse, handleServerError)
        .then(response => response.json())
        .then(promotions => dispatch(addPromos(promotions)))
        .catch(error => dispatch(promosFailed(error.message)));
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

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errorMessage) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errorMessage
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});