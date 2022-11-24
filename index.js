// Add your code here
const meesage = document.getElementById("meesage");
const errorm = document.getElementById("errorm");
function submitData(userName, userEmail) {
  const formData = {
    name: userName,
    email: userEmail,
  };

  // method: "POST" is missing from the object below
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const meess = document.createElement("div");
      meess.innerHTML = object.id;
      meesage.appendChild(meess);
    })
    .catch(function (error) {
      const errror = document.createElement("div");
      errror.innerHTML = error.message;
      errorm.appendChild(errror);
    });
}
