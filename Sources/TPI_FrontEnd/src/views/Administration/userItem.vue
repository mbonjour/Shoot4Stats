<template>
  <div class="userItem">
    {{ user.first_name }}, {{ user.last_name }}, {{ user.email }}
  </div>
</template>

<script>
export default {
  name: 'userItem',
  props: ['user']
}
</script>
