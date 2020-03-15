const ethers = require('ethers');

const { getTokenMetadata } = require('.');

let provider;

beforeAll(() => {
  provider = new ethers.providers.JsonRpcProvider(process.env.WEB3_ENDPOINT);
});

describe('getTokenMetadata', () => {
  it('should get metadata for USDC', async () => {
    const metadata = await getTokenMetadata(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      {
        provider,
      },
    );

    expect(metadata).toEqual({
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: 6,
      name: 'USD//C',
      symbol: 'USDC',
    });
  });

  it('should get metadata for MKR', async () => {
    const metadata = await getTokenMetadata(
      '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      {
        provider,
      },
    );

    expect(metadata).toEqual({
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      decimals: 18,
      name: null,
      symbol: null,
    });
  });

  it('should get metadata for IMBTC', async () => {
    const metadata = await getTokenMetadata(
      '0x3212b29e33587a00fb1c83346f5dbfa69a458923',
      {
        provider,
      },
    );

    expect(metadata).toEqual({
      address: '0x3212b29e33587a00fb1c83346f5dbfa69a458923',
      decimals: 8,
      name: 'The Tokenized Bitcoin',
      symbol: 'imBTC',
    });
  });

  it('should get metadata for CryptoSpells', async () => {
    const metadata = await getTokenMetadata(
      '0x67cbbb366a51fff9ad869d027e496ba49f5f6d55',
      {
        provider,
      },
    );

    expect(metadata).toEqual({
      address: '0x67cbbb366a51fff9ad869d027e496ba49f5f6d55',
      decimals: null,
      name: 'CryptoSpells',
      symbol: 'CSPL',
    });
  });

  it('should get metadata for Gods Unchained Cards', async () => {
    const metadata = await getTokenMetadata(
      '0x0e3a2a1f2146d86a604adc220b4967a898d7fe07',
      {
        provider,
      },
    );

    expect(metadata).toEqual({
      address: '0x0e3a2a1f2146d86a604adc220b4967a898d7fe07',
      decimals: null,
      name: 'Gods Unchained Cards',
      symbol: 'CARD',
    });
  });

  it('should get metadata for CryptoKitties', async () => {
    const metadata = await getTokenMetadata(
      '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      {
        provider,
      },
    );

    expect(metadata).toEqual({
      address: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      decimals: null,
      name: 'CryptoKitties',
      symbol: 'CK',
    });
  });
});
