import React, { useState } from "react";
import {
  Container, Section, Title, Label, Input, Button, ValueRow, Value,
  Subsection, Grid, PageWrapper, SubsectionTitle, ButtonNavContainer
} from "./styles";
import { updateAutomovel } from "../../../services/AutomovelService";
import { formatDateBR } from "../../cadastro/utils";

const EditAutomovel = ({ veiculo, onCancel, onUpdate }) => {
  const [form, setForm] = useState({ ...veiculo });
  const [saving, setSaving] = useState(false);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleChangeImportancia = (field, value) => {
    setForm(prev => ({
      ...prev,
      importancias: {
        ...prev.importancias,
        [field]: value
      }
    }));
  };

  const handleChangePremio = (field, value) => {
    setForm(prev => ({
      ...prev,
      premios: {
        ...prev.premios,
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateAutomovel(form.id, form);
      onUpdate(form);
      alert("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar automóvel:", error);
      alert("Erro ao atualizar dados.");
    }
    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Title>Editar Seguro Automóvel</Title>

        <Section>
          <Label>Segurado:</Label>
          <Input
            value={form.segurado || ""}
            onChange={e => handleChange("segurado", e.target.value)}
          />
        </Section>

        <Section>
          <Subsection>
            <SubsectionTitle>Seguradora</SubsectionTitle>
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
          </Subsection>

          <Subsection>
            <SubsectionTitle>Vigência</SubsectionTitle>
            <ValueRow>
              <Label>Início:</Label>
              <Input
                type="date"
                value={formatDateBR(form.vigenciainicio || "")}
                onChange={e => handleChange("vigenciainicio", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Fim:</Label>
              <Input
                type="date"
                value={formatDateBR(form.vigenciafim || "")}
                onChange={e => handleChange("vigenciafim", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Cobertura:</Label>
              <Input
                value={form.cobertura || ""}
                onChange={e => handleChange("cobertura", e.target.value)}
              />
            </ValueRow>
          </Subsection>
        </Section>

        <Section>
          <Subsection>
            <SubsectionTitle>Veículo</SubsectionTitle>
            <ValueRow>
              <Label>Modelo:</Label>
              <Input
                value={form.descricao || ""}
                onChange={e => handleChange("descricao", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Ano/Modelo:</Label>
              <Input
                value={form.anomodelo || ""}
                onChange={e => handleChange("anomodelo", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Placa:</Label>
              <Input
                value={form.placa || ""}
                onChange={e => handleChange("placa", e.target.value)}
              />
            </ValueRow>
          </Subsection>
        </Section>

        <Section>
          <Label>Houve Sinistro?</Label>
          <select
            value={form.houvesinistro || ''}
            onChange={e => handleChange('houvesinistro', e.target.value)}
          >
            <option value="" disabled>Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </Section>

        <Section>
          <Subsection>
            <SubsectionTitle>Importâncias Seguradas</SubsectionTitle>
            <Grid>
              {[
                "casco",
                "franquia",
                "dmateriais",
                "dpessoais",
                "appMorte",
                "outras",
                "martelinho",
                "pequenosReparos",
                "pneu",
                "rodas",
              ].map((key) => (
                <ValueRow key={key}>
                  <Label>{key.charAt(0) + key.slice(1)}:</Label>
                  <Input
                    value={(form.importancias&& form.importancias[key]) || ""}
                    onChange={(e) => handleChangeImportancia(key, e.target.value)}
                  />
                </ValueRow>
              ))}
            </Grid>
          </Subsection>
        </Section>

        <Section>
          <Subsection>
            <SubsectionTitle>Prêmios</SubsectionTitle>
            <ValueRow>
              <Label>Total:</Label>
              <Input
                value={(form.premios && form.premios.total) || ""}
                onChange={e => handleChangePremio("total", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Forma de Pagamento:</Label>
              <Input
                value={(form.premios && form.premios.pagamento) || ""}
                onChange={e => handleChangePremio("pagamento", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Parcelas:</Label>
              <Input
                value={(form.premios && form.premios.parcelas) || ""}
                onChange={e => handleChangePremio("parcelas", e.target.value)}
              />
            </ValueRow>
          </Subsection>
        </Section>

        <Section>
          <Subsection>
            <SubsectionTitle>Carnês</SubsectionTitle>
            {/* Simplificando: não edita carnês */}
            {form.carnes && form.carnes.map((item, idx) => (
              <ValueRow key={idx}>
                <Label>Vencimento:</Label> <Value>{formatDateBR(item.vencimento)}</Value>
                <Label>Valor:</Label> <Value>{item.valor}</Value>
              </ValueRow>
            ))}
          </Subsection>
        </Section>

        <Button type="submit" disabled={saving}>Salvar</Button>
        <Button type="button" onClick={onCancel} disabled={saving}>Cancelar</Button>
      </Container>
    </form>
  );
};

export default EditAutomovel;
