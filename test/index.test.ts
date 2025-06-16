// test/index.test.ts
import { describe, it, expect } from "vitest";
import { Time } from "@bepalo/time";

describe("Time API coverage", () => {
  it("Time.every(5).Days", () => {
    expect(Time.every(5).Days).toBe(5 * 86400);
  });
  it("Time.every(5).days.fromNow", () => {
    const now = Time.now();
    const val = Time.every(5).days.FromNow;
    expect(val.valueOf()).toBeGreaterThan(now);
    expect(val.valueOf()).toBeLessThanOrEqual(now + 5 * 86400);
  });
  it("Time.every(5).days.fromNow()", () => {
    const now = Time.now();
    const val = Time.every(5).days.fromNow();
    expect(val.valueOf()).toBeGreaterThan(now);
    expect(val.valueOf()).toBeLessThanOrEqual(now + 5 * 86400);
  });
  it("Time.every(5).days.from(Time.now())", () => {
    const now = Time.now();
    const val = Time.every(5).days.from(now);
    expect(val.valueOf()).toBe(now + 5 * 86400);
  });
  it("Time.for(5).Days", () => {
    expect(Time.for(5).Days).toBe(5 * 86400);
  });
  it("Time.for(5).hours.FromNow", () => {
    const now = Time.now();
    const val = Time.for(5).hours.FromNow;
    expect(val).toBeGreaterThan(now);
    expect(val).toBeLessThanOrEqual(now + 5 * 3600);
  });
  it("Time.for(5).hours.fromNow()", () => {
    const now = Time.now();
    const val = Time.for(5).hours.fromNow();
    expect(val.valueOf()).toBeGreaterThan(now);
    expect(val.valueOf()).toBeLessThanOrEqual(now + 5 * 3600);
  });
  it("Time.in(5).Days", () => {
    expect(Time.in(5).Days).toBe(5 * 86400);
  });
  it("Time.in(5).days.FromNow", () => {
    const now = Time.now();
    const val = Time.in(5).days.FromNow;
    expect(val).toBeGreaterThan(now);
    expect(val).toBeLessThanOrEqual(now + 5 * 86400);
  });
  it("Time.in(5).days.fromNow()", () => {
    const now = Time.now();
    const val = Time.in(5).days.fromNow();
    expect(val.valueOf()).toBeGreaterThan(now);
    expect(val.valueOf()).toBeLessThanOrEqual(now + 5 * 86400);
  });
  it("Time.in(5).days.from(Time.now())", () => {
    const now = Time.now();
    const val = Time.in(5).days.from(now);
    expect(val.valueOf()).toBe(now + 5 * 86400);
  });
  it("Time.after(5).Days", () => {
    expect(Time.after(5).Days).toBe(5 * 86400);
  });
  it("Time.after(5).days.FromNow", () => {
    const now = Time.now();
    const val = Time.after(5).days.FromNow;
    expect(val).toBeGreaterThan(now);
    expect(val).toBeLessThanOrEqual(now + 5 * 86400);
  });
  it("Time.after(5).days.fromNow()", () => {
    const now = Time.now();
    const val = Time.after(5).days.fromNow();
    expect(val.valueOf()).toBeGreaterThan(now);
    expect(val.valueOf()).toBeLessThanOrEqual(now + 5 * 86400);
  });
  it("Time.after(5).days.from(Time.now())", () => {
    const now = Time.now();
    const val = Time.after(5).days.from(now);
    expect(val.valueOf()).toBe(now + 5 * 86400);
  });
  it("Time.before(5).Days", () => {
    expect(Time.before(5).Days).toBe(-5 * 86400);
  });
  it("Time.before(5).days.FromNow", () => {
    const now = Time.now();
    const val = Time.before(5).days.FromNow;
    expect(val).toBeLessThan(now);
    expect(val).toBeGreaterThanOrEqual(now - 5 * 86400);
  });
  it("Time.before(5).days.fromNow()", () => {
    const now = Time.now();
    const val = Time.before(5).days.fromNow();
    expect(val.valueOf()).toBeLessThan(now);
    expect(val.valueOf()).toBeGreaterThanOrEqual(now - 5 * 86400);
  });
  it("Time.before(5).days.from(Time.now())", () => {
    const now = Time.now();
    const val = Time.before(5).days.from(now);
    expect(val.valueOf()).toBe(now - 5 * 86400);
  });
  it("Time.in(10).years.FromNow", () => {
    const now = Time.now();
    const val = Time.in(10).years.FromNow;
    expect(val).toBeGreaterThan(now);
    expect(val).toBeLessThanOrEqual(now + 10 * 31557600);
  });
  it("Time.after(3).days.and(1).Hour", () => {
    const val = Time.after(3).days.and(1).Hour;
    expect(val).toBe(3 * 86400 + 3600);
  });
  it("Time.for(2).hours._s", () => {
    expect(Time.for(2).hours._s).toBe(2 * 3600);
  });

  it("Time.after(3).minutes", () => {
    expect(Time.after(3).Minutes).toBe(3 * 60);
  });
  it("Time.after(3).minutes.and(20).seconds", () => {
    const val = Time.after(3).minutes.and(20).Seconds;
    expect(val).toBe(3 * 60 + 20);
  });
  it("Time.after(3).minutes.and(20).seconds.and(30).Milliseconds", () => {
    const val = Time.after(3).minutes.and(20).seconds.and(30).Milliseconds;
    expect(val).toBe(3 * 60 + 20 + 30 / 1000);
  });
  it("Time.after(3).minutes.and(20).seconds.FromNow", () => {
    const now = Time.now();
    const val = Time.after(3).minutes.and(20).seconds.FromNow;
    expect(val).toBeGreaterThan(now);
    expect(val).toBeLessThanOrEqual(now + 3 * 60 + 20);
  });
  it("Time.for(1).days.and(6).hours._", () => {
    const val = Time.for(1).days.and(6).hours._;
    expect(val).toBe(1 * 86400 + 6 * 3600);
  });
});
