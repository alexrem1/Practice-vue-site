<template>
  <div class="sticky-nav" id="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link
          :to="{
            name: 'Home',
          }"
          ><img src="../assets/images/Fuzzies.png" alt="Home"
        /></router-link>
        <!-- <span class="navbar-brand">Fuzzies</span> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <a class="nav-link active"
                ><router-link
                  :to="{
                    name: 'Home',
                  }"
                >
                  Home
                </router-link></a
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link
                    :to="{
                      name: 'Home',
                    }"
                    ><a class="dropdown-item" href="#"
                      >Pet Sitting</a
                    ></router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link
                    :to="{
                      name: 'Home',
                    }"
                    ><a class="dropdown-item">Pet walking</a></router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link
                    :to="{
                      name: 'Home',
                    }"
                  >
                    <a class="dropdown-item" href="#"
                      >Pet Grooming</a
                    ></router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: '',
                }"
              >
                <a class="nav-link">Book an Appointment </a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: '',
                }"
              >
                <a class="nav-link" href="#">Testimonials </a></router-link
              >
            </li>
            <router-link
              :to="{
                name: '',
              }"
            >
              <li class="nav-item">
                <a class="nav-link" href="#">Contact us </a>
              </li>
            </router-link>
          </ul>
          <form class="d-flex justify-content-start">
            <button
              class="btn d-md-block d-lg-none d-xl-none me-3"
              type="submit"
            >
              Sign up
            </button>
            <router-link
              :to="{
                name: 'Login',
              }"
            >
              <button class="btn">
                Login
              </button>
            </router-link>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
