$(function() {
	let indexPage = new Vue({
		el: '#bloger-admin',
		data: {
			pages: [
				{
					name: '仪表盘',
					url: 'dashboard.html',
					icon: 'glyphicon glyphicon-dashboard'
				},
				{
					name: '文章分类',
					url: 'article-type.html',
					icon: 'glyphicon glyphicon-th-list'
				},
				{
					name: '文章列表',
					url: 'article-list.html',
					icon: 'glyphicon glyphicon-file'
				},
				{
					name: '评论',
					url: 'comment-list.html',
					icon: 'glyphicon glyphicon-comment'
				},
				{
					name: '头像管理',
					url: 'avatar-manager.html',
					icon: 'glyphicon glyphicon-fire'
				},
				{
					name: '写文章',
					url: 'add-article.html',
					icon: 'glyphicon glyphicon-edit'
				}
			],
			currPageIdx: 0,
			currPageUrl: 'dashboard.html',
			currPageName: '仪表盘'
		},
		methods: {
			menuSelect: function(idx) {
				this.currPageIdx = idx;
				this.currPageUrl = this.pages[idx].url;
				this.currPageName = this.pages[idx].name;
			},
			doLogout: function() {
				logout().then(() => {
					window.location = "login.html"
				})
			}
		}
	})
})
