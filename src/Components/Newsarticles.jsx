import React from 'react'
import Article from './Article'

export default function Newsarticles(props) {
  return (
    <div className="row">
      {props.articles.map((item, index) => {
      return <Article
        key={index} 
        articleitem={item}
      />
    })}
    </div>
  )
}