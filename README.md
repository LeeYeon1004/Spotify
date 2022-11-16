# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start

## `yarn install`

## `yarn start`

## Using yarn install:

### 1. taiwinld

```ts
// terminal
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. react-router-dom

```ts
yarn add react-router-dom
```

### 3. redux toolkit

```ts
// react-redux
yarn add react-redux

# Yarn
yarn add @reduxjs/toolkit
```

### 4. scss

```ts
yarn add node-sass
```

### 5. axios

```ts
yarn add axios
```
