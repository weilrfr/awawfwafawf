<script setup>
    import Button from 'primevue/button'
    import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
    import { onMounted } from 'vue';
    import { useAuto } from '@/composable/useAuto';
    import { async } from '@firebase/util';

    const { auto, createAuto } = useAuto();

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
</script>

<template>
    <section class="header">
        <div class="icon">
            <ul>
                <li>
                    <a href="#">
                        <i class="pi pi-github"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="pi pi-discord"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="pi pi-discord"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="pi pi-discord"></i>            
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="pi pi-discord"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="logo-menu">
            <div class="logo">Logo</div>
            <div class="menu">
                <ul class="nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Shortcodes</a></li>
                    <li>
                        <button type="button" class="p-link p-ml-auto" @click="googleRegister">
                            <i class="pi pi-google"></i>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="p-link p-ml-auto" @click="createAuto">
                            <i class="pi pi-plus"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.87);
    }
    .header {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
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
