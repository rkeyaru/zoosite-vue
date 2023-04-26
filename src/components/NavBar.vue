<template>
  <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand ms-2" to="/">Zoosite</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <RouterLink class="nav-link btn-sm text-light  ms-2" to="dashboard">Dashboard</RouterLink>
         

          
            <RouterLink class="nav-link text-light  ms-2" to="signup">Sign up</RouterLink>
            <RouterLink class="nav-link text-light  ms-2" to="login">Log in</RouterLink>
        


        </div>
      </div>
    </div>
  </nav>
</template>