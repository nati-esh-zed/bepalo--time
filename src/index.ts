/**
 *
 * A time utility function to define time in an expressive manner.
 *
 * Provides `Time.[every, on, in, after, before]` static methods and
 * `Time.[Seconds, Minutes, Hours, Days, Weeks, Years]`
 *
 *
 * Eg.
 *   `Time.for(1).Day`
 *   `Time.every(5).Seconds`
 *   `Time.in(10).years.FromNow`
 *   `Time.before(5).days.from(Time.now())`
 *   `Time.after(3).minutes.and(20).seconds.and(30).Milliseconds`
 *
 * @module time
 * @exports Time class
 * @exports RelativeTime class
 * @exports TimeValue class
 *
 */

/**
 * Time value utility class to provide extended functionality
 *
 */
export class TimeValue extends Number {
  constructor(value: any) {
    super(value);
  }

  /**
   * Get the time in milliseconds
   */
  get _ms(): number {
    return this.valueOf() * 1000;
  }

  /**
   * Get the time in seconds
   */
  get _s(): number {
    return this.valueOf();
  }

  /**
   * Get the time in minutes
   */
  get _m(): number {
    return this.valueOf() / 60;
  }

  /**
   * Get the time in hours
   */
  get _h(): number {
    return this.valueOf() / 3600;
  }

  /**
   * Get the time in days
   */
  get _d(): number {
    return this.valueOf() / 86400;
  }

  /**
   * Get the time in weeks
   */
  get _w(): number {
    return this.valueOf() / 604800;
  }

  /**
   * Get the time in years
   */
  get _y(): number {
    return this.valueOf() / 31557600;
  }

  /**
   * Get the time in seconds
   */
  get _(): number {
    return this.valueOf();
  }

  /**
   * Get the time in seconds
   */
  get v(): number {
    return this.valueOf();
  }

  /**
   * Get the time in seconds
   */
  get val(): number {
    return this.valueOf();
  }

  /**
   * Get the time in seconds
   */
  get value(): number {
    return this.valueOf();
  }

  /**
   * Get the time in seconds from the current time
   *
   * @returns number
   */
  get FromNow(): number {
    return Time.now() + this.valueOf();
  }

  /**
   * Get the time in seconds from the given start time
   *
   * @returns number
   */
  From(start: number): number {
    return start + this.valueOf();
  }

  /**
   * Get the time in seconds from the given start time
   *
   * @returns TimeValue
   */
  from(start: number): TimeValue {
    return new TimeValue(start + this.valueOf());
  }

  /**
   * Get the time in seconds from the current time
   *
   * @returns TimeValue
   */
  fromNow(): TimeValue {
    return new TimeValue(Time.now() + this.valueOf());
  }

  /**
   * Add time to the current time.
   *
   * Eg. `Time.for(3).minutes.and(20).seconds.and(30).Milliseconds` -> 200.03
   *
   * @returns RelativeTime
   */
  and(time: number): RelativeTime {
    return new RelativeTime(time, this.valueOf());
  }

  override valueOf(): number {
    return super.valueOf();
  }

  override toString(): string {
    return `${this.valueOf()}`;
  }

  [Symbol.toPrimitive](hint: string): string | number {
    if (hint === "string") return this.toString();
    return this.valueOf();
  }

  [Symbol.for("nodejs.util.inspect.custom")](): string {
    return `${this.valueOf()}`;
  }
}

/**
 * Helper class to compute absolute timestamps in seconds.
 *
 * Usage:
 *   `new Time(10).Minutes` -> 10 minutes (in seconds)
 *
 * Note: Using 365.25 days to account for leap year.
 */
export class Time {
  constructor(public time: number) {}

  /**
   * Get the time in milliseconds
   *
   * @returns TimeValue
   */
  get millisecond(): TimeValue {
    return new TimeValue(this.time / 1000);
  }

  /**
   * Get the time in seconds
   *
   * @returns TimeValue
   */
  get second(): TimeValue {
    return new TimeValue(this.time);
  }

  /**
   * Get the time in minutes
   *
   * @returns TimeValue
   */
  get minute(): TimeValue {
    return new TimeValue(this.time * 60);
  }

  /**
   * Get the time in hours
   *
   * @returns TimeValue
   */
  get hour(): TimeValue {
    return new TimeValue(this.time * 3600);
  }

  /**
   * Get the time in days
   *
   * @returns TimeValue
   */
  get day(): TimeValue {
    return new TimeValue(this.time * 86400);
  }

  /**
   * Get the time in weeks
   *
   * @returns TimeValue
   */
  get week(): TimeValue {
    return new TimeValue(this.time * 604800);
  }

  /**
   * Get the time in years
   *
   * @returns TimeValue
   */
  get year(): TimeValue {
    return new TimeValue(this.time * 31557600);
  }

  /**
   * Get the time in milliseconds
   *
   * @returns TimeValue
   */
  get milliseconds(): TimeValue {
    return new TimeValue(this.time / 1000);
  }

  /**
   * Get the time in seconds
   *
   * @returns TimeValue
   */
  get seconds(): TimeValue {
    return new TimeValue(this.time);
  }

  /**
   * Get the time in minutes
   *
   * @returns TimeValue
   */
  get minutes(): TimeValue {
    return new TimeValue(this.time * 60);
  }

  /**
   * Get the time in hours
   *
   * @returns TimeValue
   */
  get hours(): TimeValue {
    return new TimeValue(this.time * 3600);
  }

  /**
   * Get the time in days
   *
   * @returns TimeValue
   */
  get days(): TimeValue {
    return new TimeValue(this.time * 86400);
  }

  /**
   * Get the time in weeks
   *
   * @returns TimeValue
   */
  get weeks(): TimeValue {
    return new TimeValue(this.time * 604800);
  }

  /**
   * Get the time in years
   *
   * @returns TimeValue
   */
  get years(): TimeValue {
    return new TimeValue(this.time * 31557600);
  }

  /**
   * Get the time in milliseconds
   *
   * @returns number
   */
  get Millisecond(): number {
    return this.time / 1000;
  }

  /**
   * Get the time in seconds
   *
   * @returns number
   */
  get Second(): number {
    return this.time;
  }

  /**
   * Get the time in minutes
   *
   * @returns number
   */
  get Minute(): number {
    return this.time * 60;
  }

  /**
   * Get the time in hours
   *
   * @returns number
   */
  get Hour(): number {
    return this.time * 3600;
  }

  /**
   * Get the time in days
   *
   * @returns number
   */
  get Day(): number {
    return this.time * 86400;
  }

  /**
   * Get the time in weeks
   *
   * @returns number
   */
  get Week(): number {
    return this.time * 604800;
  }

  /**
   * Get the time in years
   *
   * @returns number
   */
  get Year(): number {
    return this.time * 31557600;
  }

  /**
   * Get the time in milliseconds
   *
   * @returns number
   */
  get Milliseconds(): number {
    return this.time / 1000;
  }

  /**
   * Get the time in seconds
   *
   * @returns number
   */
  get Seconds(): number {
    return this.time;
  }

  /**
   * Get the time in minutes
   *
   * @returns number
   */
  get Minutes(): number {
    return this.time * 60;
  }

  /**
   * Get the time in hours
   *
   * @returns number
   */
  get Hours(): number {
    return this.time * 3600;
  }

  /**
   * Get the time in days
   *
   * @returns number
   */
  get Days(): number {
    return this.time * 86400;
  }

  /**
   * Get the time in weeks
   *
   * @returns number
   */
  get Weeks(): number {
    return this.time * 604800;
  }

  /**
   * Get the time in years
   *
   * @returns number
   */
  get Years(): number {
    return this.time * 31557600;
  }

  /**
   * Get the current time in seconds rounded to the lower integer.
   *
   * @returns number
   */
  static now(): number {
    return Math.floor(Date.now() / 1000);
  }

  /**
   * Express time using `every`
   *
   * @returns Time
   */
  static every(time: number): Time {
    return new Time(time);
  }

  /**
   * Express time using `for`
   *
   * @returns Time
   */
  static for(time: number): Time {
    return new Time(time);
  }

  /**
   * Express time using `in`
   *
   * @returns Time
   */
  static in(time: number): RelativeTime {
    return new RelativeTime(time);
  }

  /**
   * Express time using `after`
   *
   * @returns Time
   */
  static after(time: number): RelativeTime {
    return new RelativeTime(time);
  }

  /**
   * Express time using `before`
   *
   * @returns Time
   */
  static before(time: number): RelativeTime {
    return new RelativeTime(-time);
  }
}

/**
 * Helper class to compute timestamps in seconds relative to the given start time.
 *
 * Usage:
 *   `new RelativeTime(10, Time.now()).Minutes` -> current time + 10 minutes (in seconds)
 */
export class RelativeTime {
  constructor(public time: number, public start: number = 0) {}

  /**
   * Get the time in milliseconds with the start time added to it
   *
   * @returns TimeValue
   */
  get millisecond(): TimeValue {
    return new TimeValue(this.start + this.time / 1000);
  }

  /**
   * Get the time in seconds with the start time added to it
   *
   * @returns TimeValue
   */
  get second(): TimeValue {
    return new TimeValue(this.start + this.time);
  }

  /**
   * Get the time in minutes with the start time added to it
   *
   * @returns TimeValue
   */
  get minute(): TimeValue {
    return new TimeValue(this.start + this.time * 60);
  }

  /**
   * Get the time in hours with the start time added to it
   *
   * @returns TimeValue
   */
  get hour(): TimeValue {
    return new TimeValue(this.start + this.time * 3600);
  }

  /**
   * Get the time in days with the start time added to it
   *
   * @returns TimeValue
   */
  get day(): TimeValue {
    return new TimeValue(this.start + this.time * 86400);
  }

  /**
   * Get the time in weeks with the start time added to it
   *
   * @returns TimeValue
   */
  get week(): TimeValue {
    return new TimeValue(this.start + this.time * 604800);
  }

  /**
   * Get the time in years with the start time added to it
   *
   * @returns TimeValue
   */
  get year(): TimeValue {
    return new TimeValue(this.start + this.time * 31557600);
  }

  /**
   * Get the time in milliseconds with the start time added to it
   *
   * @returns TimeValue
   */
  get milliseconds(): TimeValue {
    return new TimeValue(this.start + this.time / 1000);
  }

  /**
   * Get the time in seconds with the start time added to it
   *
   * @returns TimeValue
   */
  get seconds(): TimeValue {
    return new TimeValue(this.start + this.time);
  }

  /**
   * Get the time in minutes with the start time added to it
   *
   * @returns TimeValue
   */
  get minutes(): TimeValue {
    return new TimeValue(this.start + this.time * 60);
  }

  /**
   * Get the time in hours with the start time added to it
   *
   * @returns TimeValue
   */
  get hours(): TimeValue {
    return new TimeValue(this.start + this.time * 3600);
  }

  /**
   * Get the time in days with the start time added to it
   *
   * @returns TimeValue
   */
  get days(): TimeValue {
    return new TimeValue(this.start + this.time * 86400);
  }

  /**
   * Get the time in weeks with the start time added to it
   *
   * @returns TimeValue
   */
  get weeks(): TimeValue {
    return new TimeValue(this.start + this.time * 604800);
  }

  /**
   * Get the time in years with the start time added to it
   *
   * @returns TimeValue
   */
  get years(): TimeValue {
    return new TimeValue(this.start + this.time * 31557600);
  }

  /**
   * Get the time in milliseconds with the start time added to it
   *
   * @returns number
   */
  get Millisecond(): number {
    return this.start + this.time / 1000;
  }

  /**
   * Get the time in seconds with the start time added to it
   *
   * @returns number
   */
  get Second(): number {
    return this.start + this.time;
  }

  /**
   * Get the time in minutes with the start time added to it
   *
   * @returns number
   */
  get Minute(): number {
    return this.start + this.time * 60;
  }

  /**
   * Get the time in hours with the start time added to it
   *
   * @returns number
   */
  get Hour(): number {
    return this.start + this.time * 3600;
  }

  /**
   * Get the time in days with the start time added to it
   *
   * @returns number
   */
  get Day(): number {
    return this.start + this.time * 86400;
  }

  /**
   * Get the time in weeks with the start time added to it
   *
   * @returns number
   */
  get Week(): number {
    return this.start + this.time * 604800;
  }

  /**
   * Get the time in years with the start time added to it
   *
   * @returns number
   */
  get Year(): number {
    return this.start + this.time * 31557600;
  }

  /**
   * Get the time in milliseconds with the start time added to it
   *
   * @returns number
   */
  get Milliseconds(): number {
    return this.start + this.time / 1000;
  }

  /**
   * Get the time in seconds with the start time added to it
   *
   * @returns number
   */
  get Seconds(): number {
    return this.start + this.time;
  }

  /**
   * Get the time in minutes with the start time added to it
   *
   * @returns number
   */
  get Minutes(): number {
    return this.start + this.time * 60;
  }

  /**
   * Get the time in hours with the start time added to it
   *
   * @returns number
   */
  get Hours(): number {
    return this.start + this.time * 3600;
  }

  /**
   * Get the time in days with the start time added to it
   *
   * @returns number
   */
  get Days(): number {
    return this.start + this.time * 86400;
  }

  /**
   * Get the time in weeks with the start time added to it
   *
   * @returns number
   */
  get Weeks(): number {
    return this.start + this.time * 604800;
  }

  /**
   * Get the time in years with the start time added to it
   *
   * @returns number
   */
  get Years(): number {
    return this.start + this.time * 31557600;
  }
}
