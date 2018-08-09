import { COMMENTS } from "../../shared/comments";
import * as ActionTypes from '../action/ActionTypes';


export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
             let comment = action.payload;
             comment.id = state.length + 1;
             comment.date = new Date().toISOString();
            return [...state, comment];
        default:
            return state;
    }

};