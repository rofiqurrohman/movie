class UpComing extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <h2>Upcoming Movies</h2>
            <div id="Indicators" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#Indicators" data-slide-to="0" class="active"></li>
                    <li data-target="#Indicators" data-slide-to="1"></li>
                    <li data-target="#Indicators" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner" id="upcom">

                </div>
            </div>        
        `;
    }
 }
  
 customElements.define("up-coming", UpComing);