import type { NextComponentType, NextPageContext, NextLayoutComponentType } from 'next';
import type { AppPropsType } from 'next/dist/next-server/lib/utils';
import type { Router } from 'next/router';

declare module 'next' {
  type NextLayoutComponentType<P = {}> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactNode) => ReactNode;
  };

  type NextLayoutPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    getLayout: (page: ReactNode) => ReactNode;
  };
}

declare module 'next/app' {
  type AppProps<P = {}> = AppPropsType<Router, P> & {
    Component: NextLayoutComponentType;
  };
}