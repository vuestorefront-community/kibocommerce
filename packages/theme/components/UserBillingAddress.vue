<template>
  <div>
    <p>{{ firstName }} {{ lastNameOrSurname }}</p>
    <p>{{ address1 }}</p>
    <p>{{ address2 }}</p>

    <p>
      {{ cityOrTown }}
      {{ stateOrProvince }}
      {{ postalOrZipCode }}
    </p>

    <p>{{ countryCode }}</p>
    <p v-if="phoneNumbers.home" class="phone">{{ phoneNumbers.home }}</p>
  </div>
</template>

<script>
import { toRef, computed } from '@nuxtjs/composition-api';
import { useVSFContext } from '@vue-storefront/core';

export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { $kibo: { config } } = useVSFContext();
    const address = toRef(props, 'address');

    const street = computed(() => {
      const parts = [
        address.streetName,
        address.streetNumber && ` ${ address.streetNumber }`,
        address.apartment && `, Apartment ${ address.apartment }`
      ];

      return parts.filter(Boolean).join('');
    });

    const country = computed(() => {
      const country = address.country;
      return config.countries.find(c => c.name === country)?.label || country;
    });

    return {
      street,
      country,

      firstName: props.address.firstName,
      lastNameOrSurname: props.address.lastNameOrSurname,
      phoneNumbers: props.address.phoneNumbers,
      ...props.address.address
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.phone {
  margin-top: var(--spacer-base);
}
</style>
