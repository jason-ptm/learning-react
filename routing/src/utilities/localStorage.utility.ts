export const addStorage = <T>(key: string, value: T) => {
  console.log({ ...value })
  localStorage.setItem(key, JSON.stringify({ ...value }))
}

export const clearStorage = (key: string) => {
  localStorage.removeItem(key)
}
