class Signal<T> {
  public constructor(
    private _value: T,
    private observers: ((value: T) => void)[] = []
  ) {}

  // Add an observer (effect) to watch for changes to the signal's value
  /**
   * @param {Function} observer callback function
   * @returns {void}
   */
  public observe(observer: (value: T) => void): void {
    this.observers.push(observer);
    observer(this._value); // Run the observer initially with the current value
  }

  // Set the signal value, either directly or using a function
  public async set(newValueOrUpdater: T | ((prevValue: T) => T)): Promise<T> {
    if (typeof newValueOrUpdater === "function") {
      // If a function is passed, call it with the current value (prevState)
      this._value = (newValueOrUpdater as (prevValue: T) => T)(this._value);
    } else {
      // Otherwise, treat it as a new value and set it directly
      this._value = newValueOrUpdater;
    }

    // Notify all observers of the new value
    this.observers.forEach((observer) => observer(this.value));

    return this._value;
  }

  // Get the current signal value
  public get() {
    return this._value;
  }

  // Value getter
  public get value(): T {
    return this._value;
  }

  // Value setter
  public set value(value: T) {
    this._value = value;
    this.observers.forEach((observer) => observer(this._value));
  }
}
