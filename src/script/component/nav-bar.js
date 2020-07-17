class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div class="container">    
                <a class="navbar-brand font-weight-bold" href="">Kuy Movie</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-auto">
                    <a class="nav-item nav-link active mr-5" href="">Home</a>
                    <a class="nav-item nav-link active mr-5" href="#">About</a>
                    <a class="nav-item nav-link active mr-5" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }
 }
  
 customElements.define("nav-bar", NavBar);