function subscribeUser() {
  let form = document.getElementById("subscribeForm");
  let inputs = form.getElementsByTagName("input");
  const user = {
    name: inputs[0].value,
    email: inputs[1].value,
  };
  console.log(user);
  fetch("http://127.0.0.1:5000/add-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json);
    })
    .catch((e) => alert(e));
}
