export class Response {
  count: number;
  next: string;
  previous: string;
  results: any[];


  constructor() {
    this.count = null;
    this.next = null;
    this.previous = null;
    this.results = null;
  }
}
