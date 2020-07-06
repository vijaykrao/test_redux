import React, { Component } from 'react';

import { connect } from 'react-redux';

import {viewMovie } from "../actions/movies"
import axios from 'axios'


 class ViewMovies extends Component{
  constructor(props) {
        super(props);
        this.state = {
            id: null,
            movie:null
          };
        }

async componentDidMount(){
    let cancel;
     await axios({
            method:'GET',
            url:'http://www.omdbapi.com/?apikey=b9bd48a6',
            params:{i:this.props.match.params.id},
            cancelToken: new axios.CancelToken(c => cancel = c )
        }).then(
            res =>  this.setState({movie:res.data},()=>{console.log(this.state.movie)}),
            error => {console.log(error)}
        );   
}

      render(){
          return (
            <div class="col-sm-12">
                <div class="col-sm-4"></div>
                <div>
               {this.state.movie !==null ? 
                <div class="col-sm-4">
                        <br />
                      <div class="card" >
                          <img class="card-img-top" src={this.state.movie.Poster} alt={this.state.movie.Title} />
                          <div>
                          <br />
                            <p class="card-text">{this.state.movie.Title}</p>
                            <p class="card-text">{this.state.movie.Year}</p>
                            <p class="card-text">{this.state.movie.Actors}</p>
                            <p class="card-text">{this.state.movie.Country}</p>
                            <p class="card-text">{this.state.movie.Director}</p>
                            <p class="card-text">{this.state.movie.Genre}</p>
                            <p class="card-text">{this.state.movie.Language}</p>
                          </div>  
                          <br />                
                      </div>
                </div>:""
                }
              </div>

              <div class="col-sm-4"></div>
            </div>
          )
      }

    }
    const mapStateToProps = state => {
      return {
        movie: state.movies._movie
      }
    }
    
    export default connect(mapStateToProps,{
    viewMovie
    })(ViewMovies);