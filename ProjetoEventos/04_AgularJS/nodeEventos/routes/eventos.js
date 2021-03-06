module.exports = function (app) {
    var valida = require('./../middlewares/valida')
    var eventos = app.controllers.eventos;

    app.get('/menu', valida, eventos.menu)
    app.get('/menu', eventos.menu);
    app.get('/cadUsuario', eventos.cadastroUsuario);
    app.get('/cadEvento', eventos.cadastroEvento);
    app.get('/listaEventos', eventos.listaEventos);
    app.post('/novoEvento', eventos.novoEvento);
    app.get('/listaEventosWS', valida, eventos.listaEventosWS);
    app.get('/listaEventosJs', valida, eventos.listaEventosJs);

};