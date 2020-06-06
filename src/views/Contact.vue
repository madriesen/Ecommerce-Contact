<template>
  <div id="contact" class="bg-primary-light py-20">
    <div class="container mx-auto flex flex-row flex-wrap">
      <contact-text class="flex-1" />
      <contact-form />
    </div>
  </div>
</template>
<script>
import ContactText from '@/components/contact/ContactText.vue';
import ContactForm from '@/components/contact/ContactForm.vue';

export default {
  name: 'contact',
  components: { ContactText, ContactForm },
};
</script>
