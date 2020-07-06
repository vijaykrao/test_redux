import React, { Component } from 'react';

import { connect } from 'react-redux';

import {getMovies, getNewMovies } from "../actions/movies";

import {history} from '../history'

const _css = require('./index.css')

 class Home extends Component{
  constructor(props) {
        super(props);
        this.state = {
            query : 'man',
            pageNumber :1,
            oldData : this.props.movies
        };
    }

    async componentDidMount() {
        var options = {
          root: null, // Page as root
          rootMargin: "20px"
        };
        // Create an observer
        this.observer = new IntersectionObserver(
          this.handleObserver.bind(this), //callback
          options
        );
        //Observe the `lazy_loadingRef`
        this.observer.observe(this.lazy_loadingRef);
      }

    
    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
            if (this.state.prevY > y) {
                const _page = this.state.pageNumber + 1;
                if(this.props.totalRecords>this.props.fetchedRecords){
                    this.updatemovieList(this.state.query, _page)
                    this.setState({pageNumber: _page})
                }
            }
            this.setState({ prevY: y });
    }


    viewMovies=(id)=>{
        history.push('/view/'+id);
    }
    updatemovieList = (query, pageNumber) => this.props.getMovies(query,pageNumber);
    newMovieList= (query, pageNumber) =>  this.props.getNewMovies(query,1);

      
render(){
    const loadingCSS = {
        height: "100px",
        margin: "30px"
      };
      const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
      
  
    return (
            <div>
                <div>
                <h1>MOVIE SERACH IMDB </h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" 
                        aria-describedby="button-addon2"
                        type="text"
                            value={this.state.query}
                            onChange={ev => this.setState({ query: ev.target.value })}
                            placeholder="Enter Movie Name" />
                        <div class="input-group-append">
                        <button className="btn btn-outline-primary btn-ext"
                         type="button" 
                            onClick={() => this.newMovieList(this.state.query,1)}> Search</button>
                        </div>
                    </div>
                </div>

                <div className="row col-sm-12" >
           <div class="col-sm-4"></div>
          <div class="col-sm-4">
          {
          this.props.movies !== undefined && this.props.movies !==[] ? this.props.movies.map((movie, index) => (
         <div>
             { movie !== undefined?
                    <div className="col-sm-12">
                    <br />
                      <div class="card" >
                        
                          <img class="card-img-top" src={movie.Poster} alt={movie.Title} />
                          <div>
                            <p class="card-text">{movie.Title}</p>
                            <p class="card-text">{movie.Year}</p>
                            <button type="button"  class="btn btn-primary btn-primary-custom" 
                              onClick={()=>this.viewMovies(movie.imdbID)}
                            >View Big</button>
                          </div>                  
                      </div>
                  </div>:""
          } 
         </div>
           )):""
           } 
          </div>

        <div class="col-sm-3"></div>
        </div>


        <div ref={lazy_loadingRef => (this.lazy_loadingRef = lazy_loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>

                    </div>

     );
 }
}
const mapStateToProps = state => {
    console.log("STATE VALUE",state)
  return {
    movies: state.movies.movies,
    fetchedRecords: state.movies.fetchedRecords,
    totalRecords: state.movies.totalRecords
  }
}

export default connect(mapStateToProps,{
getMovies,
getNewMovies
})(Home);