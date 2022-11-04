export function FetchData(url, method, body = {}, options = {}) {
  let _options = {
    ...options,
  };
  if (method.toUpperCase() === "POST") {
    _options.body = JSON.stringify(body);
  }
  return fetch(url, {
    method,
    ..._options,
  }).then(async (resp) => {
    const status = resp.status;
    return {
      data: await resp.json(),
      status,
    };
  });
}

// export function addItem() {
//   console.log("this is adddIem function");
//   fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "test product",
//       price: 13.5,
//       description: "lorem ipsum set",
//       image: "https://i.pravatar.cc",
//       category: "electronic",
//     }),
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }
