<template>
  <!-- Contact Me Section -->
  <div
    class="row bg-shadow py-2 height-contact"
    :class="{ 'bg-pink': !nightMode, 'bg-dark3': nightMode }"
  >
    <div
      class="
        col-xs-12
        d-flex
        justify-content-center
        flex-column
        align-items-center
      "
    >
      <h1
        class="mb-3"
        :class="{ 'text-dark': !nightMode, 'text-white': nightMode }"
      >
        Like what you see?
      </h1>
      <!-- Button trigger modal -->
      <button
        class="btn btn-outline-primary btn-lg"
        :class="{ 'text-light': nightMode }"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Send me a message!
      </button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="contactModal"
      tabindex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div
          class="modal-content"
          :class="{ 'bg-pink': !nightMode, 'bg-dark': nightMode }"
        >
          <div class="modal-header">
            <h5
              class="modal-title"
              :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
              id="contactModalLabel"
            >
              Contact me
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              :class="{ 'bg-white': nightMode }"
            ></button>
          </div>
          <div class="modal-body">
            <form ref="form" @submit.prevent="sendEmail">
              <div class="mb-3">
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  name="from_name"
                  id="from_name"
                  placeholder="Your name here."
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  name="reply_to"
                  id="reply_to"
                  aria-describedby="emailHelp"
                  placeholder="Your email address here."
                  required
                  @blur="this.validEmail(email)"
                />
                <div
                  id="emailHelp"
                  class="form-text"
                  :class="{ 'text-light': nightMode }"
                >
                  We'll never share your email with anyone else. <br />
                  <b>Please make sure that you use a valid email address.</b>
                </div>
              </div>
              <div class="mb-3">
                <input
                  v-model="subject"
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Your subject here."
                  required
                />
              </div>
              <div class="mb-3">
                <textarea
                  v-model="message"
                  class="form-control"
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Your message here."
                  required
                ></textarea>

                <span
                  :class="{ 'text-light': nightMode, 'text-dark': !nightMode }"
                  >* all fields are required except name.</span
                >
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-secondary border-btn-cancel"
                  :class="{ 'text-light': nightMode }"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary border-btn"
                  :class="{ 'text-light': nightMode }"
                  data-bs-dismiss="modal"
                  value="Send"
                  :disabled="
                    !message || !this.validEmail(email) || !subject
                  "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "Contact",
  components: {},
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: "",
      name: "",
      subject: "",
      message: "",
      errors: [],
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_dh0fc1n",
          "template_yia0vop",
          this.$refs.form,
          "UJbQnkVzyJa5itaqz"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            document.querySelector("#from_name").value = "";
            document.querySelector("#reply_to").value = "";
            document.querySelector("#subject").value = "";
            document.querySelector("#message").value = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  mounted() {},
};
</script>

<style scoped>
@import url("../assets/fonts/glacial-indiference/stylesheet.css");

.bg-pink {
  background-color: #febfcb;
}

.modal-title {
  color: white;
}

.text-pink {
  color: #febfcb;
}

.height-contact {
  height: 30vh;
}

.bg-shadow {
  box-shadow: 0 1px 3px rgba(8, 33, 30, 0.5);
}

/* 
.btn-outline-primary {
  border-color: #d26375;
  background-color: #d2637500;
  color: black;
}

.btn-outline-primary:hover {
    color: white;
    background-color: #d26375 !important;
    border-color: #d26375 !important;
}

.btn:focus {
    background-color: #d26375 !important;
    border-color: #d26375 !important;
    color: black;
}

.btn-outline-primary:disabled {
  color: #e28194;
  background-color: transparent;
}

.border-btn {
  border-color: #e28194;
}

.btn-outline-secondary {
  border-color: #7b7d7d;
  background-color: #7b7d7d;
  color: white;
}

.btn-outline-secondary:hover {
  color: black;
  background-color: #7b7d7d00 !important;
  border-color: #7b7d7d !important;
}

.border-btn-cancel:focus {
  background-color: #7b7d7d00 !important;
  border-color: #7b7d7d !important;
  color: black;
}

.border-btn-cancel {
  border-color: #7b7d7d;
}

.btn-primary:hover {
  color: black;
  background-color: #e2819400 !important;
  border-color: #e28194 !important;
}

.btn-primary{
  color: white;
  background-color: #e28194 !important;
  border-color: #e28194 !important;
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
  color: black ;
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