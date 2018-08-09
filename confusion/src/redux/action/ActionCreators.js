import * as ActionTypes from '../action/ActionTypes';

export const addComment = (dishId, rating, author, comment) => {
    return {
        type : ActionTypes.ADD_COMMENT,
        payload : {
            dishId : dishId,
            rating : rating, 
            author : author, 
            comment : comment
        }
    }
}