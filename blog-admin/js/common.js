var DEBUG = true;
var basePath = DEBUG ? "http://127.0.0.1:8181/" : "";

function loadArticleType() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/article/type',
			type: 'get',
			dataType: 'json',
			statusCode: {
				200: function(data) {
					resolve(data)
				}
			}
		})
	})
}