import React, { useState, useEffect } from "react";
import {
  Container,
  Section,
  Title,
  Label,
  Input,
  Button,
  ValueRow,
  Subsection,
  SubsectionTitle,
  Grid,
} from "./styles";
import { formatDateBR } from "../../cadastro/utils";
import { updatePatrimonial, deletePatrimonial } from "../../../services/PatrimonialService";
import { FiTrash } from "react-icons/fi";
import ModalConfirmarExclusao from "../../cadastro/components/ModalAlertDelete";

const EditPatrimonial = ({ seguro, onClose, onAtualizado }) => {
  const [form, setForm] = useState({ ...seguro });
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    setForm({ ...seguro });
  }, [seguro]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const confirmDelete = async () => {
    try {
      await deletePatrimonial(form.id); // ou form.cpfcnpj, conforme sua API
      alert("Seguro patrimonial excluído com sucesso.");
      onClose();
    } catch (error) {
      console.error("Erro ao excluir seguro patrimonial:", error);
      alert("Erro ao excluir seguro patrimonial.");
    } finally {
      setShowModal(false);
    }
  };

  const handleChangeImportancias = (field, value) => {
    setForm((prev) => ({
      ...prev,
      importancias: {
        ...prev.importancias,
        [field]: value,
      },
    }));
  };

  const handleChangePremios = (field, value) => {
    setForm((prev) => ({
      ...prev,
      premios: {
        ...prev.premios,
        [field]: value,
      },
    }));
  };

  const handleChangeCarne = (index, field, value) => {
    const novasCarnes = [...(form.carnes || [])];
    novasCarnes[index][field] = value;
    setForm((prev) => ({
      ...prev,
      carnes: novasCarnes,
    }));
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
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Title>Editar Seguro Patrimonial</Title>
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
              title="Excluir seguro patrimonial"
            >
              <FiTrash />
            </button>
          </div>
          <Section>
            <ValueRow>
              <Label>Segurado:</Label>
              <Input value={form.segurado?.nome.toUpperCase() || ""} disabled />
            </ValueRow>
            <ValueRow>
              <Label>Seguradora:</Label>
              <Input
                value={form.nomeseguradora || ""}
                onChange={(e) => handleChange("nomeseguradora", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Corretora:</Label>
              <Input
                value={form.corretora || ""}
                onChange={(e) => handleChange("corretora", e.target.value)}
              />
            </ValueRow>

            <ValueRow>
              <Label>Apólice:</Label>
              <Input
                value={form.apolice || ""}
                onChange={(e) => handleChange("apolice", e.target.value)}
              />
            </ValueRow>

            <ValueRow>
              <Label>Endoso:</Label>
              <Input
                value={form.endoso || ""}
                onChange={(e) => handleChange("endoso", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Vigência Início:</Label>
              <Input
                type="date"
                value={form.vigenciainicio || ""}
                onChange={(e) => handleChange("vigenciainicio", e.target.value)}
              />
            </ValueRow>

            <ValueRow>
              <Label>Vigência Fim:</Label>
              <Input
                type="date"
                value={form.vigenciafim || ""}
                onChange={(e) => handleChange("vigenciafim", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Bairro:</Label>
              <Input
                value={form.bairro || ""}
                onChange={(e) => handleChange("bairro", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Cidade:</Label>
              <Input
                value={form.cidade || ""}
                onChange={(e) => handleChange("cidade", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Item:</Label>
              <Input
                value={form.item || ""}
                onChange={(e) => handleChange("item", e.target.value)}
              />
            </ValueRow>
            <ValueRow>
              <Label>Atividade:</Label>
              <Input
                value={form.atividade || ""}
                onChange={(e) => handleChange("atividade", e.target.value)}
              />
            </ValueRow>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Importâncias Seguradas</SubsectionTitle>
              <Grid>
                <ValueRow>
                  <Label>Avaliação:</Label>
                  <Input
                    value={form.importancias?.avaliacao || ""}
                    onChange={(e) =>
                      handleChangeImportancias("avaliacao", e.target.value)
                    }
                  />
                </ValueRow>
                <ValueRow>
                  <Label>Cobertura:</Label>
                  <Input
                    value={form.importancias?.cobertura || ""}
                    onChange={(e) =>
                      handleChangeImportancias("cobertura", e.target.value)
                    }
                  />
                </ValueRow>
              </Grid>
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Prêmios</SubsectionTitle>
              <Grid>
                <ValueRow>
                  <Label>Data Cotação:</Label>
                  <Input
                    type="date"
                    value={form.premios?.dataCotacao || ""}
                    onChange={(e) =>
                      handleChangePremios("dataCotacao", e.target.value)
                    }
                  />
                </ValueRow>
                <ValueRow>
                  <Label>Valor:</Label>
                  <Input
                    value={form.premios?.valor || ""}
                    onChange={(e) =>
                      handleChangePremios("valor", e.target.value)
                    }
                  />
                </ValueRow>
                <ValueRow>
                  <Label>Forma de Pagamento:</Label>
                  <Input
                    value={form.premios?.pagamento || ""}
                    onChange={(e) =>
                      handleChangePremios("pagamento", e.target.value)
                    }
                  />
                </ValueRow>
                <ValueRow>
                  <Label>Parcelas:</Label>
                  <Input
                    type="number"
                    min={1}
                    value={form.premios?.parcelas || ""}
                    onChange={(e) =>
                      handleChangePremios("parcelas", e.target.value)
                    }
                  />
                </ValueRow>
                <ValueRow>
                  <Label>Prêmio Líquido:</Label>
                  <Input
                    value={form.premios?.liquido || ""}
                    onChange={(e) =>
                      handleChangePremios("liquido", e.target.value)
                    }
                  />
                </ValueRow>
                <ValueRow>
                  <Label>Prêmio Total:</Label>
                  <Input
                    value={form.premios?.total || ""}
                    onChange={(e) =>
                      handleChangePremios("total", e.target.value)
                    }
                  />
                </ValueRow>
                <ValueRow>
                  <Label>Houve Sinistro?</Label>
                  <select
                    value={form.houvesinistro || ""}
                    onChange={(e) =>
                      handleChange("houvesinistro", e.target.value)
                    }
                  >
                    <option value="" disabled>Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </ValueRow>
                <ValueRow>
                  <Label>Observações:</Label>
                  <Input
                    value={form.premios?.observacoes || ""}
                    onChange={(e) =>
                      handleChangePremios("observacoes", e.target.value)
                    }
                  />
                </ValueRow>
              </Grid>
            </Subsection>
          </Section>

          {form.carnes?.length > 0 && (
            <Section>
              <Subsection>
                <SubsectionTitle>Carnês</SubsectionTitle>
                {form.carnes.map((item, index) => (
                  <Grid key={index}>
                    <ValueRow>
                      <Label>Vencimento {index + 1}:</Label>
                      <Input
                        type="date"
                        value={item.vencimento || ""}
                        onChange={(e) =>
                          handleChangeCarne(index, "vencimento", e.target.value)
                        }
                      />
                    </ValueRow>
                    <ValueRow>
                      <Label>Valor:</Label>
                      <Input
                        value={item.valor || ""}
                        onChange={(e) =>
                          handleChangeCarne(index, "valor", e.target.value)
                        }
                      />
                    </ValueRow>
                  </Grid>
                ))}
              </Subsection>
            </Section>
          )}

          <Button type="submit" disabled={saving}>
            Salvar
          </Button>
          <Button
            type="button"
            onClick={onClose}
            disabled={saving}
            style={{ marginLeft: "1rem" }}
          >
            Cancelar
          </Button>
        </Container>
      </form>
      {showModal && (
        <ModalConfirmarExclusao
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default EditPatrimonial;
