const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'Node server running'
})

const port = process.env.PORT || 3000

app.listen(port, err => {
  if (err) console.error(err)
  console.log(`App Listening on Port ${port}`)
})
