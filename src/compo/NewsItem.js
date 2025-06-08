import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {"New"}
        </span>
        <img
          src={
            !imageUrl
              ? "https://via.placeholder.com/300x200.png?text=No+Image+Available"
              : imageUrl
          }
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
