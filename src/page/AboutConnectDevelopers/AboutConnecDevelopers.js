import React from 'react';

import './AboutConnectDevelopers.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import ArticlePage from '../../Components/ArticlePage/ArticlePage'

import { Title, SubTitle, Text, LinkReference } from '../../Components/TextContent/TextContent'

export default function AboutConnectDevelopers() {
  return (
    <CreatePage name="AboutConnecDevelopersPage">
      <ArticlePage title={<>
        <LinkReference title="AboutConnectDevelopers">
          Sobre Connect Developers
        </LinkReference>
        <LinkReference title="whoWeAre">
            Quem Somos?
        </LinkReference>
        <LinkReference title="whatWeDo">
          O que fazemos?
        </LinkReference>
      </>}>
      <Title title="AboutConnectDevelopers">
         Sobre ConnectDevelopers
      </Title>
      <SubTitle title="whoWeAre">
        Quem Somos?
      </SubTitle>
      <Text>
        Somos uma equipe que procuramos disponibilizar conceitos em artigos relacionados a programação.
      </Text>
      <SubTitle title="whatWeDo">
        O que fazemos?
      </SubTitle>
      <Text>
        Desenvolvemos uma plataforma de aprendizado para desenvolvedores de sistemas baseando-se nas linguagens de programação aprendidas no decorrer do nosso curso até o momento. Ao final do projeto, a equipe pretende produzir o prototipo de um website didático que servirá de guia para programadores iniciantes e auxiliará o grupo com melhor entendimento das estruturas aprendidas em matérias do presente semestre como a organização e análise de interfaces, entendimento do usuário, divisão do grupo por uma metodologia de negócios (BPM) e organização de um projeto com base nas estruturas da Engenharia de Software.
      </Text>
    </ArticlePage>
  </CreatePage>
  );
}

