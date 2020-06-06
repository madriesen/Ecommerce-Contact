<template>
  <div class="font-light text-xl max-w-full">
    <form action="/">
      <form-input label="Naam:" type="text" name="naam" />
      <form-input label="E-mailadres:" type="email" name="email" />
      <div class="flex flex-col py-4">
        <label for="bericht">Bericht:</label>
        <textarea
          id="bericht"
          name="bericht"
          rows="8"
          cols="50"
          class="py-2 px-2 rounded resize-none
          focus:outline-none focus:bg-white focus:shadow-contact"
        ></textarea>
      </div>
      <div class="w-full text-right">
        <button
          type="submit"
          class="bg-secondary-0 rounded-full py-1 px-5 mt-1 text-primary-0
      hover:bg-primary-0 hover:text-secondary-0 transition-colors duration-150"
        >
          Stuur bericht
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import FormInput from '@/components/contact/FormInput.vue';

export default {
  name: 'contact-form',
  components: { FormInput },
};
</script>
