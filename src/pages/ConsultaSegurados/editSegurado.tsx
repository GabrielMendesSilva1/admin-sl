import React, { useState } from 'react';
import {
  Panel, Row, Label, Input, Value, Button, PageTitle
} from './styles'; // ajuste import conforme seu projeto
import { updateSegurado } from '../../services/SeguradoService';

const EditSegurado = ({ segurado, onCancel, onUpdate }) => {
  const [form, setForm] = useState({ ...segurado });
  const [saving, setSaving] = useState(false);

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

  return (
    <form onSubmit={handleSubmit}>
      <Panel>
        <PageTitle>Editar Dados do Segurado</PageTitle>

        {/* Campos editáveis */}
        <Row>
          <Label>Nome:</Label>
          <Input
            value={form.nome || ''}
            onChange={e => handleChange('nome', e.target.value)}
          />
        </Row>

        <Row>
          <Label>Email:</Label>
          <Input
            value={form.email || ''}
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
            value={form.endereco || ''}
            onChange={e => handleChange('endereco', e.target.value)}
          />
        </Row>

        <Row>
          <Label>Bairro:</Label>
          <Input
            value={form.bairro || ''}
            onChange={e => handleChange('bairro', e.target.value)}
          />
        </Row>

        <Row>
          <Label>Cidade:</Label>
          <Input
            value={form.cidade || ''}
            onChange={e => handleChange('cidade', e.target.value)}
          />
        </Row>

        <Row>
          <Label>UF:</Label>
          <Input
            value={form.uf || ''}
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
            value={form.tipopessoa || ''}
            onChange={e => handleChange('tipopessoa', e.target.value)}
          />
        </Row>

        <Row>
          <Label>Estado Civil:</Label>
          <Input
            value={form.estadocivil || ''}
            onChange={e => handleChange('estadocivil', e.target.value)}
          />
        </Row>

        <Row>
          <Label>Observações:</Label>
          <Input
            value={form.observacao || ''}
            onChange={e => handleChange('observacao', e.target.value)}
          />
        </Row>

        {/* Campos não editáveis */}
        <Row>
          <Label>Data de Cadastro:</Label>
          <Value>{form.datacadastro}</Value>
        </Row>

        <Row>
          <Label>CPF/CNPJ:</Label>
          <Value>{form.cpfcnpj}</Value>
        </Row>

        <Row>
          <Label>Data Nascimento:</Label>
          <Value>{form.datanascimento}</Value>
        </Row>

        <Button type="submit" disabled={saving}>Salvar</Button>
        <Button type="button" onClick={onCancel} disabled={saving}>Cancelar</Button>
      </Panel>
    </form>
  );
};

export default EditSegurado;
