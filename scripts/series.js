const API_KEY = 'eb55d91f7d5bec90c9886dbc1c9d7f1a';
let genero;


function defineGenero(){
    genero = JSON.parse(this.responseText);
}

function buscaGenero(){
    let xhr = new XMLHttpRequest();
    xhr.onload = defineGenero;
    xhr.open('GET',`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}

function montaCards(){
    let divCards = document.getElementById('seriesCards');
    let dados = JSON.parse(this.responseText);
    let texto = '';
    let gen;
    for (i=0; i<dados.results.length;i++){
        let serie = dados.results[i];
        for (j=0;j<genero.genres.length;j++){
            let id = genero.genres[j].id
            if (id == serie.genre_ids[0]){
                gen = genero.genres[j].name
            }
        }
        
        texto = texto + `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 cards entrevista_1">
            <div class="card cards_ent">
                <h1 class="card-title" style="padding: 5px; text-align: center;">${serie.name}</h1>
                <img src="https://image.tmdb.org/t/p/original${serie.poster_path}" class="card-img-top" alt="..." style="padding: 10px;">
                <div class="card-body">
                    <p class="card-text avaliacaoSeries avaliacaoBusca"><i class="fas fa-star"></i>${serie.vote_average}/10</p>
                    <p class="card-text">Genero: ${gen}</p>
                    <a href="popup_serie.html?${serie.id}" class="btn btn-outline-dark">Mais Informações...</a>
                </div>
            </div>
        </div>
        `
        divCards.innerHTML = texto;
    }
}

function pesquisaCards(){
    let filtro = document.getElementById('filtros');
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();

    filtro.innerHTML = `Filtrar por`
}

function recente(){
    let filtro = document.getElementById('filtros');
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=first_air_date.desc&first_air_date_year=2019`);
    xhr.send();

    filtro.innerHTML = `Filtrar por: Mais recente`
}

function antigo(){
    let filtro = document.getElementById('filtros');
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=first_air_date.asc&first_air_date_year=1994`);
    xhr.send();

    filtro.innerHTML = `Filtrar por: Mais antigo`
}

function maispop(){
    let filtro = document.getElementById('filtros');
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc`);
    xhr.send();

    filtro.innerHTML = `Filtrar por: Mais popular`
}

function menospop(){
    let filtro = document.getElementById('filtros');
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.asc`);
    xhr.send();

    filtro.innerHTML = `Filtrar por: Menos popular`
}

function melhorav(){
    let filtro = document.getElementById('filtros');
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=vote_average.desc`);
    xhr.send();

    filtro.innerHTML = `Filtrar por: Melhor avaliação`
}

function piorav(){
    let filtro = document.getElementById('filtros');
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=vote_average.asc`);
    xhr.send();

    filtro.innerHTML = `Filtrar por: Pior avaliação`
}

function goBack(){
    window.history.back()
}

window.addEventListener('load',buscaGenero);
window.addEventListener('load',pesquisaCards);
document.getElementById('filtro1').addEventListener('click',recente);
document.getElementById('filtro2').addEventListener('click',antigo);
document.getElementById('filtro3').addEventListener('click',maispop);
document.getElementById('filtro4').addEventListener('click',menospop);
document.getElementById('filtro5').addEventListener('click',melhorav);
document.getElementById('filtro6').addEventListener('click',piorav);
document.getElementById('filtro7').addEventListener('click',pesquisaCards);
document.getElementById('voltar').addEventListener('click', goBack);
