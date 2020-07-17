class FooterBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <p>Made with <i class="fas fa-heart"></i> By Rofiqur Rohman</p>
        `;
    }
 }
  
 customElements.define("foot-bar", FooterBar);