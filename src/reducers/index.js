import { combineReducers } from "redux"
import newMovieReducer from './newMovies'

const rootReducer = combineReducers({
 movies:newMovieReducer,
})

export default rootReducer