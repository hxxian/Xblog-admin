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
