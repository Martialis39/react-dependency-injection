export const countApi = () => {
  const fetchCount = (n: number): Promise<number> => {
    return new Promise(resolve => setTimeout(() => resolve(n), 500))
  }

  return { fetchCount }
}
