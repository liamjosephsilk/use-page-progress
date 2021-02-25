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
