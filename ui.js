class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
    <div class = "card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <image class="img-fluid mb-2" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    </div>
    <div class="col-md-9">
    <span class="badge badge-primary mb-1">Public repos: ${user.public_repos} </span>
    <span class="badge badge-secondary mb-1">Public gists: ${user.public_gists} </span>
    <span class="badge badge-success mb-1">Followers: ${user.followers} </span>
    <span class="badge badge-info mb-1">Following: ${user.following} </span>
    <br>
    <br>
    <ul class="list-group">
    <li class="list-group-item">Company: ${user.company}</li>
    <li class="list-group-item">Website/blog: ${user.blog}</li>
    <li class="list-group-item">Location: ${user.location}</li>
    <li class="list-group-item">Member since: ${user.created_at}</li>

    </div>
    </div>
    </div>
    <h3 class="page-heading mb-3">Latest repos<h3>
    <div id="repos"></div>`
  }
  showRepos(repos) {
    let output = "";
    repos.forEach(function(repo) {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
      <div class="col-md-6">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>
      <div class="col-md-6">
      <span class="badge badge-primary mb-1">Stars: ${repo.stargazers_count} </span>
      <span class="badge badge-secondary mb-1">Watchers: ${repo.watchers_count} </span>
      <span class="badge badge-success mb-1">Forks: ${repo.forks_count} </span>
      </div>
      </div>
      </div>
      `
    });
    document.getElementById("repos").innerHTML = output;
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
  showAlert(message, className) {
    this.clearAlert();
    this.profile.innerHTML = "";
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }



}