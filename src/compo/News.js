import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `TodayNews - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const updateNews = async () => {
    setLoading(true);

    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=12&page=${page}&apikey=1f10a00bab143cbfb1a519a764e16958`;

    let data = await fetch(url);
    let pdata = await data.json();

    setArticles(pdata.articles || []);
    setLoading(false);
    setTotalResults(pdata.totalArticles || 100); // gnews uses totalArticles sometimes
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=12&page=${nextPage}&apikey=1f10a00bab143cbfb1a519a764e16958`;

    let data = await fetch(url);
    let pdata = await data.json();

    setArticles(articles.concat(pdata.articles || []));
    setTotalResults(pdata.totalArticles || totalResults);
  };

  return (
    <>
      <div className="text-center" style={{ marginTop: "90px" }}>
        <h2>
          Today's Top - {capitalizeFirstLetter(props.category)} Headlines (Reporter: Abhijit Mandal)
        </h2>
      </div>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageUrl={element.image}
                  newsUrl={element.url}
                  author={element.source?.name || "Unknown"}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
