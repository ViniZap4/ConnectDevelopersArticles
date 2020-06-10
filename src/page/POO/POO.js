import React from 'react';

import './POO.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import ArticlePage from '../../Components/ArticlePage/ArticlePage'

import { Title, SubTitle, Text, LinkReference } from '../../Components/TextContent/TextContent'

export default function POO() {
  let spacing = "3.6vmin"
  
  return (
    
    <CreatePage name="PooPage">
      <ArticlePage title={<>
        <LinkReference title="POO">
          POO
        </LinkReference>
        <LinkReference title="whatIs">
          O que é?
        </LinkReference>
        <LinkReference title="benefits">
          Vantagens
        </LinkReference>
        <LinkReference title="classObjects">
          Classes e objetos
        </LinkReference>
        <LinkReference title="attributeForClass">
          Atributos
        </LinkReference>
        <LinkReference title="heritage">
          Herança
        </LinkReference>
        <LinkReference title="Encapsulation">
          Encapsulamento
        </LinkReference>
        <LinkReference title="Polymorphism">
          Polimorfismo
        </LinkReference>
        <LinkReference title="conclusion">
          Conclusão
        </LinkReference>
      </>}>
      <Title title="POO">
        POO - Programação orientada a objeto
      </Title>
      <SubTitle title="whatIs">
        O que é Programação orientada a objeto
      </SubTitle>
      <Text>
        Programação Orientada a Objetos – POO (Object-Oriented Programming – OOP) é um paradigma de programação que usa tipos de dados personalizados. Em vez de operar apenas com tipos de dados primitivos, podemos construir novos tipos de dados, conforme nossa necessidade. Esses novos tipos de dados, que chamamos de classes, podem conter estruturas semelhantes a funções, denominadas métodos, e variáveis internas, chamadas de atributos. As classes dão origem a objetos, em um processo denominado instanciação.
      </Text>
      <Text>
      Esses novos tipos de dados, que chamamos de <b>classes</b>, podem conter estruturas semelhantes a funções, denominadas <b>métodos</b>, e variáveis internas, chamadas de <b>atributos</b>. As classes dão origem a <b>objetos</b>, em um processo denominado <b>instanciação</b>.
      </Text>
      <SubTitle title="benefits">
        Vantagens da Orientação a Objetos
      </SubTitle>
      <Text spacing={spacing}>
        • Fornece uma estrutura modular para a construção de programas;   
      </Text>
      <Text spacing={spacing}>
        • Objetos podem ser reutilizados em aplicações diferentes;
      </Text>
      <Text spacing={spacing}>
        • O software se torna mais fácil de manter;
      </Text>
      <Text spacing={spacing}>
        • O desenvolvimento é mais rápido, devido ao reuso de código;
      </Text>
      <Text spacing={spacing}>
        • Encapsulamento: não é necessário conhecer a implementação interna de um objeto para poder usá-lo;
      </Text>
      <SubTitle title="classObjects">
        O que são classes e objetos?
      </SubTitle>
      <Text>
        Imagine que você comprou um carro recentemente e decide modelar esse carro usando programação orientada a objetos. O seu carro tem as características que você estava procurando: um motor 2.0 híbridos, azul escuro, quatro portas, câmbio automático etc. Ele também possui comportamentos que, provavelmente, foram o motivo de sua compra, como acelerar, desacelerar, acender os faróis, buzinar e tocar música. Podemos dizer que o carro novo é um objeto, onde suas características são seus atributos (dados atrelados ao objeto) e seus comportamentos são ações ou métodos.
      </Text>
      <Text>
        Seu carro é um objeto seu, mas na loja onde você o comprou existiam vários outros, muito similares, com quatro rodas, volante, câmbio, retrovisores, faróis, dentre outras partes. Observe que, apesar do seu carro ser único (por exemplo, possui um registro único no Departamento de Trânsito), podem existir outros com exatamente os mesmos atributos, ou parecidos, ou mesmo totalmente diferentes, mas que ainda são considerados carros. Podemos dizer então que seu objeto pode ser classificado (isto é, seu objeto pertence à uma classe) como um carro, e que seu carro nada mais é que uma instância dessa classe chamada "carro".
      </Text>
      <Text>
        Assim, abstraindo um pouco a analogia, uma classe é um conjunto de características e comportamentos que definem o conjunto de objetos pertencentes à essa classe. Repare que a classe em si é um conceito abstrato, como um molde, que se torna concreto e palpável através da criação de um objeto. Chamamos essa criação de instanciação da classe, como se estivéssemos usando esse molde (classe) para criar um objeto.
      </Text>
      <SubTitle title="attributeForClass">
        Atributo de Classe
      </SubTitle>
      <Text>
        Atributo de Classe ou Propriedade é uma característica particular de uma ocorrência de uma classe, como por exemplo o nome e a idade de uma pessoa. Existem dois tipos principais de propriedades:
      </Text>
      <Text spacing={spacing}>
        • <b>Estáticas:</b> Mantém o valor durante toda a sua existência. Por exemplo, a data de nascimento de uma pessoa é uma propriedade estática, pois mantém o valor durante toda a existência do objeto instanciado.
      </Text>
      <Text spacing={spacing}>
        • <b>Dinâmicas:</b> Podem ter valores que variam com o passar do tempo. A idade de uma pessoa pode ser considerada um atributo dinâmico, pois pode variar ao longo do tempo.
      </Text>
      <SubTitle title="heritage">
        Herança
      </SubTitle>
      <Text>
        No nosso exemplo, você acabou de comprar um carro com os atributos que procurava. Apesar de ser único, existem carros com exatamente os mesmos atributos ou formas modificadas. Digamos que você tenha comprado o modelo Fit, da Honda. Esse modelo possui uma outra versão, chamada WR-V (ou "Honda Fit Cross Style"), que possui muitos dos atributos da versão clássica, mas com algumas diferenças bem grandes para transitar em estradas de terra: o motor é híbrido (aceita álcool e gasolina), possui um sistema de suspensão diferente, e vamos supor que além disso ele tenha um sistema de tração diferente (tração nas quatro rodas, por exemplo). Vemos então que não só alguns atributos como também alguns mecanismos (ou métodos, traduzindo para POO) mudam, mas essa versão "cross" ainda é do modelo Honda Fit, ou melhor, é um tipo do modelo.
      </Text>
      <Text>
        Quando dizemos que uma classe A é um tipo de classe B, dizemos que a classe A herda as características da classe B e que a classe B é mãe da classe A, estabelecendo então uma relação de <b>herança</b> entre elas. No caso do carro, dizemos então que um Honda Fit "Cross" é um tipo de Honda Fit, e o que muda são alguns atributos (paralama reforçado, altura da suspensão etc), e um dos métodos da classe (acelerar, pois agora há tração nas quatro rodas), mas todo o resto permanece o mesmo, e o novo modelo recebe os mesmos atributos e métodos do modelo clássico.
      </Text>
      <SubTitle title="Encapsulation">
        Encapsulamento
      </SubTitle>
      <Text>
        Encapsulamento é a combinação de atributos e operações dentro de uma classe, deixando visível apenas o que é necessário para a comunicação entre dois objetos, como por exemplo alguns detalhes da implementação ou ainda a lógica de um método.
      </Text>
      <Text>
        O encapsulamento permite ocultar a complexidade do código. Não é necessário entender como a operação funciona para poder utilizá-la. Um exemplo clássico é o de um motorista conduzindo um veículo. O motorista não precisa saber exatamente como um motor funciona internamente para poder dirigir o automóvel – os detalhes da “implementação” do motor ficam ocultos do motorista.
      </Text>
      <Text>
        O encapsulamento protege os dados, permitindo o acesso a eles apenas a partir de métodos específicos e autorizados.
      </Text>
      <Text>
        Desta forma, os objetos encapsulados podem ser comparados uma caixa preta: conhecemos assua interface externa, porém não precisamos nos preocupar com o que acontece internamente na caixa.
      </Text>
      <Text>
        <b>Encapsulamento – Níveis de Acesso</b>
      </Text>
      <Text>
        Há três níveis principais de acesso dos objetos:
      </Text>
      <Text spacing={spacing}>
        • Público
      </Text>
      <Text spacing={spacing}>
        • Privado
      </Text>
      <Text spacing={spacing}>
        • Protegido
      </Text>
      <SubTitle title="Polymorphism">
        Polimorfismo
      </SubTitle>
      <Text>
        A orientação a objetos permite que uma subclasse possa alterar o comportamento / forma como a sua superclasse executa determinada operação, mantendo o nome de operação. Esse princípio é chamado de polimorfismo, visto que essa possiblidade implica em um sistema poder ter múltiplas formas de execução de uma operação que possua a mesma assinatura (declaração do método).
      </Text>
      <Text>
        O exemplo abaixo mostra a capacidade do polimorfismo. A superclasse Figura Geometrica é apenas uma simplificação do objeto real, indicando que toda figura geométrica tem uma quantidade de lados e que toda figura geométrica tem a operação desenha. Entretanto, entende-se que a operação desenha irá modificar o seu comportamento de acordo com o tipo de figura geométrica que estiver sendo desenhada.
      </Text>
      <SubTitle title="conclusion">
        Conclusão
      </SubTitle>
      <Text>
        A linguagem de POO está em nosso dia-a-dia facilitando as nossas vidas. Muitas das vezes estamos desfrutando dos seus benefícios sem mesmo perceber, quando por exemplo:
      </Text>
      <Text>
        Quando falamos ao celular, utilizamos o PC e, até mesmo quando estamos fazendo uma simples compra no supermercado, não temos essa percepção mas, a maioria dos programas instalados nesses equipamentos foi desenvolvido em linguagem de POO. A linguagem de POO possui ainda inúmeras ferramentas e aplicativos facilitadores que interagem ajudando os desenvolvedores e, apresenta aos iniciantes um leque de opções, dando a oportunidade de se identificarem com a linguagem de POO ou de continuar a procurar de uma nova ferramenta de estudo ou de trabalho. A linguagem de POO não significa a reinvenção da roda, mas, a mão na roda para qualquer desenvolvedor.
      </Text>

    </ArticlePage>
  </CreatePage>
  );
}

 