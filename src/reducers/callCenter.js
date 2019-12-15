import { CALLCENT_SIGN_UP } from '../types';

export default function callCenter (state = {}, action ={}) {
    switch(action.type) {
        case CALLCENT_SIGN_UP:
            return action;
        default:
            return state;
    }
}