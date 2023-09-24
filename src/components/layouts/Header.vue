<script setup>
    import Button from 'primevue/button'
    import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
    import { ref, onMounted } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import CarAddModal from '@/components/CarAddModal.vue'
    import TabMenu from 'primevue/tabmenu';

    const googleRegister = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
        .then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem('user', JSON.stringify(user))
        })
        .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        })
    }



    const router = useRouter();
const route = useRoute();

const active = ref(0);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'List',
        icon: 'pi pi-fw pi-calendar',
        route: '/table'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        route: '/profile'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        route: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        route: '/settings'
    },
    { 
        label: 'FileUpload',
        icon: 'pi pi-fw pi-upload',
        url: '/fileupload'
    }
]);

onMounted(() => {
    active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})

// watch(
//     route,
//     () => {
//         active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
//     },
//     { immediate: true }
// );
</script>

<template>
    <section class="header">
        <!-- <div class="icon">
            <ul>
                <li>
                    <i class="pi pi-github"></i>
                </li>
                <li>
                    <i class="pi pi-discord"></i>
                </li>
                <li>
                    <i class="pi pi-discord"></i>
                </li>
                <li>
                    <i class="pi pi-discord"></i>            
                </li>
                <li>
                    <i class="pi pi-discord"></i>
                </li>
            </ul>
        </div>
        <div class="logo-menu">
            <div class="logo">Logo</div>
            <div class="menu">
                <ul class="nav">
                    <li>About</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Portfolio</li>
                    <li>Shortcodes</li>
                    <li>
                        <button type="button" class="p-link p-ml-auto" @click="googleRegister">
                            <i class="pi pi-google"></i>
                        </button>
                    </li>
                    <li>
                        <CarAddModal/>
                    </li>
                </ul>
            </div>
        </div> -->
        <div class="card">
            <TabMenu v-model:activeIndex="active" :model="items">
                <template #item="{ label, item, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                            <span v-bind="props.icon" />
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </template>
            </TabMenu>
        </div>
        <CarAddModal/>
    </section>
</template>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 100px;
        padding-top: 20px;
    }
    .icon {
        flex-basis: 100%;
        display: flex;
        justify-content: flex-end;
        transition: 300ms;
    }
    .icon li:hover a{
        color: gray;
        transition: 300ms;
    }
    .logo-menu {
        flex-basis: 100%;
        display: flex;
        justify-content: space-between;
    }
    .logo {
        flex-basis: 30%;
        font-size: 36px;
    }   
    .menu {
        flex-basis: 35%;
    }
    .nav {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    .nav a {
        font-size: 18px;
        font-weight: 600;
        transition: 300ms;
    }
    .nav a:hover {
        color: gray;
        transition: 300ms;
    }
    .icon ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        width: 15%;
        margin: 0px;
        padding: 0;
    }
</style>
