import { OrxeInput } from "../";
import { axe, toHaveNoViolations } from "@orxe-devkit/axe";
expect.extend(toHaveNoViolations);

describe("orxe-input-axe", () => {
  it("It should exist", () => {
    expect(true).toBeTruthy();
  });

  let Input;

  beforeEach(function() {
    OrxeInput;
    document.body.appendChild(document.createElement("orxe-input"));
    Input = document.querySelector("orxe-input");
    Input.label = "Username";
  });
  afterEach(async function() {
    Input.remove();
  });

  it("should support all WCAG Accessibility Rules. when default toolbar is rendered", async () => {
    const result = await axe(Input);
    expect(result).toHaveNoViolations();
  });

  it("test case for disabled input", async () => {
    Input.disabled = true;
    const result = await axe(Input);
    expect(result).toHaveNoViolations();
  });

  it("test case for required input", async () => {
    Input.required = true;
    const result = await axe(Input);
    expect(result).toHaveNoViolations();
  });
});
