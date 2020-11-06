function formatMoney(amount: number): string {
  const formatted = amount.toLocaleString('pt-BR');
  return `$ ${formatted}`;
}

export default formatMoney;
