class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <ul>
          <li>Copyright © 2022 - Laper.In</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
