function buildApiUrl(endpoint, slug, filters) {
	var url = App.api;
	url += '/' + endpoint;
	if(slug) {
		url += '/' + slug;
	}
	if(filters) {
		url += '/?'
		var i = 0;
		for (var k in filters) {
			i++;
			var filter = filters[k];
			if(i !== 1) {
				url += '&';
			}
			if(endpoint === 'pages' && k === 'slug') {
				k = 'name';
			}
			url += 'filter['+ k +']='+ filter;
		};
	}
	return url;
}