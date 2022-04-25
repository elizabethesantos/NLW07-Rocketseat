const linksSocialMedia = {
  github : 'elizabethesantos',
  youtube : 'UCDlV6N03aHS9CmdZEmkqr9w',
  facebook : 'elizabeth.campbell.752487',
  instagram : 'elizabethsantos2487',
  twitter : 'Elizabethsan24'
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children){
   const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url 
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()