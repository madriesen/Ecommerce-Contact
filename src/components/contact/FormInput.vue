<template>
  <div class="flex flex-col py-4">
    <label :for="name">{{ label }}</label>
    <input
      class="py-2 px-2 rounded
          focus:outline-none focus:bg-white focus:shadow-contact"
      :type="type"
      :id="name"
      :name="name"
    />
  </div>
</template>
<script>
export default {
  name: 'form-input',
  props: ['label', 'type', 'name'],
};
</script>
