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
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Homepage
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'contacts' }" class="nav-link">
                                Contacts
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'portfolio' }" class="nav-link">
                                Portfolio
                            </router-link>
                        </li>
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