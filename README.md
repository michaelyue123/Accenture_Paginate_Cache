# Paginate-Cache

Application Demo Pages: <br><br>
![](https://github.com/michaelyue123/Accenture_Paginate_Cache/blob/main/images/running_example1.png) <br><br>
![](https://github.com/michaelyue123/Accenture_Paginate_Cache/blob/main/images/running_example2.png)

## Table of Contents

- [Quick Start](#quick-start)
- [Application Flow Chart](#application-flow-chart)
- [Design Logic and Implementation](#design-logic-and-implementation)
- [Unit Test](#unit-test)
- [File Structure](#file-structure)
- [Time Allocation](#time-allocation)
- [Resources](#resources)
- [Improvements](#improvements)

## Quick start

- [Download from Github](https://github.com/michaelyue123/Accenture_Paginate_Cache/archive/main.zip)

- clone the repo: `git clone https://github.com/michaelyue123/Accenture_Paginate_Cache.git`

Before start, there is one thing that needs your attention. API token used in this application is a **short token** that only lives for roughly 7 to 8 mins. In case it expires and application throws a 401 error.

You can run following **curl request** on your terminal or postman to fetch latest API token and update it inside `src/constants/system.constants.ts`. Much appreciated.

```bash
curl -X POST "https://dh-atrpackageinstalltest.atrmywizard-aiops.com/atr-gateway/identity-management/api/v1/auth/short-token?useDeflate=true" -H "accept: */*" -H "Content-Type: application/json" -d "{\"username\":\"candidate_test1\",\"password\":\"candidate_test1\",\"snowEnabled\":true}"
```

<br>

A postman example is shown below <br><br>
![](https://github.com/michaelyue123/Accenture_Paginate_Cache/blob/main/images/postman_example.png)

- Navigate to project folder
  `cd [project folder]`

- Install dependencies:
  `yarn`

- Start the server:
  `yarn start`

- Run the test:
  `yarn test`

- Create a production build:
  `yarn build`

- Views are on(default):
  `localhost:3000`

## Application Flow Chart

![Application Flow Chart](https://github.com/michaelyue123/Accenture_Paginate_Cache/blob/main/images/project_design.png)

## Design Logic and Implementation

`PAGE_SIZE = 12`
`MAX_CACHED_PAGES = 8`
`INITIAL_CACHED_PAGES = 4`

1.  During initial loading, a circular loading sign will appear in the middle of the screen. `useEffect()` will be called inside `Main Component` to render first page and cache extra 4 pages ahead. In total, 60 cards are fetched from backend and these cards are displayed in 5 pages. Each page shows 12 cards. This is calculated by `(INITIAL_CACHED_PAGES + 1) * PAGE_SIZE`.

2.  Meanwhile, `Redux Saga` will listen to the action `fetchDataRequest()` dispatched from `Main Component` and fire API call. Additionally, `Redux Saga` will also listen closely to `requestNextPage()` action that gets dispatched once user clicks "NEXT" button. If current page number equals to total number of fetched pages, which means that user has reached the last page of total fetched pages, `Redux Saga` will fire a new API call to cache 8 more pages. If user clicks too fast and data has not been loaded, user will see a linear loading indication on the top of the screen showing "Click too quick, please wait for more cards to load.".

## Unit Test

In addtion to standard `Jest` and `Enzyme` libraries, `@types/jest`, `@types/enzyme` and `@types/enzyme-adapter-react-16` are intalled to configure unit tests with TypeScript.

- `cd [project folder]`
- `yarn test`

click `a` to re-run all test cases

Test cases are listed below. <br><br>
![Unit Test](https://github.com/michaelyue123/Accenture_Paginate_Cache/blob/main/images/test_cases.png)

## Project Structure

```
Accenture-Paginate-Cache
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── yarn.lock
├── README.md
├── public
└── src
	├── actions
	│	├── actions.ts
	│	└── index.ts
	├── components
	│	├── cards
	│	│	├── Card.tsx
	│	│	├── Card.test.tsx
	│	│	├── CardGrid.tsx
	│	│	└── CardGrid.test.tsx
	│	├── loading
	│	│	├── InitialLoading.tsx
	│	│	├── InitialLoading.test.tsx
	│	│	├── UncachedLoading.tsx
	│	│	└── UncachedLoading.test.tsx
	│	├── pagination
	│	│	├── Pagination.tsx
	│	│	└── Pagination.test.jsx
	│	├── main
	│	│	└── Main.tsx
	│	├── App.test.tsx
	│	└── App.tsx
	├── constants
	│	├── action.constants.ts
	│	├── system.constants.ts
	│	└── index.ts
	├── reducers
	│	├── application.reducer.ts
	│	└── index.ts
	├── sagas
	│	├── sagas.ts
	│	└── index.ts
	├── services
	│	├── fetchData.service.ts
	│	└── index.ts
	├── store
	│	├── configureStore.ts
	│	└── index.ts
	├── setupTests.ts
	├── testUtils.ts
	└── index.js
```

## Time Allocation

Total: 34 hours.

1. `Setup: 3 hours`

- Git repo
- ` Install React + Redux + Saga, and all dependencies`
- ` Install Enzyme + Enzyme-adapter-react-16 + Jest-enzyme for TypeScript`
- ` Postman API test`

2. `TypeScript: 3 hours`

- Re-visit the syntax of TypeScript
- Practice TypeScript by building a simple todo list

3. `Structure Planing: 10 hours`

- Set up project structure
- Figure out the logic behind instant paginate cache
- Draw application design diagram

4. `Implementation: 12 hours`

- Use proxy as a work around to fix CORS issue
- Implementing Components, Redux, Action, Saga
- Implementing fetching algorithms

5. `CSS styling: 0.5 hours`

- Responsive to small, medium and large screen on 15-inch MacBook Pro

6. `Unit test: 3 hours`

- Re-visit the concepts of Jest and Enzyme for JavaScript and apply it to TypeScript
- Implement test cases

7. `README.md: 2.5 hour`

## Resources

- Material-UI, the world's most popular React UI framework. : <https://material-ui.com/>
- TypeScript, the strict syntactical superset of JavaScript: <https://www.typescriptlang.org/>
- React Hooks, add addtional features to functional components that let you use state and other React features without writing a class: <https://reactjs.org/docs/hooks-intro.html>

## Improvements:

- Situation where API call reaches the limit of backend available cards is not considered at this stage as it takes a long time to reach the end. In case the number of backend cards is not enough to cache another 8 more pages for frontend, frontend can add a special case to calculate total cards remaining in the backend and only fetch the remaining cards from backend.
