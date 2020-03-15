const ethers = require('ethers');

const getTokenMetadata = async (address, options) => {
  const abi = [
    'function name() view returns (string name)',
    'function symbol() view returns (string symbol)',
    'function decimals() view returns (uint8 decimals)',
  ];
  const contract = new ethers.Contract(address, abi, options.provider);
  const handleError = () => {
    return null;
  };

  const [name, symbol, decimals] = await Promise.all([
    contract.name().catch(handleError),
    contract.symbol().catch(handleError),
    contract.decimals().catch(handleError),
  ]);

  return { address, decimals, name, symbol };
};

module.exports = { getTokenMetadata };
