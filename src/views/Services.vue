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
              Dog Grooming Services
            </h5>
            <p class="card-text">
              On this page you can find out more about the techniques we use,
              how they can benefit you and your dog and the results you can
              expect. <br />
              <br />
              We cater for all breeds and types, the techniques and styles below
              may be modified to suit your pet. This may be determined by your
              own personal request or by the coat condition, health, temperament
              or behaviour of your pet.
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
              Dog Sitting Services
            </h5>
            <p class="card-text">
              We believe in providing individual care for your dog, so they have
              the very best experience of dog sitting. <br />
              <br />
              Our hosts are dog sitters who are committed to maintaining your
              dog’s home life and routines, as well as accommodating their likes
              and dislikes.
              <br />
              <br />
              <b>Choose the best!</b>
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
              Dog Walking Services
            </h5>
            <p class="card-text">
              Trusting someone else to look after your faithful friend can be a
              daunting task, but Fuzzies is here to help! <br />
              <br />
              Perhaps you’re seeking a temporary dog walker as you work around
              other commitments. Or maybe you’re looking for someone to care for
              your cuddly canine on a long-term basis. Either way, our
              easy-to-use platform will ensure your requirements are met.
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
