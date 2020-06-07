import React from 'react';

//import styles
import './ProgrammingLogic.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import ArticlePage from '../../Components/ArticlePage/ArticlePage'

import { Title, SubTitle, Text, LinkReference } from '../../Components/TextContent/TextContent'


export default function ProgrammingLogic(){
  return(
    <CreatePage name="ProgrammingLogic">
      <ArticlePage title={<>
        <LinkReference title="ProgrammingLogicTitle">
          Lógica de Programação
        </LinkReference>
        <LinkReference title="introduction">
          Introdução
        </LinkReference>
        <LinkReference title="NewSubTitleView">
          New Subtitle view
        </LinkReference>
        <LinkReference title="lorem">
          lorem
        </LinkReference>
      </>}>
        <Title title="ProgrammingLogicTitle">
          Lógica de Programação
        </Title>
        <SubTitle title="introduction">
          Introdução
        </SubTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
        </Text>
        <SubTitle title="NewSubTitleView">
          New Subtitle view
        </SubTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
        </Text>
        <SubTitle title="lorem">
          Lorem
        </SubTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit ac ligula sollicitudin, sit amet ultricies erat lobortis. Ut felis diam, pharetra a viverra eget, molestie eu turpis. Phasellus non ipsum massa. Nullam ligula purus, tempor sed luctus euismod, aliquet condimentum magna. Curabitur faucibus ex et enim lobortis volutpat eu eu enim. Vestibulum tincidunt viverra ipsum vel condimentum. Fusce vulputate condimentum libero vestibulum varius. Pellentesque ut mi tempor nisl elementum hendrerit et sed nisl. Suspendisse molestie suscipit dolor nec ullamcorper. Aliquam quis interdum mi.
        </Text>
      </ArticlePage>
    </CreatePage>
  )
}