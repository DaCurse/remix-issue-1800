# Remix issue #1800

https://github.com/remix-run/remix/issues/1800

`useFetcher().Form` with `action="/"` or no action when rendered in root route, tries to post to `routes/index` instead of to the root route. The fetchers post just fine if `routes/index.tsx` is deleted.

## Steps to re-produce

- Create a fetcher `const fetcher = useFetcher()`
- Create a `<fetcher.Form></fetcher.Form>`
- Set the form action to `/` or no action if in the root route
- Create a `routes/index.tsx` file with no action
- Try to post the forms, get an error in the browser
