<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark3': nightMode }" class="p-st">
    <div
      class="container"
      data-aos="fade"
      data-aos-once="false"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 m-auto">
          <div class="d-flex justify-content-center">
            <img class="img-fluid" :src="nightMode ? black : white" alt="logo cristine" />
          </div>
          <h1 class="home-title pink" > <!-- :class="{ 'pink': !nightMode, 'text-light': nightMode }" -->
            Hi! My name is Cristine Marquez.
          </h1>
            <h4 class="d-flex justify-content-center">
              <p class="change_content txt-black" id="text-color" :class="{'txt-black' : !nightMode, 'text-light': nightMode}"> </p>
            </h4>
          <div class="mt-5 d-flex justify-content-center">
            <a
              class="btn btn-outline-primary btn-lg"
              href="/aboutme"
              @click.prevent="$emit('scroll', 'aboutme')"
              :class="{ 'text-light': nightMode }"
              aria-label="darkMode button"
            >
            <i class="fa-solid fa-angle-down"></i>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      white: require("@/assets/images/white-logo-removebg.png"),
      black: require("@/assets/images/black-logo.png"),
    };
  },
  methods: {
  },
  mounted() {

  },
};
</script>

<style scoped>

@import url('../assets/fonts/glacial-indiference/stylesheet.css');

.bg-white {
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url("../assets/images/masthead.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.home-title {
  /* font-size: 5.5rem; */
  font-weight: 500 !important;
  padding: 10px 0 10px 0;
  text-align: center;
  font-family: 'glacial_indifferenceregular' , sans-serif;
}

/* @media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
} */

.fa {
  font-size: 15px;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */

@keyframes changetext {
  0% {
    content: "I'm a web-developer. Nice to meet you.";
  }
  30% {
    content: "Soy un desarrollador web. Un placer conocerte.";
  }
  45% {
    content: "Sono uno sviluppatore web. Piacere di conoscerti.";
  }
  60% {
    content: "저는 웹 개발자입니다. 만나서 반갑습니다.";
  }
  75% {
    content: "私はWeb開発者です。お会いできて嬉しいです。";
  }
  85% {
    content: "Jag är webbutvecklare. Trevligt att träffas.";
  }
  100% {
    content: "Isa akong web-developer. Ikinagagalak kitang makilala.";
  }
}

.change_content:after {
  content: "";
  animation: changetext 10s infinite linear;
}

.txt-black {
color: black;
}

.pink {
  /* color: #e28194; */
  color: #d26375
}


/* 

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

.btn {
  border-color: #d26375;
}

.btn:focus {
  outline: none !important;
}

*/

.btn-outline-primary {
  border-color: #d26375 !important;
  background-color: #d2637500 !important;
  color: black ;
}

.btn-outline-primary:hover {
    color: white !important;
    background-color: #d26375 !important;
    border-color: #d26375 !important;
}

.btn:focus {
    background-color: #d26375 !important;
    border-color: #d26375 !important;
    color: white !important;
}

.btn-outline-primary:disabled {
  color: #d26375 !important;
  background-color: transparent !important;
}

.border-btn {
  border-color: #d26375 !important;
}

/* secondary */

.btn-outline-secondary {
  border-color: #7b7d7d !important;
  color: black !important;
}

.btn-outline-secondary:hover {
  color: white !important;
  background-color: #7b7d7d !important;
  border-color: #7b7d7d !important;
}

/* for btn cancel */

.border-btn-cancel:focus {
  background-color: #7b7d7d !important;
  border-color: #7b7d7d !important;
  color: black ;
}

.border-btn-cancel {
  border-color: #7b7d7d;
}

/* button-primary */

.btn-primary:hover {
  color: black !important;
  background-color: #d2637500 !important;
  border-color: #d26375 !important;
}

.btn-primary{
  color: white;
  background-color: #d26375 !important;
  border-color: #d26375 !important;
}

.btn-primary:disabled {
  color: #d26375 !important;
  background-color: transparent !important;
}

.btn:focus {
  outline: none !important;
}
</style>
