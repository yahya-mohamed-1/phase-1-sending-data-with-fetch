function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      const newId = data.id;

      // If the element doesn't exist, create a new element and append it to the body
      const newElement = document.createElement("div");
      newElement.id = "user-id";
      newElement.textContent = `New user ID: ${newId}`;
      document.body.appendChild(newElement);

      return data;
    })
    .catch((error) => {
      console.error("Error:", error);

      // Assuming you have an element with id 'error-message' where you want to append the error message
      const errorMessageElement = document.getElementById("error-message");
      if (errorMessageElement) {
        errorMessageElement.textContent = `Error: ${error.message}`;
      } else {
        // If the element doesn't exist, create a new element and append it to the body
        const newElement = document.createElement("div");
        newElement.id = "error-message";
        newElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(newElement);
      }
    });
}
