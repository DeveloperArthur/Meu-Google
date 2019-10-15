function pesquisar(){
	var pesquisa = document.getElementById("pesquisa").value;
	if(pesquisa.trim().isEmpty()){
		urlDePesquisa = "https://www.google.com.br/search?source=hp&ei=OBamXZusAo6v5OUPjdCfmAc&q="+pesquisa;
		window.location.href = urlDePesquisa;
	}
}
