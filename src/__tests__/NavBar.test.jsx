import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar component", () => {
  it("should render correctly NavBar component", () => {
    render(<NavBar user="Brito" />);

    expect(screen.getByText("Usuário atual: Brito")).toBeInTheDocument();
  });
});
