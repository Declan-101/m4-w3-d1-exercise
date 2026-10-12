# Module 4 - Week 3 - Day 1 Exercise

React component testing with Babel, Jest, and Enzyme.

## Run

```sh
npm ci
npm test -- --watchAll=false --runInBand
npm start
```

Build the app with `npm run build`.

## Completed exercise

- `MyComponent` renders a text input.
- Its change handler saves `event.target.value` in `state.input`.
- Enzyme shallow-render tests verify rendering, the UI snapshot, state creation, and the exact event value (`myValue`).
- Additional tests verify repeated edits, clearing the input, and rendering the component inside `App`.
- The committed snapshot is in `src/components/__snapshots__/`.

The starter ZIP used React 18, but the exercise uses Enzyme's React 16 adapter. This solution uses React and ReactDOM 16.14 with the matching adapter, and updates the browser entry point accordingly. React Scripts supplies Babel and Jest. Cheerio is pinned to a version compatible with Enzyme.

## Understanding the TDD cycle

A rendering test fails if the component is missing. The state-value test fails if the change handler does not save the event value. Implement the component and handler to make those tests pass, then rerun the whole suite after changes. Review the snapshot before accepting an intentional UI change; do not update it just to silence an unexpected failure.

## Submission

Create a GitHub repository named `m4-w3-d1-exercise` and upload this folder's contents, including the lockfile and snapshot. Exclude `node_modules` and `build` (covered by `.gitignore`). Submit the repository URL in the course's GAP exercise area. Repository: https://github.com/Declan-101/m4-w3-d1-exercise. Course submission must be completed in GAP.

## Verification

Verified: 2 test suites, 6 tests, and 1 snapshot pass. The production build compiles successfully.
