import React from 'react'

export default function Article(props) {

  return (
  <div className="col-md-4"> 
    <div className="card" style={{maxWidth: "50rem"}}>
      <img src={props.articleitem.urlToImage} alt="" className="img-fluid"/>
      <div className="card-body">
      <h5 className="card-title">{props.articleitem.title}</h5>
  
        <p className="card-text">{props.articleitem.content}</p>
       
        <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={props.articleitem.url} alt="to site">View Article</a>
        <p className="card-title">Written by: {props.articleitem.author}</p>
        <p className="card-text">PublishedAt {props.articleitem.publishedAt}</p>
      </div>
    </div>
    </div>
  )
}

