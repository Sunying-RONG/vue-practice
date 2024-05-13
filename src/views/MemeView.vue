<script setup>
import { storeToRefs } from 'pinia'
import { useAllMemesStore } from '@/stores/allMemes'
import { useMemeStore } from '@/stores/meme'

const memeStore = useMemeStore()
const { topText, bottomText, randomImage } = storeToRefs(memeStore)
const { updateImage } = memeStore

const allMemesStore = useAllMemesStore()
allMemesStore.getMemes()

</script>

<template>
  <div class="about">
    <div class="form">
      <input class="form--input" v-model="topText" placeholder="Top text" />
      <input class="form--input" v-model="bottomText" placeholder="Bottom text" />
      <button 
          class="form--button"
          @click="updateImage"
      >
          Get a new meme image 🖼
      </button>
    </div>
    <div class="meme">
      <img :src=randomImage class="meme--image" />
      <h2 class="meme--text top">{{topText}}</h2>
      <h2 class="meme--text bottom">{{bottomText}}</h2>
    </div>
  </div>
</template>

<style>
  .about {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .form {
    display: grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap: 17px;
    margin-bottom: 17px;
  }

  .form--input {
    font-family: "Karla", sans-serif;
    border-radius: 5px;
    border: 1px solid #D5D4D8;
    text-indent: 5px;
  }

  .form--button {
    grid-column: 1 / -1;
    font-family: "Karla", sans-serif;
    border-radius: 5px;
    background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);
    color: white;
    border: none;
    cursor: pointer;
  }

  .meme {
    position: relative;
  }

  .meme--image {
    max-width: 100%;
    border-radius: 3px;
    background: var(--color-background);
  }

  .meme--text {
    position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
  }

  .bottom {
    bottom: 0;
  }

  .top {
    top: 0;
  }

</style>
