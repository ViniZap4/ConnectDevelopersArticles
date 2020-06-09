import React from 'react';

//import styles
import './ProgrammingLogic.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import ArticlePage from '../../Components/ArticlePage/ArticlePage'

import { Title, SubTitle, Text, LinkReference } from '../../Components/TextContent/TextContent'


export default function ProgrammingLogic(){
  let spacing = "3.6vmin"
  
  return(
    <CreatePage name="ProgrammingLogic">
      <ArticlePage title={<>
        <LinkReference title="ProgrammingLogicTitle">
          Lógica de <br /> Programação
        </LinkReference>
        <LinkReference title="introduction">
          O que é?
        </LinkReference>
        <LinkReference title="NewSubTitleView">
          Como é utilizada?
        </LinkReference>
        <LinkReference title="steps">
          suas etapas
        </LinkReference>
        <LinkReference title="conclusion">
          conclusão
        </LinkReference>
      </>}>
        <Title title="ProgrammingLogicTitle">
          Lógica de Programação
        </Title>
        <SubTitle title="introduction">
          O que é Lógica de Programação?
        </SubTitle>
        <Text>
          A <b> lógica de programação </b> é a capacidade que todo programador precisa ter para resolver os problemas que aparecem no dia-a-dia. A capacidade de dividir o problema em partes menores é uma etapa <b> essencial da lógica  de programação </b> e precisa ser levada em consideração quando nos deparamos com qualquer exercício/desafio. É nesse ponto que entra o conceito de <b> algoritmo</b>, descrito, geralmente, como uma sequência lógica de ações capaz de resolver um problema.        
        </Text>
        <Text>
          À princípio, um algoritmo nada mais é do que uma receita que mostra passo a passo os procedimentos necessários para resolução de uma tarefa. Ele não responde à pergunta: "o que fazer?", mas sim "como fazer". Em termos mais técnicos, <b>um algoritmo é uma sequência lógica</b>, finita e definida de instruções que devem ser seguidas para resolver um problema ou executar uma tarefa. Embora não percebamos, utilizamos algoritmo de forma intuitiva e auto diariamente quando executamos tarefas comuns, passando totalmente despercebido, porém estando presente o tempo todo, como é o caso de trocar uma lâmpada.
        </Text>
        <Text>
          A maioria dos algoritmos, obviamente, será mais complexa do que simplesmente “mascar um chiclete” ou “fazer um bolo”. No caso da computação, uma soma de dois números é o exemplo mais clássico de um <b>algoritmo simples</b>.
        </Text>

        <SubTitle title="NewSubTitleView">
          Como é utilizada?
        </SubTitle>
        <Text>
          A lógica de um sistema é estruturada por sequências de ações que são executadas sobre dados, a fim de transformá-los em informações que gerem valor. Essas regras são estabelecidas por modelos de negócio, que podem ser:
        </Text>
        <Text spacing={spacing}>
          • regras para o cadastro em uma universidade;
        </Text>
        <Text spacing={spacing}>
          • preferências para que uma rede social atualize seu feed de notícias;
        </Text>
        <Text spacing={spacing}>
          • etapas para a realização de uma transação bancária;
        </Text>
        <Text spacing={spacing} >
          • perguntas que levam um paciente a indicar os sintomas de uma doença etc.
        </Text>
        <Text>
          Quaisquer regras seguidas pelas pessoas em sociedade ou leis da natureza podem ser convertidas em algoritmos, desde que sejam bem conhecidas e que se tenha modelos capazes de levar à reprodução de resultados semelhantes com base em dados de entrada em comum.
        </Text>
        <Text>
          Para definir um fluxo de informação de maneira lógica em um algoritmo, temos as seguintes ferramentas:
        </Text>
        <Text spacing={spacing}>
          • Estruturas de controle: determinam se uma ação pode ou não ocorrer. Por exemplo: um carro trafega por uma via e encontra um semáforo. Se o sinal estiver vermelho, ele deve parar. Se estiver verde, ele pode seguir. Se estiver amarelo, deve reduzir a velocidade ou avançar, caso esteja próximo o suficiente do semáforo para passar por ele antes de fechar.
        </Text>
        <Text spacing={spacing}>
          • Laço de repetição: determina uma condição para que uma ação seja repetida. Uma vez encontrada, ela deve ser interrompida. Exemplo: dirija até chegar à faculdade.
        </Text>
        <Text spacing={spacing} >
          • Armazenamento de dados: {/* <a target="_blank" rel="noopener" title="curso impacta sobro banco de dados" href="https://www.impacta.com.br/blog/2017/01/06/voce-sabe-o-que-e-banco-de-dados/"> */}bancos de dados {/*</a>*/}, arquivos de texto, memórias de dispositivos eletrônicos etc.
        </Text>
        <Text spacing={spacing}>
          • Tipos de dados: categorização das informações, que indicam como deverão ser processadas. Por exemplo, como texto, números inteiros ou frações.
        </Text>
        <Text spacing={spacing}>
          • Variáveis: são estruturas análogas às variáveis que se aprende em matemática: “x = 2", "x = y”. São utilizadas para armazenar os valores de dados enquanto são trabalhados pelo algoritmo.
        </Text>
        <Text>
          Aprender lógica de programação é o primeiro passo para se tornar um desenvolvedor de sistemas. A partir daí, você passa a estar preparado para aprender uma ou mais linguagens, preferencialmente aquela(s) mais apropriada(s) para o tipo de aplicativo que deseja desenvolver (como web, mobile, desktop, sistemas embarcados). Existem diversos cursos livres para isso, o que ajuda a melhorar o seu currículo e a ter mais chances de participar de processos seletivos para estágios e empregos em TI.
        </Text>
        
        <SubTitle title="steps">
          Etapas da Lógica de Programação
        </SubTitle>
        <Text>
          Nossa metodologia é constituída por 5 etapas: a primeira compreende o que é um algoritmo, mostrando que é uma sequência de instruções finita e ordenada de forma lógica para a resolução de uma determinada tarefa ou problema. Além de mostrar exemplos de algoritmos instruções de montagem, receitas, manuais de uso etc.
        </Text>
        <Text>
          A segunda etapa mostrará exemplos de constantes e variáveis e aprofundando mais sobre o assunto (sendo dado que não sofre nenhuma variação durante todo o algoritmo).
        </Text>
        <Text>
          A terceira etapa falará sobre os operadores aritméticos que são empregados com muita frequência em programação. É com o seu uso (muitas vezes da combinação de vários deles) é que são feitas as tarefas mais comuns de processamento de dados.
        </Text>
        <SubTitle title="conclusion">
          Concluindo
        </SubTitle>
        <Text>
          Estudar lógica de programação não consiste em decorar diferentes algoritmos para resolução de problemas, pois é impossível decorar todos os algoritmos para a resolução de todos os problemas no mundo. Muitas vezes, um mesmo problema, inclusive, pode ser resolvido de maneiras diferentes. A maneira de resolução pode até variar com o estilo de codificação que estivermos utilizando: certamente, você resolveria um problema de uma determinada maneira se estivesse utilizando a orientação a objetos, por exemplo.
        </Text>
        <Text>
          Mas a resolução desse mesmo problema poderia ser completamente diferente se você estivesse utilizando o paradigma funcional... embora provavelmente você vá escrever código de duas maneiras completamentediferentes nessa situação, ambas estão corretas se elas estiverem resolvendo o problema proposto.
        </Text>
        <Text>
          É importante ressaltar que, para resolvermos diferentes problemas através dos computadores, nós precisamos desenvolver algoritmos coesos, estruturados e dedicados para a resolução de um determinado problema. Para que sejamos capazes de desenvolver estes algoritmos, precisamos desenvolver uma capacidade analítica muito mais apurada, capacidade esta que irá nos dar a habilidade para resolvemos praticamente qualquer tipo de problema que enfrentarmos em nosso dia a dia como profissionais da área de TI. O estudo da lógica de programação verdadeira visa na verdade justamente o desenvolvimento destas habilidades analíticas e de organização dos fluxos de pensamento.
        </Text>
      </ArticlePage>
    </CreatePage>
  )
}