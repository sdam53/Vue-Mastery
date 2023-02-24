<script setup>
</script>

<template>
  <header class="header" id="header">
    <a href="index.html" class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Thank-you-transparent.svg"
      />
    </a>

    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>
        <li class="navbar-item">
          <a href="register.html">Register</a>
        </li>

        <li class="navbar-item">
          <router-link to="/login">Login</router-link>
        </li>
      </ul>

      <ul>
        <li class="navbar-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/category">Category</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/forum">Forum</router-link>
        </li>
        <li class="navbar-item">
          <a href="thread.html">Thread</a>
        </li>
        <!-- Show these option only on mobile-->
        <li class="navbar-item mobile-only">
          <a href="profile.html">My Profile</a>
        </li>
        <li class="navbar-item mobile-only">
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="forum-stats desktop-only">
    <hr />
    <ul>
      <li><i class="fa fa-user-circle-o"></i>47 users online</li>
      <li><i class="fa fa-user-o"></i>497 users registered</li>
      <li><i class="fa fa-comments-o"></i>49 threads</li>
      <li><i class="fa fa-comment-o"></i>763 posts</li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  float: left;
}
* {
  border-color: coral !important;
}

.svg-logo {
  height: 62px;
  width: 56px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .svg-logo {
    height: 45px;
    width: 40px;
  }
}

@media (min-width: 240px) and (max-width: 400px) {
  .svg-logo {
    height: 40px;
    width: 35px;
  }
}

header > a.logo {
  width: 50px;
}

@media (min-width: 240px) and (max-width: 720px) {
  header > a.logo {
    width: 35px;
  }
}

.forum-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: red;
}

.forum-stats ul {
  font-size: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.forum-stats ul li {
  display: flex;
  font-weight: 100;
  margin: 0 20px;
  align-items: center;
}

.forum-stats ul li .fa {
  margin-right: 5px;
}

.forum-stats ul li .fa-comments-o {
  font-size: 26px;
}
</style>