function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

/* layer弹出框提示 */
function layerSuccess(callback) {
	layer.msg('操作成功', {
		time: 0,
		btn: ['好的'],
		yes: function(index) {
			if (callback) {
				callback();
			}
			layer.close(index);
		}
	})
}

function layerFail() {
	layer.msg('操作失败', {
		time: 2000,
		icon: 2
	})
}

function deleteConfirm(callback) {
	layer.confirm('确定删除？', {
		btn: ['确定']
	}, function() {
		if (callback) {
			callback();
		}
	})
}

function setCookie(cname, cvalue, expireMinutes) {
	var d = new Date();
	d.setTime(d.getTime() + (expireMinutes * 60 * 1000 * 60));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

/**
 * 毫秒时间戳转
 * 
 * @param {Object} timestemp
 */
function formatDate(timestemp) {
	let date = new Date(timestemp);
	let y = date.getFullYear();
	let M = date.getMonth() + 1; // 注意js里的月要加1 
	let d = date.getDate();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	let arr = new Array(y, M, d, h, m, s);
	return arr;
}

/**
 * 获取时间格式化字符串
 * 
 * @param {Object} timestemp
 * @param {Object} needTime 是否需要时分秒部分
 */
function getformatDateStr(timestemp, needTime) {
	let d = formatDate(timestemp);
	let str = d[0] + "/" + appendZero(d[1]) + "/" + appendZero(d[2]);
	if (needTime) {
		str += " " + appendZero(d[3]) + ":" + appendZero(d[4]);
	}
	return str;
}

/**
 * 不足两位数字补零
 * 
 * @param {Object} obj
 */
function appendZero(obj) {
	if (obj < 10) {
		return "0" + "" + obj;
	}
	return obj;
}
