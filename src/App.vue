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

/* degrade para a barra vertical */
::-webkit-scrollbar-thumb {
background: #2e9dd8;
background: -moz-linear-gradient(top, #333333 0%, #3f69b1 25%, #2e9dd8 50%, #3f69b1 76%, #333333 100%);
background: -webkit-linear-gradient(top, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
background: linear-gradient(to bottom, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#333333',GradientType=0 );
}
 
/* degrade para a barra horizontal com a direção do degrade alterada */
::-webkit-scrollbar-thumb:horizontal {
background: #2e9dd8;
background: -moz-linear-gradient(left, #333333 0%, #3f69b1 25%, #2e9dd8 50%, #3f69b1 76%, #333333 100%);
background: -webkit-linear-gradient(left, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
background: linear-gradient(to right, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#333333',GradientType=0 );
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