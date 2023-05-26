<script>
export default {
    name:'AppHeader'
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="logo">Logo</div>
                <nav>
                    <ul class="list-unstyled list-group list-group-horizontal m-0 p-0 gap-2">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
 
<style scoped lang="scss">
    header {
        padding: 1.25rem;
        background-color: #333;
        color: white;
    }
</style>