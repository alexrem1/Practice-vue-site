<template>
  <!-- Start -->
  <div class=" d-none d-lg-block">
    <div class="container d-flex flex-row justify-content-center pb-5">
      <div class="height">
        <h1 class="heading ">
          We're the people you didn't know you needed!
          <button class="btn">Sign up</button> with
          <br />
          <span class="">Fuzzies today</span>
        </h1>
      </div>
      <div class="height">
        <h1 class="heading ">
          Our services are totally <u>free</u>. Every dog deserves
          companionship.
        </h1>
      </div>
    </div>
  </div>
  <div class=" d-none d-md-block d-lg-none" id="md-port">
    <div class="container d-flex flex-row justify-content-center ">
      <div class="height">
        <h1 class="heading ">
          We're the people you didn't know you needed!
          <button class="btn">Sign up</button> with
          <br />
          <span class="">Fuzzies today</span>
        </h1>
      </div>
      <div class="height">
        <h1 class="heading ">
          Our services are totally <u>free</u>. Every dog deserves
          companionship.
        </h1>
      </div>
    </div>
  </div>
  <div class="d-none d-sm-block d-md-none" id="sm-port">
    <div
      class="container d-flex flex-column align-items-center justify-content-center "
    >
      <div class="height">
        <h1 class="heading ">
          We're the people you didn't know you needed!
          <button class="btn">Sign up</button> with
          <br />
          <span class="">Fuzzies today</span>
        </h1>
      </div>
      <div class="height">
        <h1 class="heading ">
          Our services are totally <u>free</u>. Every dog deserves
          companionship.
        </h1>
      </div>
    </div>
  </div>
  <div class="d-block d-sm-none" id="xs-port">
    <div
      class="container d-flex flex-column align-items-center justify-content-center "
    >
      <div class="height">
        <h1 class="heading ">
          We're the people you didn't know you needed!
          <button class="btn xs-btn">Sign up</button> with
          <br />
          <span class="">Fuzzies today</span>
        </h1>
      </div>
      <div class="height">
        <h1 class="heading ">
          Our services are totally <u>free</u>. Every dog deserves
          companionship.
        </h1>
      </div>
    </div>
  </div>

  <!-- Quotes -->
  <!-- lg+ scren size -->
  <div
    class="container d-none d-lg-block d-flex flex-row justify-content-center pt-5 pb-5"
  >
    <figure class="text-center w-80 ">
      <blockquote class="blockquote">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="../assets/images/sazzad.jpg"
              width="180"
              height="180"
              alt="..."
              class="img-fluid img-quote"
            />
          </div>
          <div class="flex-grow-1 ms-3 heading">
            <p>
              " Just, <em>INCREDIBLE...</em> the veterinarians at Fuzzies
              provided outstanding grooming and excellent care for my 3 German
              Shepherds. I would recommend to everyone! "
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

  <!-- md - only -->
  <div
    class="container d-none d-md-block d-lg-none d-flex flex-row justify-content-center pt-5 pb-5"
    id="md-quote"
  >
    <figure class="text-center w-100 ">
      <blockquote class="blockquote">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              src="../assets/images/sazzad.jpg"
              width="180"
              height="180"
              alt="..."
              class="img-fluid img-quote"
            />
          </div>
          <div class="flex-grow-1 ms-3 heading">
            <p>
              " Just, <em>INCREDIBLE...</em> the veterinarians at Fuzzies
              provided outstanding grooming and excellent care for my 3 German
              Shepherds. I would recommend to everyone! "
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

  <!-- mobile to sm -->
  <div
    class="container d-block d-sm-block d-md-none d-lg-none d-xl-none d-flex flex-row justify-content-center pt-5 pb-5"
    id="sm-quote"
  >
    <figure class="text-center w-80 ">
      <blockquote class="blockquote">
        <div class="d-flex align-items-center ">
          <div class="flex-shrink-0">
            <img
              src="../assets/images/sazzad.jpg"
              width="140"
              height="140"
              alt="..."
              class="img-fluid img-quote"
            />
          </div>
          <div class="flex-grow-1 ms-3 heading" id="sm-quote">
            <p>
              " Just, <em>INCREDIBLE...</em> the veterinarians at Fuzzies
              provided outstanding grooming and excellent care for my 3 German
              Shepherds. I would recommend to everyone! "
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

  <!-- Cards -->
  <div class="container d-none d-md-block ">
    <div class="row row-cols-1 row-cols-md-3 pt-3 pb-5 pt-5 g-4 d-flex">
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
  <div class="container d-block d-sm-block d-md-none d-lg-none d-xl-none ">
    <div class="row row-cols-1 row-cols-md-3 pt-3 pb-5 pt-5 g-4 d-flex">
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

  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
export default {
  components: { Footer },
};
</script>

<style scoped>
.height {
  max-width: 40%;
  padding-top: 20px;
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

.card {
  color: black;
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
.card-footer {
  background-color: rgb(53 205 151 / 61%);
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
  border-radius: 100px;
}
</style>
