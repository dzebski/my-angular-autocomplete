// My Local Data For Testing
export class LocalData {
  public getData(): Promise<any> {
    return Promise.resolve(
      [
        {id: 1, name: "Oleksandr", tags: 'Hello, World'},
        {id: 2, name: "Bob", tags: 'Hello, Bob'},
        {id: 3, name: "Ben", tags: 'Hello, Ben'},
      ]
    )
  }
}
