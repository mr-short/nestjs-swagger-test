# Swagger Router Module Duplicate API

## Setup

```bash
npm i
npm run build
npm start
```

Then visit the [API Docs](http://localhost:3000/api/)

## Issue

The app should have 2 routes based on the following imports:

```js
  ChildAppModule,               <-- exports /child/hello
  RouterModule.register([       <-- nests child module under /root
    {
      path: 'root',
      module: ChildAppModule,
    },
  ]),
  FooModule,                    <-- exports /foo
```

Thus the actual routes should look like:

```
/root/child/hello
/foo
```

But the api docs show:

```
/child/hello
/foo
/root/child/hello
```

## Cause

The swagger config value `deepScanRoutes` is turned on
