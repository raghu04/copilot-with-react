import { render, screen } from "@testing-library/react";
import Register from "./index";
import "@testing-library/jest-dom";

describe("Register Component", () => {
  it("renders the registration form", () => {
    render(<Register />);
    expect(screen.getByText("Welcome to the registration page!")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Mobile Number:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
  });
});
