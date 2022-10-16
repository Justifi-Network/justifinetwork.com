<svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M5 50C5 25.1472 25.1472 5 50 5C74.8528 5 95 25.1472 95 50V150C95 174.853 74.8528 195 50 195C25.1472 195 5 174.853 5 150V50Z"
    stroke="white"
    stroke-width="10"
  />
  <path
    d="M25 100C25 86.1929 36.1929 75 50 75C63.8071 75 75 86.1929 75 100V150C75 163.807 63.8071 175 50 175C36.1929 175 25 163.807 25 150V100Z"
    fill="white"
    class="scroller"
  />
</svg>

<style lang="scss">
  svg {
    height: 2rem;
  }

  .scroller {
    animation: scroller 500ms ease 100ms infinite alternate-reverse;
    transform: translateY(-50px);
  }

  @keyframes scroller {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-50px);
    }
  }
</style>
