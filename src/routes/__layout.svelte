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

  <footer>
    <p>Justifi Network LLP © {new Date().getFullYear()}</p>
  </footer>
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

    pointer-events: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    pointer-events: initial;
  }

  a {
    color: var(--fg);
    text-decoration: none;
    font-size: 1.5rem;

    display: flex;
    align-items: center;

    transition: color var(--transition);

    &::after {
      content: '';
      height: 1rem;
      width: 1rem;
      margin-left: 1rem;
      display: block;
      border-radius: 50%;

      border: 0.1875rem solid var(--fg);

      transition: border var(--transition), background var(--transition);
    }

    &.active::after {
      background: var(--fg);
    }
  }

  footer {
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    width: fit-content;

    p {
      color: var(--fg);
      transition: color var(--transition);
    }
  }

  @media screen and (max-width: 768px) {
    aside {
      position: fixed;
      top: 0.5rem;
      bottom: auto;
      right: 0;
      left: 0;

      justify-content: center;
    }

    nav {
      flex-direction: row;
      justify-content: center;
    }

    a {
      flex-direction: row-reverse;
      font-size: 1rem;

      &::after {
        margin: 0 1rem;
      }

      & + a::after {
        margin-left: 2rem;
      }
    }
  }

  @media screen and (max-width: 540px) {
    a {
      flex-direction: row-reverse;
      font-size: 1rem;

      &::after {
        margin: 0 0.5rem;
        height: 0.75rem;
        width: 0.75rem;
      }

      & + a::after {
        margin-left: 1.25rem;
      }
    }
  }
</style>
