<template>
  <div id="product">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="product">
      <LazyHydrate when-idle>
        <SfGallery :images="productGallery" class="product__gallery" />
      </LazyHydrate>

      <div class="product__info">
        <div class="product__header">
          <SfHeading
            :title="productGetters.getName(product)"
            :level="3"
            class="sf-heading--no-underline sf-heading--left"
          />
          <SfButton
            class="sf-button--pure sf-header__action on_wishList"
            v-if="isAuthenticated && isPurchasable"
            @click="
              !isInWishlist({ product })
                ? addItemToWishlist({ product })
                : removeItemFromWishlist({ product })
            "
          >
            <SfIcon
              class="sf-header__icon"
              :icon="currentWishlistIcon"
              size="1.25rem"
              data-test="sf-wishlist-icon"
            />
          </SfButton>
          <SfIcon
            icon="drag"
            size="xxl"
            color="var(--c-text-disabled)"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div class="product__price-and-rating">
          <SfPrice
            :regular="$n(productGetters.getPrice(product).regular, 'currency')"
            :special="
              productGetters.getPrice(product).special &&
                $n(productGetters.getPrice(product).special, 'currency')
            "
          />
          <div>
            <div class="product__rating">
              <SfRating :score="averageRating" :max="5" />
              <a v-if="!!totalReviews" href="#" class="product__count">
                ({{ totalReviews }})
              </a>
            </div>
            <SfButton data-cy="product-btn_read-all" class="sf-button--text">{{
              $t('Read all reviews')
            }}</SfButton>
          </div>
        </div>
        <div>
          <p class="product__description desktop-only" v-html="description"></p>
          <SfButton
            data-cy="product-btn_size-guide"
            class="sf-button--text desktop-only product__guide"
          >
            {{ $t('Size guide') }}
          </SfButton>
          <SfSelect
            data-cy="product-select_size"
            v-if="options.size"
            :value="configuration.size"
            @input="(size) => updateFilter({ size })"
            label="Size"
            class="sf-select--underlined product__select-size"
            :required="true"
          >
            <SfSelectOption
              v-for="size in options.size"
              :key="size"
              :value="size"
            >
              {{ size }}
            </SfSelectOption>
          </SfSelect>
          <div
            v-if="options.color && options.color.length > 1"
            class="product__colors desktop-only"
          >
            <p class="product__color-label">{{ $t('Color') }}:</p>
            <SfColor
              data-cy="product-color_update"
              v-for="(color, i) in options.color"
              :key="i"
              :color="color"
              class="product__color"
              @click="updateFilter({ color })"
            />
          </div>
          <SfAddToCart
            data-cy="product-cart_add"
            :stock="stock"
            v-model="qty"
            :disabled="loading || !isPurchasable"
            :canAddToCart="stock > 0"
            class="product__add-to-cart"
            @click="addItem({ product, quantity: parseInt(qty) })"
          />
        </div>

        <LazyHydrate when-idle>
          <SfTabs :open-tab="1" class="product__tabs">
            <SfTab data-cy="product-tab_description" title="Description">
              <div class="product__description">
                {{ $t('Product description') }}
              </div>
              <SfProperty
                v-for="(p, i) in properties"
                :key="i"
                :name="i"
                :value="p.join(', ')"
                class="product__property"
              >
                <template v-if="i === 'Category'" #value>
                  <SfButton class="product__property__button sf-button--text">
                    {{ p }}
                  </SfButton>
                </template>
              </SfProperty>
            </SfTab>
            <!-- <SfTab title="Read reviews" data-cy="product-tab_reviews">
              <SfReview
                v-for="review in reviews"
                :key="reviewGetters.getReviewId(review)"
                :author="reviewGetters.getReviewAuthor(review)"
                :date="reviewGetters.getReviewDate(review)"
                :message="reviewGetters.getReviewMessage(review)"
                :max-rating="5"
                :rating="reviewGetters.getReviewRating(review)"
                :char-limit="250"
                read-more-text="Read more"
                hide-full-text="Read less"
                class="product__review"
              />
            </SfTab>
            <SfTab
              title="Additional Information"
              data-cy="product-tab_additional"
              class="product__additional-info"
            >
              <div class="product__additional-info">
                <p class="product__additional-info__title">{{ $t('Brand') }}</p>
                <p>{{ brand }}</p>
                <p class="product__additional-info__title">
                  {{ $t('Instruction1') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction2') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction3') }}
                </p>
                <p>{{ careInstructions }}</p>
              </div>
            </SfTab> -->
          </SfTabs>
        </LazyHydrate>
      </div>
    </div>

    <LazyHydrate when-visible>
      <RelatedProducts
        :products="relatedProducts"
        :loading="relatedLoading"
        title="Match it with"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <InstagramFeed />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <MobileStoreBanner />
    </LazyHydrate>
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfImage,
  SfBanner,
  SfAlert,
  SfSticky,
  SfReview,
  SfBreadcrumbs,
  SfButton,
  SfColor
} from '@storefront-ui/vue';

import InstagramFeed from '~/components/InstagramFeed.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';
import { ref, computed } from '@vue/composition-api';
import {
  useProduct,
  useWishlist,
  useCart,
  productGetters,
  useReview,
  reviewGetters,
  useUser
} from '@vue-storefront/kibocommerce';
import { onSSR } from '@vue-storefront/core';
import MobileStoreBanner from '~/components/MobileStoreBanner.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: 'Product',
  transition: 'fade',
  props: {
    wishlistIcon: {
      type: [String, Array, Boolean],

      default: 'heart'
    },

    isOnWishlistIcon: {
      type: [String, Array],

      default: 'heart_fill'
    }
  },
  setup(props, context) {
    const qty = ref(1);
    const { id } = context.root.$route.params;
    const { isAuthenticated } = useUser();
    const {
      load: loadWishlist,
      addItem: addItemToWishlist,
      isInWishlist,
      removeItem: removeItemFromWishlist
    } = useWishlist();
    const { products, search } = useProduct('products');
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading
    } = useProduct('relatedProducts');
    const { addItem, loading } = useCart();
    const { reviews: productReviews, search: searchReviews } = useReview(
      'productReviews'
    );

    const product = computed(() => products.value);

    const currentWishlistIcon = computed(() => {
      return isInWishlist({product: product.value})
        ? props.isOnWishlistIcon
        : props.wishlistIcon;
    });

    const options = computed(() => productGetters.getOptions(product.value));
    const configuration = computed(() =>
      productGetters.getConfiguration(product.value)
    );
    const categories = computed(() =>
      productGetters.getCategoryIds(product.value)
    );
    const reviews = computed(() =>
      reviewGetters.getItems(productReviews.value)
    );
    const description = computed(() =>
      productGetters.getDescription(product.value)
    );
    const properties = computed(() =>
      productGetters.getAttributes(product.value)
    );
    const breadcrumbs = computed(() =>
      productGetters.getBreadcrumbs(product.value)
    );

    const productGallery = computed(() =>
      productGetters.getGallery(product.value).map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big },
        alt: productGetters.getName(product.value)
      }))
    );

    onSSR(async () => {
      await Promise.all([
        loadWishlist(),
        search({ id, attributes: context.root.$route.query }),
        searchRelatedProducts({
          catId: [categories.value[0]],
          limit: 8,
          id
        }),
        searchReviews({ productId: id })
      ]);
    });

    const updateFilter = (filter) => {
      context.root.$router.push({
        path: context.root.$route.path,
        query: {
          ...configuration.value,
          ...filter
        }
      });
    };

    return {
      updateFilter,
      configuration,
      isInWishlist,
      product,
      reviews,
      reviewGetters,
      averageRating: computed(() =>
        productGetters.getAverageRating(product.value)
      ),
      totalReviews: computed(() =>
        productGetters.getTotalReviews(product.value)
      ),
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      relatedLoading,
      options,
      qty,
      addItem,
      loading,
      productGetters,
      productGallery,
      description,
      properties,
      breadcrumbs,
      isAuthenticated,
      isPurchasable: computed(() =>
        productGetters.getPurchasable(product.value)
      ),
      stock: computed(() => productGetters.getInventory(product.value)),
      addItemToWishlist,
      removeItemFromWishlist,
      currentWishlistIcon
    };
  },
  components: {
    SfAlert,
    SfColor,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfSticky,
    SfReview,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    MobileStoreBanner,
    LazyHydrate
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    margin: var(--spacer-base) var(--spacer-sm) 0;
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
    ::v-deep .sf-image {
      object-fit: contain;
      height: 80vh;
    }
    @include for-mobile {
      ::v-deep .sf-image {
        object-fit: contain;
        height: 50vh;
      }
    }
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
