<script>
export default {
    name: "ContactsPage",
}
</script>


<template>
    <section>
      <h1 class="mt-5 mb-3">Contacts Page</h1>
      <div class="container">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
</template>


<style scoped lang="scss">

</style>