<template>
    <div class="social">
            <a href="" class="link-ig">
                <span>Instagram</span>
            </a>
            <a href="" class="link-tw">
                <span>Twitter</span>
            </a>
            <a href="" class="link-yt">
                <span>You Tube</span>
            </a>
            <a href="" class="link-tg">
                <span>Telegram</span>
            </a>
            <a href="" class="link-tk">
                <span>TikTok</span>
            </a>
        </div>
</template>

<script>
export default {
    name: 'Social_Line'
}
</script>


<style scoped>
    .social{
        margin: 5px 0;
    }
    .social > a{
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 25px;
    float: left;
    line-height: 25px;
    width: 25px;
    height: 25px;
    margin: 0 5px;
    -webkit-mask-image: unset;
    }
    .social a:hover{
        background: #C9F73C;
        color: #fff;
    }
    .social >a >span{
        display: none;
    }
    .link-ig{
        background-image: url('@/../public/img/icons/Line/instagram.svg');
    }
    .link-ig:hover{
        /*background-image: url('@/../public/img/icons/instahover.svg');*/
        background-color: transparent;
    }
    .link-tw{
        background-image: url('@/../public/img/icons/Line/twiter.svg');
    }
    .link-yt{
        background-image: url('@/../public/img/icons/Line/youtube.svg');
    }
    .link-tg{
        background-image: url('@/../public/img/icons/Line/telegram.svg');
    }
    .link-tk{
        background-image: url('@/../public/img/icons/Line/tiktok.svg');
    }
</style>