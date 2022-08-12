import React, { useCallback, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

import { LegacyComponentCard } from '@/components/LegacyComponentCard/LegacyComponentCard';

import { FancyContainer } from '@/components/FancyContainer';
import FancyContainerRaw from '@/components/FancyContainer/FancyContainer?raw';
import { NoisyTerrainCanvas } from '@/components/NoisyTerrainCanvas';
import NoisyTerrainCanvasRaw from '@/components/NoisyTerrainCanvas/NoisyTerrainCanvas?raw';
import { NoisyDonutCanvas } from '@/components/NoisyDonutCanvas';
import NoisyDonutCanvasRaw from '@/components/NoisyDonutCanvas/NoisyDonutCanvas?raw';

import styles from './Components.module.scss';

export const Components: React.FC = () => {
  const [isTerrainCanvasPlaying, setTerrainCanvasPlaying] = useState(true);
  const toggleTerrainCanvasPlaying = useCallback(() => {
    setTerrainCanvasPlaying((currentValue) => !currentValue);
  }, []);
  const [isDonutCanvasPlaying, setDonutCanvasPlaying] = useState(true);
  const toggleDonutCanvasPlaying = useCallback(() => {
    setDonutCanvasPlaying((currentValue) => !currentValue);
  }, []);

  return (
    <React.Fragment>
      <h2 className={styles.heading}>Legacy Components</h2>
      <p className={styles.description}>
        A collection of react components I no longer use but have kept around
        for some reason or another.
      </p>
      <div className={styles.cardsWrapper}>
        <LegacyComponentCard
          componentCode={NoisyTerrainCanvasRaw}
          componentCodeLink="https://github.com/SmithKy3/Kyesmith.me/tree/master/src/components/NoisyTerrainCanvas/NoisyTerrainCanvas.tsx"
          componentDemo={
            <div className={styles.canvasDemoWrapper}>
              <button
                className={styles.canvasDemoPlayButton}
                onClick={toggleTerrainCanvasPlaying}
              >
                {isTerrainCanvasPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <NoisyTerrainCanvas isPlaying={isTerrainCanvasPlaying} />
            </div>
          }
          title="NoisyTerrainCanvas"
          description="I've recently being getting to grips with ThreeJS and ended up making this funky
            terrain canvas thing , using brownian noise to get the smooth passing-by effect."
        />
        <LegacyComponentCard
          componentCode={NoisyDonutCanvasRaw}
          componentCodeLink="https://github.com/SmithKy3/Kyesmith.me/tree/master/src/components/NoisyDonutCanvas/NoisyDonutCanvas"
          componentDemo={
            <div className={styles.canvasDemoWrapper}>
              <button
                className={styles.canvasDemoPlayButton}
                onClick={toggleDonutCanvasPlaying}
              >
                {isDonutCanvasPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <NoisyDonutCanvas isPlaying={isDonutCanvasPlaying} />
            </div>
          }
          title="NoisyDonutCanvas"
          description="This one's similar to above really, another wiggly thing. Again, with maths,
            but a different shape this time."
        />
        <LegacyComponentCard
          componentCode={FancyContainerRaw}
          componentCodeLink="https://github.com/SmithKy3/Kyesmith.me/tree/master/src/components/FancyContainer/FancyContainer.tsx"
          componentDemo={
            <div className={styles.fancyContainerDemoWrapper}>
              <FancyContainer className={styles.fancyContainerDemo}>
                Is it fancy?
              </FancyContainer>
            </div>
          }
          title="FancyContainer"
          description="Terrible naming I know. I can't quite remember the original idea behind this but basically,
            it's a generic wrapper div with a slightly annoying shadow that you can never catch. It works much better on a
            PC/laptop since it continuously updates based on the mouse's position. If you're on a mobile,
            tap around the screen and you should see the shadow bounce around."
        />
        {/* Need to do some tidying up of this one ¯\_(ツ)_/¯
        <LegacyComponentCard
          componentCode={CarouselRaw}
          componentCodeLink="https://github.com/SmithKy3/Kyesmith.me/tree/master/src/components/Carousel/Carousel.tsx"
          componentDemo={
            <Carousel name="carousel-demo" cardsToScroll={1} cardsToShow={3}>
              <FaJs width="20px" />
              <FaDev width="20px" />
              <FaCss3 width="20px" />
              <FaFirstOrder width="20px" />
              <FaReact width="20px" />
              <FaRebel width="20px" />
            </Carousel>
          }
          title="Carousel"
          description="While working on eCommerce sites a lot,
          I got pretty tired of running into different issues every time
          I used a new react carousel library, so I thought I'd try to
          build my own carousel component. It definitely gave me an appreciation
          for the amount of things that need to be considered for what seems
          like a simple piece of UI."
        /> */}
      </div>
    </React.Fragment>
  );
};
