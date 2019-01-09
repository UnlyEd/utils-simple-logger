# unly-utils-simple-logger

This project is a transversal project, which aims to gather and share different tools to improve the scalability between different projects

Install:

npm or yarn

```
    npm install https://github.com/UnlyEd/unly-utils-simple-logger.git
```

Use:

```
const logger = require('unly-utils-simple-logger');
```

Library:

|   | param(s)         |  |
| :--------------- |:---------------:| :-----:|
| createLogger |  object { label, level }       | Create a logger based on many default options |
| logRequest  | req, label | log info |

## Development

### Test

Run once:
```
yarn run test:once
```

Watch:
```
yarn test
```

Coverage:
```
yarn run test:coverage
```

### Lint

```
yarn run lint
```
