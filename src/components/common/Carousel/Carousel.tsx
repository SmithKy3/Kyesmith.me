import React from 'react';
import { Swipe } from 'helpers/swipe';
import { CarouselCard } from './CarouselCard';
import { debounce } from 'helpers/debounce';
import * as FuzzyMaths from 'helpers/fuzzyMaths';

interface CarouselState {
  cardWidth: number;
  cardPadding: number;
  trackPosition: number;
}

interface CarouselBreakpointData {
  breakpoint: number;
  cardsToShow: number;
  cardsToScroll: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export interface CarouselOptions {
  breakpoints?: CarouselBreakpointData[];
}

export type CarouselProps = Omit<CarouselBreakpointData, 'breakpoint'> & {
  name: string;
  options?: CarouselOptions;
};

enum Directions {
  left = -1,
  right = 1,
}

export class Carousel extends React.Component<CarouselProps, CarouselState> {
  visibleTrackRef: React.RefObject<HTMLDivElement>;
  fullTrackRef: React.RefObject<HTMLDivElement>;
  swipe?: Swipe;
  defaultBreakpoint: CarouselBreakpointData;
  sortedBreakpoints: CarouselBreakpointData[];
  activeBreakpoint: CarouselBreakpointData;

  constructor(props: CarouselProps) {
    super(props);
    this.visibleTrackRef = React.createRef<HTMLDivElement>();
    this.fullTrackRef = React.createRef<HTMLDivElement>();
    this.defaultBreakpoint = {
      breakpoint: 0,
      cardsToScroll: props.cardsToScroll,
      cardsToShow: props.cardsToShow,
      showArrows: props.showArrows !== undefined ? props.showArrows : true,
      showDots: props.showDots !== undefined ? props.showDots : true,
    };
    this.sortedBreakpoints =
      props.options?.breakpoints?.sort((a, b) => a.breakpoint - b.breakpoint) ||
      [];
    this.activeBreakpoint =
      this.sortedBreakpoints.find(
        (entry) => entry.breakpoint >= document.body.clientWidth
      ) || this.defaultBreakpoint;

    this.state = {
      cardWidth: 0,
      cardPadding: 0,
      trackPosition: 0,
    };
  }

  componentDidMount() {
    if (this.visibleTrackRef?.current) {
      this.swipe = new Swipe(this.visibleTrackRef.current);
      this.swipe.onSwipeLeft(() => this.handleControlClick('left'));
      this.swipe.onSwipeRight(() => this.handleControlClick('right'));
    }
    this._setDimensions();
    window.addEventListener('resize', () => this.setDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setDimensions());
  }

  _setDimensions() {
    const visibleTrackContainer = this.visibleTrackRef.current;
    if (!visibleTrackContainer) {
      console.warn(
        `Ref not found for ${this.props.name} carousel container. Exiting sizing handler early.`
      );
      return;
    }

    this.activeBreakpoint =
      this.sortedBreakpoints.find(
        (entry) => entry.breakpoint >= document.body.clientWidth
      ) || this.defaultBreakpoint;
    const visibleTrackWidth = visibleTrackContainer.clientWidth;
    const cardWidth = visibleTrackWidth / this.activeBreakpoint.cardsToShow;
    const cardPadding = cardWidth * 0.1;

    this.setState({
      ...this.state,
      cardWidth,
      cardPadding,
    });
  }
  setDimensions = debounce(this._setDimensions, 100);

  handleControlClick(direction: keyof typeof Directions): void {
    if (!this.fullTrackRef.current) {
      console.warn(
        'Ref not found for carousel tracks. Exiting control hadnler function early.'
      );
      return;
    }

    const directionCoefficient = Directions[direction];
    const newTrackPosition =
      this.state.trackPosition +
      this.state.cardWidth *
        directionCoefficient *
        this.activeBreakpoint.cardsToScroll;
    const maxTrackPosition = -(
      this.fullTrackRef.current!.clientWidth -
      this.state.cardWidth * this.activeBreakpoint.cardsToShow
    );

    if (newTrackPosition < maxTrackPosition) {
      this.setState({
        ...this.state,
        trackPosition: FuzzyMaths.areEqual(
          this.state.trackPosition,
          maxTrackPosition,
          1
        )
          ? 0
          : maxTrackPosition,
      });
    } else if (newTrackPosition > 0) {
      this.setState({
        ...this.state,
        trackPosition: FuzzyMaths.areEqual(this.state.trackPosition, 0, 1)
          ? maxTrackPosition
          : 0,
      });
    } else {
      this.setState({
        ...this.state,
        trackPosition: newTrackPosition,
      });
    }
  }

  render() {
    const cards = React.Children.toArray(this.props.children).map(
      (child, index) => {
        return (
          <CarouselCard
            width={this.state.cardWidth}
            padding={this.state.cardPadding}
            key={`carousel-${this.props.name}--card-${index}`}
          >
            {child}
          </CarouselCard>
        );
      }
    );

    return (
      <section className="carousel" id={this.props.name}>
        <button
          className="carousel-control carousel-control-prev"
          onClick={() => this.handleControlClick('right')}
          name="My Skills Carousel - Previous"
        ></button>

        <div className="carousel-track-container" ref={this.visibleTrackRef}>
          <div
            className="carousel-track"
            style={{ left: `${this.state.trackPosition}px` }}
            ref={this.fullTrackRef}
          >
            {cards}
          </div>
        </div>

        <button
          className="carousel-control carousel-control-next"
          onClick={() => this.handleControlClick('left')}
          name="My Skills Carousel - Next"
        ></button>
      </section>
    );
  }
}
