
<template>
  <font-awesome-icon :icon="['fas', ...icons]" />
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faUserCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'FaIcon',
  components: {
    FontAwesomeIcon,
  },
  props: { icons: [String] },
  setup() {
    library.add(faArrowRight, faUserCheck, faUserXmark);
  }
}
</script>
