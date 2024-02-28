export interface ICountApi {
  fetchCount: (input: number) => Promise<number>
}
