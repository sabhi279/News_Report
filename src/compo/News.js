// import React, { Component } from "react";  // for class based
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
const News =(props)=> {                           // this is for function based
   const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)
   const [totalResults, setTotalResults] = useState(0)
 
 

 
  // for capital first letter
   const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // now for API fetch. 
  useEffect(() => {
    document.title=`TodayNews-${capitalizeFirstLetter(props.category)}`
      updateNews();
  }, [])
  


  //for update the page
  const updateNews = async ()=>{

    // props.setProgress(10);   //when we use progress bar

    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=12`;
    setLoading({ loading: true });
    let data = await fetch(url);
    let pdata = await data.json();
    // props.setProgress(50);

    setArticles(pdata.articles)
    setLoading(false)
    setTotalResults(pdata.totalResults)
  
    // props.setProgress(100);
  }

  const handlePrev = async () => {

    setPage(page-1);
    updateNews();
  }


  const handleNext = async () => {
    setPage(page+1);
      updateNews();
  }

  const fetchMoreData = async() => {

    
    setPage(page+1)
      let url =
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=12`;
      
      let data = await fetch(url);
      let pdata = await data.json();
      setArticles(articles.concat(pdata.articles))
      setTotalResults(pdata.totalResults)
  };

  
    return (
      <>
      <div className="text-center" style={{marginTop: '90px'}}>
        <h2>Todays top - {capitalizeFirstLetter(props.category)} Headlines(Reporter:- Abhijit Mandal)</h2>
        </div>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          
          {articles.map((element) => 
            {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author = {element.author}
                    date = {element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        </>
    );
  
}

News.defaultProps = {
  country : 'in',
  category : 'general'
}

News.propTypes ={
  country: PropTypes.string,
  category : PropTypes.string
}

export default News;
