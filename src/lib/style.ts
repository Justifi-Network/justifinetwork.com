import { writable } from 'svelte/store'

export const style = writable(
  '--fg: var(--clr-winter-morning); --bg: var(--clr-cold-winds); --contrast: var(--clr-almost-black)'
)

export const active = writable('')
