export class ServerError extends Error {
  constructor () {
  // constructor (stack: string) {
    super('Internal server error')
    this.name = 'ServerError'
    // this.stack = stack
  }
}
