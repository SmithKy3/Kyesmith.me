import * as React from 'react';
import { DefaultLayout } from '@layouts/default';
import * as HomeSections from '@/src/components/page-sections/Home';

const Home: React.FC<{}> = () => {

  return (
    <DefaultLayout pageName="home">

      <HomeSections.Bio />

      <HomeSections.SkillSetCarousel />

      <HomeSections.WorkCards />

    </DefaultLayout>
  );
};

export default Home;