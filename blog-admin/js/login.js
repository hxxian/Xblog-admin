$(function() {
	var user = new Vue({
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
				$.ajax({
					url: basePath + 'admin/user/login',
					type: 'post',
					data: data,
					dataType: 'json',
					statusCode: {
						200: function(res) {
							console.log(res)
							console.log("======")
							
						}
					}
				})
			}
		}
	})
})