
/* TODO: Add Moralis Authentication code */

/* Moralis init code */
const serverUrl = "https://xebjvmsisvoa.usemoralis.com:2053/server"; //Server url from moralis.io";
const appId = "JLmtTNZTXTC3rRd13SgGXMUMYiKm6qef7fwT5imb"; // Application id from moralis.io;
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("login").onclick = login();
document.getElementById("logout").onclick = logOut();

// Smart Contract
