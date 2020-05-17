$(function() {
	var vue = new Vue({
		el: "#bloger",
		data: {
			typeName: '',
			typeList: []
		},
		methods: {
			loadData: function() {
				console.log("load data...")
				loadArticleType().then((data) => {
					this.typeList = data;
				})
			},
			showAddType: function() {
				this.showAddDialog = true;
				let that = this;
				layer.open({
					type: 1,
					title: "新增分类",
					offset: '200px',
					area: ['350px', '200px'],
					content: $(".add-type-box-layer")
				});
			},
			saveType: function() {
				let that = this;
				layer.closeAll();
				$.ajax({
					url: basePath + 'admin/article/type',
					type: 'post',
					data: {
						typeName: that.typeName
					},
					dataType: 'json',
					statusCode: {
						201: function() {
							console.log("=======")
							layerSuccess(() => {
								that.loadData();
							});
						}
					}
				})
			}
		}
	})

	vue.loadData();

})

