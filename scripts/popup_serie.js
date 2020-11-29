let queryString = window.location.search.replace('?', "");

function carregaConteudo() {
    let pagina = document.getElementById('pageTitle');
    let titulo = document.getElementById('title');
    let fundo = document.getElementById('fundo');
    let conteudo = document.getElementById('principal');
    let dados = JSON.parse(this.responseText);

    let status = dados.in_production;
    if (status == true){status = 'Em produção'}
    else{status='Finalizada'}
    let generos = '';

    for (i=0; i<dados.genres.length; i++){
        generos = generos + `${dados.genres[i].name}, `
    }

    pagina.innerHTML = `${dados.name} -  FD Movie`

    titulo.innerHTML = `<h1 class="title" style="text-align: center;">${dados.name}</h1>`

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
                <p class="gen"> Temporadas: ${dados.number_of_seasons} | Episódios: ${dados.number_of_episodes} </p>
                <p class="gen" >Gêneros: ${generos}</p>
                <p class="data" style="margin-bottom: 0;"> Lançamento do primeiro episódio: ${dados.first_air_date} </p>
                <p class="data" style="margin-top: 0;"> Lançamento do último episódio: ${dados.last_air_date} </p>
                <p class="data">Status: ${status} </p>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <a href="${dados.homepage}" target="blank" class="btn btn-dark">Site Oficial</a>
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
    xhr.open('GET', `https://api.themoviedb.org/3/tv/${queryString}?api_key=eb55d91f7d5bec90c9886dbc1c9d7f1a&language=pt-BR`);
    xhr.send();
}

function goBack() {
    window.history.back()
}

document.getElementById('voltar1').addEventListener('click', goBack)
window.addEventListener('load', pesquisaFilme)
