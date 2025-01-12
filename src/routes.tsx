import React from 'react';

import { RouteObject } from 'react-router-dom';

import { AppLayout } from '@/components/common/AppLayout';
import { NotFoundRoute } from '@/components/routes/404/404';
import { HomeRoute } from '@/components/routes/Home/Home';
// import { ProjectsRoute } from '@/components/routes/Projects';

export const setupRoutes = (): Array<RouteObject> => [
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      // {
      //   path: 'projects',
      //   element: <ProjectsRoute />,
      // },
      {
        path: '*',
        element: <NotFoundRoute />,
      },
    ],
  },
];
