const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSlotsInput(data) {
  let errors = {};

  data.sunday = !isEmpty(data.sunday) ? data.sunday : "";
  data.monday = !isEmpty(data.monday) ? data.monday : "";
  data.tuesday = !isEmpty(data.tuesday) ? data.tuesday : "";
  data.wednesday = !isEmpty(data.wednesday) ? data.wednesday : "";
  data.thrusday = !isEmpty(data.thrusday) ? data.thrusday : "";
  data.friday = !isEmpty(data.friday) ? data.friday : "";

  if (Validator.isEmpty(data.sunday)) {
    errors.sunday = "This field is required";
  }

  if (Validator.isEmpty(data.monday)) {
    errors.monday = "This field is required";
  }

  if (Validator.isEmpty(data.tuesday)) {
    errors.tuesday = "This field is required";
  }
  if (Validator.isEmpty(data.wednesday)) {
    errors.wednesday = "This field is required";
  }
  if (Validator.isEmpty(data.thrusday)) {
    errors.thrusday = "This field is required";
  }
  if (Validator.isEmpty(data.friday)) {
    errors.friday = "This field is required";
  }

  if (!Validator.isNumeric(data.sunday) || data.sunday <= 0) {
    errors.sunday = "Please Enter a Valid Positive Number";
  }

  if (!Validator.isNumeric(data.monday) || data.monday <= 0) {
    errors.monday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.tuesday) || data.tuesday <= 0) {
    errors.tuesday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.wednesday) || data.wednesday <= 0) {
    errors.wednesday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.thrusday) || data.thrusday <= 0) {
    errors.thrusday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.friday) || data.friday <= 0) {
    errors.friday = "Please Enter a Valid Positive Number";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
