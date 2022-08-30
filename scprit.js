function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('fano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro essa data nao existe')
    }  else {
        var fsex = document.getElementsByName('sex')
        var genero = ''
        // aqui esta o principal do codigo no *var idade* é ali onde se faz o calculo
        var idade = ano-Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    } if(fsex[0].checked){
        genero = 'homem'
        if(idade >= 0 && idade <= 12){
            img.setAttribute('src', 'crianca menino.jpg')
        } else if(idade >= 13 && idade <= 17){
            img.setAttribute('src', 'adolescente-homem.jpg')
        } else if(idade >= 18 && idade <= 59){
            img.setAttribute('src', 'adolescente-homem.jpg')
        } else if(idade >= 60 && idade <= 200){
            img.setAttribute('src', 'homem-idoso.jpg')
        } else if(idade >= 201) {
                window.alert('Verifique os dados e tente novamente')
        }
    } if(fsex[1].checked){
        genero = 'mulher'
        if(idade >=0 && idade <= 12){
            img.setAttribute('src', 'crianca menina.jpg')
        } else if(idade >= 13 && idade <= 18){
            img.setAttribute('src', 'menina adolescente.jpg')
        } else if(idade >= 19 && idade <= 59){
            img.setAttribute('src', 'menina adolescente.jpg')
        } else if(idade >= 60 && idade <= 200){
            img.setAttribute('src', 'mulher idosa.jpg')
        } else if(idade >= 201) {
            window.alert('Verifique os dados e tente novamente')
    }
    }
    res.style.textAlign = 'center' // o style tem que ter conexao com o o p pra poder fazer e alterar o estilo
    res.innerHTML = `<p>detectamos ${genero} com ${idade} anos de vida</p>`
    res.appendChild(img)
}


// o outro codigo esta na aula 12 no exercicio 15 de js do curso em video