// const { validationResult } = require("express-validator");

// const validate = (req, res, next) => {
//   const errors = validationResult(req);
//   const mappedErrors = {};

//   if (Object.keys(errors.errors).length === 0) {
//     next();
//   } else {
//     errors.errors.map((error) => {
//       mappedErrors[error.path] = error.msg;
//     });

//     res.status(400).json(mappedErrors);
//   }
// };

// module.exports = validate;

const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = {"message":"no error"};

  if (Object.keys(errors.errors).length === 0) {
    next();
  } else {
    errors.errors.map((error) => {
      mappedErrors.message = error.msg;
    });

    res.status(400).json(mappedErrors);
  }
};

module.exports = validate;

