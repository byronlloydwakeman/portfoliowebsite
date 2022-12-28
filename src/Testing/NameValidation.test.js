import { render } from "@testing-library/react";
import { NameValidation } from "../Components/Contact/Validation/NameValidation";

import "@testing-library/jest-dom/extend-expect"

test("Name Validation Should Work", () => 
{
    const actual = NameValidation("wad")
    const expected = true;
    expect(actual).toBe(expected);
})

test("Name Validation Should Not Work, includes numbers", () => 
{
    const actual = NameValidation("byron123")
    const expected = false;
    expect(actual).toBe(expected)
})

test("Name Validation Should Not Work, length less than 1", () => 
{
    const actual = NameValidation("b")
    const expected = false;
    expect(actual).toBe(expected);
})