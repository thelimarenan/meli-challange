interface ICategoriesMeli {
  id: string,
  name: string,
  path_from_root: {
    id: string,
    name: string
  }[]
}

export { ICategoriesMeli };