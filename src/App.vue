<template>
  <div>
    <Header/>
    
    <div class="row m-0">

      <PosContainer/>

      <RightCard/>

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import PosContainer from '@/components/PosContainer.vue';
import RightCard from '@/components/RightCard.vue'

@Options({
  components: {
    Header,
    PosContainer,
    RightCard,
  },
})
export default class App extends Vue {}
</script>
