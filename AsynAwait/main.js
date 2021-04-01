// API Url
// const url = "https://api.github.com/users/nrcool/repos";

// const fetchData = async () => {
//   const respond = await fetch(url);
//   console.log("You are here waiting for me");
//   const data = await respond.json();

//   console.log(data[0]);
// };
// fetchData();
// console.log("outside waiting for me... ");

async function fetchData() {
  const respond = await fetch(url);
  const data = await respond.json();
  console.log("Before get Data");
  console.log(data);
  console.log("Hello world");
}
fetchData();
