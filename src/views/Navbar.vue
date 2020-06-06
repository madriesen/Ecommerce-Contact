<template>
  <div class="w-full h-32 bg-primary-0">
    <div class="h-full container mx-auto flex items-center text-white">
      <a href="/" class="flex-1">
        <div class="font-bold text-3xl">Het bedrijf heeft</div>
        <div class="font-light text-lg tracking-subtitle uppercase">een naam</div>
      </a>
      <div>
        <ul class="flex">
          <navitem v-for="item in navItems" :key="item.name" :to="item.to">
            {{ item.name }}
            <span class="pl-3">
              <fa :icon="item.icon"></fa>
            </span>
          </navitem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navitem from '@/components/navbar/NavItem.vue';

export default {
  name: 'navbar',
  components: { navitem },
  data() {
    return {
      navItems: [
        { name: 'home', to: '', icon: 'lightbulb' },
        { name: 'services', to: '#services', icon: 'bolt' },
        { name: 'contact', to: '#contact', icon: 'plug' },
      ],
    };
  },
};
</script>
