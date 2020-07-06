const initialState ={
    loader: true,
    movies : [],
    records : 0,
}


const newMovies = (state = initialState, action) => {
    // alert('HI')
    console.log("MOVIES REDUCER, state", action, )
        switch (action.type) {
          case "GET_NEW_MOVIE":
          return {
            loader : false,
            movies:action.movies,
            totalRecords:action.records,
            fetchedRecords :  action.movies.length === undefined? 0: action.movies.length
          } 

          case "GET_MOVIE":
            const _data = state.movies.concat(action.movies);
            // console.log("_data",_data)
            return {
              loader : false,
              movies:  _data,
              totalRecords:action.records,
              fetchedRecords :  _data.length === undefined? 0: _data.length
            } 
          case 'FAIL_MOVIE':
            return {
            loader : false,
            movies:  state.movies.concat(action.movies),
            totalRecords: state.movies.concat(action.movies).length!== undefined? state.movies.concat(action.movies).length:0,
            fetchedRecords :  state.movies.concat(action.movies).length!== undefined? state.movies.concat(action.movies).length:0,
          }
          case 'SUCCESS_VIEW_MOVIE':
            return {
            
            _movie:  action._movie.data
          }
          default:
          return state
        }
      }
      
      export default newMovies