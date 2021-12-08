# `fetch` with `Headers` object issue

## To reproduce

```
# Start an HTTP Bin at port 3001
docker run -p 3001:80 kennethreitz/httpbin

# Install dependencies
pnpm i

# Start the application
pnpm dev

# Open http://localhost:3000/header-will-be-sent
# Open http://localhost:3000/header-wont-be-sent
```

## What's wrong

When headers are passed to `fetch` as a `Headers` object and [certain conditions are met](https://github.com/sveltejs/kit/blob/f12bbcc686829243f111db1b463d4a261fb67c23/packages/kit/src/runtime/server/page/load_node.js#L206), they are lost and instead _replaced_ with a `Cookie` header.

This happens because the `Headers` object does not support the spread operator.

Another issue is how external requests are detected. The conditional statement takes only the hostnames into consideration, disregarding the ports, which may make the hosts different even if the hostnames match exactly.
