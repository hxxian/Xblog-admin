$(function() {
	let bloger = new Vue({
		el: "#bloger",
		data: {
			username: "",
			password: ""
		},
		methods: {
			doLogin: function() {
				let data = {
					'username': this.username,
					'password': this.password
				}
				// login(data).then(res => {
				// 	console.log(res)
				// 	setCookie('userToken', res, 30);
				// })
				console.log(getCookie('userToken'))
			}
		}
	})
})