<template>
  <nav class="navbar is-medium" role="navigation" aria-label="main navigation">
    <div class="container">

      <div class="navbar-brand">
        <Logo></Logo>
      </div>

    </div>
  </nav>
</template>

<script>
  import Logo from './Logo'

  export default {
    name: 'Navbar',
    components: {
      Logo
    }
  }
</script>