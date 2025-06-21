import React from 'react';
import { useCadastroPatrimonial } from './useCadastroPatrimonial';
import Header from '../../../../components/Header';
import {
  Container,
  Panel,
  PageTitle,
  FormRow,
  Field,
  Label,
  Input,
  ButtonRow,
  Button,
} from './styles';

const CadastroPatrimonial = () => {
  const {
    form,
    handleChange,
    handleCarneChange,
    handleSubmit,
    addCarne,
  } = useCadastroPatrimonial();

  return (
    <>
      <Header />
      <Container>
        <Panel>
          <PageTitle>Cadastro Patrimonial</PageTitle>

          {/* DADOS DO PROPRIETÁRIO */}
          <FormRow>
            <Field>
              <Label>Segurado:</Label>
              <Input
                value={form.pessoal.nome}
                onChange={(e) => handleChange('pessoal', 'nome', e.target.value)}
              />
            </Field>
            <Field>
              <Label>CPF/CNPJ:</Label>
              <Input
                value={form.pessoal.cpfcnpj}
                onChange={(e) => handleChange('pessoal', 'cpfcnpj', e.target.value)}
              />
            </Field>
          </FormRow>

          {/* IMÓVEL */}
          <PageTitle style={{ fontSize: 22 }}>Imóvel</PageTitle>
          <FormRow>
            <Field>
              <Label>Descrição do Imóvel:</Label>
              <Input
                value={form.imovel.descricao}
                onChange={(e) => handleChange('imovel', 'descricao', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Tipo de Imóvel:</Label>
              <Input
                value={form.imovel.tipo}
                onChange={(e) => handleChange('imovel', 'tipo', e.target.value)}
              />
            </Field>
          </FormRow>
          <FormRow>
            <Field>
              <Label>CEP:</Label>
              <Input
                value={form.imovel.cep}
                onChange={(e) => handleChange('imovel', 'cep', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Endereço:</Label>
              <Input
                value={form.imovel.endereco}
                onChange={(e) => handleChange('imovel', 'endereco', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Área do Imóvel:</Label>
              <Input
                value={form.imovel.area}
                onChange={(e) => handleChange('imovel', 'area', e.target.value)}
              />
            </Field>
          </FormRow>
          <FormRow>
            <Field>
              <Label>Bairro:</Label>
              <Input
                value={form.imovel.bairro}
                onChange={(e) => handleChange('imovel', 'bairro', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Cidade:</Label>
              <Input
                value={form.imovel.cidade}
                onChange={(e) => handleChange('imovel', 'cidade', e.target.value)}
              />
            </Field>
          </FormRow>

          {/* SEGURADORA */}
          <PageTitle style={{ fontSize: 22 }}>Seguradora</PageTitle>
          <FormRow>
            <Field>
              <Label>Nome da Seguradora:</Label>
              <Input
                value={form.seguradora.nome}
                onChange={(e) => handleChange('seguradora', 'nome', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Apolice:</Label>
              <Input
                value={form.seguradora.apolice}
                onChange={(e) => handleChange('seguradora', 'apolice', e.target.value)}
              />
            </Field>
          </FormRow>
          <FormRow>
            <Field>
              <Label>Endoso:</Label>
              <Input
                value={form.seguradora.endoso}
                onChange={(e) => handleChange('seguradora', 'endoso', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Data do Endosso:</Label>
              <Input
                type="date"
                value={form.seguradora.dataEndosso}
                onChange={(e) => handleChange('seguradora', 'dataEndosso', e.target.value)}
              />
            </Field>
          </FormRow>

          {/* VIGÊNCIA */}
          <PageTitle style={{ fontSize: 22 }}>Vigência do Seguro</PageTitle>
          <FormRow>
            <Field>
              <Label>Início da Vigência:</Label>
              <Input
                type="date"
                value={form.vigencia.inicio}
                onChange={(e) => handleChange('vigencia', 'inicio', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Fim da Vigência:</Label>
              <Input
                type="date"
                value={form.vigencia.fim}
                onChange={(e) => handleChange('vigencia', 'fim', e.target.value)}
              />
            </Field>
          </FormRow>
          <FormRow>
            <Field>
              <Label>Tipo de Cobertura:</Label>
              <Input
                value={form.vigencia.cobertura}
                onChange={(e) => handleChange('vigencia', 'cobertura', e.target.value)}
              />
            </Field>
          </FormRow>

          {/* VALORES */}
          <PageTitle style={{ fontSize: 22 }}>Valores</PageTitle>
          <FormRow>
            <Field>
              <Label>Avaliação do Imóvel:</Label>
              <Input
                value={form.valores.avaliacao}
                onChange={(e) => handleChange('valores', 'avaliacao', e.target.value)}
              />
            </Field>
            <Field>
              <Label>Valor da Cobertura:</Label>
              <Input
                value={form.valores.cobertura}
                onChange={(e) => handleChange('valores', 'cobertura', e.target.value)}
              />
            </Field>
          </FormRow>

          {/* PRÊMIOS */}
          <PageTitle style={{ fontSize: 22 }}>Prêmios</PageTitle>
          <FormRow>
            <Field>
              <Label>Data da Cotação:</Label>
              <Input
                type="date"
                value={form.premios.dataCotacao}
                onChange={(e) => handleChange("premios", "dataCotacao", e.target.value)}
              />
            </Field>
            <Field>
              <Label>Valor do Prêmio:</Label>
              <Input
                value={form.premios.valor}
                onChange={(e) => handleChange("premios", "valor", e.target.value)}
              />
            </Field>
          </FormRow>
          <FormRow>
            <Field>
              <Label>Forma de Pagamento:</Label>
              <Input
                value={form.premios.pagamento}
                onChange={(e) => handleChange("premios", "pagamento", e.target.value)}
              />
            </Field>
            <Field>
              <Label>Número de Parcelas:</Label>
              <Input
                type="number"
                min={1}
                value={form.premios.parcelas}
                onChange={(e) => handleChange("premios", "parcelas", e.target.value)}
              />
            </Field>
          </FormRow>

          {/* CARNÊ (Parcelas) */}
          <PageTitle style={{ fontSize: 22 }}>Carnês</PageTitle>
          {form.carnes.map((carne, index) => (
            <FormRow key={index}>
              <Field>
                <Label>Vencimento da Parcela {index + 1}:</Label>
                <Input
                  type="date"
                  value={carne.vencimento || ""}
                  onChange={(e) => handleCarneChange(index, "vencimento", e.target.value)}
                />
              </Field>
              <Field>
                <Label>Valor da Parcela {index + 1}:</Label>
                <Input
                  value={carne.valor}
                  onChange={(e) => handleCarneChange(index, "valor", e.target.value)}
                />
              </Field>
            </FormRow>
          ))}

          {/* BOTÃO SUBMIT */}
          <ButtonRow>
            <Button onClick={handleSubmit}>Salvar</Button>
          </ButtonRow>
        </Panel>
      </Container>
    </>
  );
};

export default CadastroPatrimonial;
