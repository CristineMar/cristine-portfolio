<template>
  <div :class="{ 'bg-star': !nightMode, 'bg-dark3': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="false"
        data-aos-duration="1000"
      >
        <h1
          class="text-center mb-4"
          style="color: white"
          :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
        >
          Projects
        </h1>
      </div>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
        :class="{ 'carousel-dark': !nightMode, 'carousel': nightMode }"
      >
        <div class="carousel-inner m-2">
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-8 col-sm-8">
                <img
                  src="../assets/images/broggi.png"
                  class="d-block img-fluid"
                  style="width: 25em;"
                  alt="broggi logo image"
                />
              </div>
              <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-black">Broggi</h5>
                    <p class="card-text text-black">
                      A website for 112 emergencies to manage calls and send help.
                      Made with Vue2, Laravel, PHP, HTML, CSS
                    </p>
                    <a href="https://youtu.be/r6vbTg7-T8c" target="_blank" class="btn btn-outline-primary btn-border">Demo</a>
                    <a href="https://github.com/CristineMar/projecteBroggi" target="_blank" class="btn btn-outline-primary btn-border mx-3">Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-8 col-sm-8">
                <img
                  src="../assets/images/doodle.png"
                  class="d-block img-fluid"
                  alt="doodle jump picture"
                  style="width: 25em;"
                />
              </div>
              <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-black">Doodle Jump</h5>
                    <p class="card-text text-black">
                      A platform game called DoodleJump in pure Javascript, HTML and CSS.
                    </p>
                    <a href="https://cristinemar.github.io/DoodleJump/" target="_blank" class="btn btn-outline-primary btn-border">Demo</a>
                    <a href="https://github.com/CristineMar/CristineMar.github.io/tree/gh_pages/DoodleJump" target="_blank" class="btn btn-outline-primary btn-border mx-3">Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-8 col-sm-8">
                <img
                  src="../assets/images/pokedex.png"
                  class="d-block img-fluid"
                  style="width: 25em;"
                  alt="pokedex image"
                />
              </div>
              <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-black">Pokedex</h5>
                    <p class="card-text text-black">
                      A pokedex website to add, edit and delete pokemon on your pokemon list.
                      Made with PHP
                    </p>
                    <a href="https://youtu.be/jkeuMssnFOU" target="_blank" class="btn btn-outline-primary btn-border">Demo</a>
                    <a href="https://github.com/CristineMar/pokemonPHP" target="_blank" class="btn btn-outline-primary btn-border mx-3">Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-8 col-sm-8">
                <img
                  src="../assets/images/rickmorty.png"
                  class="d-block img-fluid"
                  style="width: 25em;"
                  alt="rick and morty image"
                />
              </div>
              <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-black">Rick and Morty</h5>
                    <p class="card-text text-black">
                      An ionic app with angular ang rick and morty API
                    </p>
                    <a href="https://youtu.be/6C_8wyRRae8" target="_blank" class="btn btn-outline-primary btn-border">Demo</a>
                    <a href="https://github.com/CristineMar/rickandmorty" target="_blank" class="btn btn-outline-primary btn-border mx-3">Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-8 col-sm-8">
                <img
                  src="../assets/images/ABP.png"
                  class="d-block img-fluid"
                  style="width: 25em;"
                  alt="ABP image"
                />
              </div>
              <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-black">ABP</h5>
                    <p class="card-text text-black">
                      A list with to edit, delete, add and filter based on modules.
                      Made with Laravel and Vuejs
                    </p>
                    <a href="https://youtu.be/DVACzkVQ65s" target="_blank" class="btn btn-outline-primary btn-border">Demo</a>
                    <a href="https://github.com/CristineMar/ABP_Cristine_Marquez" target="_blank" class="btn btn-outline-primary btn-border mx-3">Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import info from "../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.fa {
  color: #febfcb;
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: #febfcb;
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}

.bg-star {
  background: pink url("../assets/images/star-pink.png") fixed;
  background-size: 40px;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  opacity: 0.25 !important;
}

.btn-outline-primary {
  border-color: #d26375;
  color: black;
}

.btn-outline-primary:hover {
    color: #fff;
    background-color: #d26375 !important;
    border-color: #d26375 !important;
}

.btn:focus {
    background-color: #d26375 !important;
    border-color: #d26375 !important;
    color: white;
}

.btn-border {
  border-color: #d26375;
}

/* @import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,900");

.blobs {
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin: 0 !important;
  padding: 0 !important;
}

.shape-blob {
  background: #f2d2d9;
  height: 200px;
  width: 200px;
  border-radius: 30% 50% 20% 40%;
  animation: transform 20s ease-in-out infinite both alternate,
    movement_one 40s ease-in-out infinite both;
  opacity: 0.7;
  position: absolute;
  left: 70%;
  top: 50%;
}
.shape-blob.one {
  height: 500px;
  width: 500px;
  left: -200px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate,
    movement_two 60s ease-in-out infinite both;
}

.shape-blob.two {
  height: 350px;
  width: 350px;
  left: 500px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate,
    movement_two 60s ease-in-out infinite both;
}

@keyframes transform {
  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}

@keyframes movement_one {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
  }
}

@keyframes movement_two {
  0%,
  500% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
  }
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 5em;
  letter-spacing: 2px;
  font-weight: 900;
  color: white;
  line-height: 0.9em;
  position: relative;
  z-index: 4;
  text-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
} */
</style>
