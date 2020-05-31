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


function setCookie(cname, cvalue, expireMinutes) {
	var d = new Date();
	d.setTime(d.getTime() + (expireMinutes * 60 * 1000));
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
