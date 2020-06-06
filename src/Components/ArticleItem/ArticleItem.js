import React from 'react';

//import style 
import './ArticleItem.css'

export default function ArticleItem(props) {
  return (
    <a href={props.href} className="ArticleItem" title={props.title}>
      <div className="ArticleItemAreaTitle">
        <h1  className="ArticleItemTitle"><span> ➤ </span> {props.title} </h1>
      </div>
      <div className="ArticleItemAreaContent">
        {props.children}
      </div>
    </a>
  );
}

