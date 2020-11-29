let queryString = window.location.search.replace('?', "");

function carregaConteudo() {
    let pagina = document.getElementById('pageTitle');
    let titulo = document.getElementById('title');
    let fundo = document.getElementById('fundo');
    let conteudo = document.getElementById('principal');
    let dados = JSON.parse(this.responseText);

    let generos = '';

    for (i=0; i<dados.genres.length; i++){
        generos = generos + `${dados.genres[i].name}, `
    }

    pagina.innerHTML = `${dados.title} -  FD Movie`

    titulo.innerHTML = `<h1 class="title" style="text-align: center;">${dados.title}</h1>`

    fundo.innerHTML =`<img src="https://image.tmdb.org/t/p/original${dados.backdrop_path}" alt="" class="imagemfundo">`

    conteudo.innerHTML = `
    <div class="row">
            <img src="https://image.tmdb.org/t/p/original${dados.poster_path}" alt="" class="col-12 col-lg-4 capa">
            <div class="col-12 col-lg-8 info">
                <h3>Sinopse:</h3>
                <p class="sinopse">${dados.overview}</p>
                <p class="nota">
                    Avaliação: <i class="fas fa-star"></i>${dados.vote_average}/10
                </p>
                <p class="gen" style="margin-bottom: 0;">Gêneros: ${generos}</p>
                <p class="data"> Lançamento: ${dados.release_date} </p>
                <div class="col-12">
                    <div class="row">
                        <div class="col-6 col-md-2">
                            <a href="${dados.homepage}" target="blank" class="btn btn-dark">Site Oficial</a>
                        </div>
                        <div class="col-6 col-md-4">
                            <a href="https://www.imdb.com/title/${dados.imdb_id}/" target="blank" class="btn btn-dark" >Pagina do IMDb</a>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    `

}

function pesquisaFilme() {
    let xhr = new XMLHttpRequest();
    xhr.onload = carregaConteudo;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${queryString}?api_key=eb55d91f7d5bec90c9886dbc1c9d7f1a&language=pt-BR`);
    xhr.send();
}

function goBack() {
    window.history.back()
}

document.getElementById('voltar1').addEventListener('click', goBack)
window.addEventListener('load', pesquisaFilme)
