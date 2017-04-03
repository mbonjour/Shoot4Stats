<template>
  <div class="createShoot">
    <p>{{ title }}</p>
    <p>{{ description }}</p>
    <p>{{ location.latitude }}</p>
    <p>{{ location.longitude }}</p>
    <p>{{ type }}</p>
    <p>{{ nb_Ends }}</p>
    <p>{{ nb_ArrowsByEnd }}</p>
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
        <div class="input-field col s12">
          <select v-model="type" class="browser-default">
            <option disabled value="">Choose your option</option>
            <option>training</option>
            <option>outdoor</option>
            <option>indoor</option>
          </select>
          <label>Type</label>
        </div>
        <div class="row">
          <!-- Materialize fais chier quand on rempli avec V-model -->
          <div class="input-field col s6">
            <input v-model="nb_Ends" id="nb_Ends" type="text" class="validate">
            <label for="nb_Ends">nb_Ends</label>
          </div>
          <div class="input-field col s6">
            <input v-model="nb_ArrowsByEnd" id="nb_ArrowsByEnd" type="text" class="validate">
            <label for="nb_ArrowsByEnd">nb_ArrowsByEnd</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Gestion du Shoot côté API :
// var shootObject = {
//         title: req.body.title,
//         description: req.body.description,
//         nbEnds: req.body.nb_ends,
//         nbArrowsByEnd: req.body.nb_arrows_end,
//         type: req.body.type,
//         user: req.user.id,
//         location: req.body.Location
//     }
export default {
  name: 'createShoot',
  data () {
    return {
      description: '',
      title: '',
      location: {
        latitude: '',
        longitude: ''
      },
      type: '',
      nb_ArrowsByEnd: null,
      nb_Ends: null
    }
  },
  created () {
    this.type = this.$route.params.type
  },
  mounted () {
    /* eslint-disable */
    $(document).ready(function() {
      $('select').material_select();
    })
    $('#description').trigger('autoresize')
    if (this.type === 'indoor') {
      this.nb_Ends = 20
      this.nb_ArrowsByEnd = 3
    } else if (this.type === 'outdoor') {
      this.nb_Ends = 12
      this.nb_ArrowsByEnd = 6
    }
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
      console.log(this)
    }
  }
}
</script>
