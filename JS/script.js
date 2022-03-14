/*function aviso() {
  alert("Essa pagina esta em manutenção");
}*/

const linksSocialMedia = {
  github: "ricardojaj",
  linkedin: "in/ricardo-jesus-1582a318b/",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  // Puxando informações do meu user no github diretamente da api do github
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  //feth pega o json(ele nao sabe que é um json) e transforma em json
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userFoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
