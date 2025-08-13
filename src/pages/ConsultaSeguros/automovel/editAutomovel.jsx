import React, { useState } from "react";
import {
  Container, Section, Title, Label, Input, Button, ValueRow, Value,
  Subsection, Grid, SubsectionTitle
} from "./styles";
import { formatDateBR } from "../../cadastro/utils";
import { updateAutomovel, deleteAutomovel } from "../../../services/AutomovelService";
import { FiTrash } from "react-icons/fi";
import ModalConfirmarExclusao from "../../cadastro/components/ModalAlertDelete";


const EditAutomovel = ({ veiculo, onCancel, onUpdate }) => {
  const [form, setForm] = useState({ ...veiculo });
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleCarneChange = (index, field, value) => {
    const updatedCarnes = [...(form.carnes || [])];
    updatedCarnes[index] = { ...updatedCarnes[index], [field]: value };
    setForm(prev => ({ ...prev, carnes: updatedCarnes }));
  };

  const confirmDelete = async () => {
    try {
      await deleteAutomovel(form.id); // ou form.cpfcnpj, se for pela chave do segurado
      alert("Seguro automóvel excluído com sucesso.");
      onCancel();
    } catch (error) {
      console.error("Erro ao excluir seguro automóvel:", error);
      alert("Erro ao excluir seguro automóvel.");
    } finally {
      setShowModal(false);
    }
  };

  const handleAddCarne = () => {
    const novaLista = [...(form.carnes || []), { vencimento: "", valor: "" }];
    setForm(prev => ({ ...prev, carnes: novaLista }));
  };

  const handleRemoveCarne = (index) => {
    const novaLista = [...(form.carnes || [])];
    novaLista.splice(index, 1);
    setForm(prev => ({ ...prev, carnes: novaLista }));
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
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Title>Editar Seguro Automóvel</Title>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'red',
                fontSize: '1.5rem',
              }}
              title="Excluir seguro automóvel"
            >
              <FiTrash />
            </button>
          </div>
          <Section>
            <Label>Segurado:</Label>
            <Input
              value={form.segurado?.nome || ""}
              onChange={e => handleChange("segurado", { ...form.segurado, nome: e.target.value })}
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
                <Label>Corretora:</Label>
                <Input
                  value={form.corretora || ""}
                  onChange={e => handleChange("corretora", e.target.value)}
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
                <Label>Endosso:</Label>
                <Input
                  value={form.endoso || ""}
                  onChange={e => handleChange("endoso", e.target.value)}
                />
              </ValueRow>
              <ValueRow>
                <Label>Data do Endosso:</Label>
                <Input
                  type="date"
                  value={form.dataendosso || ""}
                  onChange={e => handleChange("dataendosso", e.target.value)}
                />
              </ValueRow>
            </Subsection>

            <Subsection>
              <SubsectionTitle>Vigência</SubsectionTitle>
              <ValueRow>
                <Label>Início:</Label>
                <Input
                  type="date"
                  value={form.vigenciainicio || ""}
                  onChange={e => handleChange("vigenciainicio", e.target.value)}
                />
              </ValueRow>
              <ValueRow>
                <Label>Fim:</Label>
                <Input
                  type="date"
                  value={form.vigenciafim || ""}
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
              <ValueRow>
                <Label>Item:</Label>
                <Input
                  value={form.item || ""}
                  onChange={e => handleChange("item", e.target.value)}
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
                <ValueRow>
                  <Label>Franquia:</Label>
                  <Input
                    value={form.importancias?.franquia || ""}
                    onChange={(e) => handleChangeImportancia("franquia", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Carroceria:</Label>
                  <Input
                    value={form.importancias?.carroceria || ""}
                    onChange={(e) => handleChangeImportancia("carroceria", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Franquia Carroceria:</Label>
                  <Input
                    value={form.importancias?.franquia2 || ""}
                    onChange={(e) => handleChangeImportancia("franquia2", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>RCF Morais:</Label>
                  <Input
                    value={form.importancias?.dmateriais || ""}
                    onChange={(e) => handleChangeImportancia("dmateriais", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>RCF Materiais:</Label>
                  <Input
                    value={form.importancias?.dpessoais || ""}
                    onChange={(e) => handleChangeImportancia("dpessoais", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>RCF Corporais:</Label>
                  <Input
                    value={form.importancias?.dmh || ""}
                    onChange={(e) => handleChangeImportancia("dmh", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Bônus:</Label>
                  <Input
                    value={form.importancias?.bonus || ""}
                    onChange={(e) => handleChangeImportancia("bonus", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>APP Morte:</Label>
                  <Input
                    value={form.importancias?.appMorte || ""}
                    onChange={(e) => handleChangeImportancia("appMorte", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>APP Invalidez:</Label>
                  <Input
                    value={form.importancias?.invalidez || ""}
                    onChange={(e) => handleChangeImportancia("invalidez", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Martelinho:</Label>
                  <Input
                    value={form.importancias?.martelinho || ""}
                    onChange={(e) => handleChangeImportancia("martelinho", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Pequenos Reparos:</Label>
                  <Input
                    value={form.importancias?.pequenosReparos || ""}
                    onChange={(e) => handleChangeImportancia("pequenosReparos", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Pneu:</Label>
                  <Input
                    value={form.importancias?.pneu || ""}
                    onChange={(e) => handleChangeImportancia("pneu", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Rodas:</Label>
                  <Input
                    value={form.importancias?.rodas || ""}
                    onChange={(e) => handleChangeImportancia("rodas", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Acessórios:</Label>
                  <Input
                    value={form.importancias?.acessorios || ""}
                    onChange={(e) => handleChangeImportancia("acessorios", e.target.value)}
                  />
                </ValueRow>

                <ValueRow>
                  <Label>Outras:</Label>
                  <Input
                    value={form.importancias?.outras || ""}
                    onChange={(e) => handleChangeImportancia("outras", e.target.value)}
                  />
                </ValueRow>
              </Grid>
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Prêmios</SubsectionTitle>
              <ValueRow>
                <Label>Valor:</Label>
                <Input
                  value={(form.premios && form.premios.valor) || ""}
                  onChange={e => handleChangePremio("valor", e.target.value)}
                />
              </ValueRow>
              <ValueRow>
                <Label>Prêmio Líquido:</Label>
                <Input
                  value={(form.premios && form.premios.liquido) || ""}
                  onChange={e => handleChangePremio("liquido", e.target.value)}
                />
              </ValueRow>
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
              {(form.carnes || []).map((item, idx) => (
                <ValueRow key={idx}>
                  <Label>Vencimento:</Label>
                  <Input
                    type="date"
                    value={item.vencimento || ""}
                    onChange={e => handleCarneChange(idx, "vencimento", e.target.value)}
                  />
                  <Label>Valor:</Label>
                  <Input
                    value={item.valor || ""}
                    onChange={e => handleCarneChange(idx, "valor", e.target.value)}
                  />
                  <Button type="button" onClick={() => handleRemoveCarne(idx)}>Remover</Button>
                </ValueRow>
              ))}

              <Button type="button" onClick={handleAddCarne}>Adicionar Carnê</Button>
            </Subsection>
          </Section>

          <Button type="submit" disabled={saving}>Salvar</Button>
          <Button type="button" onClick={onCancel} disabled={saving}>Cancelar</Button>
        </Container>
      </form>
      {
        showModal && (
          <ModalConfirmarExclusao
            onConfirm={confirmDelete}
            onCancel={() => setShowModal(false)}
          />
        )
      }
    </>
  );
};

export default EditAutomovel;
