$(function() {
	// 未授权访问被重定向会登录页时，加上下面几行代码，不让登录页嵌套在iframe中
	if (window != window.top) {
		window.top.location = location;
	}

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
				login(data).then(res => {
					if (res) {
						setCookie('userToken', res.token, 30);
						window.location.href = './index.html'
					} else {
						layer.msg('用户名或密码错误');
					}
				})
			}
		}
	})
})
