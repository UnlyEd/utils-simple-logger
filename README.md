<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>
[![Build Status](https://travis-ci.com/UnlyEd/utils-simple-logger.svg?branch=master)](https://travis-ci.com/UnlyEd/utils-simple-logger)
[![Maintainability](https://api.codeclimate.com/v1/badges/72c72fc8ca87933827a3/maintainability)](https://codeclimate.com/github/UnlyEd/utils-simple-logger/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/72c72fc8ca87933827a3/test_coverage)](https://codeclimate.com/github/UnlyEd/utils-simple-logger/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/UnlyEd/utils-simple-logger/badge.svg?targetFile=package.json)](https://snyk.io/test/github/UnlyEd/utils-simple-logger?targetFile=package.json)

# Utils Simple Logger

> # Deprecation notice: 
> ## This project has been deprecated in favor of [`@unly/simple-logger`](https://github.com/UnlyEd/simple-logger) which is 1kB (instead of 40kB+) and doesn't rely on `winston`. 
>  Overall, the new implementation is much better and uses TypeScript, and is compatible with the native `console` API. See [migration example](https://github.com/UnlyEd/next-right-now/pull/314).

---

Logger based on [Winston](https://github.com/winstonjs/winston) with sane default so that it only logs `error` in production and filter other logs, while keeping them all in non-production environments.

Basically avoids to increase cost by logging too much stuff in production.

<!-- toc -->

- [Getting started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)
- [Vulnerability disclosure](#vulnerability-disclosure)
- [Contributors and maintainers](#contributors-and-maintainers)
- [**[ABOUT UNLY]**](#about-unly-)

<!-- tocstop -->

## Getting started

npm or yarn

```
npm install @unly/utils-simple-logger
```

Use:

```
const logger = require('@unly/utils-simple-logger');
```

## API

[API](./API.md)

---

## Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

### Getting started

```
yarn start # Shortcut - Runs linter + build + tests in concurrent mode (watch mode)

OR run each process separately for finer control

yarn lint
yarn build
yarn test
```

### Test

```
yarn test # Run all tests, interactive and watch mode
yarn test:once
yarn test:coverage
```

### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT

# Vulnerability disclosure

[See our policy](https://github.com/UnlyEd/Unly).

---

# Contributors and maintainers

This project is being maintained by:
- [Unly] Ambroise Dhenain ([Vadorequest](https://github.com/vadorequest)) **(active)**

Thanks to our contributors:
- Anthony Troupenat ([Fukoyamashisu](https://github.com/Fukoyamashisu))

---

# **[ABOUT UNLY]** <a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" height="40" align="right" alt="Unly logo" title="Unly logo" /></a>

> [Unly](https://unly.org) is a socially responsible company, fighting inequality and facilitating access to higher education. 
> Unly is committed to making education more inclusive, through responsible funding for students. 
We provide technological solutions to help students find the necessary funding for their studies. 
We proudly participate in many TechForGood initiatives. To support and learn more about our actions to make education accessible, visit : 
- https://twitter.com/UnlyEd
- https://www.facebook.com/UnlyEd/
- https://www.linkedin.com/company/unly
- [Interested to work with us?](https://jobs.zenploy.io/unly/about)

Tech tips and tricks from our CTO on our [Medium page](https://medium.com/unly-org/tech/home)!

#TECHFORGOOD #EDUCATIONFORALL
