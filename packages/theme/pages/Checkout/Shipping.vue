<template>
  <ValidationObserver v-slot="{ handleSubmit, dirty, reset }">
    <SfHeading
      v-e2e="'heading-shipping'"
      :level="3"
      :title="$t('Shipping details')"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <form @submit.prevent="handleSubmit(handleAddressSubmit(reset))">
      <UserShippingAddresses
        v-e2e="'shipping-addresses'"
        v-if="isAuthenticated && hasSavedShippingAddress"
        v-model="setAsDefault"
        :currentAddressId="currentAddressId || NOT_SELECTED_ADDRESS"
        @setCurrentAddress="handleSetCurrentAddress"
      />
      <div
        v-if="
          currentOrderShippingAddress &&
          Object.keys(currentOrderShippingAddress).length
        "
      >
        <div class="deliveryCard">
          <span style="color: green">Delivery Address :</span>
          <hr />
          <p>
            {{ currentOrderShippingAddress.firstName }}
            {{ currentOrderShippingAddress.lastNameOrSurname }}
          </p>
          <p>
            {{
              currentOrderShippingAddress.address
                ? currentOrderShippingAddress.address.address1
                : ''
            }}
            {{
              currentOrderShippingAddress.address
                ? currentOrderShippingAddress.address.address2
                : ''
            }}
          </p>
          <p>
            {{
              currentOrderShippingAddress.address
                ? currentOrderShippingAddress.address.postalOrZipCode
                : ''
            }}
          </p>
          <p>
            {{
              currentOrderShippingAddress.address
                ? currentOrderShippingAddress.address.cityOrTown
                : ''
            }},
            {{
              currentOrderShippingAddress.address
                ? currentOrderShippingAddress.address.stateOrProvince
                : ''
            }}
          </p>
          <p>
            {{
              currentOrderShippingAddress.address
                ? currentOrderShippingAddress.address.countryCode
                : ''
            }}
          </p>
          <p
            v-if="
              currentOrderShippingAddress.phoneNumbers &&
              currentOrderShippingAddress.phoneNumbers.home
            "
            class="phone"
          >
            {{ currentOrderShippingAddress.phoneNumbers.home }}
          </p>
        </div>
        <br />
      </div>
      <div class="form" v-if="canAddNewAddress">
        <ValidationProvider
          name="firstName"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'firstName'"
            :value="shippingDetails.firstName"
            @input="
              (firstName) => changeShippingDetails('firstName', firstName)
            "
            label="First name"
            name="firstName"
            class="form__element form__element--half"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="lastName"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'lastName'"
            :value="shippingDetails.lastNameOrSurname"
            @input="
              (lastName) => changeShippingDetails('lastNameOrSurname', lastName)
            "
            label="Last name"
            name="lastName"
            class="form__element form__element--half form__element--half-even"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="streetName"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'streetName'"
            :value="shippingDetails.address && shippingDetails.address.address1"
            @input="
              (streetName) => changeShippingDetails('address1', streetName)
            "
            label="Street name"
            name="streetName"
            class="form__element form__element--half"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="apartment"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'apartment'"
            :value="shippingDetails.address && shippingDetails.address.address2"
            @input="(apartment) => changeShippingDetails('address2', apartment)"
            label="House/Apartment number"
            name="apartment"
            class="form__element form__element--half form__element--half-even"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="city"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'city'"
            :value="
              shippingDetails.address && shippingDetails.address.cityOrTown
            "
            @input="(city) => changeShippingDetails('cityOrTown', city)"
            label="City"
            name="city"
            class="form__element form__element--half"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="state"
          :rules="!statesInSelectedCountry ? null : 'required|min:2'"
          v-slot="{ errors }"
          slim
        >
          <SfSelect
            v-e2e="'state'"
            :value="
              shippingDetails.address && shippingDetails.address.stateOrProvince
            "
            @input="(state) => changeShippingDetails('stateOrProvince', state)"
            label="State/Province"
            name="state"
            class="
              form__element
              form__element--half
              form__element--half-even
              form__select
              sf-select--underlined
            "
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
            :disabled="!statesInSelectedCountry"
          >
            <SfSelectOption
              v-for="state in statesInSelectedCountry"
              :key="state"
              :value="state"
            >
              {{ state }}
            </SfSelectOption>
          </SfSelect>
        </ValidationProvider>
        <ValidationProvider
          name="country"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfSelect
            v-e2e="'country'"
            :value="
              shippingDetails.address && shippingDetails.address.countryCode
            "
            @input="(country) => changeShippingDetails('countryCode', country)"
            label="Country"
            name="country"
            class="
              form__element form__element--half form__select
              sf-select--underlined
            "
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          >
            <SfSelectOption
              v-for="countryOption in countries"
              :key="countryOption.name"
              :value="countryOption.name"
            >
              {{ countryOption.label }}
            </SfSelectOption>
          </SfSelect>
        </ValidationProvider>
        <ValidationProvider
          name="zipCode"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'zipcode'"
            :value="
              shippingDetails.address && shippingDetails.address.postalOrZipCode
            "
            @input="
              (postalCode) =>
                changeShippingDetails('postalOrZipCode', postalCode)
            "
            label="Zip-code"
            name="zipCode"
            class="form__element form__element--half form__element--half-even"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          name="phone"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'phone'"
            :value="
              shippingDetails.address && shippingDetails.phoneNumbers.home
            "
            @input="(phone) => changeShippingDetails('home', phone)"
            label="Phone number"
            name="phone"
            class="form__element form__element--half"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
      </div>
      <SfButton
        v-if="!canAddNewAddress"
        class="color-light form__action-button form__action-button--add-address"
        type="submit"
        @click="handleAddNewAddressBtnClick"
      >
        {{ currentAddressId ? $t('Edit address') : $t('Add new address') }}
      </SfButton>
      <div class="form">
        <div class="form__action">
          <SfButton
            v-e2e="'select-shipping'"
            class="form__action-button"
            type="submit"
            :disabled="!canMoveForward"
            v-if="!(isShippingDetailsStepCompleted && !dirty)"
          >
            {{ $t('Select shipping method') }}
          </SfButton>
        </div>
      </div>
      <div v-if="isShippingDetailsStepCompleted && !dirty">
        <VsfShippingProvider />
        <div class="form__action">
          <SfButton
            v-e2e="'continue-to-billing'"
            class="form__action-button"
            type="button"
            @click="$router.push('/checkout/billing')"
            :disabled="
              !isShippingMethodStepCompleted || loadingShippingProvider
            "
          >
            {{ $t('Continue to billing') }}
          </SfButton>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { SfHeading, SfInput, SfButton, SfSelect } from '@storefront-ui/vue';
import {
  useShippingProvider,
  useUserShipping,
  userShippingGetters,
  useUser,
  useShipping
} from '@vue-storefront/kibocommerce';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, min, digits } from 'vee-validate/dist/rules';
import { useVSFContext } from '@vue-storefront/core';
import { ref, watch, computed, onMounted } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
import '@/helpers/validators/phone';

const NOT_SELECTED_ADDRESS = '';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('min', {
  ...min,
  message: 'The field should have at least {length} characters'
});
extend('digits', {
  ...digits,
  message: 'Please provide a valid phone number'
});

export default {
  name: 'Shipping',
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    ValidationProvider,
    ValidationObserver,
    UserShippingAddresses: () =>
      import('@/components/Checkout/UserShippingAddresses'),
    VsfShippingProvider: () =>
      import('@/components/Checkout/VsfShippingProvider')
  },
  setup() {
    const {
      $kibo: { config }
    } = useVSFContext();
    const { shipping: address, loading, load, save } = useShipping();
    const { isAuthenticated } = useUser();
    const { shipping: userShipping, load: loadUserShipping } =
      useUserShipping();

    const shippingDetails = ref(address.value || {});
    const currentAddressId = ref(NOT_SELECTED_ADDRESS);

    const setAsDefault = ref(false);
    const canAddNewAddress = ref(false);

    const isShippingDetailsStepCompleted = ref(false);
    const currentOrderShippingAddress = ref({});

    const canMoveForward = computed(
      () =>
        !loading.value &&
        shippingDetails.value &&
        Object.keys(shippingDetails.value).length
    );

    const { state, loading: loadingShippingProvider } = useShippingProvider();

    const hasSavedShippingAddress = computed(() => {
      if (!isAuthenticated.value || !userShipping.value) {
        return false;
      }
      const userShippingAddressess = userShippingGetters.getAddresses(
        userShipping.value
      );
      return Boolean(userShippingAddressess?.length);
    });

    const statesInSelectedCountry = computed(() => {
      if (!shippingDetails.value.address?.countryCode) {
        return null;
      }

      const selectedCountry = config.countries.find(
        (country) => country.name === shippingDetails.value.address?.countryCode
      );

      return selectedCountry && selectedCountry.states;
    });

    const handleAddressSubmit = () => async () => {
      const fulfillmentShippingDetails = {
        address: shippingDetails.value.address,
        companyOrOrganization: shippingDetails.value.companyOrOrganization,
        email: shippingDetails.value.email,
        firstName: shippingDetails.value.firstName,
        id: shippingDetails.value.id,
        lastNameOrSurname: shippingDetails.value.lastNameOrSurname,
        middleNameOrInitial: shippingDetails.value.middleNameOrInitial,
        phoneNumbers: shippingDetails.value.phoneNumbers
      };

      await save({ shippingDetails: fulfillmentShippingDetails });

      isShippingDetailsStepCompleted.value = true;
      canAddNewAddress.value = false;
      load();
      // show the saved current order's address as delivery address
      currentOrderShippingAddress.value = address.value.addresses[0];
      canAddNewAddress.value = false;
    };

    const handleAddNewAddressBtnClick = () => {
      currentAddressId.value = NOT_SELECTED_ADDRESS;
      canAddNewAddress.value = true;
      isShippingDetailsStepCompleted.value = false;
    };

    const handleSetCurrentAddress = (addr) => {
      shippingDetails.value = { ...addr };
      currentAddressId.value = addr.id.toString();
      canAddNewAddress.value = false;
      isShippingDetailsStepCompleted.value = false;
    };

    const changeShippingDetails = (field, value) => {
      const addressList = [
        'address1',
        'address2',
        'addressType',
        'cityOrTown',
        'stateOrProvince',
        'postalOrZipCode',
        'countryCode',
        'isValidated'
      ];
      const phoneList = ['home'];

      if (!shippingDetails.value.address) shippingDetails.value.address = {};
      if (!shippingDetails.value.phoneNumbers)
        shippingDetails.value.phoneNumbers = {};

      if (addressList.includes(field)) {
        shippingDetails.value = {
          ...shippingDetails.value
        };

        shippingDetails.value.address[field] = value;
      } else if (phoneList.includes(field)) {
        shippingDetails.value = {
          ...shippingDetails.value
        };

        shippingDetails.value.phoneNumbers[field] = value;
      } else {
        shippingDetails.value = {
          ...shippingDetails.value,
          [field]: value
        };
      }

      isShippingDetailsStepCompleted.value = false;
      currentAddressId.value = NOT_SELECTED_ADDRESS;
    };

    const selectDefaultAddress = () => {
      const defaultAddress = userShippingGetters.getDefault(userShipping.value);
      if (defaultAddress && Object.keys(defaultAddress).length) {
        handleSetCurrentAddress(defaultAddress);
      }
    };

    // Update local state if we have new address' response from the backend
    watch(address, (addr) => {
      shippingDetails.value = addr || {};
    });

    watch(statesInSelectedCountry, (statesInSelectedCountry) => {
      const countryHasStates =
        statesInSelectedCountry && statesInSelectedCountry.length;
      if (!countryHasStates && shippingDetails.value.state) {
        shippingDetails.value.state = null;
      }
    });

    onSSR(async () => {
      await load();
      if (isAuthenticated.value) {
        await loadUserShipping();
      }
    });

    onMounted(async () => {
      if (!userShipping.value?.addresses && isAuthenticated.value) {
        await loadUserShipping();
      }
      const hasEmptyShippingDetails =
        !shippingDetails.value ||
        Object.keys(shippingDetails.value).length === 0;
      if (!hasEmptyShippingDetails) {
        currentOrderShippingAddress.value = shippingDetails.value;
        return;
      }
      const shippingAddresses = userShippingGetters.getAddresses(
        userShipping.value
      );

      if (!shippingAddresses || !shippingAddresses.length) {
        canAddNewAddress.value = true;
        return;
      }
      if (hasEmptyShippingDetails) {
        selectDefaultAddress();
        currentOrderShippingAddress.value = shippingDetails.value;
        return;
      }
      canAddNewAddress.value = false;
    });

    return {
      NOT_SELECTED_ADDRESS,

      isAuthenticated,
      shippingDetails,
      address,
      countries: config.countries,
      setAsDefault,
      canAddNewAddress,
      currentAddressId,
      statesInSelectedCountry,

      hasSavedShippingAddress,

      handleAddressSubmit,
      handleAddNewAddressBtnClick,
      handleSetCurrentAddress,

      changeShippingDetails,
      loading,

      isShippingDetailsStepCompleted,
      canMoveForward,

      isShippingMethodStepCompleted: computed(
        () => state.value && state.value._status
      ),
      loadingShippingProvider,
      currentOrderShippingAddress
    };
  }
};
</script>

<style lang="scss" scoped>
.form {
  --button-width: 100%;
  &__select {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    --select-option-font-size: var(--font-size--lg);
    ::v-deep .sf-select__dropdown {
      font-size: var(--font-size--lg);
      margin: 0;
      color: var(--c-text);
      font-family: var(--font-family--secondary);
      font-weight: var(--font-weight--normal);
    }

    ::v-deep .sf-select__label {
      left: initial;
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    --button-width: auto;
  }
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
    }
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button {
    &--secondary {
      @include for-desktop {
        order: -1;
        text-align: left;
      }
    }
    &--add-address {
      width: 100%;
      margin: 0 0 var(--spacer-sm) 0;
      @include for-desktop {
        margin: 0 0 var(--spacer-lg) 0;
        width: auto;
      }
    }
  }
  &__back-button {
    margin: var(--spacer-xl) 0 var(--spacer-sm);
    &:hover {
      color: var(--c-white);
    }
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}

.shipping {
  &__label {
    display: flex;
    justify-content: space-between;
  }
  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}

.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
  --heading-title-font-weight: var(--font-weight--bold);
}
</style>

<style lang="scss" scoped>
p {
  margin: 0;
}
.phone {
  margin-top: var(--spacer-base);
}
.deliveryCard {
  display: flexbox;
  padding-left: 10px;
  width: 40%;
  justify-content: center;
  border-width: 1px;
  border-color: rgb(160, 160, 255);
}
</style>
