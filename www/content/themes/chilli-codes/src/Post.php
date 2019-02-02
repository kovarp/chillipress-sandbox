<?php declare(strict_types=1);

namespace Theme;

class Post {
	public function __construct() {
		add_filter(
			'excerpt_length',
			array(
				$this,
				'excerptLength'
			),
			999
		);
		add_filter('excerpt_more', array($this, 'excerptMore'));
	}

	public function excerptLength() {
		return 25;
	}

	public function excerptMore() {
		return '...';
	}
}