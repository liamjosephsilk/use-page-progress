<p align="center">
  <a href="https://npmjs.org/package/use-page-progress">
    <img src="https://img.shields.io/npm/v/use-page-progress.svg" alt="Version" />
  </a>
<!--   <a href="https://npmjs.org/package/use-page-progress">
    <img src="https://img.shields.io/npm/dw/use-page-progress.svg" alt="Downloads/week" />
  </a> -->
    <a href="https://github.com/liamjosephsilk/use-page-progress/blob/main/use-page-progress/package.json">
    <img src="https://img.shields.io/npm/l/use-page-progress.svg" alt="License" />
  </a>

  <img src="https://badgen.net/bundlephobia/minzip/use-page-progress" alt="minified + gzip size" />
</p>

# use-page-progress

Using Starter🧰 useCustomHook: React Hook Starter by a super nice huy Colby Fayock!

Please sponsor his work!



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
