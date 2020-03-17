<template>
  <div @click.self="closeModal" class="deliveryInfoModal">
    <ModalHeader @modalClose="closeModal" :title="'배송정보'" />
    <div class="modalBody">

    </div>
  </div>
</template>

<script>
import ModalHeader from './ModalHeader'
export default {
  components: {
    ModalHeader
  },
  methods: {
    closeModal () {
      this.$emit('modalClose')
    }
  }
}
</script>

<style>
  .deliveryInfoModal{
    z-index: 1000;
    position: absolute;
    top: 20px;
    left: 5%;
    width: 90%;
    background-color: #fff;
  }

  .modalBody{
  }

</style>
