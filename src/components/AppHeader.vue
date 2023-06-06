<script>
import TechnologyList from './TechnologyList.vue';
import TypeList from './TypeList.vue';

export default {
    name:'AppHeader',
    components: {
    TypeList,
    TechnologyList
}
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="logo">Logo</div>
                <nav>
                    <ul class="list-unstyled list-group list-group-horizontal align-items-center m-0 p-0 gap-4">
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
                        <li>
                            <TypeList />
                        </li>
                        <li>
                            <TechnologyList />
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