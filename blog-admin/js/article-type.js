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
				layer.open({
					type: 1,
					title: "新增分类",
					offset: '200px',
					area: ['350px', '200px'],
					content: addTypeHtml
				});
			},
			saveType: function() {
				console.log(123)
				let that = this;
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
						}
					}
				})
			}
		}
	})
	
	vue.loadData();

})

var addTypeHtml = '';
// '<div class="add-type-box"> ' +
// '	<input v-model="typeName" class="form-control" placeholder="分类名..." /> ' +
// ' 	<button @click="saveType()" class="btn btn-success">保存</button> ' +
// '</div>';
