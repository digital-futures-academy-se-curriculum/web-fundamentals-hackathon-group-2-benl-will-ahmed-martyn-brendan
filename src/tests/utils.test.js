import { validateEmail, validateName } from "../utils/validators";

describe("validateEmail", () => {
  it("should return true for valid emails", () => {
    expect(validateEmail("john.doe@example.com")).toBe(true);
    expect(validateEmail("john@example.co.uk")).toBe(true);
    expect(validateEmail("john-doe@example.io")).toBe(true);
  });

  it("should return false for invalid emails", () => {
    expect(validateEmail("john.doe")).toBe(false);
    expect(validateEmail("john.doe@")).toBe(false);
    expect(validateEmail("john.doe@example")).toBe(false);
    expect(validateEmail("john.doe@example.")).toBe(false);
    expect(validateEmail("@example.com")).toBe(false);
  });

  it("should return false for empty emails", () => {
    expect(validateEmail("")).toBe(false);
  });
});

describe("validateName", () => {
  it("should return true for valid names", () => {
    expect(validateName("John")).toBe(true);
    expect(validateName("John Doe")).toBe(true);
    expect(validateName("John-Doe")).toBe(true);
    expect(validateName("John O'Conner")).toBe(true);
  });

  it("should return false for names with non-alphabetical characters", () => {
    expect(validateName("John123")).toBe(false);
    expect(validateName("John_Doe")).toBe(false);
    expect(validateName("John@Doe")).toBe(false);
  });

  it("should return false for names longer than 15 characters", () => {
    expect(validateName("JohnJacobJingleheimerSchmidt")).toBe(false);
  });

  it("should return false for empty names", () => {
    expect(validateName("")).toBe(false);
  });
});
