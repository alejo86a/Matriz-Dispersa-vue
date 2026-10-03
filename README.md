# Sparse Matrix (Matriz Dispersa) - Vue.js

A Vue.js web app that converts a regular (dense) matrix into its **sparse matrix representation using triplets** (`[row, col, value]`), and computes its **transpose**, both as a triplet list and as a reconstructed dense matrix.

## What it does

- Input a matrix through a form (`MatrizForm.vue` / `MatrizInput.vue`).
- `src/services/MatrizDispersa.js` implements the core logic:
  - `getMatrizEnTripleta(matriz)`: converts a dense matrix into its sparse triplet representation.
  - `getTranspuestaEnTripleta(m)`: computes the transpose directly from the triplet representation.
  - `getMatrizTranspuesta(m)`: reconstructs the dense transposed matrix from triplets.
- Results are displayed side by side (original matrix, triplet form, transpose) via `Matriz.vue`, `MatrizTripleta.vue`, and `MatrizInfo.vue`.

This is a classic data-structures exercise (sparse matrix storage/transposition) implemented as an interactive Vue 2 app.

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
