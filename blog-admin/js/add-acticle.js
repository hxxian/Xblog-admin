$(function() {

	var vue = new Vue({
		el: "#bloger",
		methods: {
			submitArticle: function() {
				let htmlValue = editor.getValue();
				console.log(htmlValue)
			}
		}
	})

	var editor = new Simditor({
		textarea: $('#editor'),
		toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', 'ol', 'ul',
			'blockquote', 'code', 'table', 'link', 'image', 'hr', 'indent', 'outdent', 'alignment'
		],
		pasteImage: true, //允许粘贴图片
		upload: {
			url: 'richtext_img_upload.do', //文件上传的接口地址
			params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
			fileKey: 'upload_file', //服务器端获取文件数据的参数名
			connectionCount: 3,
			leaveConfirm: '正在上传文件'
		}
	});
})
