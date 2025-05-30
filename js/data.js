async function getData() {
  let res = await fetch("https://parkcinema-data-eta.vercel.app/landing");
  let data = await res.json();

  return data;
}
getData();
