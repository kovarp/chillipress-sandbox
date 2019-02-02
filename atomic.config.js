module.exports = {
	breakPoints: {
		'xs': '@media(max-width:575px)',
		'sm': '@media(min-width:576px) and (max-width:767px)',
		'md': '@media(min-width:768px) and (max-width:991px)',
		'lg': '@media(min-width:992px) and (max-width:1199px)',
		'xl': '@media(min-width:1200px)',
		'smUp': '@media(min-width:576px)',
		'mdUp': '@media(min-width:768px)',
		'lgUp': '@media(min-width:992px)',
		'xlUp': '@media all and (min-width:1200px)',
		'xsDown': '@media all and (max-width:575px)',
		'smDown': '@media(max-width:767px)',
		'mdDown': '@media(max-width:991px)',
		'lgDown': '@media(max-width:1199px)',
		'xlDown': '@media all'
	},
	classNames: ['D(n)']
};