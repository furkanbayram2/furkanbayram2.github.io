var apiURL = 'https://erply-challenge.herokuapp.com/list?AUTH=fae7b9f6-6363-45a1-a9c9-3def2dae206d';

new Vue({
  el: '#app',

  data: {
    isShowingCart: false,
    isShowingDetail: false,
    isShowingShop: true,
    isShowingAdd: false,
    cart: {
      items: []
    },
    store: ['Estonia', 'Finland', 'All'],
    start: 0,
    limit: null,
    pagination: null,
    showItem: [],
    products: [],
  },

  created: function () {
    this.limit = parseInt(this.pagination),
      this.fetchData();
  },

  watch: {
    pagination: function () {
      this.limit = parseInt(this.pagination);

      if (this.limit != this.start && this.start > 0)
        this.start = parseInt(this.pagination);
      this.limit = this.start + parseInt(this.pagination);
    },

  },
  methods: {
    fetchData: function () {
      var self = this;
      $.get(apiURL, function (data) {
        self.products = data;
      });

    },

    showDetail: function (product) { //SHOW PRODUCT DETAIL
      this.showItem = [];
      this.showItem.push(product);
    },

    addProductToCart: function (product) {
      var cartItem = this.getCartItem(product);

      if (cartItem != null) {
        cartItem.quantity++;
      } else {
        this.cart.items.push({
          product: product,
          quantity: 1
        });
      }
      product.instock--;
    },
    getCartItem: function (product) {
      for (var i = 0; i < this.cart.items.length; i++) {
        if (this.cart.items[i].product.id === product.id) {
          return this.cart.items[i];
        }
      }
      return null;
    },
    increaseQuantity: function (cartItem) {
      cartItem.product.instock--;
      cartItem.quantity++;
    },
    decreaseQuantity: function (cartItem) {
      cartItem.quantity--;
      cartItem.product.instock++;

      if (cartItem.quantity == 0) {
        this.removeItemFromCart(cartItem);
      }
    },

    removeItemFromCart: function (cartItem) {
      var index = this.cart.items.indexOf(cartItem);

      if (index !== -1) {
        this.cart.items.splice(index, 1);
      }
    },

    checkout: function () {
      if (confirm('Are you sure that you want to purchase these products?')) {
        this.cart.items.forEach(function (item) {
          item.product.instock += item.quantity;
        });

        this.cart.items = [];
      }
    },

    paginate: function (direction) {
      if (direction === 'next') {
        this.start += parseInt(this.pagination);
        this.limit += parseInt(this.pagination);
      } else if (direction === 'previous') {
        this.limit -= parseInt(this.pagination);
        this.start -= parseInt(this.pagination);
      }
    },
  },

  computed: {
    cartTotal: function () {
      var total = 0;

      this.cart.items.forEach(function (item) {
        total += item.quantity * item.product.price;
      });

      return total;
    },

    filteredList() { //SEARCH PRODUCT
      return this.products.filter(products => {
        return products.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },

  filters: {
    paginate: function (array, start, limit) {
      return array.slice(start, limit);
    }
  },
});
