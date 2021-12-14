<template>
  <div id="home">
    <LazyHydrate when-idle>
      <SfHero class="hero">
        <SfHeroItem
          v-for="(hero, i) in heroes"
          :key="i"
          :title="hero.title"
          :subtitle="hero.subtitle"
          :button-text="hero.buttonText"
          :background="hero.background"
          :image="hero.image"
          :class="hero.className"
        />
      </SfHero>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <SfBannerGrid :banner-grid="1" class="banner-grid">
        <template v-for="item in banners" v-slot:[item.slot]>
          <SfBanner
            :key="item.slot"
            :title="item.title"
            :subtitle="item.subtitle"
            :description="item.description"
            :button-text="item.buttonText"
            :image="item.image"
            :class="item.class"
          />
        </template>
      </SfBannerGrid>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <div class="similar-products">
        <SfHeading title="Match with it" :level="3"/>
        <nuxt-link :to="localePath('/c/women')" class="smartphone-only">See all</nuxt-link>
      </div>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SfLoader :class="{ loading }" :loading="loading">
        <SfCarousel class="carousel" :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }">
          <template #prev="{go}">
            <SfArrow
              aria-label="prev"
              class="sf-arrow--left sf-arrow--long"
              @click="go('prev')"
            />
          </template>
          <template #next="{go}">
            <SfArrow
              aria-label="next"
              class="sf-arrow--right sf-arrow--long"
              @click="go('next')"
            />
          </template>
          <SfCarouselItem class="carousel__item" v-for="(product, i) in (products.items)" :key="i">
            <SfProductCard
              :title="productGetters.getName(product)"
              :image="productGetters.getCoverImage(product)"
              :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
              :max-rating="5"
              :score-rating="productGetters.getAverageRating(product)"
              :isOnWishlist="isInWishlist({ product })"
              :link="
              localePath(
                `/p/${productGetters.getId(product)}/${productGetters.getSlug(
                  product
                )}`
              )
              "
              class="products__product-card"
              @click:wishlist="
              !isInWishlist({ product })
                ? addItemToWishlist({ product })
                : removeItemFromWishlist({ product })
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
    </LazyHydrate>

    <LazyHydrate when-visible>
      <SfCallToAction
        title="Subscribe to Newsletters"
        button-text="Subscribe"
        description="Be aware of upcoming sales and events. Receive gifts and special offers!"
        image="/homepage/newsletter.webp"
        class="call-to-action"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <InstagramFeed />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <MobileStoreBanner/>
    </LazyHydrate>
  </div>
</template>
<script>
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton,
  SfLoader
} from '@storefront-ui/vue';
import { useUser, useContent, contentGetters, useProduct, productGetters, useWishlist } from '@vue-storefront/kibocommerce';
import { onSSR } from '@vue-storefront/core';
import { computed} from '@nuxtjs/composition-api';
import InstagramFeed from '~/components/InstagramFeed.vue';
import MobileStoreBanner from '~/components/MobileStoreBanner.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: 'Home',
  components: {
    InstagramFeed,
    SfHero,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    MobileStoreBanner,
    LazyHydrate,
    SfLoader
  },
  setup() {
    const { search: loadBanners, content: contentBanners} = useContent('Banners');
    const { search: loadHeros, content: contentHeroes} = useContent('Heros');
    const { isAuthenticated } = useUser();
    const {
      products,
      search,
      loading
    } = useProduct();
    const {
      addItem: addItemToWishlist,
      isInWishlist,
      removeItem: removeItemFromWishlist
    } = useWishlist();

    onSSR(async () => {
      await Promise.all([
        loadHeros({ documentType: 'hero_images@mozu', slug: 'home'}),
        loadBanners({ documentType: 'banners@mozu', slug: 'home'}),
        search({pageSize: 8}),
      ]);
    });
    const heroes = computed(() => getContent(contentHeroes.value, 'hero_images'));
    const banners = computed(() => getContent(contentBanners.value, 'banners'));

    function toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
    }

    function getContent(content, type) {
      return contentGetters.getContent(content, type);
    }

    return {
      isAuthenticated,
      toggleWishlist,
      heroes: heroes,
      banners: banners,
      productGetters,
      products,
      addItemToWishlist,
      isInWishlist,
      removeItemFromWishlist,
      loading
    };
  }
};
</script>

<style lang="scss" scoped>
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}

.hero {
  margin: var(--spacer-xl) auto var(--spacer-lg);
  --hero-item-background-position: center;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-xl) auto var(--spacer-2xl);
  }
  .sf-hero-item {
    &:nth-child(even) {
      --hero-item-background-position: left;
      @include for-mobile {
        --hero-item-background-position: 30%;
       ::v-deep .sf-hero-item__wrapper {
         &.sf-button {
            align-items: flex-end;
            text-align: right;
            padding: var(--spacer-sm) var(--spacer-sm) var(--spacer-sm) var(--spacer-2xl);
         }
        }
        ::v-deep .sf-hero-item__subtitle,
        ::v-deep .sf-hero-item__title {
          width: 100%;
        }
      }
    }
  }
  ::v-deep .sf-hero__control {
    &--right, &--left {
      display: none;
    }
  }
}

.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
    }
  }
}

.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 70%;
    }
  }
}

.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}

.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}

.carousel {
    margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
  ::v-deep .sf-arrow--long .sf-arrow--right {
    --arrow-icon-transform: rotate(180deg);
     -webkit-transform-origin: center;
     transform-origin: center;
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
