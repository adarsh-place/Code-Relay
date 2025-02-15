const validateEmail = (email) => {
  const result = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return result;
};


// const validateEmail = async (email) => {
//   const response = await fetch(`https://api.zerobounce.net/v2/validate?email=${email}&apikey=YOUR_API_KEY`);
//   const data = await response.json();

//   if (data.status === "valid") {
//     return true;
//   } else {
//     return false;
//   }
// };

module.exports = validateEmail;
