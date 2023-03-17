const baseUrl = 'https://rickandmortyapi.com/api'
const character = baseUrl + '/character/2'

export const getMorty = () => {
  return fetch(character).then((res) => res.json())
}
