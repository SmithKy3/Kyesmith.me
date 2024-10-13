import React from 'react';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { setupRoutes } from './routes';
import { theme } from './theme';

import '@mantine/core/styles.layer.css';

const rootElement = document.querySelector('#root');
if (!rootElement) {
  throw new Error('Could not find root element');
} else {
  const root = createRoot(rootElement);
  const router = createBrowserRouter(setupRoutes());
  root.render(
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>,
  );
}
