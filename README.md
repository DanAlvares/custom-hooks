# Custom Hooks

A collection of custom React hooks. Each with a demo component and fully tested

# Custom React Hooks

A collection of custom React hooks, each with a demo component and fully tested.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Available Hooks](#available-hooks)
   - [useClickOutside](#useclickoutside)
   - [useFetch](#usefetch)
   - [useLocalStorage](#uselocalstorage)
   - [useLocalStorage](#uselocalstorage)
4. [Usage](#usage)
5. [Running the Project](#running-the-project)
6. [Testing](#testing)

## Introduction

This project showcases a collection of custom React hooks that can be used to enhance a React application. Each hook is designed to solve a specific problem and comes with a demo component to illustrate its usage.

## Installation

Clone this repo and install the dependencies and/or copy them to your vite repo:

```bash
git clone https://github.com/your-username/custom-react-hooks.git
cd custom-react-hooks
npm install
```

## Available Hooks

### useLocalStorage

The `useLocalStorage` hook provides a way to easily store and retrieve data from the browser's localStorage. It works similarly to the `useState` hook but persists the data in localStorage.

#### Usage:

```typescript
const [value, setValue] = useLocalStorage<T>(key: string, initialValue: T)
```

### useClickOutside

The `useClickOutside` hook allows for detecting clicks outside a specified element. This is useful for implementing dropdown menus, modals, or any component that should close when clicking outside.

#### Usage:

```typescript
useClickOutside(ref: RefObject<HTMLElement>, callback: (event: MouseEvent) => void)
```

### useFetch

The `useFetch` hook provides a simple way to fetch data from an API. It handles loading states, errors, and successful data fetching.

#### Usage:

```typescript
const { data, loading, error } = useFetch<T>(url: string)
```

## Usage

Each hook has a corresponding demo component in the `src/hooks` directory. Refer to the demos for examples of how to use the hooks in components.

## Running the Project

To run the project locally:

```bash
npm run dev
```

This will start the development server, and you can view the demo app at `http://localhost:5173`.

## Testing

This project uses Vitest for testing. To run the tests:

```bash
npm test
```
