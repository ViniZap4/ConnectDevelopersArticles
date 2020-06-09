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
            <Text> O que é Lógica de Programação? , a <b> lógica de programação </b> é a capacidade que todo programador precisa... </Text>
          </ArticleItem>
          <ArticleItem title="Poo" href="/POO"> 
            <Text> Entenda mais sobre Poo - programação oriatada a objeto. </Text>
          </ArticleItem>
          
          <ArticleItem title="Introduçâo a Java" href="/IntroductionJava"> 
            <Text> Originalmente desenvolvida por uma equipe de desenvolvedores liderada por James Gosling na Sun Microsystems... </Text>
          </ArticleItem>
          <ArticleItem title="Sobre ConnecDevelopers" href="/AboutConnectDevelopers"> 
            <Text> Quem Somos?, O que fazemos?,...  <br /> entenda mais sobre nós. </Text>
          </ArticleItem>  
        </div>
      </div>
    </CreatePage>
  )
}