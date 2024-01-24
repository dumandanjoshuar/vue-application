<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="http://zuitt-bootcamp-prod-322-5849-dumandan.s3-website.us-east-1.amazonaws.com/img/stockfinity-logo-new-removebg-preview.png">
          </q-avatar>
          Product listing
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="About" />
        <!-- <q-route-tab to="/test" label="Test" /> -->
        <q-route-tab to="/products" label="Products" />
        <q-route-tab to="/add-product" label="Add Product" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="http://zuitt-bootcamp-prod-322-5849-dumandan.s3-website.us-east-1.amazonaws.com/img/stockfinity-logo-new-removebg-preview.png">
          </q-avatar>
          <div></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>