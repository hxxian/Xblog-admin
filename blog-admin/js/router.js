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

function loadArticleById(aid) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/article/info/' + aid,
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

function addOrUpdateArticle(data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/article',
			type: 'post',
			dataType: 'json',
			data: data,
			statusCode: {
				201: function() {
					resolve(1)
				},
				204: function() {
					resolve(2)
				}
			}
		})
	})
}

function loadArticleSnapshots(page) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/article/page/' + page,
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