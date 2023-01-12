class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1 class="hero__title">
        Selamat Datang di Laper.In
        </h1>
        <p class="hero__tagline">
        Kamu dapat mencari restaurant terbaik di Indonesia
        </p>
        <a href="#main-content" class="btn">Explore Food</a>
      </div>
    `;
  }
}

customElements.define('hero-custom', Hero);
