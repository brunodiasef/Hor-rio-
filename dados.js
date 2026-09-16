/* ============================================================
   DADOS DO APP — Meus Horários
   ------------------------------------------------------------
   Este arquivo guarda SUAS turmas, SUA grade e SEUS horários.
   O index.html só cuida do visual. Você pode trocar o layout
   do index.html à vontade que este arquivo continua igual.

   Como atualizar:
   1) Edite as turmas/grade dentro do app, no navegador.
   2) Vá na aba "Configurações" > "Baixar dados.js".
   3) Substitua este arquivo no GitHub pelo baixado.

   (Também dá para editar na mão aqui embaixo, se preferir.)
   ============================================================ */

const DADOS = {

  // Sempre que você baixar um dados.js novo, este número sobe.
  // É o que avisa ao app: "o arquivo é mais novo que o navegador".
  versao: 1,

  // Horário de início e fim das 7 aulas
  periods: [
    { start: '07:00', end: '07:50' },
    { start: '07:50', end: '08:40' },
    { start: '08:40', end: '09:30' },
    { start: '09:50', end: '10:40' },
    { start: '10:40', end: '11:30' },
    { start: '11:30', end: '12:20' },
    { start: '13:30', end: '14:20' }
  ],

  // Suas turmas. O "id" é o que liga a turma à grade abaixo.
  // Exemplo:
  // { id: 'c_6a', name: '6ºA', color: '#3b82f6' },
  classes: [],

  // A grade. A chave é "dia-numeroDaAula", começando do ZERO.
  // Ou seja: 'seg-0' = segunda, 1ª aula / 'sex-6' = sexta, 7ª aula.
  // Exemplo:
  // 'seg-0': 'c_6a',
  schedule: {}

};
