import {consulta} from '../database/conexao.js'

class CadastroRepositories{
    //crud

    //inserir novo elemento
    create(cadastro) {
        const sql = "INSERT INTO chamado_funcionario SET ?;"
        return consulta(sql, cadastro, 'Nao foi possivel cadastrar')
    }

    //select * 
    findAll() {
        const sql = "SELECT * FROM chamado_funcionario;"
        return consulta(sql, 'Nao foi possivel Localizar!')
    }

    //buscar por id
    findById(id) {
        const sql = "SELECT * FROM chamado_funcionario WHERE chamado_id_chamado=?;"
        return consulta(sql, id, 'Nao foi possivel Localizar!')
    }

    //atualizar 
    update(nome_funcionario, setor_cod_setor, id) {
        const sql = "UPDATE `controle_chamados`.`chamado_funcionario` SET `nome_funcionario` = ?, `setor_cod_setor` = ? WHERE (`chamado_id_chamado` = ?);"
        return consulta(sql, [nome_funcionario, setor_cod_setor, id], 'Nao foi possivel Atualizar!')
    }
    //deletar
    delete(id) {
        const sql = "DELETE FROM chamado_funcionario WHERE chamado_id_chamado=?;"
        return consulta(sql, id, 'Nao foi possivel Apagar!')
    }
}

export default new CadastroRepositories()