var DEBUG = true;
var basePath = DEBUG ? "http://127.0.0.1:8181/" : "https://www.hxxian.cn:448/xbloger/";

/**
 * 分页查询操作记录数据
 * 
 * @param {Object} page
 */
function listOpRecord(page) {
	return getJson('admin/site/snapshot/oprecord/' + page)
}

/**
 * 新增文章类别
 * 
 * @param {Object} data
 */
function saveArticleType(data) {
	return postRequest('admin/article/type', data);
}

/**
 * 删除文章类别
 * 
 * @param {Object} data
 */
function deleteArticleType(data) {
	return putRequest('admin/article/type/delete', data);
}

/**
 * 更新文章类别名
 * 
 * @param {Object} data
 */
function updateArticleTypeName(data) {
	return putRequest('admin/article/type/update', data);
}

/**
 * 发表说说
 * 
 * @param {Object} content
 */
function saveDiary(data) {
	return postRequest('admin/diary', data)
}

/**
 * 加载网站快照信息
 */
function getSiteSnapshot() {
	return getJson('admin/site/snapshot');
}

/**
 * 更新文章的发布状态
 * 
 * @param {Object} data
 */
function updateArticleShowState(data) {
	return putRequest('admin/article/show', data);
}

/**
 * 加载文章类别数据列表
 */
function loadArticleType() {
	return getJson('admin/article/type');
}

/**
 * 根据文章ID查询文章信息
 * 
 * @param {Object} aid
 */
function loadArticleById(aid) {
	return getJson('admin/article/info/' + aid);
}

/**
 * 新增文章
 * 
 * @param {Object} data
 */
function addArticle(data) {
	return postRequest('admin/article', data);
}

/**
 * 更新文章
 * 
 * @param {Object} data
 */
function updateArticle(data) {
	return putRequest('admin/article/update', data)
}

/**
 * 分页查询文章快照列表
 * 
 * @param {Object} page
 */
function loadArticleSnapshots(page) {
	return getJson('admin/article/page/' + page);
}

/**
 * 注销登录
 */
function logout() {
	return putRequest('admin/user/logout', {})
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

/* *********** */

function getJson(url) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + url,
			type: 'get',
			dataType: 'json',
			headers: {
				'Access-Token': getCookie('userToken')
			},
			statusCode: {
				200: function(res) {
					resolve(res);
				},
				404: function() {
					resolve(false);
				},
				403: function() {
					window.location = "login.html"
				}
			}
		})
	});
}

/**
 * post请求，用于新增数据
 * 
 * @param {Object} url
 * @param {Object} data
 */
function postRequest(url, data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + url,
			type: 'post',
			dataType: 'json',
			data: data,
			headers: {
				'Access-Token': getCookie('userToken')
			},
			statusCode: {
				201: function() {
					resolve(true)
				},
				401: function() {
					resolve(false);
				},
				403: function() {
					window.location.href = "login.html"
				},
				500: function() {
					resolve(false)
				}
			}
		})
	})
}

/**
 * put请求，用于更新数据
 * 
 * @param {Object} url
 * @param {Object} data
 */
function putRequest(url, data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + url,
			type: 'post',
			dataType: 'json',
			data: data,
			headers: {
				'Access-Token': getCookie('userToken')
			},
			statusCode: {
				204: function() {
					resolve(true)
				},
				403: function() {
					window.location.href = "login.html"
				},
				401: function() {
					resolve(false);
				},
				500: function() {
					resolve(false)
				}
			}
		})
	})
}
