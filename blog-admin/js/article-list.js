$(function() {
	var vue = new Vue({
		el: "#bloger",
		data: {
			articleList: []
		},
		methods: {
			loadData: function() {
				let that = this;
				layer.load(3);
				loadArticleSnapshots(1).then((data) => {
					layer.closeAll('loading');
					that.articleList = data;
				});
			},
			editArticle: function(aid) {
				var index = layer.open({
					type: 2,
					content: 'add-article.html?aid=' + aid,
					area: ['1000px', '1000px'],
					fixed: false,
					maxmin: true
				});
				layer.full(index);
			}
		}
	})

	vue.loadData();
})
