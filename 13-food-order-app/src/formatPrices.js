const formatPrices = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default formatPrices;
