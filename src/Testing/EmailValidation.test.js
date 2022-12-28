import { render } from "@testing-library/react";
import { IsEmail } from "../Components/Contact/Validation/EmailValidation";
import "@testing-library/jest-dom/extend-expect";

test("IsEmail Should Work", () => {
    const email = "simple@example.com"
    const expected = true
    const actual = IsEmail(email);
    expect(actual).toBe(expected);
})

test("IsEmail Should Work", () => {
    const email = "very.common@example.com"
    const expected = true
    const actual = IsEmail(email);
    expect(actual).toBe(expected);
})

test("IsEmail Should Work", () => {
    const email = "disposable.style.email.with+symbol@example.com"
    const expected = true
    const actual = IsEmail(email);
    expect(actual).toBe(expected);
})

test("IsEmail Should Not Work", () => {
    const email = "Abc.example.co"
    const expected = false
    const actual = IsEmail(email);
    expect(actual).toBe(expected);
})

test("IsEmail Should Not Work", () => {
    const email = "A@b@c@example.com"
    const expected = false
    const actual = IsEmail(email);
    expect(actual).toBe(expected);
})

test("IsEmail Should Not Work", () => {
    const email = 'a"b(c)d,e:f;g<h>i[j\k]l@example.com'
    const expected = false
    const actual = IsEmail(email);
    expect(actual).toBe(expected);
})