<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2'

const apiData = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/products/all-active`);
    const data = await response.json();
    apiData.value = data.map(product => ({
      ...product,
      image: `${process.env.API_RANDOM_IMAGE_URL}${Math.random()}`,
    }));
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});

const addToCart = () => {
  Swal.fire({
    icon: 'success',
    title: 'Added Product to cart',
    text: 'This is only an alert',
  });
};

const removeItem = async (productId) => {
  try {
    const response = await fetch(`${process.env.API_URL}/products/archive/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    if (response.ok) {
      // Remove the item from local data on successful archive
      const index = apiData.value.findIndex(product => product._id === productId);
      if (index !== -1) {
        apiData.value.splice(index, 1);
      }

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Product Removed',
        text: 'Product has been removed from the product menu',
      });
    } else {
      // Show error message using Swal
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: 'Please try again',
      });
    }
  } catch (error) {
    console.error('Error archiving item:', error.message);
  }
};
</script>

<template lang="pug">
div
  div(v-if="apiData.length === 0" class="empty-state")
    h1 No Products Available
    router-link(to="/add-product")
      q-btn(flat color="primary" label="click this to add product")

  div(v-else class="q-pa-md row items-center justify-center q-gutter-md")
    q-card(v-for="product in apiData" :key="product._id" class="my-card" flat bordered)
      q-img(:src="product.image")

      q-card-section
        div.text-overline.text-orange-9 ${{ product.price }}
        div.text-h5.q-mt-sm.q-mb-xs {{ product.name }}
        div.text-caption.text-grey {{ product.description }}

      q-card-actions
        q-btn(@click="addToCart" flat color="primary" label="Add to cart")
        q-btn(@click="() => removeItem(product._id)" flat color="negative" label="Remove an item")
        q-space
</template>

<style scoped>
.empty-state {
  text-align: center;
  margin-top: 50px;
}

.empty-state h1 {
  color: #757575;
}

.my-card {
  width: 100%;
  max-width: 350px;
  min-height: 450px;
  margin: 10px;
  transition: transform 0.3s;
}

.my-card:hover {
  transform: scale(1.05);
}
</style>

