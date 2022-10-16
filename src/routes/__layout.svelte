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

  <svg
    viewBox="0 0 90 6"
    xmlns="http://www.w3.org/2000/svg"
    style="width:100%;display:block;margin-bottom:-1px;"
  >
    <path d="m-5 0h100l-50 3z" fill="#2c2f33" />
    <path d="m-5 0h100l-100 6z" fill="#2c2f33" opacity="0.5" />
    <path d="m-5 0h100v6z" fill="#2c2f33" opacity="0.75" />
  </svg>

  <footer>
    <p>Justifi Network LLP © {new Date().getFullYear()}</p>
    <div class="socials">
      <a href="https://www.linkedin.com/company/justifinetwork/" target="_blank"
        ><img src="/assets/icons/linkedin.svg" alt="LinkedIn " /></a
      >
      <a href="https://www.instagram.com/justifinetwork/" target="_blank"
        ><img src="/assets/icons/instagram.svg" alt="Instagram" /></a
      >
      <a href="https://twitter.com/JustifiNetwork" target="_blank"
        ><img src="/assets/icons/twitter.svg" alt="Twitter" /></a
      >
      <a href="https://discord.gg/2yhwQvG8z8" target="_blank"
        ><img src="/assets/icons/discord.svg" alt="Discord" /></a
      >
    </div>
  </footer>
</div>

<style lang="scss">
  aside {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 5rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    pointer-events: none;

    transition: background-color var(--transition);
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    pointer-events: initial;
  }

  nav a {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    p {
      color: var(--fg);
      transition: color var(--transition);
    }

    .socials {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      margin-top: 1rem;

      a:hover img {
        filter: brightness(0) invert(1) brightness(0.75);
      }

      img {
        height: 1rem;
        filter: brightness(0) invert(1);
        transition: filter var(--transition);
      }
    }
  }

  @media screen and (max-width: 768px) {
    aside {
      position: fixed;
      top: 0;
      bottom: auto;
      right: 0;
      left: 0;

      background-color: var(--bg);
      padding: 0.5rem;

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
