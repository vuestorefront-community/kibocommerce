<template>
  <SfSection :title-heading="title" class="section">
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
        class="carousel"
      >
        <SfCarouselItem
          class="carousel__item"
          v-for="(product, i) in products"
          :key="i"
        >
          <SfProductCard
            :title="productGetters.getName(product)"
            :image="productGetters.getCoverImage(product)"
            :regular-price="
              $n(productGetters.getPrice(product).regular, 'currency')
            "
            class="products__product-card"
            :special-price="
              productGetters.getPrice(product).special &&
              $n(productGetters.getPrice(product).special, 'currency')
            "
            :isOnWishlist="isInWishlist({ product })"
            @click:wishlist="
              !isInWishlist({ product })
                ? addItemToWishlist({ product })
                : removeItemFromWishlist({ product })
            "
            :link="
              localePath(
                `/p/${productGetters.getId(product)}/${productGetters.getSlug(
                  product
                )}`
              )
            "
          >
            <template #wishlist-icon>
              <span
                v-if="
                  !isAuthenticated || !product.purchasableState.isPurchasable
                "
              ></span>
            </template>
          </SfProductCard>
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">
import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader
} from '@storefront-ui/vue';

import { productGetters, useUser, useWishlist } from '@vue-storefront/kibocommerce';

export default {
  name: 'RelatedProducts',
  setup() {
    const { isAuthenticated } = useUser();
    const {
      addItem: addItemToWishlist,
      isInWishlist,
      removeItem: removeItemFromWishlist
    } = useWishlist();
    return {
      productGetters,
      isAuthenticated,
      addItemToWishlist,
      isInWishlist,
      removeItemFromWishlist
    };
  },
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader
  },
  props: {
    title: String,
    products: Array,
    loading: Boolean
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: var(--spacer-base);
}

.carousel {
  margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}

.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid {
    justify-content: center;
    @include for-desktop {
      justify-content: flex-start;
    }
  }
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__product-card {
    --product-card-title-margin: var(--spacer-base) 0 0 0;
    --product-card-title-font-weight: var(--font-weight--medium);
    --product-card-title-margin: var(--spacer-xs) 0 0 0;
    flex: 1 1 50%;
    ::v-deep .sf-image {
      object-fit: contain;
      height: 200px;
    }
    @include for-mobile {
      ::v-deep .sf-image {
        object-fit: contain;
        height: 170px;
      }
    }
    @include for-desktop {
      --product-card-title-font-weight: var(--font-weight--normal);
      --product-card-add-button-bottom: var(--spacer-base);
      --product-card-title-margin: var(--spacer-sm) 0 0 0;
    }
  }
}
</style>
