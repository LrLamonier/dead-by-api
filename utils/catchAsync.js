module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      res.status(res.statusCode).json({
        status: err.status,
        message: err.message,
      });
    });
  };
};
