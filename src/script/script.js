$(document).ready(function() {
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/upcoming`,
        type: 'get',
        dataType: 'json',
        data: {
            'api_key': '5ea6b6f159101019e79062f3ad0defde',
            'page': '1'
        },
        success: function (result) {
            let movie = result.results;
                // console.log(movie[11].poster_path);
                $('#upcom').append(`
                <div class="carousel-item active">
                    <img src="https://image.tmdb.org/t/p/w300${movie[0].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[1].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[2].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[3].poster_path}" class="rounded img-thumbnail">
                </div>
                <div class="carousel-item">
                    <img src="https://image.tmdb.org/t/p/w300${movie[4].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[5].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[6].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[7].poster_path}" class="rounded img-thumbnail">
                </div>
                <div class="carousel-item">
                    <img src="https://image.tmdb.org/t/p/w300${movie[8].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[9].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[10].poster_path}" class="rounded img-thumbnail">
                    <img src="https://image.tmdb.org/t/p/w300${movie[11].poster_path}" class="rounded img-thumbnail">
                </div>    
                `);

            $('#Indicators').carousel({
                // interval: 3000,
                cycle: true,
                pause: null
             })
        },
    })
})