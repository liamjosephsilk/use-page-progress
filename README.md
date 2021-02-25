# use-page-progress

Using Starter🧰 useCustomHook: React Hook Starter by a super nice huy Colby Fayock!

Please sponsor his work!

<p align="center">
  <a href="https://npmjs.org/package/use-page-progress">
    <img src="https://img.shields.io/npm/v/use-page-progress.svg" alt="Version" />
  </a>
  <!-- <a href="https://npmjs.org/package/react-use-cart">
    <img src="https://img.shields.io/npm/dw/react-use-cart.svg" alt="Downloads/week" />
  </a>
    <a href="https://github.com/notrab/react-use-cart/blob/main/package.json">
    <img src="https://img.shields.io/npm/l/react-use-cart.svg" alt="License" />
  </a>
  <a href="https://github.com/notrab/react-use-cart/network/members">
    <img src="https://img.shields.io/github/forks/notrab/react-use-cart" alt="Forks on GitHub" />
  </a>
  <a href="https://github.com/notrab/react-use-cart/stargazers">
    <img src="https://img.shields.io/github/stars/notrab/react-use-cart" alt="Forks on GitHub" />
  </a> -->
  <img src="https://badgen.net/bundlephobia/minzip/use-page-progress" alt="minified + gzip size" />
</p>

## How to use

### Install

```bash
npm i use-page-progress
```

### Examples

Get the percentage and create a progress bar

```javascript
import React from "react";
import { usePageProgress } from "use-page-progress";

export default function Page() {
  const { scrollPercentage } = usePageProgress();
  return (
    <div>
      <div style={{ position: "fixed", top: 0, left: 0, width: `${scrollPercentage}%` }}></div>
      // Page content
    </div>
  );
}
```
