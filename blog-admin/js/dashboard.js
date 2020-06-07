$(function() {
	let dashboard = new Vue({
		el: '#dashboard',
		data: {
			articleCount: 0,
			accessCount: 0,
			commentCount: 0,
			foundingDays: 0,
			latestComments: [],
			diaryContent: "",
			currOpRecordPage: 1,
			opList: []
		},
		methods: {
			loadData: function() {
				getSiteSnapshot().then((res) => {
					if (res) {
						this.articleCount = res.articleCount;
						this.accessCount = res.accessCount;
						this.commentCount = res.commentCount;
						this.foundingDays = res.foundingDays;
						this.latestComments = res.latestComments;
						handleLatestCommentsTime(this.latestComments);
					}
				})

				listOpRecord(this.currOpRecordPage).then(res => {
					if (res && res.length > 0) {
						this.opList = res;
						for (var i = 0; i < this.opList.length; i++) {
							this.opList[i].createTime = getformatDateStr(this.opList[i].gmtCreate, true);
						}
					}
				})
			},
			preOpRecordPage: function() {
				if (this.currOpRecordPage <= 1) {
					layer.msg('已是第一页')
					return;
				}
				this.currOpRecordPage--;
				listOpRecord(this.currOpRecordPage).then(res => {
					if (res && res.length > 0) {
						this.opList = res;
						for (var i = 0; i < this.opList.length; i++) {
							this.opList[i].createTime = getformatDateStr(this.opList[i].gmtCreate, true);
						}
					}
				})
			},
			nextOpRecordPage: function() {
				listOpRecord(this.currOpRecordPage + 1).then(res => {
					if (res && res.length > 0) {
						this.currOpRecordPage++;
						this.opList = res;
						for (var i = 0; i < this.opList.length; i++) {
							this.opList[i].createTime = getformatDateStr(this.opList[i].gmtCreate, true);
						}
					} else {
						layer.msg('已是最后一页')
					}
				})
			},
			addDiary: function() {
				let d = {
					content: this.diaryContent
				}
				saveDiary(d).then(res => {
					if (res) {
						layer.msg('操作成功', {
							time: 2000,
							icon: 1
						})
					}
				})
			}
		}
	})

	dashboard.loadData();
})

function handleLatestCommentsTime(latestComments) {
	if (latestComments) {
		for (var i = 0; i < latestComments.length; i++) {
			let timeArray = formatDate(latestComments[i].commentTime);
			latestComments[i].timeFormat = timeArray[0] + "/" +
				appendZero(timeArray[1]) + "/" + appendZero(timeArray[2]);
		}
	}
}
