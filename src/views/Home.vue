<template>
  <div class="header-background">
    <div class="container  pb-5 pt-5">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-8">
          <h1 class="heading ">
            We're the people you didn't know you needed!
            <br />
            <router-link :to="{ name: 'Signup' }" class="no-border">
              <button class="btn">Sign up</button>
            </router-link>
            with
            <span>Fuzzies today</span>
          </h1>
        </div>
        <div class="col-12 g-5 col-lg col-xl">
          <h1 class="heading ">
            Our services are totally <u>free</u>. Every dog deserves
            companionship.
          </h1>
        </div>
      </div>

      <div class="col-12 pt-5 d-none d-lg-block">
        <figure class="text-center w-80 ">
          <blockquote class="blockquote">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="../assets/images/sazzad.jpg"
                  width="250"
                  height="250"
                  alt="..."
                  class="img-fluid img-quote"
                />
              </div>
              <div class="flex-grow-1 ms-3 heading">
                <p>
                  " Just, <em>INCREDIBLE...</em> the specialists at Fuzzies
                  provided outstanding grooming and excellent care for my 3
                  German Shepherds. I would recommend to everyone! "
                </p>
              </div>
            </div>
          </blockquote>
          <figcaption class="blockquote-footer">
            <p class="text-light">
              <cite title="Source Title"
                >Dog Grooming Bay's CEO
                <br />
                Randy Seal</cite
              >
            </p>
          </figcaption>
        </figure>
      </div>

      <div class="row p-5 d-block d-md-none d-lg-none d-xl-none">
        <figure class="text-center w-80 ">
          <div class="col-12 ">
            <div class="align-items-center pb-3">
              <img
                src="../assets/images/sazzad.jpg"
                width="150"
                height="100"
                alt="..."
                class="img-fluid img-quote"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="flex-grow-1 ms-3 display-3">
              <p>
                " Just, <em>INCREDIBLE...</em> the specialists at Fuzzies
                provided outstanding grooming and excellent care for my 3 German
                Shepherds. I would recommend to everyone! "
              </p>
            </div>
          </div>
          <div class="col-12">
            <figcaption class="blockquote-footer">
              <p class="text-light">
                <cite title="Source Title"
                  >Dog Grooming Bay's CEO
                  <br />
                  Randy Seal</cite
                >
              </p>
            </figcaption>
          </div>
        </figure>
      </div>

      <div
        class="row d-none d-md-block d-lg-none d-xl-none pt-3 pb-5 pt-5 g-4 d-flex justify-content-center"
      >
        <div class="col" style="color: black">
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
                    name: 'Services',
                  }"
                  ><a>
                    Dog Walking Services
                  </a>
                </router-link>
              </h5>
              <p class="card-text">
                Trusting someone else to look after your faithful friend can be
                a daunting task, but Fuzzies is here to help! <br />
                <br />
                Perhaps you’re seeking a temporary dog walker as you work around
                other commitments. Or maybe you’re looking for someone to care
                for your cuddly canine on a long-term basis. Either way, our
                easy-to-use platform will ensure your requirements are met.
              </p>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.blockquote-footer {
  margin-top: -1rem;
  text-align: center;
}

#md-port .heading {
  font-size: 2rem;
}
#sm-port .heading {
  font-size: 1.5rem;
  font-weight: lighter;
  line-height: 1.2;
  text-align: center;
}

#xs-port .heading {
  font-size: 1.4rem;
  font-weight: lighter;
  line-height: 1.2;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 8px;
}

.btn {
  font-size: 2rem;
  font-weight: lighter;
}

.btn:hover {
  background-color: black;
  color: white;
  font-weight: 900;
}

u {
  text-decoration-color: rgb(53 205 151);
}

a {
  color: rgb(53 205 151) !important;
}

#xs-port .btn {
  background-color: rgb(53 205 151 / 61%);
  color: white;
  border-radius: 49px;
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
}

#sm-quote .heading {
  font-size: 1.2rem;
  font-weight: lighter;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 8px;
}

#md-quote .heading {
  font-size: 1.6rem;
  font-weight: lighter;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 8px;
}

.img-quote {
  border-radius: 150px;
}
</style>
