import React from 'react';

import { PageSection } from '@/components/common/PageSection/PageSection';
import { LandingCard } from '@/components/home/LandingCard/LandingCard';
import { WorkTimeline } from '@/components/home/WorkTimeline/WorkTimeline';
import { Rubiks } from '@/components/common/Rubiks/Rubiks';

import styles from './Home.module.css';

export const HomeRoute: React.FC = () => (
  <React.Fragment>
    <PageSection variant="alternate">
      <LandingCard />
    </PageSection>
    <PageSection>
      <WorkTimeline />
    </PageSection>
    <PageSection variant="alternate">
      <Rubiks className={styles.rubiks} />
    </PageSection>
  </React.Fragment>
);
