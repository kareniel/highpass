<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-1">

          <div class="content">

            <slot></slot>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Content'
  }

</script>