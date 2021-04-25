const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is Required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is not Valid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password is Required";
  }
  if (Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
