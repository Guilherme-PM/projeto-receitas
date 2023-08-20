import receitas from './receitas.json';

export function carregarReceitas() {
  return new Promise((resolve) => {
      resolve(receitas);
  });
}