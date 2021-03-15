<template>
  <div>
    <div id="nav">
      <router-link to="/">Hello</router-link> |
      <router-link to="/admin/about">About</router-link> |
      <router-link to ="/admin/bootstrap">Bootstrap</router-link> |
      <router-link to ="/admin/protected">Protected</router-link>|
      <router-link to ="/login">Login</router-link>
    </div>
     <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
       <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">天龍書局後台系統</a>
       <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
     <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
     <ul class="navbar-nav px-3">
       <li class="nav-item text-nowrap">
         <a class="nav-link" href="#">Sign out</a>
       </li>
     </ul>
     </header>
  </div>
</template>
