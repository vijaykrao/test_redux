

import axios from 'axios'


export const viewMovie = (id)=>{
  return async (dispatch)=>{
    try {
      let cancel;
            const movieData = await axios({
                method:'GET',
                url:'http://www.omdbapi.com/?apikey=b9bd48a6',
                params:{i:id},
                cancelToken: new axios.CancelToken(c => cancel = c )
            }).then(
                res =>  dispatch(successViewMovie( res)),
                error => dispatch(failureViewMovie(error))
            );
    } catch (error) {
    //   dispatch(clearMovie ());
    }
  }
}
export const getNewMovies =  (query,page) => {
  return async (dispatch)=>{

    try {
      let cancel;
            const movieData = await axios({
                method:'GET',
                url:'http://www.omdbapi.com/?apikey=b9bd48a6',
                params:{s:query,page: page},
                cancelToken: new axios.CancelToken(c => cancel = c )
            }).then(
                res =>  dispatch(successNewMovies( res.data.Search, res.data.totalResults)),
                error => dispatch(failure(error))
            );
    } catch (error) {

    }
  }
    }

export const getMovies =  (query,page) => {
        return async (dispatch)=>{
            try {
                let cancel;
                      const movieData= await  axios({
                          method:'GET',
                          url:'http://www.omdbapi.com/?apikey=b9bd48a6',
                          params:{s:query,page: page},
                          cancelToken: new axios.CancelToken(c => cancel = c )
                      }).then(
                        res =>  dispatch(successMovies( res.data.Search, res.data.totalResults)),
                        error => dispatch(failure( error))
                    );
              } catch (error) {

              }
        }
    }



    
const successNewMovies = (movies, records) => ({
    type: "GET_NEW_MOVIE",
     movies:   movies,
     records : records,
  });

const failureNew = (movie, records) =>({
    type : "FAILURE_GET_NEW_MOVIE",
    movies:[],
    records: 0
})
  const successMovies = (movies, records) => ({
    type: "GET_MOVIE",
    movies,
    records,
  });

  const failure = (movies, records) => ({
    type: "FAIL_MOVIE",
    movies : [],
    records: 0
  });

  const successViewMovie =(movie)=>({
    type :"SUCCESS_VIEW_MOVIE",
    _movie:movie
  }
)

const failureViewMovie =(movie)=>({
  type :"SUCCESS_VIEW_MOVIE",
  movie:null
}
)






