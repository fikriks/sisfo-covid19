class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        $(this).html(`<nav class="navbar navbar-dark bg-primary">
        <h1 class="navbar-brand">Sistem Informasi Covid-19</h1></nav>`);
    }
}

customElements.define("app-bar", AppBar);