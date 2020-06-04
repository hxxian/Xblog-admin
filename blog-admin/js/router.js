var DEBUG = true;
var basePath = DEBUG ? "http://127.0.0.1:8181/" : "";

/**
 * 发表说说
 * 
 * @param {Object} content
 */
function saveDiary(content) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/diary',
			type: 'post',
			dataType: 'json',
			data: {
				content: content
			},
			statusCode: {
				201: function() {
					resolve(true);
				},
				401: function() {
					resolve(false);
				}
			}
		})
	});
}

/**
 * 加载网站快照信息
 */
function getSiteSnapshot() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/site/snapshot',
			type: 'get',
			dataType: 'json',
			statusCode: {
				200: function(res) {
					resolve(res);
				},
				404: function() {
					resolve(false);
				}
			}
		})
	});
}

/**
 * 管理员执行登录
 * 
 * @param {Object} data
 */
function login(data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/user/login',
			type: 'post',
			data: data,
			dataType: 'json',
			statusCode: {
				200: function(res) {
					resolve(res);
				},
				404: function() {
					resolve(false);
				}
			}
		})
	})
}

/**
 * 更新文章的发布状态
 * 
 * @param {Object} data
 */
function updateArticleShowState(data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/article/show',
			type: 'post',
			dataType: 'json',
			data: data,
			statusCode: {
				204: function() {
					resolve()
				}
			}
		})
	})
}

/**
 * 加载文章类别数据列表
 */
function loadArticleType() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/article/type',
			type: 'get',
			headers: {
				'Access-Token': "ajslgjlksjgkldjklfgjsdfg"
			},
			dataType: 'json',
			statusCode: {
				200: function(data) {
					resolve(data)
				}
			}
		})
	})
}

/**
 * 根据文章ID查询文章信息
 * 
 * @param {Object} aid
 */
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

/**
 * 新增或更新文章信息
 * 
 * @param {Object} data
 */
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

/**
 * 分页查询文章快照列表
 * 
 * @param {Object} page
 */
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
