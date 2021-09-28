export class Message {
  id: string;
  text: string;
  user: string;
  __typename: string;

  constructor(text: string, user: string) {
    this.id = Math.floor(Math.random() * 1000).toString();
    this.text = text;
    this.user = user;
    this.__typename = "Message";
  }
}
