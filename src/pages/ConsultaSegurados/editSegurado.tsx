import React, { useState } from 'react';
import {
  Panel,
  Row,
  Label,
  Input,
  Value,
  Button,
  PageTitle
} from './styles';
import { updateSegurado, deleteSegurado } from '../../services/SeguradoService';
import { formatDateBR } from '../cadastro/utils';
import { FiTrash } from 'react-icons/fi';
import ModalConfirmarExclusao from '../cadastro/components/ModalAlertDelete';


const EditSegurado = ({ segurado, onCancel, onUpdate }) => {
  const [form, setForm] = useState({ ...segurado });
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false); // controla exibição do modal

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateSegurado(form.cpfcnpj, form);
      onUpdate(form);
      alert('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar segurado:', error);
      alert('Erro ao atualizar dados.');
    }
    setSaving(false);
  };

  const confirmDelete = async () => {
    try {
      await deleteSegurado(form.cpfcnpj);
      alert("Segurado excluído com sucesso.");
      onCancel(); // volta à listagem ou fecha a tela
    } catch (error) {
      console.error("Erro ao excluir segurado:", error);
      alert("Erro ao excluir segurado.");
    } finally {
      setShowModal(false); // fecha o modal
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Panel>
          {/* Título e botão de exclusão */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <PageTitle>Editar Dados do Segurado</PageTitle>
            <button
              type="button"
              onClick={() => setShowModal(true)} // Apenas abre o modal
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'red',
                fontSize: '1.5rem',
              }}
              title="Excluir segurado"
            >
              <FiTrash />
            </button>
          </div>

          {/* Campos editáveis */}
          <Row>
            <Label>Nome:</Label>
            <Input
              value={form.nome.toUpperCase() || ''}
              onChange={e => handleChange('nome', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Email:</Label>
            <Input
              value={form.email.toUpperCase() || ''}
              onChange={e => handleChange('email', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Telefone 1:</Label>
            <Input
              value={form.tel1 || ''}
              onChange={e => handleChange('tel1', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Endereço:</Label>
            <Input
              value={form.endereco.toUpperCase() || ''}
              onChange={e => handleChange('endereco', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Numero:</Label>
            <Input
              value={form.numero || ''}
              onChange={e => handleChange('numero', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Complemento:</Label>
            <Input
              value={form.complemento.toUpperCase() || ''}
              onChange={e => handleChange('complemento', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Bairro:</Label>
            <Input
              value={form.bairro.toUpperCase() || ''}
              onChange={e => handleChange('bairro', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Cidade:</Label>
            <Input
              value={form.cidade.toUpperCase() || ''}
              onChange={e => handleChange('cidade', e.target.value)}
            />
          </Row>

          <Row>
            <Label>UF:</Label>
            <Input
              value={form.uf.toUpperCase() || ''}
              onChange={e => handleChange('uf', e.target.value)}
            />
          </Row>

          <Row>
            <Label>CEP:</Label>
            <Input
              value={form.cep || ''}
              onChange={e => handleChange('cep', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Telefone 2:</Label>
            <Input
              value={form.tel2 || ''}
              onChange={e => handleChange('tel2', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Tipo Pessoa:</Label>
            <Input
              value={form.tipopessoa.toUpperCase() || ''}
              onChange={e => handleChange('tipopessoa', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Estado Civil:</Label>
            <Input
              value={form.estadocivil.toUpperCase() || ''}
              onChange={e => handleChange('estadocivil', e.target.value)}
            />
          </Row>

          <Row>
            <Label>Observações:</Label>
            <Input
              value={form.observacao.toUpperCase() || ''}
              onChange={e => handleChange('observacao', e.target.value)}
            />
          </Row>

          {/* Campos não editáveis */}
          <Row>
            <Label>Data de Cadastro:</Label>
            <Value>{formatDateBR(form.datacadastro)}</Value>
          </Row>

          <Row>
            <Label>CPF/CNPJ:</Label>
            <Value>{form.cpfcnpj}</Value>
          </Row>

          <Row>
            <Label>Data Nascimento:</Label>
            <Value>{formatDateBR(form.datanascimento)}</Value>
          </Row>

          <Button type="submit" disabled={saving}>Salvar</Button>
          <Button type="button" onClick={onCancel} disabled={saving}>Cancelar</Button>
        </Panel>
      </form>

      {/* Modal de confirmação de exclusão */}
      {showModal && (
        <ModalConfirmarExclusao
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default EditSegurado;
