<template>
  <div id="app" class="w-full font-regular text-base">
    <navbar />
    <call-to-action class="mt-16" />
    <services class="mt-24" />
    <contact class="mt-32" />
  </div>
</template>

<script>
import navbar from '@/views/Navbar.vue';
import CallToAction from '@/views/CTA.vue';
import Services from '@/views/Services.vue';
import Contact from '@/views/Contact.vue';

export default {
  name: 'home',
  components: {
    navbar,
    CallToAction,
    Services,
    Contact,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
