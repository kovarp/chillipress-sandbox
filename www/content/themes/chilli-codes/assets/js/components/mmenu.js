/**
 * Mobile navigation
 */
$(function () {
	$('#offcanvas-menu').each(function() {
		var menu = $(this);

		menu.mmenu({
			navbars: [{
				content: ['prev', 'title', 'close']
			}],
			navbar:  {
				title: menu.data('navbar-title')
			},
			'extensions': [
				'pagedim-black',
				'position-front'
			]
		});
	});
});