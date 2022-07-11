import { PageType } from "../types/pages"
import LoginPage from './AuthPages/LoginPage'
import RegisterPage from "./AuthPages/RegisterPage"

const authRoutes: PageType[] = [
  {
    path: "/login",
    element: LoginPage
  },
  {
    path: "/register",
    element: RegisterPage
  },
]

export {
  authRoutes
}