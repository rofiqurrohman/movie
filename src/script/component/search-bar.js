class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector("#search-input").value;
    }
  
    render() {
        this.innerHTML = `
        <div class="col-md-6 offset-md-3 search">
          <h1 class="text-center text-light">Search Movie</h1>
          <div class="input-group mb-3 form">
              <input type="text" class="form-control" placeholder="Movie title.." id="search-input">
              <div class="input-group-append">
                <button class="btn btn-info" type="button" id="search-button">Search</button>
              </div>
          </div>
        </div>
        `;
  
        this.querySelector("#search-button").addEventListener("click", this._clickEvent);
        $('#search-button').on('click', function () {
            $('.pencarian').remove();
            var nilai = $('#search-input').val();
            $('movie-list').before(`<h2 class="pencarian">Search result : ${nilai}</h2>`)
            $('up-coming').remove();

            $('html,body').animate({
                scrollTop: $("movie-list").offset().top - 50
            },);
        });
    }
 }
  
 customElements.define("search-bar", SearchBar);