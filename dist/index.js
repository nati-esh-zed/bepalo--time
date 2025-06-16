"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeTime = exports.Time = exports.TimeValue = void 0;
/**
 * Time value utility class to provide extended functionality
 *
 */
class TimeValue extends Number {
    constructor(value) {
        super(value);
    }
    /**
     * Get the time in milliseconds
     */
    get _ms() {
        return this.valueOf() * 1000;
    }
    /**
     * Get the time in seconds
     */
    get _s() {
        return this.valueOf();
    }
    /**
     * Get the time in minutes
     */
    get _m() {
        return this.valueOf() / 60;
    }
    /**
     * Get the time in hours
     */
    get _h() {
        return this.valueOf() / 3600;
    }
    /**
     * Get the time in days
     */
    get _d() {
        return this.valueOf() / 86400;
    }
    /**
     * Get the time in weeks
     */
    get _w() {
        return this.valueOf() / 604800;
    }
    /**
     * Get the time in years
     */
    get _y() {
        return this.valueOf() / 31557600;
    }
    /**
     * Get the time in seconds
     */
    get _() {
        return this.valueOf();
    }
    /**
     * Get the time in seconds
     */
    get v() {
        return this.valueOf();
    }
    /**
     * Get the time in seconds
     */
    get val() {
        return this.valueOf();
    }
    /**
     * Get the time in seconds
     */
    get value() {
        return this.valueOf();
    }
    /**
     * Get the time in seconds from the current time
     *
     * @returns number
     */
    get FromNow() {
        return Time.now() + this.valueOf();
    }
    /**
     * Get the time in seconds from the given start time
     *
     * @returns number
     */
    From(start) {
        return start + this.valueOf();
    }
    /**
     * Get the time in seconds from the given start time
     *
     * @returns TimeValue
     */
    from(start) {
        return new TimeValue(start + this.valueOf());
    }
    /**
     * Get the time in seconds from the current time
     *
     * @returns TimeValue
     */
    fromNow() {
        return new TimeValue(Time.now() + this.valueOf());
    }
    /**
     * Add time to the current time.
     *
     * Eg. `Time.for(3).minutes.and(20).seconds.and(30).Milliseconds` -> 200.03
     *
     * @returns RelativeTime
     */
    and(time) {
        return new RelativeTime(time, this.valueOf());
    }
    valueOf() {
        return super.valueOf();
    }
    toString() {
        return `${this.valueOf()}`;
    }
    [Symbol.toPrimitive](hint) {
        if (hint === "string")
            return this.toString();
        return this.valueOf();
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return `${this.valueOf()}`;
    }
}
exports.TimeValue = TimeValue;
/**
 * Helper class to compute absolute timestamps in seconds.
 *
 * Usage:
 *   `new Time(10).Minutes` -> 10 minutes (in seconds)
 *
 * Note: Using 365.25 days to account for leap year.
 */
class Time {
    constructor(time) {
        this.time = time;
    }
    /**
     * Get the time in milliseconds
     *
     * @returns TimeValue
     */
    get millisecond() {
        return new TimeValue(this.time / 1000);
    }
    /**
     * Get the time in seconds
     *
     * @returns TimeValue
     */
    get second() {
        return new TimeValue(this.time);
    }
    /**
     * Get the time in minutes
     *
     * @returns TimeValue
     */
    get minute() {
        return new TimeValue(this.time * 60);
    }
    /**
     * Get the time in hours
     *
     * @returns TimeValue
     */
    get hour() {
        return new TimeValue(this.time * 3600);
    }
    /**
     * Get the time in days
     *
     * @returns TimeValue
     */
    get day() {
        return new TimeValue(this.time * 86400);
    }
    /**
     * Get the time in weeks
     *
     * @returns TimeValue
     */
    get week() {
        return new TimeValue(this.time * 604800);
    }
    /**
     * Get the time in years
     *
     * @returns TimeValue
     */
    get year() {
        return new TimeValue(this.time * 31557600);
    }
    /**
     * Get the time in milliseconds
     *
     * @returns TimeValue
     */
    get milliseconds() {
        return new TimeValue(this.time / 1000);
    }
    /**
     * Get the time in seconds
     *
     * @returns TimeValue
     */
    get seconds() {
        return new TimeValue(this.time);
    }
    /**
     * Get the time in minutes
     *
     * @returns TimeValue
     */
    get minutes() {
        return new TimeValue(this.time * 60);
    }
    /**
     * Get the time in hours
     *
     * @returns TimeValue
     */
    get hours() {
        return new TimeValue(this.time * 3600);
    }
    /**
     * Get the time in days
     *
     * @returns TimeValue
     */
    get days() {
        return new TimeValue(this.time * 86400);
    }
    /**
     * Get the time in weeks
     *
     * @returns TimeValue
     */
    get weeks() {
        return new TimeValue(this.time * 604800);
    }
    /**
     * Get the time in years
     *
     * @returns TimeValue
     */
    get years() {
        return new TimeValue(this.time * 31557600);
    }
    /**
     * Get the time in milliseconds
     *
     * @returns number
     */
    get Millisecond() {
        return this.time / 1000;
    }
    /**
     * Get the time in seconds
     *
     * @returns number
     */
    get Second() {
        return this.time;
    }
    /**
     * Get the time in minutes
     *
     * @returns number
     */
    get Minute() {
        return this.time * 60;
    }
    /**
     * Get the time in hours
     *
     * @returns number
     */
    get Hour() {
        return this.time * 3600;
    }
    /**
     * Get the time in days
     *
     * @returns number
     */
    get Day() {
        return this.time * 86400;
    }
    /**
     * Get the time in weeks
     *
     * @returns number
     */
    get Week() {
        return this.time * 604800;
    }
    /**
     * Get the time in years
     *
     * @returns number
     */
    get Year() {
        return this.time * 31557600;
    }
    /**
     * Get the time in milliseconds
     *
     * @returns number
     */
    get Milliseconds() {
        return this.time / 1000;
    }
    /**
     * Get the time in seconds
     *
     * @returns number
     */
    get Seconds() {
        return this.time;
    }
    /**
     * Get the time in minutes
     *
     * @returns number
     */
    get Minutes() {
        return this.time * 60;
    }
    /**
     * Get the time in hours
     *
     * @returns number
     */
    get Hours() {
        return this.time * 3600;
    }
    /**
     * Get the time in days
     *
     * @returns number
     */
    get Days() {
        return this.time * 86400;
    }
    /**
     * Get the time in weeks
     *
     * @returns number
     */
    get Weeks() {
        return this.time * 604800;
    }
    /**
     * Get the time in years
     *
     * @returns number
     */
    get Years() {
        return this.time * 31557600;
    }
    /**
     * Get the current time in seconds rounded to the lower integer.
     *
     * @returns number
     */
    static now() {
        return Math.floor(Date.now() / 1000);
    }
    /**
     * Express time using `every`
     *
     * @returns Time
     */
    static every(time) {
        return new Time(time);
    }
    /**
     * Express time using `for`
     *
     * @returns Time
     */
    static for(time) {
        return new Time(time);
    }
    /**
     * Express time using `in`
     *
     * @returns Time
     */
    static in(time) {
        return new RelativeTime(time);
    }
    /**
     * Express time using `after`
     *
     * @returns Time
     */
    static after(time) {
        return new RelativeTime(time);
    }
    /**
     * Express time using `before`
     *
     * @returns Time
     */
    static before(time) {
        return new RelativeTime(-time);
    }
}
exports.Time = Time;
/**
 * Helper class to compute timestamps in seconds relative to the given start time.
 *
 * Usage:
 *   `new RelativeTime(10, Time.now()).Minutes` -> current time + 10 minutes (in seconds)
 */
class RelativeTime {
    constructor(time, start = 0) {
        this.time = time;
        this.start = start;
    }
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns TimeValue
     */
    get millisecond() {
        return new TimeValue(this.start + this.time / 1000);
    }
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns TimeValue
     */
    get second() {
        return new TimeValue(this.start + this.time);
    }
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns TimeValue
     */
    get minute() {
        return new TimeValue(this.start + this.time * 60);
    }
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns TimeValue
     */
    get hour() {
        return new TimeValue(this.start + this.time * 3600);
    }
    /**
     * Get the time in days with the start time added to it
     *
     * @returns TimeValue
     */
    get day() {
        return new TimeValue(this.start + this.time * 86400);
    }
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns TimeValue
     */
    get week() {
        return new TimeValue(this.start + this.time * 604800);
    }
    /**
     * Get the time in years with the start time added to it
     *
     * @returns TimeValue
     */
    get year() {
        return new TimeValue(this.start + this.time * 31557600);
    }
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns TimeValue
     */
    get milliseconds() {
        return new TimeValue(this.start + this.time / 1000);
    }
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns TimeValue
     */
    get seconds() {
        return new TimeValue(this.start + this.time);
    }
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns TimeValue
     */
    get minutes() {
        return new TimeValue(this.start + this.time * 60);
    }
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns TimeValue
     */
    get hours() {
        return new TimeValue(this.start + this.time * 3600);
    }
    /**
     * Get the time in days with the start time added to it
     *
     * @returns TimeValue
     */
    get days() {
        return new TimeValue(this.start + this.time * 86400);
    }
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns TimeValue
     */
    get weeks() {
        return new TimeValue(this.start + this.time * 604800);
    }
    /**
     * Get the time in years with the start time added to it
     *
     * @returns TimeValue
     */
    get years() {
        return new TimeValue(this.start + this.time * 31557600);
    }
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns number
     */
    get Millisecond() {
        return this.start + this.time / 1000;
    }
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns number
     */
    get Second() {
        return this.start + this.time;
    }
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns number
     */
    get Minute() {
        return this.start + this.time * 60;
    }
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns number
     */
    get Hour() {
        return this.start + this.time * 3600;
    }
    /**
     * Get the time in days with the start time added to it
     *
     * @returns number
     */
    get Day() {
        return this.start + this.time * 86400;
    }
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns number
     */
    get Week() {
        return this.start + this.time * 604800;
    }
    /**
     * Get the time in years with the start time added to it
     *
     * @returns number
     */
    get Year() {
        return this.start + this.time * 31557600;
    }
    /**
     * Get the time in milliseconds with the start time added to it
     *
     * @returns number
     */
    get Milliseconds() {
        return this.start + this.time / 1000;
    }
    /**
     * Get the time in seconds with the start time added to it
     *
     * @returns number
     */
    get Seconds() {
        return this.start + this.time;
    }
    /**
     * Get the time in minutes with the start time added to it
     *
     * @returns number
     */
    get Minutes() {
        return this.start + this.time * 60;
    }
    /**
     * Get the time in hours with the start time added to it
     *
     * @returns number
     */
    get Hours() {
        return this.start + this.time * 3600;
    }
    /**
     * Get the time in days with the start time added to it
     *
     * @returns number
     */
    get Days() {
        return this.start + this.time * 86400;
    }
    /**
     * Get the time in weeks with the start time added to it
     *
     * @returns number
     */
    get Weeks() {
        return this.start + this.time * 604800;
    }
    /**
     * Get the time in years with the start time added to it
     *
     * @returns number
     */
    get Years() {
        return this.start + this.time * 31557600;
    }
}
exports.RelativeTime = RelativeTime;
//# sourceMappingURL=index.js.map