<template >
  <section class="grid">

   <div class="grid-profile">
<div class="profile-container">
       <router-link to="/ProfileEdit" class="btn-profile fa fa-pencil"></router-link>
       <routerview id="profile" class="rv-profile"></routerview>
</div>
   </div>
   <div class="grid-add-animal"></div>
   <div class="grid-animals"></div>
  </section>
</template>

<script>
export default {
  name: "Rescue",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "profile profile add add" "profile profile add add"
    "animals animals animals animals";
}
.grid-profile {
  grid-area: profile;
  background-color: red;
}

.profile-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 100%;
  width: 100%;
}

.rv-profile {
  grid-area: 2 / 2 / 8 / 8;
  background-color: yellow;
}

.btn-profile {
  grid-area: 1/ 8/ 1 / 8;
  align-self: center;
  text-align: center;
  text-decoration: none;
  background-color: orange;
}

.grid-add-animal {
  grid-area: add;
  background-color: blue;
}
.grid-animals {
  grid-area: animals;
  background-color: green;
}
</style>
