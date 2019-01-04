/**
 * Middleware to check if current user have a JWT
 */
module.exports = async function (ctx, next) {
  console.log(2222, ctx);
  ctx.request.header.aaa = '1234'
  return next()
};
