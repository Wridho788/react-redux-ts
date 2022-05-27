import { Action } from "../../actions";
import { ActionType } from '../../actions/action-types'

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default: return state;
    }
}

export default reducer;