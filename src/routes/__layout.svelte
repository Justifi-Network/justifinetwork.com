<script lang="ts">
  import '../global.scss'
</script>

<header>
  <div class="content">
    <p class="title">justifi</p>
    <nav>
      <a href="#">Solutions</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</header>

<slot />

<style lang="scss">
  header {
    background: var(--clr-almost-black);
    padding: 0.5rem 0;
    box-shadow: 0 0 5px hsla(0, 0, 0, 0.2);
  }

  .content {
    max-width: var(--width);
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    color: var(--clr-winter-morning);
    font-size: 2rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    a {
      color: var(--clr-winter-morning);
      text-decoration: none;
      font-size: 1.25rem;
      position: relative;

      &::before,
      &::after {
        content: '';
        display: block;
        height: 0.125rem;
        width: 0;

        position: absolute;
        bottom: -0.25rem;

        background: var(--clr-cold-winds);
      }

      &::before {
        transition: width 0s ease, background-color 500ms ease;
        left: 0;
      }

      &::after {
        transition: width 500ms ease;
        right: 0;
      }

      &:hover {
        &::before {
          width: 100%;
          background: var(--clr-cold-winds);
          transition: width 500ms ease;
        }

        &::after {
          width: 100%;
          background: transparent;
          transition: all 0s ease;
        }
      }
    }
  }
</style>
