/* eslint-disable no-console */
import app from './app';

const porta = 3333;

app.listen(`${porta}`, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});
