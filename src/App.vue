<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <Navbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode" />
    <div class="parent">
      <Home
        @scroll="scrollTo"
        :nightMode="nightMode"
        style="height: 100vh"
        class="d-flex align-items-center"
      />
      <About
        id="aboutme"
        :nightMode="nightMode"
        style="height: 100%"
        class="d-flex align-items-center"
      />
      <!--  <hr class="dashed" :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"> -->
      <Projects id="project" :nightMode="nightMode" />
      <Skills id="skills" :nightMode="nightMode" />
      <Contact id="contact" :nightMode="nightMode" />
      <Footer id="footer" :nightMode="nightMode" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer";

import info from "./info";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Projects,
    Skills,
    Contact,
    Footer,
  },
  data() {
    return {
      nightMode: false,
      config: info.config,
    };
  },
  created() {
    if (this.config.use_cookies) {
      this.nightMode = this.$cookie.get("nightMode") === "true" ? true : false;
    }
  },
  mounted() {
    ["aboutme", "contact", "skills", "project"].forEach((l) => {
      if (window.location.href.includes(l)) {
        var elementPosition = document.getElementById(l).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    });
  },
  methods: {
    switchMode(mode) {
      if (this.config.use_cookies) {
        this.$cookie.set("nightMode", mode);
      }
      this.nightMode = mode;
    },
    scrollTo(ele) {
      if (ele == "home") {
        this.$router.push(`/`);
        window.scrollTo({ top: - 70, behavior: "smooth" });
      } else {
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 65, behavior: "smooth" });
        if (this.$router.history.current.path !== `/${ele}`)
          this.$router.push(`/${ele}`);
      }
    },
  },
};
</script>

<style>

html, body {
    max-width: 100%;
    overflow-x: hidden;
}

#app {
  font-family: "Assistant", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

h1,
h2,
h3 {
  font-family: "glacial_indifferenceregular", sans-serif;
}

.shadow {
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    9px -23px 21px -9px rgba(168, 168, 168, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    9px -23px 21px -9px rgba(168, 168, 168, 0);
}

.parent {
  /* margin-top: 38px;
  padding-top: 40px; */
  position: relative;
}

.pgray {
  color: #535a5e;
}

.pblue {
  color: #669db3ff;
}

.ppink {
  color: #e28194 !important;
}

.bg-dark2 {
  background-color: #262c30 !important;
}

.text-light {
  color: #d3d2d2 !important;
}

.p-st {
  transition: all 0.5s !important;
}

.bg-dark3 {
  background-color: #1b2024 !important;
}

.dashed {
  border: none;
  height: 2px !important;
  background: #febfcb;
  background: repeating-linear-gradient(
    90deg,
    #febfcb,
    #febfcb 6px,
    transparent 6px,
    transparent 12px
  );
  margin: 0%;
}

hr {
  border: none;
  border-bottom: solid 1px #000000;
  opacity: 2 !important;
}

/* Buttons */

/* primary */

.btn-outline-primary {
  border-color: #d26375 !important;
  background-color: #d2637500 !important;
  color: black !important;
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
  color: black !important;
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

.btn:focus {
  outline: none !important;
}
</style>
