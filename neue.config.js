// const compress = require('koa-compress');

module.exports = {
  ssr: {
    server(app) {
      // `app` is the Koa instance here
      // app.use(compress())
      app.use(async (ctx, next) => {
        console.log('Started tracking response time')
        const started = Date.now()
        console.log(11111, ctx.headers);
        global.abc = '123'
        // ctx.cookies.set('cba', 123)
        await next()
        // ctx.body += `<script>window.abc = '123'</script>`
        // once all middleware below completes, this continues
        const ellapsed = (Date.now() - started) + 'ms'
        console.log('Response time is:', ellapsed)
      })
    },
  }
};
