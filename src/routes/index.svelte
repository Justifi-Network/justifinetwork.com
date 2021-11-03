<script lang="ts">
  import Logo from '$lib/logo.svelte'
  import Section from '$lib/section.svelte'
</script>

<Section id="home" fg="--clr-winter-morning" bg="--clr-cold-winds" contrast="--clr-almost-black">
  <Logo height={120} />
  <h1>we make tech solutions</h1>
</Section>

<Section
  id="solutions"
  fg="--clr-almost-black"
  bg="--clr-winter-morning"
  contrast="--clr-cold-winds"
>
  <h2>solutions</h2>

  <div class="solutions-grid">
    <h3>networking</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <h3>software</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <h3>hosting</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</Section>

<Section id="contact" fg="--clr-winter-morning" bg="--clr-almost-black" contrast="--clr-cold-winds">
  <p>contact us at</p>
  <a href="mailto:contact@justifinetwork.com">
    <span class="contrast">contact</span><span class="montserrat">@</span>justifinetwork.com
  </a>
</Section>

<style lang="scss">
  h1 {
    margin-left: 9rem;
    font-size: 3rem;
    font-weight: 400;
    color: var(--fg);
  }

  h2 {
    font-size: 5rem;
    font-weight: 700;
    color: var(--contrast);
  }

  p {
    color: var(--fg);
  }

  h1,
  h2,
  h3,
  p,
  a {
    transition: color var(--transition);
  }

  a[href^='mailto:'] {
    font-size: 3rem;
    color: var(--fg);
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    line-height: 80%;

    &:hover {
      text-decoration: underline;
    }
  }

  .contrast {
    color: var(--contrast);
  }

  .solutions-grid {
    display: grid;
    grid-template-areas: 't1 t2 t3' 'p1 p2 p3';
    gap: 1rem 3rem;

    max-width: 80%;

    h3 {
      color: var(--contrast);
      font-size: 2rem;

      &:nth-child(1) {
        grid-area: t1;
      }
      &:nth-child(3) {
        grid-area: t2;
      }
      &:nth-child(5) {
        grid-area: t3;
      }
    }

    p {
      &:nth-child(2) {
        grid-area: p1;
      }
      &:nth-child(4) {
        grid-area: p2;
      }
      &:nth-child(6) {
        grid-area: p3;
      }
    }
  }
</style>
