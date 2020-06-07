import React from 'react';

import './AboutConnecDevelopers.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import ArticlePage from '../../Components/ArticlePage/ArticlePage'

import { Title, SubTitle, Text, LinkReference } from '../../Components/TextContent/TextContent'

export default function AboutConnecDevelopers() {
  return (
    <CreatePage name="AboutConnecDevelopersPage">
      <ArticlePage title={<>
        <LinkReference title="AboutConnecDevelopers">
          Sobre ConnecDevelopers
        </LinkReference>
        <LinkReference title="whoWeAre">
            Quem Somos?
        </LinkReference>
        <LinkReference title="whatWeDo">
          O que fazemos?
        </LinkReference>
      </>}>
      <Title title="AboutConnecDevelopers">
         Sobre ConnecDevelopers
      </Title>
      <SubTitle title="whoWeAre">
        Quem Somos?
      </SubTitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
      </Text>
      <SubTitle title="whatWeDo">
        O que fazemos?
      </SubTitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
      </Text>
    </ArticlePage>
  </CreatePage>
  );
}

