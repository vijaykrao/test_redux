import React, { Component } from 'react';

import { connect } from 'react-redux';

import {viewMovie } from "../actions/movies"

import axios from 'axios'


const _css = require('./index.css')

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

backToMovies=(id)=>{
  window.history.back();
}
      render(){
          return (
            <div class="col-sm-12">
              <button class="btn btn-primary btn-lg btn-ext" onClick={this.backToMovies}> back to search</button>
                <div class="col-sm-4"></div>
                <div>
               {this.state.movie !==null ? 
                <div class="col-sm-4">
                        <br />
                      <div class="card" >
                          <img class="card-img-top" src={this.state.movie.Poster} alt={this.state.movie.Title} />
                          <div class="card-header">
                          {this.state.movie.Title}
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Year      : {this.state.movie.Year}</li>
                            <li class="list-group-item"> Actors   : {this.state.movie.Actors}</li>
                            <li class="list-group-item">Country   : {this.state.movie.Country}</li>
                            <li class="list-group-item">Directors : {this.state.movie.Director}</li>
                            <li class="list-group-item">Genre     :{this.state.movie.Genre}</li>                        
                            <li class="list-group-item">Language  : {this.state.movie.Language}</li> 
                          </ul>
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