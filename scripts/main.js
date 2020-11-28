const API_KEY = 'eb55d91f7d5bec90c9886dbc1c9d7f1a';

function montaCard() {
    let divCards = document.getElementById('cards')
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < 8; i++) {
        let filme = dados.results[i];

        texto = texto + `
                <div class="col-12 col-sm-12 col-md-6 col-lg-3 cards">
                    <div class="card cards_filme">
                        <img src="https://image.tmdb.org/t/p/original${filme.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text"><a href="https://www.themoviedb.org/movie/${filme.id}" 
                            target="blank">${filme.title} (${filme.release_date})</a></p>
                        </div>
                    </div>
                </div>
            `;
    }

    divCards.innerHTML = texto;
}

function cardInicial() {
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2020`);
    xhr.send();
}
function pesquisaAcao() {
    let textoBotao = document.getElementById('dropdownMenuButton')
    textoBotao.innerText = "Ação"
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2020&with_genres=28`);
    xhr.send();
}
function pesquisaComedia() {
    let textoBotao = document.getElementById('dropdownMenuButton')
    textoBotao.innerText = "Comédia"
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2020&with_genres=35`);
    xhr.send();
}
function pesquisaTerror() {
    let textoBotao = document.getElementById('dropdownMenuButton')
    textoBotao.innerText = "Terror"
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2020&with_genres=27`);
    xhr.send();
}
function pesquisaFic() {
    let textoBotao = document.getElementById('dropdownMenuButton')
    textoBotao.innerText = "Ficção"
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2020&with_genres=878`);
    xhr.send();
}
function pesquisaDrama() {
    let textoBotao = document.getElementById('dropdownMenuButton')
    textoBotao.innerText = "Drama"
    let xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2020&with_genres=18`);
    xhr.send();
}

window.addEventListener('load', cardInicial);
document.getElementById('acao').addEventListener('click', pesquisaAcao);
document.getElementById('comedia').addEventListener('click', pesquisaComedia);
document.getElementById('terror').addEventListener('click', pesquisaTerror);
document.getElementById('fic').addEventListener('click', pesquisaFic);
document.getElementById('drama').addEventListener('click', pesquisaDrama);