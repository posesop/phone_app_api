const { expect } = require('chai');
const sinon = require('sinon');
const orders = require('../../app/controllers/orders');
const repository = require('../../app/repository');

describe('Unit test categories controller', () => {
  let getPhonesStub;

  beforeEach(() => {
    getPhonesStub = sinon.stub(repository, 'getPhones');
  });

  afterEach(() => {
    getPhonesStub.restore();
  });

  describe('postOrder()', () => {
    it('should return parsed order with phones info and price', async () => {
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
      }]);

      const order = {
        customer: {
          name: 'pepe',
          surname: 'jaja',
          email: 'dasd',
        },
        phones: ['Iphone XS Max', 'Samsung Galaxy Note9'],
      };
      const result = await orders.postOrder(order);

      expect(result).to.eql({
        price: 1931,
        customer: {
          name: 'pepe',
          surname: 'jaja',
          email: 'dasd',
        },
        phones: [{
          id: 11,
          name: 'Iphone XS Max',
          description: 'Apple iPhone Xs Max 512GB',
          price: 1221,
          image: 'https://static.phonehouse.es/res/autoimg/202704_spc_200_176_qhigh_product.jpg',
        },
        {
          id: 12,
          name: 'Samsung Galaxy Note9',
          description: 'Samsung Galaxy Note9 512GB + 8GB RAM',
          price: 710,
          image: 'https://static.phonehouse.es/res/autoimg/154944_spc_200_176_qhigh_product.jpg',
        },
        ],
      });
    });
  });
});
