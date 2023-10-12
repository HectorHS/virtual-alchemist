<template>
        <div>
            <!-- Button -->
        <a href="#" @click.prevent="show" class="w-full">
            <button class="group relative overflow-hidden py-2 px-3 border-4 mt-10" :class="buttonClass">
                <div class="back absolute inset-0 w-0 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative font-semibold tracking-wider group-hover:text-offWhite">See more </span>
            </button>
        </a>
        <!-- Lightbox -->
        <div class="bg-black/80 fixed top-0 left-0 h-[100vh] overflow-x-scroll p-10 w-full z-50 justify-center items-center" v-if="visible" @click="hide">
            <div class="fixed text-white cursor-pointer text-4xl top-2 right-5" @click.stop="hide">&times;</div>
            <div class="flex">

                <div class="lightbox-image mx-auto" @click.stop="">
                    <img :src="image">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        textHover: {
            type: String,
            required: true
        },
        buttonClass: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        onKeydown(e) {
            if (this.visible) {
                switch (e.key) {
                    case ' ':
                        e.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        break;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.onKeydown)
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeydown)
    },
};
</script>

<style>
button span {
  font-size: clamp(1rem, 3.5vw, 1.rem);
}
button {
  width: clamp(5vw, 250px, 50vw);
}
.nun {
    @apply border-[#e0004d] bg-[#e0004d]/20;
}
.nun div {
    @apply bg-[#e0004d];
}
.nun span {
    @apply  text-[#e0004d] ;
}
.no {
    @apply border-[#1a94ff] bg-[#1a94ff]/20;
}
.no div {
    @apply bg-[#1a94ff];
}
.no span {
    @apply  text-[#1a94ff] ;
}
.epilisi {
    @apply border-[#2f3735] bg-[#2f3735]/20;
}
.epilisi div {
    @apply bg-[#2f3735];
}
.epilisi span {
    @apply  text-[#2f3735] ;
}
.tsor {
    @apply border-[#9c210a] bg-[#9c210a]/20;
}
.tsor div {
    @apply bg-[#9c210a];
}
.tsor span {
    @apply  text-[#9c210a] ;
}
.kids {
    @apply border-[#1235cd] bg-[#1235cd]/20;
}
.kids div {
    @apply bg-[#1235cd];
}
.kids span {
    @apply  text-[#1235cd] ;
}
.wedding {
    @apply border-[#19301e] bg-[#19301e]/20;
}
.wedding div {
    @apply bg-[#19301e];
}
.wedding span {
    @apply  text-[#19301e] ;
}
.dance {
    @apply border-[#6E645A] bg-[#6E645A]/20;
}
.dance div {
    @apply bg-[#6E645A];
}
.dance span {
    @apply  text-[#6E645A] ;
}
.apocalypse {
    @apply border-[#cea855] bg-[#cea855]/20;
}
.apocalypse div {
    @apply bg-[#cea855];
}
.apocalypse span {
    @apply  text-[#cea855] ;
}


</style>