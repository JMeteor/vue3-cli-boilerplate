module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/assets/styles/abstracts/_mixins.scss";
					@import "@/assets/styles/abstracts/_functions.scss";
				`
			}
		}
	}
}
