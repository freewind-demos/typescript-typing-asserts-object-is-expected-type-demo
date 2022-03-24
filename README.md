TypeScript Typing "asserts" Object Is Expected Type Demo
===========================

```
function assertNotNull<T>(obj: T | null): asserts obj is T {}
```

我觉得至少在测试里会很有用，减少 `element!` 中 `!`的需要

```
npm install
npm run demo
```
