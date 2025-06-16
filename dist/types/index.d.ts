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
export declare class TimeValue extends Number {
    constructor(value: unknown);
    /**
     * Get the time in milliseconds
     */
    get _ms(): number;
    /**
     * Get the time in seconds
     */
    get _s(): number;
    /**
     * Get the time in minutes
     */
    get _m(): number;
    /**
     * Get the time in hours
     */
    get _h(): number;
    /**
     * Get the time in days
     */
    get _d(): number;
    /**
     * Get the time in weeks
     */
    get _w(): number;
    /**
     * Get the time in years
     */
    get _y(): number;
    /**
     * Get the time in seconds
     */
    get _(): number;
    /**
     * Get the time in seconds
     */
    get v(): number;
    /**
     * Get the time in seconds
     */
    get val(): number;
    /**
     * Get the time in seconds
     */
    get value(): number;
    /**
     * Get the time in seconds from the current time
     *
     * @returns number
     */
    get FromNow(): number;
    /**
     * Get the time in seconds from the given start time
     *
     * @returns number
     */
    From(start: number): number;
    /**
     * Get the time in seconds from the given start time
     *
     * @returns TimeValue
     */
    from(start: number): TimeValue;
    /**
     * Get the time in seconds from the current time
     *
     * @returns TimeValue
     */
    fromNow(): TimeValue;
    /**
     * Add time to the current time.
     *
     * Eg. `Time.for(3).minutes.and(20).seconds.and(30).Milliseconds` -> 200.03
     *
     * @returns RelativeTime
     */
    and(time: number): RelativeTime;
    toString(): string;
    [Symbol.toPrimitive](hint: string): string | number;
}
/**
 * Helper class to compute absolute timestamps in seconds.
 *
 * Usage:
 *   `new Time(10).Minutes` -> 10 minutes (in seconds)
 *
 * Note: Using 365.25 days to account for leap year.
 */
export declare class Time {
    time: number;
    constructor(time: number);
    /**
     * Get the time in milliseconds
     *
     * @returns TimeValue
     */
    get millisecond(): TimeValue;
    /**
     * Get the time in seconds
     *
     * @returns TimeValue
     */
    get second(): TimeValue;
    /**
     * Get the time in minutes
     *
     * @returns TimeValue
     */
    get minute(): TimeValue;
    /**
     * Get the time in hours
     *
     * @returns TimeValue
     */
    get hour(): TimeValue;
    /**
     * Get the time in days
     *
     * @returns TimeValue
     */
    get day(): TimeValue;
    /**
     * Get the time in weeks
     *
     * @returns TimeValue
     */
    get week(): TimeValue;
    /**
     * Get the time in years
     *
     * @returns TimeValue
     */
    get year(): TimeValue;
    /**
     * Get the time in milliseconds
     *
     * @returns TimeValue
     */
    get milliseconds(): TimeValue;
    /**
     * Get the time in seconds
     *
     * @returns TimeValue
     */
    get seconds(): TimeValue;
    /**
     * Get the time in minutes
     *
     * @returns TimeValue
     */
    get minutes(): TimeValue;
    /**
     * Get the time in hours
     *
     * @returns TimeValue
     */
    get hours(): TimeValue;
    /**
     * Get the time in days
     *
     * @returns TimeValue
     */
    get days(): TimeValue;
    /**
     * Get the time in weeks
     *
     * @returns TimeValue
     */
    get weeks(): TimeValue;
    /**
     * Get the time in years
     *
     * @returns TimeValue
     */
    get years(): TimeValue;
    /**
     * Get the time in milliseconds
     *
     * @returns number
     */
    get Millisecond(): number;
    /**
     * Get the time in seconds
     *
     * @returns number
     */
    get Second(): number;
    /**
     * Get the time in minutes
     *
     * @returns number
     */
    get Minute(): number;
    /**
     * Get the time in hours
     *
     * @returns number
     */
    get Hour(): number;
    /**
     * Get the time in days
     *
     * @returns number
     */
    get Day(): number;
    /**
     * Get the time in weeks
     *
     * @returns number
     */
    get Week(): number;
    /**
     * Get the time in years
     *
     * @returns number
     */
    get Year(): number;
    /**
     * Get the time in milliseconds
     *
     * @returns number
     */
    get Milliseconds(): number;
    /**
     * Get the time in seconds
     *
     * @returns number
     */
    get Seconds(): number;
    /**
     * Get the time in minutes
     *
     * @returns number
     */
    get Minutes(): number;
    /**
     * Get the time in hours
     *
     * @returns number
     */
    get Hours(): number;
    /**
     * Get the time in days
     *
     * @returns number
     */
    get Days(): number;
    /**
     * Get the time in weeks
     *
     * @returns number
     */
    get Weeks(): number;
    /**
     * Get the time in years
     *
     * @returns number
     */
    get Years(): number;
    /**
     * Get the current time in seconds rounded to the lower integer.
     *
     * @returns number
     */
    static now(): number;
    /**
     * Express time using `every`
     *
     * @returns Time
     */
    static every(time: number): Time;
    /**
     * Express time using `for`
     *
     * @returns Time
     */
    static for(time: number): Time;
    /**
     * Express time using `in`
     *
     * @returns Time
     */
    static in(time: number): RelativeTime;
    /**
     * Express time using `after`
     *
     * @returns Time
     */
    static after(time: number): RelativeTime;
    /**
     * Express time using `before`
     *
     * @returns Time
     */
    static before(time: number): RelativeTime;
}
/**
 * Helper class to compute timestamps in seconds relative to the given start time.
 *
 * Usage:
 *   `new RelativeTime(10, Time.now()).Minutes` -> current time + 10 minutes (in seconds)
 */
export declare class RelativeTime {
    time: number;
    start: number;
    constructor(time: number, start?: number);
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns TimeValue
     */
    get millisecond(): TimeValue;
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns TimeValue
     */
    get second(): TimeValue;
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns TimeValue
     */
    get minute(): TimeValue;
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns TimeValue
     */
    get hour(): TimeValue;
    /**
     * Get the time in days with the start time added to it
     *
     * @returns TimeValue
     */
    get day(): TimeValue;
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns TimeValue
     */
    get week(): TimeValue;
    /**
     * Get the time in years with the start time added to it
     *
     * @returns TimeValue
     */
    get year(): TimeValue;
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns TimeValue
     */
    get milliseconds(): TimeValue;
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns TimeValue
     */
    get seconds(): TimeValue;
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns TimeValue
     */
    get minutes(): TimeValue;
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns TimeValue
     */
    get hours(): TimeValue;
    /**
     * Get the time in days with the start time added to it
     *
     * @returns TimeValue
     */
    get days(): TimeValue;
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns TimeValue
     */
    get weeks(): TimeValue;
    /**
     * Get the time in years with the start time added to it
     *
     * @returns TimeValue
     */
    get years(): TimeValue;
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns number
     */
    get Millisecond(): number;
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns number
     */
    get Second(): number;
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns number
     */
    get Minute(): number;
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns number
     */
    get Hour(): number;
    /**
     * Get the time in days with the start time added to it
     *
     * @returns number
     */
    get Day(): number;
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns number
     */
    get Week(): number;
    /**
     * Get the time in years with the start time added to it
     *
     * @returns number
     */
    get Year(): number;
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns number
     */
    get Milliseconds(): number;
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns number
     */
    get Seconds(): number;
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns number
     */
    get Minutes(): number;
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns number
     */
    get Hours(): number;
    /**
     * Get the time in days with the start time added to it
     *
     * @returns number
     */
    get Days(): number;
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns number
     */
    get Weeks(): number;
    /**
     * Get the time in years with the start time added to it
     *
     * @returns number
     */
    get Years(): number;
}
//# sourceMappingURL=index.d.ts.map