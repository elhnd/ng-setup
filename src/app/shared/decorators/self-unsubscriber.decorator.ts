import { Subscription } from 'rxjs';

export function SelfUnsubscriber(blacklist: string[] = []) {
  return function (constructor: any) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (let prop in this) {
        if (this[prop] instanceof Subscription && !blacklist.includes(prop)) {
          const subscription: Subscription = this[prop];
          if (subscription && !subscription.closed) {
            subscription.unsubscribe();
          }
        }
      }

      if (original && typeof original === 'function') {        
        original.apply(this, arguments);
      }
    };
  }
}
