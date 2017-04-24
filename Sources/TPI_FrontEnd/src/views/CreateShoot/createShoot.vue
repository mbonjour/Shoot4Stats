<template>
  <div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input v-model="title" id="shoot_title" type="text" class="validate" data-length="40">
            <label for="shoot_title">Shoot Title*</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea v-model="description" id="description" class="materialize-textarea" data-length="500"></textarea>
            <label for="description">Description*</label>
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
        <label>Type*</label>
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
            <input :disabled="typeFixed" v-model="nb_Ends" id="nb_Ends" type="number" class="validate"  min="1" max="50" >
            <label class="active" for="nb_Ends">Number of Ends*</label>
          </div>
          <div class="input-field col s6">
            <input :disabled="typeFixed" v-model="nb_ArrowsByEnd" id="nb_ArrowsByEnd" type="number" min="1" max="12" class="validate">
            <label class="active" for="nb_ArrowsByEnd">Number of Arrows By End*</label>
          </div>
        </div>
      </form>
      <!-- TODO: Boutton désactivé si pas tous les champs sont remplis -->
    </div>
    <button @click="validateSend()" class="validateButton" :disabled="!isShootValid">
      <div>
        <strong>Submit</strong>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'createShoot',
  data () {
    return {
      typeFixed: false,
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
    $('input#shoot_title, textarea#description').characterCounter()
    /* eslint-enable */
  },
  watch: {
    type (val) {
      if (val === 'indoor') {
        this.nb_Ends = 20
        this.nb_ArrowsByEnd = 3
        this.typeFixed = true
      } else if (val === 'outdoor') {
        this.nb_Ends = 12
        this.nb_ArrowsByEnd = 6
        this.typeFixed = true
      } else {
        this.typeFixed = false
      }
    }
  },
  computed: {
    isShootValid () {
      return (this.isNbEndsValid && this.isNbArrowByEndValid && this.isDescriptionValid && this.isTitleValid)
    },
    isNbEndsValid () {
      return this.nb_Ends > 0 && this.nb_Ends <= 50
    },
    isNbArrowByEndValid () {
      return this.nb_ArrowsByEnd > 0 && this.nb_ArrowsByEnd <= 12
    },
    isDescriptionValid () {
      return this.description && this.description.length < 200 // SN: To check if it works
    },
    isTitleValid () {
      return this.title && this.title.length < 45 // SN: Check value in api model Shoot
    }
  },
  methods: {
    validateSend () {
      if (this.isShootValid) {
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
  left: 0px;
  color: #35495E;
  background-color: #41B883;
  border: none;
  cursor: pointer;
}
.validateButton:disabled {
  color: #35495E;
  background-color: #dadada;
}
select.browser-default {
  padding-left: 0px;
}
</style>
