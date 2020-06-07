$(function() {
	var vue = new Vue({
		el: "#bloger",
		data: {
			typeName: '',
			typeList: [],
			currTypeName: '',
			currTypeId: 0
		},
		methods: {
			loadData: function() {
				loadArticleType().then((data) => {
					this.typeList = data;
					for (var i = 0; i < this.typeList.length; i++) {
						let dates = formatDate(this.typeList[i].gmtCreate);
						this.typeList[i].createTime = dates[0] + "/" + dates[1] + "/" + dates[2];
					}
				})
			},
			showAddType: function() {
				this.showAddDialog = true;
				let that = this;
				layer.open({
					type: 1,
					title: "新增分类",
					offset: '200px',
					area: ['350px', '200px'],
					content: $(".add-type-box-layer")
				});
			},
			showUpdateType: function(id, name) {
				this.currTypeId = id;
				this.currTypeName = name;
				layer.open({
					type: 1,
					title: "修改分类名",
					offset: '200px',
					area: ['350px', '200px'],
					content: $(".update-type-box-layer")
				})
			},
			saveType: function() {
				let that = this;
				layer.closeAll();
				let d = {
					typeName: that.typeName
				}
				saveArticleType(d).then(res => {
					layerSuccess(() => {
						that.loadData();
					});
				})
			},
			updateType: function() {
				let d = {
					typeId: this.currTypeId,
					typeName: this.currTypeName
				}
				let that = this;
				layer.closeAll();
				updateArticleTypeName(d).then(res => {
					if (res) {
						layerSuccess(() => {
							that.loadData();
						});
					}
				})
			},
			deleteType: function(typeId) {
				let that = this;

				deleteConfirm(() => {
					let d = {
						typeId: typeId
					}
					deleteArticleType(d).then(res => {
						if (res) {
							layerSuccess(() => {
								that.loadData();
							});
						} else {
							layerFail();
						}
					})
				})

			}
		}
	})

	vue.loadData();

})
