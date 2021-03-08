<template>
  <div>
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <!-- The <router-view> component is a functional component
          that renders the matched component for the given path.
          Components rendered in <router-view> can also contain their own <router-view>,
          which will render components for nested paths.
          see https://router.vuejs.org/api/#aria-current-value -->
          <router-view/>
        </main>
      </div>
    </div>>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>
