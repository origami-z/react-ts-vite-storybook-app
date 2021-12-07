import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.github.com/users/:login', (req, res, ctx) => {
    console.log("handlers", req)
    return res(
      ctx.json({
        name: 'Eliza Hamilton',
        login: req.params.login,
        avatar_url: '/avatar.jpg',
      }),
    )
  }),
]