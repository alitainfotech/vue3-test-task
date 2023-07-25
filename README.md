# kalem-portal

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Task description

#### Filters call list page

For Filters call list I took following appraoch

- I took global searching mechanisam
- It will search text in each and every columns of row and if found any matched than return that row. Like wise it will filter call list on page.

#### Pagination

For improve the pagination I took following appraoch

- First calculated total no of pages possible with the help of total and per_page parametr received in call_list api response
- Created one array i.e pages that store page numbers
- From currentPage's index and pages array, calculate page numbers to be displayed at that moment.
  Like wise It will display some page number followed by some dots followed by last page number and always limit the display page number at any time even if no of pages more than 10.

#### Delete functionality

For delete functionality I took following appraoch

- Put delete button and bind click event for each call detail(row of calls)
- Triggered handleDeleteAction on delete button click and pass call_Id to this action
- handleDeleteAction will trigger confirmation dialog
- Dialog contain message(also include call-id), cancel and delete buttons
- Click on cancel or delete button it will close dialog

#### Note

- Here we have assumed that data are important. So we are not deleting actual data by calling delete api.

### Instructions for test

#### Filter call list

- Type any text in search box located in header. If text or part of text will be matche with any of the columns text than it will filtr that call detail

#### Pagination

- Increase or decrease limit parameter of get_calls function, located at store/CallsStore.js
- It will always limit the display page number irrespective of number of pages

#### delete functionality

- Click on delete button located in action column. It will open confirmation dialog, where you can see call id to be deleted
