import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Login from "../pages/Login";
import { userLogin } from "../lib/authentication.js";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("../lib/authentication.js")
jest.mock("react-router-dom",()=>{
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  }
})

describe("Login", () => {
  beforeEach(() => {
    userLogin.mockClear();
  });
  it("Deverá logar usuário corretamente", async () => {
    userLogin.mockResolvedValueOnce({})
    render(
    <MemoryRouter>
    <Login />
   </MemoryRouter>)

    const email = "exemplo@exemplo.com"
    const password = "123456"

    const getEmail = screen.getByPlaceholderText("Email")
    user.type(getEmail,email)
    const getPassword = screen.getByPlaceholderText("Senha")
    user.type(getPassword, password)

    const btnLogin = screen.getByRole("button")
    user.click(btnLogin)

    await waitFor(() => {
      expect(userLogin).toHaveBeenCalledWith(email, password)
    });
    expect(userLogin).toHaveBeenCalledTimes(1)
  })
})