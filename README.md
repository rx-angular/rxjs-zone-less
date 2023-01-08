# rxjs-zone-less

[![npm](https://img.shields.io/npm/v/rxjs-zone-less.svg)](https://www.npmjs.com/package/rxjs-zone-less)
![rxjs-zone-less CI](https://github.com/rx-angular/rxjs-zone-less/workflows/rxjs-zone-less%20CI/badge.svg?branch=main)

[//]: # ([![Coverage Status]&#40;https://raw.githubusercontent.com/rx-angular/rx-angular/github-pages/docs/test-coverage/cdk/jest-coverage-badge.svg&#41;]&#40;https://rx-angular.github.io/rx-angular/test-coverage/cdk/lcov-report/index.html&#41;)

## Important Information

This package was formerly part of [`@rx-angular/cdk`](https://www.npmjs.com/package/@rx-angular/cdk).
We decided to move it out because of overwhelming amount of maintenance 
required to support all different version combinations supported by angular.

That being said, the current implementation supports `rxjs` versions 6 & 7. 

We don't plan further maintenance for upcoming versions. If our plans change, we will keep you
updated :-).

## A set of wrappers for RxJS to avoid unnecessary change detection and zone interference in Angular.

`zone-less-rxjs` is designed to help developers improve performance by avoiding the use of zone.js patched API's.
Besides a well documented and typed API it provides way to use patched API's in a way that is independent of `ngZone runOutsideZone` usage.

## Key features

- ✅ unpatched RxJS creators
- ✅ unpatched RxJS operators
- ✅ unpatched RxJS schedulers
- ✅ no need for `runOutsideAngular`

## Demos:

- [⚡ GitHub](https://github.com/BioPhoton/rx-angular-cdk-zone-less)

## Install

```bash
npm install --save rxjs-zone-less
# or
yarn add rxjs-zone-less
```

## Documentation

[Documentation](https://github.com/rx-angular/rxjs-zone-less/tree/main/packages/rxjs-zone-less/docs)
