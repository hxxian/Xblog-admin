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
					name: '文章',
					url: 'article-list.html',
					icon: 'glyphicon glyphicon-edit'
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
			],
			currPageIdx: 0,
			currPageUrl: 'dashboard.html'
		},
		methods: {
			menuSelect: function(idx) {
				this.currPageIdx = idx;
				this.currPageUrl = this.pages[idx].url;
			}
		}
	})
})
