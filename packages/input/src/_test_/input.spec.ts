import { OrxeInput } from "../";

describe("orxe-input", () => {
  let input;

  beforeEach(async function() {
    OrxeInput;
    input = (await document.body.appendChild(
      document.createElement("orxe-input")
    )) as OrxeInput;
    input.label = "Username";
  });

  it("it should exist", () => {
    expect(input).toBeTruthy();
  });

  afterEach(() => {
    input.remove();
  });

  it("check if class of input is active", () => {
    input.isActive = true;
    input.checkClass();
    expect(input.class).toEqual("input-class active");
  });

  it("check if class of input is filled", () => {
    input.isFilled = true;
    input.checkClass();
    expect(input.class).toEqual("input-class filled");
  });

  it("check if class of input is error", () => {
    input.isError = true;
    input.checkClass();
    expect(input.class).toEqual("input-class error");
  });

  it("check if class of input is focus", () => {
    input.isFocus = true;
    input.checkClass();
    expect(input.class).toEqual("input-class focus");
  });
});
