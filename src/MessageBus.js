class MessageBus {
  constructor() {
    /** Tostore all events */
    this.events = {};
    this.on = this.on.bind(this);
    this.trigger = this.trigger.bind(this);
    this.off = this.off.bind(this);
  }

  /*** Adds handler to the subscriber list for a particular event.
   * @param event = event will be a constant
   * @param callback = callback will be function
   * @param callbackObj = any data associated with the callback
   * @private
   */
  on(event, callback, callbackObj) {
    if (false === Object.prototype.hasOwnProperty.call(this.events, event)) {
      this.events[event] = [];
    }
    this.events[event].push({ callback, callbackObj });
  }

  /*** Publishes an event with given payload.
   * @param event
   * @param payload
   * @private
   */
  trigger(event, payload) {
    let eventCount, currentEvent, ctr;
    if (true === Object.prototype.hasOwnProperty.call(this.events, event)) {
      currentEvent = this.events[event];
      eventCount = currentEvent.length;
      for (ctr = 0; ctr < eventCount; ctr = ctr + 1) {
        if ('undefined' === typeof currentEvent[ctr].callbackObj) {
          if ('function' === typeof currentEvent[ctr].callback) {
            currentEvent[ctr].callback(payload);
          }
        } else if ('function' === typeof currentEvent[ctr].callback) {
          currentEvent[ctr].callback.call(
            currentEvent[ctr].callbackObj,
            payload
          );
        }
      }
    }
  }

  /**
   * Removes handler from the subscriber list for a particular event.
   * @param event = event will be a constant
   * @param callback = callback will be function
   * @param callbackObj = any data associated with the callback
   * @private
   */
  off(event, callback, callbackObj) {
    let eventCount, currentEvent, ctr;
    if (true === Object.prototype.hasOwnProperty.call(this.events, event)) {
      currentEvent = this.events[event];
      eventCount = currentEvent.length;
      for (ctr = 0; ctr < eventCount; ctr = ctr + 1) {
        if (
          callback === currentEvent[ctr].callback &&
          callbackObj === currentEvent[ctr].callbackObj
        ) {
          currentEvent.splice(ctr, 1);
          break;
        }
      }
    }
  }
}

const messageBus = new MessageBus();

Object.freeze(messageBus);

export default messageBus;
