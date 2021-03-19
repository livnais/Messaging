export default abstract class Observable {
  public actions: Array<object> = new Array<object>();

  attach(eventType: object, action: object): void {
    this.actions.push(action);
  }
  detach(eventType: object, action: object): void {
    this.actions.splice(this.actions.indexOf(action), 1);
  }
  notify(eventType: object, action: object): string {
    return 'notify user';
  }
}
