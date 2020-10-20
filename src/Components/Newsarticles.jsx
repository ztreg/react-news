import React, {useState} from 'react'
import Article from './Article'

export default function Newsarticles(props) {

  const [expandedItem, setExpandedItem] = useState(null)

  return (
    <div className="row bg-white">
      EXPANDED ITEM: {expandedItem}
      {props.articles.map((item, index) => {
      return <Article 
        key={index}
        index={index} 
        articleitem={item} 
        expandedItem={expandedItem} 
        setExpandedItem={setExpandedItem}/>
    })}
    </div>
  )
}