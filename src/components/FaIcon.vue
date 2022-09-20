
<template>
  <font-awesome-icon :icon="['fas', ...icons]" />
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'FaIcon',
  components: {
    FontAwesomeIcon,
  },
  props: { icons: [String] },
  setup() {
    library.add(faUserCheck, faUserXmark);
  }
}
</script>
