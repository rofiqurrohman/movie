class CarouselBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://rofiqurrohman.github.io/img/slider1.jpg" class="d-block w-100" alt="Image1">
                </div>
                <div class="carousel-item">
                <img src="https://rofiqurrohman.github.io/img/slider2.jpg" class="d-block w-100" alt="Image2">
                </div>
                <div class="carousel-item">
                <img src="https://rofiqurrohman.github.io/img/slider3.jpg" class="d-block w-100" alt="Image3">
                </div>
            </div>
            </div>
        </div>
        `;
    }
 }
  
 customElements.define("carousel-bar", CarouselBar);