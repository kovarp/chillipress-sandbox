<?php declare(strict_types = 1);

namespace Theme;

class Setup {
	public function __construct() {
		add_action('wp_enqueue_scripts', array($this, 'loadStyles'));
		add_action('wp_enqueue_scripts', array($this, 'loadScripts'));
		add_action('after_setup_theme', array($this, 'themeSupport'));
		add_action('init', array($this, 'registerMenus'));
	}

	public function loadStyles() {
		wp_enqueue_style( 'theme-styles', get_stylesheet_directory_uri() . '/assets/css/style.min.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/style.min.css') );
	}

	public function loadScripts() {
		// Remove wp-embed script
		wp_deregister_script( 'wp-embed' );

		// Load new jQuery version
		wp_deregister_script('jquery');
		wp_register_script( 'jquery', get_template_directory_uri() . '/assets/js/vendor/jquery-2.2.4.min.js', array(), '2.2.4', true );
		wp_enqueue_script( 'jquery' );

		wp_enqueue_script( 'theme-scripts', get_stylesheet_directory_uri() . '/assets/js/script.min.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/script.min.js'), true );
	}

	public function themeSupport() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		// Let WordPress manage the document title.
		add_theme_support('title-tag');

		// Add HTML5 support
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Adding Thumbnail basic support
		add_theme_support('post-thumbnails');
	}

	public function registerMenus() {
		register_nav_menus(
			array(
				'primary' => 'Hlavní menu'
			)
		);
	}
}