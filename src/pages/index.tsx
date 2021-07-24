import React from 'react';
import { NextLayoutPage } from 'next';
import Head from 'next/head';


import { DefaultLayout } from 'components/layouts/Default';
import * as HomeSections from 'components/page-sections/Home';

const Home: NextLayoutPage = () => {

  return (
    <>
      <Head>
        <title>Kye Smith - Web Developer</title>
        <meta name="description" content="Kye Smith's Web Developer Portfolio" />
        <meta name="keywords" content="kye,smith,web,developer,frontend,nextjs,react,mdx" />
      </Head>

      <HomeSections.Bio />

      <HomeSections.SkillSetCarousel />

      <HomeSections.WorkCards />
    </>
  );
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>
export default Home;