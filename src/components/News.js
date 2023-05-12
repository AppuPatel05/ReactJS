import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
  constructor(){
    console.log('hello i am from constructor')
    super();
    this.state = {
      articles : [],
      loading : true,
      page: 1,
      
    }
  }

  static defaultProps = {
    country : 'in',
    category : 'general',
    pageSize : 8
 };

 static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
};

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d6f24fa8df048bcba55a273fea66d94&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);  
    this.setState({
      articles: parsedData.articles,
      totalArticles:parsedData.totalResults,
      loading : false});
    console.log("total_articles:",this.state.totalArticles);
    // console.log("page:",this.state.page);
  }


  prevBtnEvent = async () => {
    // console.log("prev btn");
    // console.log("total:",this.state.page * 15);

    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d6f24fa8df048bcba55a273fea66d94&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);  
    this.setState({articles: parsedData.articles,loading:false});
    this.setState({page:this.state.page-1});
  }
  
  nextBtnEvent = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d6f24fa8df048bcba55a273fea66d94&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    // console.log(parsedData);  
    this.setState({articles: parsedData.articles,loading:false});
    this.setState({page:this.state.page+1});
  }


  render() {
    return (
      <>
        <div className="container my-2">
            <h2>NewsNow - Top Headlines: </h2>
            <hr />
            {this.state.loading && <Spinner/>}
            <div className="row">
            {/* {console.log(this.state.articles.length)} */}
            {!this.state.loading && this.state.articles.map((element)=>{
              {/* console.log(element); */}
              if(element.title) {
                return <div className="col-md-4" key ={element.url}>
                  <Newsitem title={element.title.length < 46 ? element.title : element.title.slice(0,45)+'...'} description={!element.description || element.description.length < 71 ? element.description : element.description.slice(0,70)+'...'} imgUrl ={element.urlToImage} url={element.url}></Newsitem>
                </div>
              }
            })}
            </div>
            <hr />
        </div>

        <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1 } className="btn btn-dark" onClick={this.prevBtnEvent}>&larr; Previous</button>
            <button type="button" disabled={(this.state.page + 1) > Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-dark nextBtn" onClick={this.nextBtnEvent}>Next &rarr;</button>
        </div>
        </>
    )
  }
}
