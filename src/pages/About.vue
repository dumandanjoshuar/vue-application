<script setup>
</script>

<template lang="pug">
div.about-container
  h1.about-title About Me
  p.about-description The summary of this application is that there are 4 pages: ABOUT, TEST, PRODUCTS, and ADD PRODUCT.
  p.about-description The TEST page is where the creator of this page tests something from the very first and the start of his journey as a developer.
  p.about-description The PRODUCTS page is where you can see the list of products that are active in my e-commerce application from bootcamp. You can use the button to see what it can do. The "ADD TO CART" button is only a placeholder.
  p.about-description The ADD PRODUCT page is where you can add a product, and all the products that are being added will be seen on the PRODUCTS page.
  p.about-description Thank you for trying my application. This is my first time creating an application in Quasar and Vue.

</template>

<style scoped>
.about-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.about-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
}

.about-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-top: 16px; /* Add some space at the top of each description paragraph */
}
</style>
