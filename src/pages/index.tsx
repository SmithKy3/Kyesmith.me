import * as React from 'react';
import { DefaultLayout } from '@layouts/default';
import { Helmet } from 'react-helmet';
import * as HomeSections from '@/src/components/page-sections/Home';

const Home: React.FC<{}> = () => {

  return (
    <DefaultLayout pageName="home">
      <Helmet
          htmlAttributes={{
              lang: 'en',
          }}
      >
        <title>Kye Smith - Web Developer</title>
        <meta name="description" content="Kye Smith's Web Developer Portfolio" />
        <meta name="keywords" content="kye,smith,web,developer,frontend,gatsby,react,mdx" />
      </Helmet>

      <HomeSections.Bio />

      <HomeSections.SkillSetCarousel />

      <HomeSections.WorkCards />

    </DefaultLayout>
  );
};

export default Home;