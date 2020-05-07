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
					name: '文章列表',
					url: 'article-list.html',
					icon: 'glyphicon glyphicon-file'
				},
				{
					name: '评论',
					url: 'dashboard.html',
					icon: 'glyphicon glyphicon-comment'
				},
				{
					name: '头像管理',
					url: 'dashboard.html',
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
			}
		}
	})
})
