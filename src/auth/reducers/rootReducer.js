// import { combinedReducers} from 'redux';

// //session
// import { sessionReducer } from "redux-react-session";

// const rootReducer = combinedReducers({
//     session : sessionReducer
// });

// export default rootReducer;

import { combineReducers} from 'redux';


//session
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
    session : sessionReducer
});

export default rootReducer;