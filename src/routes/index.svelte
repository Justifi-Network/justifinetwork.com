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
    <p>with experience in both physical networking and software configuration, we are able to provide you with secure and optimized networking solutions, regardless of your requirements.</p>

    <h3>software</h3>
    <p>having over a decade of experience in making software, we can make anything from web apps to embedded applications and more, all tailored to your needs.</p>

    <h3>hosting</h3>
    <p>starting out as hosting provider, our experience allows us to serve your services with the capabilities you need. either in our cloud network, or in a custom installation.</p>
  </div>
</Section>

<Section id="contact" fg="--clr-winter-morning" bg="--clr-almost-black" contrast="--clr-cold-winds">
  <p>contact us at</p>
  <a href="mailto:contact@justifinetwork.com">
    <span class="contrast">contact</span><br class="mobile" />@justifinetwork<br
      class="mobile"
    />.com
  </a>
</Section>

<style lang="scss">
  h1 {
    margin-left: 9rem;
    font-size: 3rem;
    font-weight: 400;
  }

  h2 {
    font-size: 5rem;
    font-weight: 700;
  }

  h1,
  p,
  a {
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
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    line-height: 80%;

    &:hover {
      text-decoration: underline;
    }
  }

  h2,
  h3,
  .contrast {
    color: var(--contrast);
    &::selection {
      background: var(--contrast);
    }
  }

  .solutions-grid {
    display: grid;
    grid-template-areas: 't1 t2 t3' 'p1 p2 p3';
    gap: 1rem 3rem;

    max-width: 80%;

    h3 {
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

  .mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobile {
      display: initial;
    }

    .solutions-grid {
      grid-template-areas: 't1' 'p1' 't2' 'p2' 't3' 'p3';
    }

    a[href^='mailto:'] {
      display: block;
      line-height: 100%;
    }
  }

  @media screen and (max-width: 540px) {
    h1 {
      font-size: 2rem;
      margin: 0 auto;
      text-align: center;
    }

    h2 {
      font-size: 4rem;
    }

    a[href^="mailto:"] {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 320px) {
    h2 {
      font-size: 3rem;
    }

    a[href^="mailto:"] {
      font-size: 2rem;
    }
  }
</style>
