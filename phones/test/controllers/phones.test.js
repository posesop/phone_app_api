
const { expect } = require('chai');
const sinon = require('sinon');
const phones = require('../../app/controllers/phones');
const repository = require('../../app/repository');

describe('Unit test phones controller', () => {
  let getPhonesStub;

  beforeEach(() => {
    getPhonesStub = sinon.stub(repository, 'getPhones');
  });

  afterEach(() => {
    getPhonesStub.restore();
  });

  describe('getPhones()', () => {
    it('should same data from repository', async () => {
      getPhonesStub.returns([{
        id: 11,
        name: 'Iphone XS Max',
        description: 'Apple iPhone Xs Max 512GB',
        price: 1221,
        image: 'https://static.phonehouse.es/res/autoimg/202704_spc_200_176_qhigh_product.jpg',
      }, {
        id: 12,
        name: 'Samsung Galaxy Note9',
        description: 'Samsung Galaxy Note9 512GB + 8GB RAM',
        price: 710,
        image: 'https://static.phonehouse.es/res/autoimg/154944_spc_200_176_qhigh_product.jpg',
      }, {
        id: 13,
        name: 'Iphone X',
        description: 'Apple iPhone X 256GB',
        price: 801,
        image: 'https://static.phonehouse.es/res/autoimg/36772_spc_200_176_qhigh_product.jpg',
      }, {
        id: 14,
        name: 'Huawei P20 Pro',
        description: 'Huawei P20 Pro OLED',
        price: 691,
        image: 'https://static.phonehouse.es/res/autoimg/37897_spc_200_176_qhigh_product.jpg',
      },
      ]);
      const result = await phones.getPhones();
      expect(result).to.eql([{
        id: 11,
        name: 'Iphone XS Max',
        description: 'Apple iPhone Xs Max 512GB',
        price: 1221,
        image: 'https://static.phonehouse.es/res/autoimg/202704_spc_200_176_qhigh_product.jpg',
      }, {
        id: 12,
        name: 'Samsung Galaxy Note9',
        description: 'Samsung Galaxy Note9 512GB + 8GB RAM',
        price: 710,
        image: 'https://static.phonehouse.es/res/autoimg/154944_spc_200_176_qhigh_product.jpg',
      }, {
        id: 13,
        name: 'Iphone X',
        description: 'Apple iPhone X 256GB',
        price: 801,
        image: 'https://static.phonehouse.es/res/autoimg/36772_spc_200_176_qhigh_product.jpg',
      }, {
        id: 14,
        name: 'Huawei P20 Pro',
        description: 'Huawei P20 Pro OLED',
        price: 691,
        image: 'https://static.phonehouse.es/res/autoimg/37897_spc_200_176_qhigh_product.jpg',
      }]);
    });
  });
});
