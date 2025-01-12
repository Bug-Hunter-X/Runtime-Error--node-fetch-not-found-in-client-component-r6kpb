# Next.js 15 Client Component Fetching Issue

This repository demonstrates a common error encountered when using Node.js modules like `node-fetch` directly within Next.js 15 client components.  The `node-fetch` library, while suitable for server-side code, is not compatible with the browser environment.

## Problem

The `about.js` file attempts to use `node-fetch` to fetch data from an API.  This results in a runtime error in the browser because `node-fetch` is not bundled for the client.

## Solution

The `aboutSolution.js` file provides a solution that utilizes the built-in `fetch` API (available in the browser) or an isomorphic fetch library like `cross-fetch`.

This example showcases how to perform data fetching correctly in Next.js 15 client components while avoiding common pitfalls.