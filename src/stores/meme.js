import { defineStore } from 'pinia'
import { useAllMemesStore } from './allMemes'

export const useMemeStore = defineStore('meme', {
    state: () => ({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }),
    // getters: {
    //     currentTopText: (state) => state.topText,
    //     currentBottomText: (state) => state.bottomText,
    //     currentImage: (state) => state.randomImage,
    // },
    actions: {
        updateTopText(text) {
            this.topText = text
        },
        updateBottomText(text) {
            this.bottomText.value = text
        },
        updateImage() {
            const allMemesStore = useAllMemesStore()
            const randomNumber = Math.floor(Math.random() * allMemesStore.nbAllMemes)
            const url = allMemesStore.memes[randomNumber].url
            this.randomImage = url
        }
    }
    
})