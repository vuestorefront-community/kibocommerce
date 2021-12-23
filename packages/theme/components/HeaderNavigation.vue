<template>
  <div class="sf-header__navigation desktop" v-if="!isMobile">
    <SfHeaderNavigationItem
      v-for="(category, index) in   navigationCategories"
      :key="index"
      class="nav-item"
      v-e2e="`app-header-url_${category}`"
      :label="category.label"
      :link="localePath(getCatLink(category))"
    />
  </div>
  <SfModal v-else :visible="isMobileMenuOpen">
    <SfHeaderNavigationItem
      v-for="(category, index) in navigationCategories"
      :key="index"
      class="nav-item"
      v-e2e="`app-header-url_${category}`"
    >
    <template #mobile-navigation-item>
        <SfMenuItem
          :label="category.label"
          class="sf-header-navigation-item__menu-item"
          :link="localePath(getCatLink(category))"
          @click="toggleMobileMenu"
        />
      </template>

    </SfHeaderNavigationItem>
  </SfModal>
</template>

<script>
import { SfMenuItem, SfModal } from '@storefront-ui/vue';
import { useUiState, useUiHelpers} from '~/composables';
import {categoryGetters, useCategory} from '@vue-storefront/kibocommerce';
import { computed } from '@nuxtjs/composition-api';

export default {
  name: 'HeaderNavigationBar',
  components: {
    SfMenuItem,
    SfModal
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { isMobileMenuOpen, toggleMobileMenu } = useUiState();
    const { categories } = useCategory(
      'AppHeader:Category'
    );
    const { getCatLink } = useUiHelpers();
    const navigationCategories = computed(() => {
      return categories.value
        ?.filter(
          (category) =>
            category.childrenCategories?.length && category.isDisplayed
        )
        .map(categoryGetters.getTree)
        .filter((category, indx) => indx < 4);
    });
    return {
      navigationCategories,
      categories,
      isMobileMenuOpen,
      toggleMobileMenu,
      getCatLink

    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header-navigation-item {
  ::v-deep &__item--mobile {
    display: block;
  }
}
.sf-modal {
  ::v-deep &__bar {
    display: none;
  }
  ::v-deep &__content {
    padding: var(--modal-content-padding, var(--spacer-base) 0);
  }
}
</style>
