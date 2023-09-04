<script setup>
    
</script>

<template>
    <section class="header">
        <div class="icon">
            <ul>
                <li>
                    <a>
                        <font-awesome-icon icon="fa-brands fa-discord" />
                    </a>
                </li>
                <li>
                    <a>
                        <font-awesome-icon icon="fa-brands fa-tiktok" />
                    </a>
                </li>
                <li>
                    <a>
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                </li>
                <li>
                    <a>
                        <font-awesome-icon icon="fa-brands fa-twitter" />            
                    </a>
                </li>
                <li>
                    <a>
                        <font-awesome-icon icon="fa-brands fa-facebook" />
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
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: black;
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
