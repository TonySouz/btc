const priceElement = document.getElementById('btc-price');

async function fetchBitcoinPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl');
    const data = await response.json();
    const price = data.bitcoin.brl;
    priceElement.innerText = `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  } catch (error) {
    priceElement.innerText = 'Erro ao buscar preço';
    console.error(error);
  }
}

fetchBitcoinPrice();

setInterval(fetchBitcoinPrice, 5000);