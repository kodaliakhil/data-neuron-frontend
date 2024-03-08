async function getData() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return await fetch(`${import.meta.env.VITE_BASE_URL}/getData`, options);
}
async function add(description) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(description),
  };

  return await fetch(`${import.meta.env.VITE_BASE_URL}/add`, options);
}

async function update(obj) {
  console.log(obj);

  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };

  return await fetch(`${import.meta.env.VITE_BASE_URL}/update`, options);
}

export { add, update, getData };
