<template>
    <div class="slider">
        <div class="carousel-container">
            <div
                ref="carouselSlider"
                class="carousel-slider"
                :style="{
                    transform: `translate3D(-${100 * count}%, 0,0)`,
                }"
            >
                <img
                    v-for="(item, index) in list"
                    :key="index"
                    :src="item.src"
                    :class="{
                        active: index === count,
                    }"
                />
            </div>
        </div>

        <div class="form" ref="form">
            <button
                v-for="(item, index) in imgs"
                :key="index"
                class="btn"
                :class="{
                    active: index === count - 1,
                }"
                @click="navigate(index)"
            ></button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imgs: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
                count: 1,
            };
        },

        computed: {
            list() {
                return [
                    this.imgs[this.imgs.length - 1],
                    ...this.imgs,
                    this.imgs[0],
                ];
            },
        },

        mounted() {
            this.start();
            this.$once("hook:beforeDestroy", () => {
                this.stop();
            });
        },

        methods: {
            navigate(index) {
                this.stop();
                this.count = index + 1;
                this.start();
            },

            start() {
                this.timer = setInterval(() => {
                    this.count = (this.count + 1) % this.list.length;
                }, 4000);
                this.$refs.carouselSlider.addEventListener(
                    "transitionend",
                    this.onTransitionEnd
                );
            },

            stop() {
                clearInterval(this.timer);
                this.$refs.carouselSlider.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd
                );
            },

            onTransitionEnd() {
                if (this.count === this.list.length - 1) {
                    this.$refs.carouselSlider.style.transition = "none";
                    this.count = 1;
                    setTimeout(() => {
                        this.$refs.carouselSlider.style.transition = "";
                    });
                }

                if (this.count === 0) {
                    this.$refs.carouselSlider.style.transition = "none";
                    this.count = this.list.length - 2;
                    setTimeout(() => {
                        this.$refs.carouselSlider.style.transition = "";
                    });
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    .slider {
        .carousel-container {
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
        }
        .carousel-slider {
            object-fit: cover;
            display: flex;
            width: 100%;
            transition: transform 0.4s ease-in-out;
            touch-action: manipulation;
            img {
                width: 100%;
                touch-action: pan-y;
                user-select: none;
            }
        }
        .form {
            width: 100%;
            margin: 0 auto;
            padding-top: 20px;
            text-align: center;
        }
        .btn {
            display: inline-block;
            width: 15px;
            height: 15px;
            background: #5b5c5d;
            border-radius: 50%;
            margin: 0 5px;
            border: none;
            outline: none !important;
            transition: background-color 0.2s ease;
            cursor: pointer;
            &.active {
                background-color: #ffcc00;
            }
        }
    }
</style>
