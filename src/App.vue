<template>
    <div class="app">
        <div class="hero-wrapper">
            <img src="@/assets/images/1.jpg" @load="loaded" />
        </div>
        <div class="container">
            <div class="content">
                <h2 class="title">{{ trans.title }}</h2>
                <p>
                    {{ trans.p1 }}
                </p>
                <p>
                    <img src="@/assets/images/2.jpg" @load="loaded" />
                </p>

                <p>
                    {{ trans.p2 }}
                </p>

                <p>
                    <img src="@/assets/images/3.png" @load="loaded" />
                </p>

                <p>
                    {{ trans.p3 }}
                </p>

                <p>
                    <Slider :imgs="imgs" />
                </p>

                <p>
                    {{ trans.p4 }}
                </p>
            </div>
        </div>
        <div class="full">
            <img src="@/assets/images/6.jpg" alt="" />
        </div>
    </div>
</template>

<script>
    import Slider from "./components/Slider";
    import en from "./lang/en";
    import tk from "./lang/tk";

    export default {
        components: {
            Slider,
        },

        data() {
            return {
                lang: "en",

                imgs: [
                    { src: require("@/assets/images/4.jpg") },
                    { src: require("@/assets/images/5.jpg") },
                ],
            };
        },

        computed: {
            trans() {
                return {
                    en,
                    tk,
                }[this.lang];
            },
        },

        methods: {
            setLang(lang) {
                switch (lang) {
                    case "en":
                        this.lang = "en";
                        break;
                    case "tk":
                        this.lang = "tk";
                        break;
                    default:
                        this.lang = "en";
                }
            },

            loaded() {
                this.count = (this.count || 0) + 1;
                if (this.count === 3) {
                    this.$emit("ready");
                }
            },
        },
    };
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .app {
        overflow-x: hidden;
        background-color: #fff;
        img {
            width: 100%;
            display: block;
        }

        .hero-wrapper {
            height: 100vh;
            img {
                height: 100%;
                object-fit: cover;
            }
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
    }
</style>
