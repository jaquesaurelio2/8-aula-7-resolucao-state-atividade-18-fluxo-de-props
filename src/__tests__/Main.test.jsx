import { render, screen } from "@testing-library/react";
import Main from "../components/Main";

describe("Main component", () => {
  it("should render correctly Main component", () => {
    render(<Main user="Brito" />);

    expect(screen.getByText("Bem-vindo, Brito!")).toBeInTheDocument();
  });
});
