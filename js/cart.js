var vm = new Vue({
	el:'#app',
	data:{
		productlist:[]
	},
	filters:{},
	mounted:function(){
		this.carView()
	},
	methods:{
		carView:function () {
			this.$http.get('data/cartData.json',{'id':123}).then(function (res) {

			})
		}
	}

})
