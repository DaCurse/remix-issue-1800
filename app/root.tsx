import type { ActionFunction, MetaFunction } from 'remix';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
} from 'remix';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export const action: ActionFunction = () => {
  return {};
};

export default function App() {
  const fetcher = useFetcher();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <fetcher.Form method="post">
          <label>
            Form rendered in root route with no action
            <br />
          </label>
          <button type="submit">Trigger the bug!</button>
        </fetcher.Form>
        <fetcher.Form method="post" action="/">
          <label>
            Form with action="/"
            <br />
            <button type="submit">Trigger the bug!</button>
          </label>
        </fetcher.Form>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
