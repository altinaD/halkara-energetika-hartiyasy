<template>
    <div id="app">
        <div class="full top-images"></div>
        <div class="container">
            <div class="content">
                <h2 class="title">28-nji Halkara Energetika Hartiýasy</h2>
                <p>
                    Türkmenistan 28-nji Halkara Energetika Hartiýasynyň
                    Konferensiýasyna başlyklyk etdi. Halkara Konferensiýanyň
                    jemleýji mejlisi 2017-nji ýylyň noýabr aýynyň 28-29-y
                    aralygy Aşgabatda geçirildi. Oňa 50 sany döwletden 200-den
                    gowrak wekil gatnaşdy.
                </p>
                <img src="@/assets/images/2.jpg" alt="" />
                <p>
                    Studiýamyza Halkara Energetika Hartiýasynyň
                    Konferensiýasynyň 28-nji mejlisi üçin logo we brend keşbini
                    döretmeklik ynanyldy.
                </p>
                <img src="@/assets/images/3.png" alt="" />
                <p>
                    Energetika Hartiýanyň logosy ähli energiýalaryň çeşmesi
                    bolan günüň tegelek şekili bilen şekillenýär. Ondaky umumy
                    ylalaşyga barýan adam elleriniň abstrakt şekilleri
                    Energetika Hartiýasynyň maksadyny beýan edýär. Sary we ýaşyl
                    reňkler energiýany we onuň howpsuz ulanylmagyny
                    alamatlandyrýar.
                </p>
                <img src="@/assets/images/4.jpg" alt="" />
                <img src="@/assets/images/5.jpg" alt="" />
                <p>
                    Hartiýanyň sary we ýaşyl reňk öwüşginleri bilen bezelen
                    brend keşbi emele getirildi. Keşp konferensiýanyň geçiriljek
                    binalaryna we sowgatlyk esbaplaryna ýatdagalyjy, täzeçil we
                    dostluk äheňini berýär.
                </p>
            </div>
        </div>
        <div class="full">
            <img src="@/assets/images/6.jpg" alt="" />
        </div>
    </div>
</template>

<style lang="scss">
@font-face {
    font-family: "Quercus10";
    src: local("Quercus10"),
        url("./assets/fonts/Quercus10.ttf") format("truetype");
}
@font-face {
    font-family: "Quercus10Book";
    src: local("Quercus10Book"),
        url("./assets/fonts/Quercus10Book.otf") format("opentype");
}
*,
body,
html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
    overflow: hidden;
}
.container {
    width: 1500px;
    margin: 0 auto;
    padding: 0 50px;
    @media screen and (min-width: 1040px) and (max-width: 1599px) {
        width: auto;
        padding-right: 50px;
        padding-left: 50px;
    }
    @media screen and (min-width: 768px) and (max-width: 1039px) {
        width: auto;
        padding-right: 40px;
        padding-left: 40px;
    }
    @media screen and(max-width: 767px) {
        width: auto;
        padding-right: 30px;
        padding-left: 30px;
    }
}
h2.title {
    width: 800px;
    display: block;
    margin: 0 auto;
    font-weight: bold;
    font-size: 36px;
    font-family: "Quercus10";
    margin-bottom: 1em;
    color: #000;
    padding-top: 50px;
    @media screen and (min-width: 768px) and (max-width: 1039px) {
        width: 100%;
    }
    @media screen and(max-width: 767px) {
        font-size: 20px;
        width: auto;
    }
    &.secondary {
        margin-top: 50px;
        @media screen and(max-width: 767px) {
            margin-top: 25px;
        }
    }
}
.content {
    position: relative;
    color: #000;
    font-size: 0;
    p {
        font-size: 22px;
        width: 800px;
        display: block;
        margin: 50px auto;
        line-height: 34px;
        font-family: "Quercus10Book";
        color: #000;
        @media screen and (min-width: 768px) and (max-width: 1039px) {
            width: 100%;
        }
        @media screen and(max-width: 767px) {
            font-size: 16px;
            width: 100%;
            margin: 25px auto;
            line-height: 24px;
        }
    }
    img {
        width: 100%;
    }
}

.top-images {
    background-image: url("./assets/images/1.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}

.full {
    width: 101%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    video,
    img {
        width: 100%;
        @media screen and(max-width: 767px) {
            left: 50%;
            transform: translate(-50%);
            position: relative;
            width: 200% !important;
        }
    }
}
</style>
