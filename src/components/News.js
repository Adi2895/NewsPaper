import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Proptypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {

    static defaultProps = {
        category: 'apple',
        pageSize: '5', 
        
    }

    static propTypes = {
        category: Proptypes.string,
        pageSize: Proptypes.number,
        
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            totalResults:0,
            loading: true,
            page: 1, 
            fullDate : `${new Date().getFullYear()}-${new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}-${new Date().getDate() - 1 < 10 ?`0${new Date().getDate() - 1}` : new Date().getDate() - 1}`, 
        }
        let s = this.props.category;
        let b = s.charAt(0).toUpperCase() + s.slice(1);
        document.title = b + " -NewsDaily";
        
    }

    

    async updateNews() {
        
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${this.state.fullDate}&to=${this.state.fullDate}&sortBy=popularity&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(50);
        this.setState({
        loading: true
        })

        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({ articles: parsedData.articles,
            totalResults: parsedData.totalResults, 
            loading: false, 
        })
        this.props.setProgress(100);
        }

    async componentDidMount() {
        this.props.setProgress(30); 
        this.updateNews();
    }


    fetchData = async()=>{
        
        this.setState({
            loading: true
        })
        
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${this.state.fullDate}&to=${this.state.fullDate}&sortBy=popularity&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            page:this.state.page + 1
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults, 
            loading: false })
}


    render() {
        return (
            <>           
                <h2 className="text-center" style={{paddingTop:'90px'}}>NewsDaily - Top Headlines of {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                
                    dataLength={this.state.articles.length} 
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                    >                  
                
                <div className="container my-4">

                <div className="row">
                    {this.state.articles.map((ele) => {
                    return  <div className="col md-4" key={ele.url}>
                        <NewsItem title={ele.title ? ele.title : ""} source={ele.source.name} author={ele.author} date={ele.date} description={ele.description ? ele.description.slice(0, 100) + "..." : ""} url={ele.url} imageUrl={ele.urlToImage} />
                        </div>
                        // .slice(0, 60)
                    })}
                </div>                
                </div>
    
            </InfiniteScroll>
            </>
        )
    }
}

export default News
