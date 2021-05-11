<template>
  <div class="container">
    <!-- Cards -->
    <h1 class="text-center pt-5">Services</h1>
    <div class="row row-cols-1 row-cols-lg-3 pt-3 pb-5 pt-5 g-4 d-flex">
      <div class="col">
        <div class="card h-100">
          <img
            src="../assets/images/abbie.jpg"
            class="card-img-top img-fluid"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">
              <router-link
                :to="{
                  name: 'Home',
                }"
                ><a>Dog Grooming Services</a></router-link
              >
            </h5>
            <p class="card-text text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              perspiciatis est suscipit eius ratione perferendis cumque aut
              ipsum voluptate sint!
            </p>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="../assets/images/sacha.jpg"
            class="card-img-top img-fluid"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">
              <router-link
                :to="{
                  name: 'Home',
                }"
                ><a>Dog Sitting Services</a>
              </router-link>
            </h5>
            <p class="card-text text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              cupiditate quo odit veritatis exercitationem voluptate tempora
              quis optio odio dicta. Nobis eligendi minima sit inventore est.
              Similique, doloremque cumque eius ipsa sunt rem. Sed ex fuga,
              temporibus autem quia animi accusamus iure facilis vero eveniet in
              dicta a enim asperiores!
            </p>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="../assets/images/chewy.jpg"
            class="card-img-top img-fluid"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">
              <router-link
                :to="{
                  name: 'Home',
                }"
                ><a>
                  Dog Walking Services
                </a>
              </router-link>
            </h5>
            <p class="card-text text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              est unde iste dignissimos, laboriosam porro quisquam beatae
              consequuntur molestiae officia!
            </p>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  min-height: 88vh;
}

.card-footer {
  background-color: rgb(53 205 151 / 61%);
}

.card {
  color: black;
}

a {
  color: rgb(53 205 151) !important;
}
</style>
