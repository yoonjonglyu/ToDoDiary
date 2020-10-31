import { combineReducers } from 'redux';

const reducers = combineReducers({
    // ..reducer
});

export default reducers; 

export type RootState = ReturnType<typeof reducers>;