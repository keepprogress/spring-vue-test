<template>
  <div>
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
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
