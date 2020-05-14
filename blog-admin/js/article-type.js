$(function() {
	var vue = new Vue({
		el: "#bloger",
		methods: {
			addType: function() {
				layer.open({
					type: 1,
					title: "新增分类",
					offset:  '200px',
					area: ['350px', '200px'],
					content: addTypeHtml
				});
			}
		}
	})

})

var addTypeHtml = 
	'<div class="add-type-box"> ' +
	'	<input class="form-control" placeholder="分类名..." /> ' +
	' 	<button class="btn btn-success">保存</button> ' +
	'</div>';