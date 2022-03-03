var vm = new Vue({
	el: "#demo",
	data:{
		cart:{
			item:[]
		},
		iscart:false,
		products:[
		{

			id:1,
			name:'MacBook Pro (15 inch)',
			description:'This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...',
			price:5000,
			inStock:50

		},
		 {
                id: 2,
                name: 'Samsung Galaxy Note 7',
                description: 'Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...',
                price: 299,
                inStock: 755
            },
            {
                id: 3,
                name: 'HP Officejet 5740 e-All-in-One-printer',
                description: 'This one might not last for so long, but hey, printers never work anyways, right?',
                price: 149,
                inStock: 5
            },
            {
                id: 4,
                name: 'iPhone 7 cover',
                description: 'Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?',
                price: 49,
                inStock: 15
            },
            {
                id: 5,
                name: 'iPad Pro (9.7 inch)',
                description: 'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
                price: 599,
                inStock: 0
            },
            {
                id: 6,
                name: 'OnePlus 3 cover',
                description: 'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!',
                price: 19,
                inStock: 81
            }


		]
	},

	methods:{
		addproducts: function(product) {
            var cartItem = this.getCart(product);

            if (cartItem != null) {
                cartItem.quantity++;
            } else {
                this.cart.item.push({
                    products: product,
                    quantity: 1
                });
                
            }
            product.inStock--;


        },
			getCart:function(products){
				for (var i=0; i <this.cart.item.length; i++) {
					if (this.cart.item[i].products.id==products.id) {
						return this.cart.item[i];
					}
					
				}
				return null;

			},
			increasequantity:function(cartItem){
				if (!cartItem.products.inStock-- == 0) {
					cartItem.products.inStock--;
					cartItem.quantity++;
				}else{
					
				alert('There are not more products in inStock');

				}

			},
			decrease:function(cartItem){
				cartItem.quantity--;
				cartItem.products.inStock++;
				if (cartItem.quantity==0) {
					this.remove1(cartItem);
				}

			},
			remove1:function(cartItem){
				var index=this.cart.item.indexOf(cartItem);
				if (index !==-1) {
					this.cart.item.splice(index,1);
				}

			}
	},
	computed:{
		total:function(){
			var total=0;
			this.cart.item.forEach(function(item){
				total+=item.quantity*item.products.price;

			});
			return total;
		},

		grandtotal:function(total){
			return add(total);

		}

	},
	filters:{
		currency:function(value){
			var formatter =Intl.NumberFormat('en-us',{
				style:'currency',
				currency:'USD',
				minimumFractionDigits:0


			});
			return formatter.format(value);

		}

	}

	
})