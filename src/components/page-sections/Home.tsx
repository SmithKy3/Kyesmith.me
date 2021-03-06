import * as React from 'react';
import styled from 'styled-components';
import { FancyContainer } from '@/src/components/FancyContainer';
import { Carousel, CarouselProps } from '@/src/components/Carousel';
import { FileEarmarkPerson } from '@styled-icons/bootstrap'
import { Github, Linkedin, Html5, Css3, Javascript, Typescript, Sass, ReactLogo, VueDotJs, Webpack, Bigcommerce } from '@styled-icons/simple-icons';
import myWorkCards from '@assets/my-work-cards.json';
import viewCursor from '@assets/images/view.png';

//------------------------------------------
// Bio / intro components
//------------------------------------------
const BioContainer = styled(FancyContainer)`
  width: 100%;
  height: max-content;
  margin: 1rem auto 0;
  padding: 1.5rem 10%;
  border-radius: 5px;

  > p {
    width: max-content;
    max-width: 100%;
    height: max-content;
    margin: 0 auto 1rem;
    color: var(--color--main);
    font-size: 20px;
    font-family: ${props => props.theme.fonts.openSans};

    &:last-of-type {
      margin: 0 auto; 
    }

    a {
      padding: 0 .5rem;
      text-decoration: none;
      background-color: var(--color--main);
      color: var(--color--background);
      transition: background-color .3s;

      &:hover {
        background-color: var(--color--accent);
      }
    }

    svg {
      width: 20px;
      height: 20px;
      margin-left: 2px;
      fill: var(--color--background);
    }
  }
`;

export const Bio: React.FC<{}> = () =>  {
  return (
    <BioContainer>
      <p>Frontend web developer specialising in React and Typescript but moving towards a full-stack skill-set. Currently working for an eCommerce agency in Birmingham, UK, specifically on the BigCommerce platform. Also likes to play with Rubik's cubes.</p>
      <p>You can find my CV <a href="/CV.pdf" target="_blank">here <FileEarmarkPerson /></a>,</p>
      <p> my Github <a href="https://github.com/SmithKy3" target="_blank">here <Github /></a>,</p>
      <p>and my LinkedIn <a href="https://uk.linkedin.com/in/kye-smith-121429165" target="_blank">here <Linkedin/></a></p>
    </BioContainer>
  );
}

//------------------------------------------
// Skill-set carousel components
//------------------------------------------
const CarouselContainer = styled(FancyContainer)`
  width: 100%;
  height: max-content;
  margin: 3rem auto;
  padding: 1.5rem 10% 3rem;
  border-radius: 5px;

  > h2 {
    width: 100%;
    margin: 0 auto .5rem;
    color: var(--color--main);
    text-align: center;
    font-size: 24px;
  }

  > h3 {
    width: 30% auto;
    margin: 0 auto 1rem;
    color: var(--color--main);
    text-align: center;
    font-size: 12px;
    font-weight: 200;
  }

  .carousel svg {
    fill: var(--color--main);
  }
`;

const skillIcons = [
  Html5,
  Css3,
  Javascript,
  Typescript,
  Sass,
  ReactLogo,
  VueDotJs,
  Webpack,
  Bigcommerce
];

const skillSetCarouselProps: CarouselProps = {
  name: 'skill-set',
  cardsToShow: 4,
  cardsToScroll: 4,
};

export const SkillSetCarousel: React.FC<{}> = () => {
    return (
        <CarouselContainer>
          <h2>My primary skill-set</h2>
          <h3>(including but not limited to)</h3>
          <Carousel {...skillSetCarouselProps}>
            {skillIcons.map((Icon, index) => <Icon key={`skill-set-carousel-icon-${index}`} />)}
          </Carousel>
      </CarouselContainer>
    );
};

//------------------------------------------
// Work cards / links components
//------------------------------------------
const WorkCardsSection = styled.section`
  width: 100%;
  height: max-content;
`;

const WorkTitle = styled.h2`
  color: var(--color--main);
  text-align: center;
  font-size: 30px;
  margin: 0 auto 1.5rem;
`;

const WorkCardsContainer = styled.div`
  width: 100%;
  height: max-content;
  column-count: 1;
  
  @media (min-width: ${props => props.theme.screenSizes.small}) {
    column-count: 2;
    column-gap: 1rem;
  }
`;

const WorkCardWrapper = styled.article`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  background-color: transparent;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%);
    border: 2px solid var(--color--main);
    border-radius: 5px;
  }

  > a {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 5% 2.5%;
    text-decoration: none;
    cursor: url('${viewCursor}') 32 16, pointer;
  }

  h3 {
    display: block;
    width: max-content;
    margin: 0 auto 2rem;
    text-align: center;
    padding-bottom: 1px;
    border-bottom: solid 1px var(--color--accent);
    color: var(--color--main);
  }
  
  img {
    display: block;
    width: 75%;
    margin: 0 auto 1rem;
  }

  p {
    display: block;
    width: 75%;
    margin: 0 auto;
    color: var(--color--main);
  }
`;

interface WorkCardProps {
  card: typeof myWorkCards[number];
}

const WorkCard: React.FC<WorkCardProps> = (props) => {
  const { card } = props;
  const src = require(`@assets/images/${card.imgName}`);

  return (
    <WorkCardWrapper>
      <a href={`/my-work/${card.slug}`}>
        <h3>{card.title}</h3>
        <img src={src} alt={card.title} />
        <p>{card.description}</p>
      </a>
    </WorkCardWrapper>
  );
}

export const WorkCards: React.FC<{}> = () => {
  return (
    <WorkCardsSection id="my-work">
      <WorkTitle>My Work:</WorkTitle>
      <WorkCardsContainer>
        {myWorkCards.map((card, index) => <WorkCard card={card} key={`work-card-${index + 1}`} />)}
      </WorkCardsContainer>
    </WorkCardsSection>
  );
}