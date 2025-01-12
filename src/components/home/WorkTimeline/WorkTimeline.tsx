import React, { CSSProperties, useMemo } from 'react';

import {
  rem,
  Text,
  Timeline,
  TimelineItem,
  TimelineItemProps,
} from '@mantine/core';
import {
  IconCpu,
  IconDeviceImacCode,
  IconMathSymbols,
} from '@tabler/icons-react';

import { M3terIcon } from '@/components/home/M3terIcon';

import styles from './WorkTimeline.module.css';

interface WorkTimelineBulletProps extends Omit<TimelineItemProps, 'bullet'> {
  icon: React.FC<{ style?: CSSProperties }>;
}

const BULLET_SIZE = 40;
const BULLET_ICON_SIZE = 24;

const WorkTimelineItem: React.FC<WorkTimelineBulletProps> = ({
  children,
  icon: Icon,
  ...props
}) => {
  const iconStyles = useMemo(
    () => ({
      width: rem(BULLET_ICON_SIZE),
      height: rem(BULLET_ICON_SIZE),
    }),
    [],
  );
  return (
    <TimelineItem
      bullet={
        <div className={styles.itemBullet}>
          <Icon style={iconStyles} />
        </div>
      }
      classNames={{
        itemTitle: styles.itemTitle,
      }}
      {...props}
    >
      {children}
    </TimelineItem>
  );
};

export const WorkTimeline: React.FC = () => {
  return (
    <Timeline active={4} bulletSize={BULLET_SIZE}>
      <WorkTimelineItem
        icon={M3terIcon}
        lineVariant="dashed"
        title="May 2021 - Now"
      >
        <Text c="dimmed">
          <a href="https://m3ter.com">m3ter</a>
        </Text>
        <Text>
          At m3ter, we&apos;re building a platform which allows businesses to
          deploy, manage and bill on usage-based pricing models. I&apos;m
          helping to ensure our users can manage their m3ter configuration
          easily, and can digest the massive amount of data and tangential
          information that comes with UBP.
        </Text>
      </WorkTimelineItem>
      <WorkTimelineItem
        icon={IconDeviceImacCode}
        lineVariant="dashed"
        title="September 2020 - May 2021"
      >
        <Text c="dimmed">5874 Commerce</Text>
        <Text c="inreit">
          5874 are a great set of chaps based in Birmingham. Their focus is on
          designing & building bespoke BigCommerce themes and apps but
          they&apos;re also known to build almost anything else. I spent some
          time here dipping my toes in the world of eCommerce.
        </Text>
      </WorkTimelineItem>
      <WorkTimelineItem
        icon={IconMathSymbols}
        lineVariant="dashed"
        title="August 2019 - May 2021"
      >
        <Text c="dimmed">Wren Kitchens</Text>
        <Text>
          Wren have built their own web app which is used by every single one of
          their kitchen designers around the world. It allows these designers to
          drag-n-drop kitchen elements (units, worktops, plinths etc.) onto a
          to-scale model of the customers&apos; kitchen with constant checks
          running to highlight any issues or incompatabilities, all while
          building up an order sheet for the kitchen design. I helped update
          several parts of it as my introduction to JavaScript / TypeScript. A
          cracking start.
        </Text>
      </WorkTimelineItem>
      <WorkTimelineItem
        icon={IconCpu}
        lineVariant="dashed"
        title="September 2014 - August 2019"
      >
        <Text>University of Sheffield</Text>
        <Text>BEng, Electronic Engineering</Text>
      </WorkTimelineItem>
    </Timeline>
  );
};
