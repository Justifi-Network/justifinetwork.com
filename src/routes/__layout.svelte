<script lang="ts">
  import '../global.scss'
  import { style, active } from '$lib/style'
</script>

<div style={$style}>
  <aside>
    <nav>
      <a class:active={$active == 'home'} href="#home">home</a>
      <a class:active={$active == 'solutions'} href="#solutions">solutions</a>
      <a class:active={$active == 'contact'} href="#contact">contact</a>
    </nav>
  </aside>

  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  div {
    overflow-y: auto;
    height: 100%;
    scroll-behavior: smooth;
  }

  aside {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 5rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  a {
    color: var(--fg);
    text-decoration: none;
    font-size: 1.5rem;

    display: flex;
    align-items: center;

    transition: color 300ms ease;

    &::after {
      content: '';
      height: 1rem;
      width: 1rem;
      margin-left: 1rem;
      display: block;
      border-radius: 50%;

      border: 0.1875rem solid var(--fg);

      transition: border 300ms ease;
    }

    &.active::after {
      background: var(--fg);
      transition: background 300ms ease;
    }
  }
</style>
