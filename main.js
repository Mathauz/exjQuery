$(document).ready(function() {
    const form = $('#form');
    const tarefa = [];

    form.on('submit', function(e) {
        e.preventDefault();
        adicionarLinha();
        mostrar();
    });

    function adicionarLinha() {
        const itarefa = $('#tarefa').val();
        tarefa.push({ texto: itarefa, riscado: false });

        $('#tarefa').val('');
    }

    function mostrar() {
        const res = $('#res');
        res.empty(); // Limpa a lista antes de adicionar novamente
        tarefa.forEach((item, index) => {
            const li = $('<li></li>').text(item.texto).attr('data-index', index);
            if (item.riscado) {
                li.addClass('line-through');
            }
            res.append(li);
        });
    }

    $(document).on('click', '#res li', function() {
        const index = $(this).data('index');
        tarefa[index].riscado = !tarefa[index].riscado;
        $(this).toggleClass('line-through');
    });
});
