async function add(description) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(description),
  };

  return await fetch(`${import.meta.env.VITE_BASE_URL}/add`, requestOptions);
}

async function update(obj) {
  console.log(obj);

  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };

  return await fetch(`${import.meta.env.VITE_BASE_URL}/update`, requestOptions);
}

export { add, update };
