import React, { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { Card } from '@/components/Card/Card';
import { BlockLink } from '@/components/BlockLink/BlockLink';

import styles from './Projects.module.scss';

interface ProjectCardProps {
  body: React.ReactNode;
  heading: string;
  imgName: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  body,
  heading,
  imgName,
}) => (
  <Card className={styles.projectCard}>
    <img className={styles.projectCardImage} src={`/img/${imgName}`} />
    <h3 className={styles.projectCardHeading}>{heading}</h3>
    <div className={styles.projectCardBody}>{body}</div>
  </Card>
);

export const Projects: React.FC = () => (
  <React.Fragment>
    <h2 className={styles.heading}>Personal Projects</h2>
    <p className={styles.description}>
      All the fun little side-projects I've worked on outside of my job.
    </p>
    <motion.div className={styles.projectCardsWrapper}>
      <ProjectCard
        heading="KyeSmith.me"
        imgName="kyesmith.me.png"
        body={
          <p>
            This very website you're looking at was my first ever web
            development project and has been through "a couple" of iterations.
            It started as just a few static HTML &amp; CSS pages. I've written
            it using Vue with Nuxt, React with my own webpack config, Next, CRA
            and now i've settled on React &amp; Vite. Feel free to take a look
            at the{' '}
            <BlockLink
              openInNewTab
              href="https://github.com/SmithKy3/Kyesmith.me"
            >
              repo here
            </BlockLink>
            .
          </p>
        }
      />
      <ProjectCard
        heading="SpaceThing"
        imgName="space-thing.png"
        body={
          <p>
            While in the midst of the Covid-19 lockdown here in the UK, I became
            wierdly interested in orbital mechanics so I decided to try and
            build a universe sandbox / simulator. I'd been working with HTML5
            canvas and vector mathematics a lot at Wren kitchens and naively
            thought it wouldn't be too hard to write a little interactive web
            app that simulates something that resembles gravity. I was very
            wrong but I've got some plans for updates in the future. You can
            view it{' '}
            <BlockLink openInNewTab href="https://space-thing.vercel.app/">
              here
            </BlockLink>
            .
          </p>
        }
      />
      <ProjectCard
        heading="WarpSpeed"
        imgName="warp-speed.png"
        body={
          <p>
            When I was building "SpaceThing", I decided to build a little
            spin-off package that can be used to get the warp-speed effect from
            star wars, again using HTML5 canvas. You can view a demo by going to
            any route that doesn't exist on{' '}
            <BlockLink href="/not/a/real/page">this site</BlockLink> and you can
            find the package up on{' '}
            <BlockLink
              openInNewTab
              href="https://www.npmjs.com/package/warpspeed"
            >
              npm
            </BlockLink>
            .
          </p>
        }
      />
      <ProjectCard
        heading="PhotoFlop"
        imgName="eee-logo-final.png"
        body={
          <p>
            During my final year at Sheffield university, I entered a
            competition to design the EEE (electronic and electrical
            engineering) society's new log. Somehow I won and worked with the
            university design team to get the design ready for use across their
            websites, flyers, clothing etc. You can see the logo on their{' '}
            <BlockLink
              openInNewTab
              href="https://www.sheffield.ac.uk/eee/people/eee-society"
            >
              website
            </BlockLink>
          </p>
        }
      />
    </motion.div>
  </React.Fragment>
);
