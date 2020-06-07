import React from 'react';

import './POO.css'

//import Components
import CreatePage from '../../Components/CreatePage/CreatePage'
import ArticlePage from '../../Components/ArticlePage/ArticlePage'

import { Title, SubTitle, Text, LinkReference } from '../../Components/TextContent/TextContent'

export default function POO() {
  return (
    <CreatePage name="PooPage">
      <ArticlePage title={<>
        <LinkReference title="POO">
          POO - Programação orientada a objeto
        </LinkReference>
        <LinkReference title="First steps">
          Primeiro passos
        </LinkReference>
        <LinkReference title="NewSubTitleView">
          New Subtitle view
        </LinkReference>
      </>}>
      <Title title="POO">
        POO - Programação orientada a objeto
      </Title>
      <SubTitle title="First steps">
        Primeiro passos
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
    </ArticlePage>
  </CreatePage>
  );
}

 