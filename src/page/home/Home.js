import React from 'react';

//import styles
import './Home.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import { Title, SubTitle, Text } from '../../Components/TextContent/TextContent'
import ArticleItem from '../../Components/ArticleItem/ArticleItem'


export default function Home(){
  return(
    <CreatePage name="Home">
      <Title style={{textDecoration:"none"}}>
        Bem-Vindo à ConnectDevelopers
      </Title>
      <div className="HomeArticles">
        <SubTitle>
          Artigos recentes:
        </SubTitle>
        <div className="articlesArea">
          <ArticleItem title="Lógica de programação" href="/ProgrammingLogic"> 
            <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
          </ArticleItem>
          <ArticleItem title="Poo" href="/POO"> 
            <Text> Entenda mais sobre Poo - programação oriatada a objeto. </Text>
          </ArticleItem>
          <ArticleItem title="Introduçâo a Java" href="/IntroductionJava"> 
            <Text> Introduçâo a java, Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
          </ArticleItem>
          <ArticleItem title="Title Test View" href="/ProgrammingLogic"> 
            <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
          </ArticleItem>
          <ArticleItem title="Title Test View" href="/ProgrammingLogic"> 
            <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
          </ArticleItem>
          <ArticleItem title="Sobre ConnecDevelopers" href="/AboutConnecDevelopers"> 
            <Text> Quem Somos?, O que fazemos?, entenda mais sobre nós. </Text>
          </ArticleItem>  
        </div>
      </div>
    </CreatePage>
  )
}