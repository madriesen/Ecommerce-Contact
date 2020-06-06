<template>
  <a
    :href="to"
    class="uppercase font-light text-sm mx-4 px-4 py-4 border-b border-transparent
    hover:border-secondary-0 hover:text-secondary-0 transition-colors duration-150"
  >
    <slot />
  </a>
</template>
<script>
export default {
  name: 'navitem',
  props: ['to'],
};
</script>
