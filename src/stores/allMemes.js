import { defineStore } from 'pinia'

export const useAllMemesStore = defineStore('allMemes', {
  state: () => ({ memes: [] }),
  getters: {
    nbAllMemes: (state) => state.memes.length,
    // allMemesArray: (state) => state.memes
  },
  actions: {
    async getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        this.memes = data.data.memes
    }
  },
})