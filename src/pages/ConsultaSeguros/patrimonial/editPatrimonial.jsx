import React, { useState, useEffect } from 'react';
import { updatePatrimonial } from '../../../services/PatrimonialService';
import {
  Container, Section, Title, Label, Input, Button, ValueRow, Value,
  Subsection, Grid, SubsectionTitle
} from './styles';

const EditPatrimonial = ({ seguro, onClose, onAtualizado }) => {
  const [form, setForm] = useState({ ...seguro });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm({ ...seguro });
  }, [seguro]);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updatePatrimonial(form.id, form);
      onAtualizado(form);
      alert("Seguro patrimonial atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar patrimonial:", error);
      alert("Erro ao atualizar dados.");
    }
    setSaving(false);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Title>Editar Seguro Patrimonial</Title>

        <Section>
          <ValueRow>
            <Label>Seguradora:</Label>
            <Input
              value={form.nomeseguradora || ""}
              onChange={e => handleChange("nomeseguradora", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Apólice:</Label>
            <Input
              value={form.apolice || ""}
              onChange={e => handleChange("apolice", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Endoso:</Label>
            <Input
              value={form.endoso || ""}
              onChange={e => handleChange("endoso", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Vigência Início:</Label>
            <Input
              type="date"
              value={form.vigenciainicio || ""}
              onChange={e => handleChange("vigenciainicio", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Vigência Fim:</Label>
            <Input
              type="date"
              value={form.vigenciafim || ""}
              onChange={e => handleChange("vigenciafim", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Bairro:</Label>
            <Input
              value={form.bairro || ""}
              onChange={e => handleChange("bairro", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Cidade:</Label>
            <Input
              value={form.cidade || ""}
              onChange={e => handleChange("cidade", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Item:</Label>
            <Input
              value={form.item || ""}
              onChange={e => handleChange("item", e.target.value)}
            />
          </ValueRow>

          <ValueRow>
            <Label>Atividade:</Label>
            <Input
              value={form.atividade || ""}
              onChange={e => handleChange("atividade", e.target.value)}
            />
          </ValueRow>
        </Section>

        <Button type="submit" disabled={saving}>Salvar</Button>
        <Button type="button" onClick={onClose} style={{ marginLeft: '1rem' }} disabled={saving}>Cancelar</Button>
      </Container>
    </form>
  );
};

export default EditPatrimonial;
