angular.module("portfolioApp").filter("backgroundImage", function () {
  return function (input) {
    const parts = input.split(".");
    if (parts.length > 1) {
      parts[parts.length - 2] += "-small";
      return parts.join(".");
    } else {
      return input;
    }
  };
});
