$(function() {
	let dashboard = new Vue({
		el: '#dashboard',
		data: {
			articleCount: 0,
			accessCount: 0,
			commentCount: 0,
			foundingDays: 0
		},
		methods: {
			loadData: function() {
				getSiteSnapshot().then((res) => {
					if (res) {
						this.articleCount = res.articleCount;
						this.accessCount = res.accessCount;
						this.commentCount = res.commentCount;
						this.foundingDays = res.foundingDays;
					}
				})
			}
		}
	})
	
	dashboard.loadData();
})