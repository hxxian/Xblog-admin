$(function() {
	let dashboard = new Vue({
		el: '#dashboard',
		data: {
			articleCount: 0,
			accessCount: 0,
			commentCount: 0,
			foundingDays: 0,
			latestComments: [],
			diaryContent: ""
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
			},
			addDiary: function() {
				saveDiary(this.diaryContent).then(res => {
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
