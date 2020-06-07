import React from 'react';

import './ArticlePage.css'

//import components

export default function ArticlePage(props) {
  return (
    <div className="ArticlePage">
      <div className="ArticlePageNavegation">
        {props.title}
      </div>
      <div className="ArticlePageContent">
        {props.children}
      </div>
    </div>
  );
}

 