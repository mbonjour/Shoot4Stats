<template>
  <div class="createShoot">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input v-model="title" id="shoot_title" type="text" class="validate">
            <label for="shoot_title">Shoot Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
            <label for="description">Description</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input v-model="location.latitude" id="city" type="text" class="validate">
            <label for="city">City</label>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
            <input v-model="location.longitude" id="street" type="text" class="validate">
            <label for="street">Street</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
        <label>Type</label>
        <select v-model="type" class="browser-default">
          <option disabled value="">Choose your option</option>
          <option>training</option>
          <option>outdoor</option>
          <option>indoor</option>
        </select>
          </div>
        </div>
        <div class="row">
          <!-- Materialize fais chier quand on rempli avec V-model -->
          <div class="input-field col s6">
            <input v-model="nb_Ends" id="nb_Ends" type="number" class="validate">
            <label class="active" for="nb_Ends">nb_Ends</label>
          </div>
          <div class="input-field col s6">
            <input v-model="nb_ArrowsByEnd" id="nb_ArrowsByEnd" type="number" class="validate">
            <label class="active" for="nb_ArrowsByEnd">nb_ArrowsByEnd</label>
          </div>
        </div>
      </form>
      <!-- TODO: Boutton désactivé si pas tous les champs sont remplis -->
    </div>
    <button @click="validateSend()" class="validateButton">
      <div>
      <strong>Submit</strong>
      <i class="material-icons tiny" style="color: #35495E;">send</i>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'createShoot',
  data () {
    return {
      description: null,
      title: null,
      location: {
        latitude: null,
        longitude: null
      },
      type: null,
      nb_ArrowsByEnd: null,
      nb_Ends: null
    }
  },
  created () {
    this.type = this.$route.params.type || 'training'
  },
  mounted () {
    /* eslint-disable */
    $('#description').trigger('autoresize')
    /* eslint-enable */
  },
  watch: {
    type (val) {
      if (val === 'indoor') {
        this.nb_Ends = 20
        this.nb_ArrowsByEnd = 3
      } else if (val === 'outdoor') {
        this.nb_Ends = 12
        this.nb_ArrowsByEnd = 6
      }
    }
  },
  methods: {
    validateSend () {
      if (this.nb_Ends > 0 && this.nb_ArrowsByEnd > 0 && this.description && this.title) {
        this.$store.dispatch('createShoot', {
          title: this.title,
          description: this.description,
          nb_ends: this.nb_Ends,
          nb_arrows_end: this.nb_ArrowsByEnd,
          type: this.type,
          Location: this.location
        })
        .then(() => {
          this.$router.push({path: '/editShoot/' + this.$store.getters.currentEditingShoot.id})
        })
        .catch((err) => {
          console.log(err)
        })
        // this.$http.post('/api/shoots', {
        //   title: this.title,
        //   description: this.description,
        //   nb_ends: this.nb_Ends,
        //   nb_arrows_end: this.nb_ArrowsByEnd,
        //   type: this.type,
        //   Location: this.location
        // })
        // .then((response) => {
        //   this.$router.push({path: '/editShoot/' + response.data.id})
        // })
        // .catch((err) => {
        //   this.$events.$emit('toastError', err + ' Veuillez contacter l\'admin si cela se reproduit')
        //   console.log(err)
        // })
      } else {
        this.$events.$emit('toastError', 'Une information est mal rentrée dans le formulaire')
      }
    }
  }
}
</script>
<style>
.validateButton {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  color: #35495E;
  background-color: #41B883;
  border: none;
  cursor: pointer;
}
</style>
