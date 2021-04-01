const url = "https://api.github.com/users/nrcool/repos";

const fetchData = async () => {
  const respond = await fetch(url);
  const data = await respond.json();

  console.log("You are here waiting for me");
  console.log(data);
};
