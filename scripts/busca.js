const API_KEY = 'eb55d91f7d5bec90c9886dbc1c9d7f1a';

function montaResultado() {
    let divTela = document.getElementById('main')
    let titlePage = document.getElementById('tituloPagina')
    let titleBusca = document.getElementById('tituloBusca')
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];
        let tipo = filme.media_type;
        if (tipo == 'tv'){tipo='Série'}
        if (tipo == 'movie'){tipo='Filme'}

        texto = texto + `
        <div class="row busca">
            <div class="col-12">
                <div class="row">
                    <img class="col-12 col-lg-2" src="https://image.tmdb.org/t/p/original${filme.poster_path}" alt="">
                    <div class="col-12 col-lg-10">
                        <div class="titleBusca">
                            ${filme.title || filme.name}
                        </div>
                        <p> ${tipo}</p>
                        <p class="sinopseBusca">
                            ${filme.overview}
                        </p>
                        <p class="avaliacaoBusca">
                            <i class="fas fa-star"></i>${filme.vote_average}/10
                        </p>
                        <p class="dataBusca">[ ${filme.release_date || filme.first_air_date}] 
                        <a href="https://www.themoviedb.org/${filme.media_type}/${filme.id}" 
                        target="blank">Mais informações...</a></p>
                        
                    </div>
                </div>
            </div>
        </div>
        `
    }
    let titulo = document.getElementById('txtBusca').value;
    divTela.innerHTML = texto;
    titlePage.innerHTML = `Resultado para "${titulo}" -  FD Movies `
    titleBusca.innerHTML = `<h2>Resultado para "${titulo}":<h2> `
}
function pesquisa() {
    //alert('Não fiz cagada');
    let query = document.getElementById('txtBusca').value;

    if (query != '') {
        let xhr = new XMLHttpRequest();
        xhr.onload = montaResultado;
        xhr.open('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1&include_adult=false&region=BR`);
        xhr.send();
    }
}

function goBack(){
    window.history.back()
}

document.getElementById('voltar').addEventListener('click', goBack)
document.getElementById('voltar1').addEventListener('click', goBack)
document.getElementById('btnBusca').addEventListener('click', pesquisa)