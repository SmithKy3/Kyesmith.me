import React from 'react';

import { RouteObject } from 'react-router-dom';

import { AppLayout } from '@/components/common/AppLayout';
import { HomeRoute } from '@/components/routes/Home';
import { ProjectsRoute } from '@/components/routes/Projects';

export const setupRoutes = (): Array<RouteObject> => [
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: 'projects',
        element: <ProjectsRoute />,
      },
    ],
  },
];
