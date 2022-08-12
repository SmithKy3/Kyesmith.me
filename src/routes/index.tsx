import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoadingScreen } from '@/components/LoadingScreen';
import { Home } from './Home';

const LazyProjectsRoute = lazy(() =>
  import('./Projects').then((module) => ({ default: module.Projects }))
);
const LazyComponentsRoute = lazy(() =>
  import('./Components').then((module) => ({ default: module.Components }))
);
const LazyNotFoundRoute = lazy(() =>
  import('./NotFound').then((module) => ({ default: module.NotFound }))
);

const Fallback = () => <LoadingScreen />;

export const RoutesRoot: React.FC = () => (
  <React.Suspense fallback={<Fallback />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<LazyProjectsRoute />} />
      <Route path="/components" element={<LazyComponentsRoute />} />
      <Route path="/*" element={<LazyNotFoundRoute />} />
    </Routes>
  </React.Suspense>
);
