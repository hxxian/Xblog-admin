$(function() {

	var articleId = getQueryVariable('aid');
	console.log(articleId);

	var vue = new Vue({
		el: "#bloger",
		data: {
			selectedTypeId: '',
			articleTitle: '',
			digest: '',
			typeList: []
		},
		methods: {
			loadData: function() {
				let that = this;
				loadArticleType().then(data => {
					this.typeList = data
				});

				if (articleId) {
					loadArticleById(articleId).then((article) => {
						that.articleTitle = article.title;
						that.digest = article.digest;
						editor.setValue(article.content);
					})
				}
			},
			submitArticle: function() {
				let htmlValue = editor.getValue();
				console.log(this.selectedTypeId);
				console.log(this.articleTitle);
				console.log(this.digest);
				console.log(htmlValue);
				let data = {
					'typeId': this.selectedTypeId,
					'title': this.articleTitle,
					'digest': this.digest,
					'content': htmlValue
				}
				addOrUpdateArticle(data).then((code) => {
					if (code == 1) {
						layerSuccess()
					} else if (code == 2) {
						// 保存成功
					}
				});
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

	vue.loadData();
})
