const API_KEY = 'eb55d91f7d5bec90c9886dbc1c9d7f1a';
let genero;


function defineGenero(){
    genero = JSON.parse(this.responseText);
}

function buscaGenero(){
    let xhr = new XMLHttpRequest();
    xhr.onload = defineGenero;
    xhr.open('GET',`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}

function montaCards(){
    let divCards = document.getElementById('seriesCards');
    let dados = JSON.parse(this.responseText);
    let texto = '';
    let gen;
    for (i=0; i<dados.results.length;i++){
        let filme = dados.results[i];
        for (j=0;j<genero.genres.length;j++){
            let id = genero.genres[j].id
            if (id == filme.genre_ids[0]){
                gen = genero.genres[j].name
            }
        }
        
        texto = texto + `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 cards entrevista_1">
            <div class="card cards_ent">
                <h1 class="card-title" style="padding: 5px; text-align: center;">${filme.title}</h1>
                <img src="https://image.tmdb.org/t/p/original${filme.poster_path}" class="card-img-top" alt="..." style="padding: 10px;">
                <div class="card-body">
                    <p class="card-text avaliacaoSeries avaliacaoBusca"><i class="fas fa-star"></i>${filme.vote_average}/10</p>
                    <p class="card-text">Genero: ${gen}</p>
                    <a href="popup_filme.html?${filme.id}" class="btn btn-outline-dark">Mais Informações...</a>
                </div>
            </div>
        </div>
        `
    }
    divCards.innerHTML = texto;
}

function pesquisaCards(){
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET',`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&region=BR`);
    xhr.send();
}

function goBack(){
    window.history.back()
}



window.addEventListener('load',buscaGenero);
window.addEventListener('load',pesquisaCards);
document.getElementById('voltar').addEventListener('click', goBack);
document.getElementById('voltar1').addEventListener('click', goBack);
