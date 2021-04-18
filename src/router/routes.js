import { routes as operacao } from '../features/operacao';
import { routes as conta } from '../features/conta';

export default [
  ...conta,
  ...operacao,
];
