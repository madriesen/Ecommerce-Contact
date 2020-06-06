<template>
  <div
    id="services"
    class="container mx-auto bg-services-background shadow-xl pb-20 py-24"
  >
    <div
      class="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
    >
      <div class="w-services-item">
        <h3 class="text-lg font-regular-bold mb-4">Diensten</h3>
        <p class=" font-light">
          Hier kan een kort tekstje komen over je diensten zodat klanten snel
          een idee hebben waar ze mee te maken hebben.
        </p>
      </div>
      <div>Afbeelding/illustratie</div>
    </div>
    <div
      class="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
    >
      <div
        class="w-services-item md:col-start-2 md:col-end-2 sm:col-start-1 sm:cols-end-1"
      >
        <h3 class="text-lg font-regular-bold mb-4">Producten</h3>
        <p class=" font-light">
          Hier kan een kort tekstje komen over je diensten zodat klanten snel
          een idee hebben waar ze mee te maken hebben.
        </p>
      </div>
      <div class="md:col-start-1 md:col-end-1 sm:col-start-2 sm:col-end-2">
        Afbeelding/illustratie
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'services',
};
</script>
