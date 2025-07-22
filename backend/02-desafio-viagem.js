/*
Desafio: Calcular o valor de uma viagem

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1. Preço do combustível;
2. Gasto médio de combustível do carro por KM;
3. Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

// Valor do litro do combustível
const precoCombustivel = 6.89;

// Quantos KM o carro faz por litro
const kmPorlitros = 10;

// Distância total da viagem em KM
const distanciaEMKm = 100;

// Calcula quantos litros serão consumidos na viagem
const litrosConsumidos = distanciaEMKm / kmPorlitros;

// Calcula o custo total da viagem (litros x preço por litro)
const valorGasto = litrosConsumidos * precoCombustivel;

// Exibe o valor total com 2 casas decimais
console.log(valorGasto.toFixed(2));
