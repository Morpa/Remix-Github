export type User = {
  login: string
  avatar_url: string
  html_url: string
  bio: string
}

export namespace Repositories {
  export type Repo = {
    id: number
    full_name: string
    html_url: string
    stargazers_count: number
    language: string
    name: string
  }

  export type LoaderData = {
    user: User
    repos: Repo[]
  }
}
