export interface SignupCredentials {
  email: string
  username: string
  password: string
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface User {
  _id: string
  username: string
  email: string
}
export interface SignUpAndLogin {
  _id: string
  email: string
  username: string
  token: string
}
