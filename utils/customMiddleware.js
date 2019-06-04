export function customMiddleware (req, res, next) {
  console.log('A custom middleware');
  next();
};
