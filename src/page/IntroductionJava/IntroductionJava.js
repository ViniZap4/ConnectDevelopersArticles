import React from 'react';

import './IntroductionJava.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import ArticlePage from '../../Components/ArticlePage/ArticlePage'

import { Title, SubTitle, Text, LinkReference } from '../../Components/TextContent/TextContent'

export default  function IntroductionJava() {
  return (
    <CreatePage name="JavaPage">
      <ArticlePage title={<>
        <LinkReference title="IntroductioJava">
        Introduçâo a Java
        </LinkReference>
        <LinkReference title="SubTitleView">
          O que é Java?
        </LinkReference>
        <LinkReference title="NewSubTitleView">
          Caracteristicas
        </LinkReference>
        <LinkReference title="NewSubTitleView2">
          Importância do Java
        </LinkReference>
        <LinkReference title="NewSubTitleView3">
          Visão geral
        </LinkReference>
        <LinkReference title="NewSubTitleView4">
          linguagem Java
        </LinkReference>
        <LinkReference title="NewSubTitleView5">
          Como funciona a JVM
        </LinkReference>
        <LinkReference title="NewSubTitleView6">
          Ambiente
        </LinkReference>
      </>}>
      <Title title="IntroductioJava">
        Introduçâo a Java
      </Title>
      <SubTitle title="SubTitleView">
        O que é Java?
      </SubTitle>
      <Text>
        Originalmente desenvolvida por uma equipe de desenvolvedores liderada por James Gosling na Sun Microsystems (atualmente de propriedade da Oracle) e lançada em 1995, o Java é uma linguagem de programação orientada a objetos que atualmente faz parte do núcleo da Plataforma Java. Por se tratar de uma linguagem High Level (Muito parecida com a linguagem humana) e por rodar em tudo quanto é tipo de buginganga tecnologica, o java esta presente em quase tudo que usamos, apps, dvds blyrays, aparelhos de som, brinquedos, despertadores e muitas coisas que tambem possuem uma telinha.
      </Text>
      <SubTitle title="NewSubTitleView">
        Quais as caracteristicas do Java?
      </SubTitle>
      <Text>
       Simples -> O Java oferece a funcionalidade de uma linguagem bastante potente, derivada de C e C ++, porém, sem os recursos confusos e pouco utilizados desses.
      </Text>
      <Text>
       Orientado a Objetos -> Modelo orientado a objetos (também conhecido pela sigla do inglês, POO) é um dos estilos de programação mais populares. Ele permite desenhar o software para que os diferentes tipos de dados utilizados sejam vinculados às suas operações.
      </Text>
      <Text>
        Distribuído -> Java fornece uma grande biblioteca padrão e ferramentas para que os programas possam ser distribuídos.
      </Text>
      <Text>
        Seguro e Sólido -> Proporciona uma plataforma segura para desenvolver e executar aplicativos que gerenciam automaticamente a memória, fornece canais de comunicação seguros, protegendo a privacidade dos dados e, por ter uma sintaxe rigorosa, evita a quebra de código, ou seja, não permite sua corrupção.
      </Text>
      <Text>
        Multi-Thread -> O Java consegue executar várias tarefas simultaneamente dentro do mesmo programa. Isso permite melhorar o desempenho e a velocidade de execução.
      </Text>
      <SubTitle title="NewSubTitleView2">
        Qual é a importância do Java na programação?
      </SubTitle>
      <Text>
        Essa linguagem permite desenhar softwares que podem ser executados e distribuídos em diferentes plataformas (MAC, Linux, Windows etc.), sem a necessidade de modificá-los e, inclusive, sem pensar na arquitetura da máquina.
      </Text>
      <Text>
        Tudo isso graças ao Java Virtual Machine, uma máquina virtual que cria uma ponte entre o aplicativo e o hardware do dispositivo.
      </Text>
      <SubTitle title="NewSubTitleView3">
        Visão geral da plataforma Java
      </SubTitle>
      <Text>
        A tecnologia Java é usada para desenvolver aplicativos para uma ampla variedade de ambientes, de dispositivos consumidores a sistemas corporativos heterogêneos. Nesta seção, obtenha uma visualização de alto nível da plataforma Java e seus componentes.
      </Text>
      <SubTitle title="NewSubTitleView4">
        A linguagem Java
      </SubTitle>
      <Text>
        Como qualquer linguagem de programação, a linguagem Java tem sua própria estrutura, regras de sintaxe e paradigma de programação. O paradigma de programação da linguagem Java baseia-se no conceito de OOP, que os recursos da linguagem suportam.
      </Text>
      <Text>
        A linguagem Java deriva da linguagem C, portanto suas regras de sintaxe assemelham-se às regras de C. Por exemplo, os blocos de códigos são modularizados em métodos e delimitados por chaves e variáveis são declaradas antes que sejam usadas.
      </Text>
      <Text>
        Estruturalmente, a linguagem Java começa com pacotes. Um pacote é o mecanismo de namespace da linguagem Java. Dentro dos pacotes estão as classes e dentro das classes estão métodos, variáveis, constantes e mais. Neste tutorial você aprende sobre as partes da linguagem Java.
      </Text>
      <SubTitle title="NewSubTitleView5">
        Como funciona a JVM
      </SubTitle>
      <Text>
        No tempo de execução, a JVM lê e interpreta arquivos .class e executa as instruções do programa na plataforma de hardware nativa para qual a JVM foi escrita. A JVM interpreta o bytecode como uma CPU interpretaria instruções de linguagem assembly. A diferença é que a JVM é uma parte do software escrita especificamente para uma determinada plataforma. A JVM é o núcleo do princípio “gravação única, execução em qualquer local” da linguagem Java. Seu código pode executar em qualquer chipset para o qual a implementação da JVM adequada está disponível. JVMs estão disponíveis para principais plataformas, como Linux e Windows, e subconjuntos de linguagem Java foram implementados nas JVMs para telefones celulares e chips hobbyist.
      </Text>
      <SubTitle title="NewSubTitleView6">
        Configurando seu ambiente de desenvolvimento Java
      </SubTitle>
      <Text>
        Antes de tudo você vai precisar fazer o download da JDK que esta disponivel no site da oracle<a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"> aqui</a>
      </Text>
      <Text>
        Agora, baixe o <a href="https://spring.io/tools">eclipse</a>
      </Text>
      <Text>
        Agora que você baixou o eclipse, vamos configura-lo:
      </Text>
      <Text>
        • Ative o Eclipse clicando duas vezes em eclipse.exe (ou no executável equivalente em sua plataforma).
        <p></p>
        • Clique em Janela > Preferências > Java > JREs instalados. Figura 1 mostra esta seleção destacada na janela de configuração do Eclipse para o JRE.
      </Text>
      <Text>
        • O Eclipse aponta para um JRE instalado. Você deve usar o JRE que transferiu por download com o JDK. Se o Eclipse não detectar automaticamente o JDK instalado, clique em Incluir… e, na próxima caixa de diálogo, clique em VM padrão e clique em Avançar.
      </Text>
      <Text>
        • Especifique o diretório inicial do JDK (como C:\home\jdk1.8.0_60 em Windows) e clique em Concluir.
      </Text>
      <Text>
        Agora que seu ambiente esta pronto, explore seu novo mundo!
      </Text>
      </ArticlePage>
    </CreatePage>
  );
}

