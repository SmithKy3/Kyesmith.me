import React from 'react';

import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';

import { Header } from '@/components/common/Header';

export const AppLayout: React.FC = () => {
  return (
    <AppShell header={{ height: 48 }}>
      <Header />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
