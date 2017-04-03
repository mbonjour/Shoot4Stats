<template>
<div class="createShoot">
    <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="shoot_title" type="text" class="validate">
                    <label for="shoot_title">Shoot Title</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="description" class="materialize-textarea"></textarea>
                    <label for="description">Description</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="city" type="text" class="validate">
                    <label for="city">City</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="street" type="text" class="validate">
                    <label for="street">Street</label>
                </div>
            </div>
            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="Training">Training</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Indoor">Indoor</option>
                </select>
                <label>Type</label>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="nb_Ends" type="text" class="validate"></input>
                    <label for="nb_Ends">nb_Ends</label>
                </div>
                <div class="input-field col s6">
                    <input id="nb_ArrowsByEnd" type="text" class="validate"></input>
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
      shootToAdd: {}
    }
  },
  mounted () {
    /* eslint-disable */
    $('select').material_select()
    $('#description').trigger('autoresize')
    /* eslint-enable */
  }
}
</script>
