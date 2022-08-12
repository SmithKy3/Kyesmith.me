import React from 'react';

import { DarkModeContextProvider } from '@/contexts/DarkModeContext';
import { AppLayout } from '@/components/AppLayout';
import { RoutesRoot } from '@/routes';
import { ClipPaths } from '@/components/ClipPaths';

import '@/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => (
  <BrowserRouter>
    <DarkModeContextProvider>
      <AppLayout>
        <RoutesRoot />
      </AppLayout>
      <ClipPaths />
    </DarkModeContextProvider>
  </BrowserRouter>
);
