<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';

const name = ref('');
const description = ref('');
const price = ref('');

const addProduct = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/products/add-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        price: price.value
      })
    });

    const data = await response.json();
    if (data) {
      Swal.fire({
        title: 'Product Added',
        icon: 'success',
        text: 'The product has been added successfully.'
      });
      name.value = '';
      description.value = '';
      price.value = '';
    } else {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Something went wrong while adding the product.'
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

</script>

<template lang="pug">
div.add-product-container
  form(@submit.prevent="addProduct")
    div.form-group
      label(for="name") Product Name:
      input(v-model="name" type="text" id="name" required)
    
    div.form-group
      label(for="description") Product Description:
      textarea(v-model="description" id="description" required)
    
    div.form-group
      label(for="price") Product Price:
      input(v-model="price" type="number" id="price" required)
    
    div.form-group
      button(type="submit") Add Product

</template>

<style scoped>
.add-product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  width: 300px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: auto;
}

h2 {
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>