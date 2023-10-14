const form = document .getElementById ('lista')
let Linha = '<li>'

form.addEventListener("submit", function (e){
    e.preventDefault()

    const inputtarefa = document.getElementById ('tarefa')


    Linha += `<li>${inputtarefa.value}</li>`


    const lista = document.querySelector('ul')
    lista.innerHTML = Linha; 

    $('li').click(function() {
        $(this).addClass("concluido")
    })
})