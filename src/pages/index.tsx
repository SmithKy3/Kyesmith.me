import React, { useMemo } from 'react';
import { NextLayoutPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { FileEarmarkPerson } from '@styled-icons/bootstrap';
import {
  Github,
  Linkedin,
  Html5,
  Css3,
  Javascript,
  Typescript,
  Sass,
  ReactLogo,
  Redux,
  Reduxsaga,
  Webpack,
  Bigcommerce,
} from '@styled-icons/simple-icons';

import { FancyContainer } from 'components/common/FancyContainer';
import { Carousel } from 'components/common/Carousel';
import { DefaultLayout } from 'components/layouts/Default';

import {
  bioContainerStyles,
  carouselContainerStyles,
  myWorkCardsContainerStyles,
  myWorkSectionTitleStyles,
  workCardStyles,
} from 'assets/css-in-js/pages/home';
import myWorkCards from 'assets/my-work-cards.json';

interface WorkCardProps {
  card: typeof myWorkCards[number];
}

const BioContainer = styled(FancyContainer)`
  ${bioContainerStyles}
`;

const CarouselContainer = styled(FancyContainer)`
  ${carouselContainerStyles}
`;

const MyWorkSectionTitle = styled.h2`
  ${myWorkSectionTitleStyles}
`;

const MyWorkorkCardsContainer = styled.div`
  ${myWorkCardsContainerStyles}
`;

const WorkCardContainer = styled.article`
  ${workCardStyles}
`;

const WorkCard: React.FC<WorkCardProps> = (props) => {
  const { card } = props;

  return (
    <WorkCardContainer>
      <a href={`/my-work/${card.slug}`}>
        <h3>{card.title}</h3>
        <img src={`/img/${card.imgName}`} alt={card.title} />
        <p>{card.description}</p>
      </a>
    </WorkCardContainer>
  );
};

const Home: NextLayoutPage = () => {
  const skillsIcons = useMemo(
    () => [
      Html5,
      Css3,
      Javascript,
      Typescript,
      Sass,
      ReactLogo,
      Redux,
      Reduxsaga,
      Webpack,
      Bigcommerce,
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Kye Smith - Web Developer</title>
        <meta
          name="description"
          content="Kye Smith's Web Developer Portfolio"
        />
        <meta
          name="keywords"
          content="kye,smith,web,developer,frontend,nextjs,react,mdx"
        />
      </Head>

      <BioContainer>
        <p>
          Frontend developer specialising in Typescript, React & Redux.
          Currently based in Derby, UK, working remotely for an exciting B2B
          SaaS startup. Also likes to play with Rubik's cubes.
        </p>
        <p>
          You can find me on{' '}
          <a href="https://github.com/SmithKy3" target="_blank">
            Github <Github />
          </a>{' '}
          and{' '}
          <a
            href="https://uk.linkedin.com/in/kye-smith-121429165"
            target="_blank"
          >
            LinkedIn <Linkedin />
          </a>
          .
        </p>
        <p></p>
      </BioContainer>

      <CarouselContainer>
        <h2>My favourites:</h2>
        <Carousel name="skills-set" cardsToShow={4} cardsToScroll={4}>
          {skillsIcons.map((Icon, index) => (
            <Icon key={`skill-set-carousel-icon-${index}`} />
          ))}
        </Carousel>
      </CarouselContainer>

      <section style={{ width: '100%', height: 'max-content' }}>
        <MyWorkSectionTitle>My Work:</MyWorkSectionTitle>
        <MyWorkorkCardsContainer>
          {myWorkCards.map((card, index) => (
            <WorkCard card={card} key={`work-card-${index + 1}`} />
          ))}
        </MyWorkorkCardsContainer>
      </section>
    </>
  );
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
export default Home;
