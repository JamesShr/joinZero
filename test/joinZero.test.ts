import { joinZero } from "../src/main";

test("test join zero  length 16", () => {
  // Arrange
  let myNumber: number = 123,
    strLength: number = 16;
  let expected: string = "0000000000000123";

  // Act
  let actual: string = joinZero(myNumber, strLength);

  // Assert
  expect(actual).toBe(expected);
});

test("test join zero  length 13", () => {
  // Arrange
  let myNumber: number = 123,
    strLength: number = 13;
  let expected: string = "0000000000123";

  // Act
  let actual: string = joinZero(myNumber, strLength);

  // Assert
  expect(actual).toBe(expected);
});

test("test joinZero", () => {
  // test 1
  // Arrange
  let t1MyNumber: number = 123,
    t1StrLength: number = 13;
  let t1Expected: string = "0000000000123";

  // Act
  let t1Actual: string = joinZero(t1MyNumber, t1StrLength);

  // Assert
  expect(t1Actual).toBe(t1Expected);

  // test 2
  // Arrange
  let t2MyNumber: number = 123,
    t2StrLength: number = 16;
  let t2Expected: string = "0000000000000123";

  // Act
  let t2Actual: string = joinZero(t2MyNumber, t2StrLength);

  // Assert
  expect(t2Actual).toBe(t2Expected);
});
