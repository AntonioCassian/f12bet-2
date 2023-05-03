<template>
  <router-view/>
</template>

<script>

</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    vertical-align: baseline;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
  color: #fff;
  font-size: 12px;
}
a:hover{
  color: #C9F73C;
}

::-webkit-scrollbar {
background:#000;
width: 20px;
height: 4px;
}
 
::-webkit-scrollbar-track {
background:#000;
}

::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
}
.container{
  display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 300px 2.5fr 300px;
    gap: 2px;
}
</style>
<!--::-webkit-scrollbar {
background:#000;
width: 20px;
height: 4px;
}
 
::-webkit-scrollbar-track {
background:#000;
}

::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
}-->