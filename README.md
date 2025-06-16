# 🏆 @bepalo/time

[![npm version](https://img.shields.io/npm/v/@bepalo/time.svg)](https://www.npmjs.com/package/@bepalo/time)
[![CI](https://github.com/nati-esh-zed/bepalo--time/actions/workflows/ci.yaml/badge.svg)](https://github.com/nati-esh-zed/bepalo--time/actions)
[![Tests](https://img.shields.io/github/actions/workflow/status/nati-esh-zed/bepalo--time/ci.yaml?label=tests&style=flat-square)](https://github.com/nati-esh-zed/bepalo--time/actions/workflows/ci.yaml.yml)
[![license](https://img.shields.io/npm/l/@bepalo/time.svg)](LICENSE)

Elegant and fluent time expression utility library like `exp: Time.in(7).days.FromNow`.

## 📥 Install

```bash
pnpm add @bepalo/time
```

```bash
npm install @bepalo/time
```

## ✅ Usage

```js
import { Time } from "@bepalo/time";

// ----------------------------------------//
// So many ways to express time.           //
// ----------------------------------------//
Time.for(1).Day;
Time.every(5).Seconds;
Time.in(10).years.FromNow;
Time.before(5).days.from(Time.now());
Time.after(3).minutes.and(20).seconds.and(30).Milliseconds;
Time.every(5).Days;
Time.for(5).hours.FromNow;
Time.after(3).minutes.and(45).Seconds;
Time.after(10).years.From(Time.now());
Time.before(5).weeks.from(Time.now())._h;
// ----------------------------------------
Time.after(3).Minutes; // 3 minutes in seconds
Time.after(3).minutes.and(20).Seconds;
Time.after(3).minutes.and(20).seconds.and(30).Milliseconds;
// ----------------------------------------
Time.for(1).year.and(1).week.v; // in seconds
Time.for(1).year.and(2).weeks.val; // in seconds
Time.for(1).year.and(3).weeks.value; // in seconds
Time.for(1).year.and(3).weeks._; // in seconds
Time.for(1).year.and(4).weeks._ms; // in milliseconds
Time.for(1).year.and(5).weeks._s; // in seconds
Time.for(1).year.and(7).weeks._m; // in minutes
Time.for(1).year.and(8).weeks._h; // in hours
Time.for(1).year.and(9).weeks._d; // in days
Time.for(1).year.and(10).weeks._w; // in weeks
Time.for(1).year.and(11).weeks._y; // in years
```

## 🕊️ Thanks and Enjoy

If you like this library and want to support then please give a star on [GitHub](https://github.com/nati-esh-zed/bepalo--time).
