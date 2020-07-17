class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container">
            <div class="card mb-3" id="movieitem" style="max-width: 900px;">
            <div class="row no-gutters">
            <div class="col-md-2">
                <img src="https://image.tmdb.org/t/p/w200/${this._movie.poster_path}" class="card-img" alt="${this._movie.original_title}">
            </div>
            <div class="col-md-10">
                <div class="card-body">
                <h5 class="card-title font-weight-bold">${this._movie.title}</h5>
                <p class="card-text text-truncate">${this._movie.overview}</p>
                <p class="card-text"><small class="text-muted">Rating ${this._movie.vote_average}</small></p>
                </div>
            </div>
            </div>
            </div>
            </div>
           `;
    }
}

customElements.define("movie-item", MovieItem);