const githubinfo = async () => {
  let response = await fetch("https://api.github.com/users/NAVNEET-KHARB");
  return response.json();
};
export default githubinfo;
