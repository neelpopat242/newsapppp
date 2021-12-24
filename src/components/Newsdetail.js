import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';



export class Newsdetail extends Component {

   
   
    constructor(){
        super();
        this.state = {
            articles :[],
            loading: false,
            page :1
        }
    }

    async componentDidMount() {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let response = await fetch(url);
        const json = await response.json();
        this.setState({articles: json.articles, totalResults: json.totalResults,loading :false});
    }

    handleNextClick = async ()=>{
        
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);  
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading :false
            })
    }
    
    
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-5">
                
                {this.state.loading &&<Spinner/>}
                
                <div className="row">
                    {!this.state.loading &&this.state.articles.map((element) => {
                        return  <div className="col-md-4 my-2"  key={element.url}>
                        <Newsitem key={element.publishedAt} title={element.title} description={element.description} 
                        imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>;
                    })}
  
                </div>
                <div className="container d-flex justify-content-between my-5">
                <button type="button" disabled ={this.state.page<=1} className="btn btn-dark mx-2" onClick={this.handlePrevClick}>Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next</button>
                </div>    
            </div>

        )
    }
}


export default Newsdetail


