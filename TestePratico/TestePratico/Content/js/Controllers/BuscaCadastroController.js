angular.module('CentralCadastro').controller('BuscaCadastroController', function ($scope, $resource, recursoBuscaCadastro) {

    $scope.CADASTRO_CLIENTE = {};

    $scope.divLista = true;
    $scope.divCadastro = false;

    $scope.AbrirCadastro = function () {
        $scope.CADASTRO_CLIENTE = {};
        $scope.formulario.$setPristine();
        $scope.formulario.$setUntouched();

        $scope.divCadastro = true;
        $scope.divLista = false;
    };

    $scope.FechaCadastro = function () {
        $scope.divCadastro = false;
        $scope.divLista = true;

        $scope.formulario.$setPristine();
        $scope.formulario.$setUntouched();
    };

    recursoBuscaCadastro.query(function (CADASTRO_CLIENTE) {
        $scope.CADASTRO_CLIENTE = CADASTRO_CLIENTE;
    }, function (erro) {
        console.log(erro);
        });

    $scope.novoCadastro = function () {
       
        // Tratativa para as datas
        //$scope.CADASTRO_CLIENTE.DATA_NASC = $scope.CADASTRO_CLIENTE.DATA_NASC != null ? moment($scope.CADASTRO_CLIENTE.DATA_NASC).format('YYYYMMDD') : null
        console.log($scope.CADASTRO_CLIENTE);

        if ($scope.formulario.$valid) {
            console.log($scope.CADASTRO_CLIENTE)
            recursoBuscaCadastro.salvar($scope.CADASTRO_CLIENTE, function (retorno) {
                console.log(retorno);
                $scope.CADASTRO_CLIENTE = {};
            }, function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar o usuario';
            });
        };
    };

    //// Salva o objeto inteiro
    //$scope.salvar = function () {

    //    // Tratativa para as datas
    //    $scope.rnc.RRNC_DTABERTURA = $scope.rnc.RRNC_DTABERTURA != null ? moment($scope.rnc.RRNC_DTABERTURA).format('YYYYMMDD') : null
    //    $scope.rnc.RRNC_DTENCERRA = $scope.rnc.RRNC_DTENCERRA != null ? moment($scope.rnc.RRNC_DTENCERRA).format('YYYYMMDD') : null
    //    $scope.rnc.RRNC_PRAZOENC = $scope.rnc.RRNC_PRAZOENC != null ? moment($scope.rnc.RRNC_PRAZOENC).format('YYYYMMDD') : null

    //    $scope.f ? $scope.upload($scope.f) : '';

    //    if ($scope.rnc.RRNC_ID) {

    //        recursoPAM001RO005.atualizar({ rncId: $scope.rnc.RRNC_ID }, $scope.rnc, function (retorno) {
    //            $scope.divLoad.finish();
    //            notificacao.informacao(retorno.Message);
    //            $scope.buscarTodos();
    //        }, function (erro) {
    //            $scope.divLoad.finish();
    //            notificacao.alerta(erro.data.Message);
    //        });

    //    }
    //    else {

    //        recursoPAM001RO005.salvar($scope.rnc, function (retorno) {
    //            $scope.divLoad.finish();
    //            notificacao.informacao(retorno.Message);
    //            $scope.buscarTodos();
    //        }, function (erro) {
    //            $scope.divLoad.finish();
    //            notificacao.alerta(erro.data.Message);
    //        });
    //    }


    //    $scope.FechaCadastro();

    //}

    //$scope.editar = function (data) {

    //    $scope.AbrirCadastro();

    //    recursoPAM001RO005.get({ rncId: data.RRNC_ID }, function (reclamacoes) {
    //        $scope.rnc = reclamacoes;

    //        //Tratativa datas
    //        $scope.rnc.RRNC_DTABERTURA = $scope.rnc.RRNC_DTABERTURA != null ? new Date($scope.rnc.RRNC_DTABERTURA.substring(0, 4), $scope.rnc.RRNC_DTABERTURA.substring(4, 6) - 1, $scope.rnc.RRNC_DTABERTURA.substring(6, 8)) : null
    //        $scope.rnc.RRNC_PRAZOENC = $scope.rnc.RRNC_PRAZOENC != null ? new Date($scope.rnc.RRNC_PRAZOENC.substring(0, 4), $scope.rnc.RRNC_PRAZOENC.substring(4, 6) - 1, $scope.rnc.RRNC_PRAZOENC.substring(6, 8)) : null
    //        $scope.rnc.RRNC_DTENCERRA = $scope.rnc.RRNC_DTENCERRA != null ? new Date($scope.rnc.RRNC_DTENCERRA.substring(0, 4), $scope.rnc.RRNC_DTENCERRA.substring(4, 6) - 1, $scope.rnc.RRNC_DTENCERRA.substring(6, 8)) : null

    //        $scope.f = '/Upload/RNC/' + $scope.rnc.RRNC_ARQUIVO;

    //    }, function (erro) {
    //        notificacao.alerta(erro.data.Message);
    //    });
    //}

    //// Deleta o registro selecionado
    //$scope.deletar = function () {

    //    var divLoad = loading.deletarDados();

    //    recursoPAM001RO005.excluir({ rncId: $scope.rncExcluir.RRNC_ID }, function (retorno) {
    //        var indice = 0;
    //        angular.forEach($scope.reclamacao, function (valor, chave) {
    //            if (valor.RRNC_ID == $scope.rncExcluir.RRNC_ID) {
    //                $scope.reclamacao.splice(indice, 1);
    //            }
    //            indice++;
    //        })
    //        divLoad.finish();
    //        notificacao.informacao(retorno.Message);
    //    }, function (erro) {
    //        divLoad.finish();
    //        notificacao.alerta(erro.data.Message);
    //    });

    //    $scope.ModalExcluir = false;
    //};

});