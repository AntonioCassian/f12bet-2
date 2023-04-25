<template>
    <nav class="nav" >
        <div class="logo">
            <router-link to="/" exact>
                <img src="@/assets/logo.png" />
            </router-link>
        </div>
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Esportes</a>
            </router-link>
            <router-link tag="li" to="/aovivo" active-class="active">
                <a>Ao Vivo</a>
            </router-link>
            <router-link tag="li" to="/cassino" active-class="active">
            <a>Cassino</a>
            </router-link>
            <router-link tag="li" to="/casinoaovivo" active-class="active">
            <a>Cassino Ao Vivo</a>
            </router-link>
            <router-link tag="li" to="/originais" active-class="active">
            <a>Originais F12</a>
            </router-link>
            <router-link tag="li" to="/crashGames" active-class="active">
            <a>Crash Games</a>
            </router-link>
            <router-link tag="li" to="/classicos" active-class="active">
            <a>Clássicos</a>
            </router-link>
            <router-link tag="li" to="/raspadinhas" active-class="active">
            <a>Raspadinhas</a>
            </router-link>
            <router-link tag="li" to="/virtuais" active-class="active">
            <a>Virtuais</a>
            </router-link>
            <router-link tag="li" to="/e-sports">
            <a>E-Sports</a>
            </router-link>
            <router-link tag="li" to="/promocao" active-class="active">
            <a>Promoções</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .nav{
        background-color: #232520;
        display: flex;
        justify-content: space-between;
        padding: 10px 6px;
    }
    .logo > a> img{
        margin-top: 15px;
        width: 120px;
    }
    ul{
        line-height: 45px;
        display: flex;
    }
    a{
        margin: 8px 8px 4px 0;
    }
    .active a{
        color: #C9F73C;
    }
</style>