// import React, { Component } from "react";    //this for class based component otherwise below
import React from "react";

// export class NewsItem extends Component {
  const NewsItem = (props)=>{
  // render() {
    let { title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className="my-3">
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left :'90%', zIndex:'1'}}>{"new"}</span>
          <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107060204-gettyimages-1396872387-dscf1700_20220512101812304.jpeg?v=1652366905&w=1920&h=1080":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">{description}</p>
            <p className="card-text"><medium className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</medium></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default NewsItem;
