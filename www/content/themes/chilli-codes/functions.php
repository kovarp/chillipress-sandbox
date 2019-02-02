<?php

/**
 * Theme settings
 */
new \Theme\Setup();
new \Theme\Post();

/**
 * Get SVG sprite URL
 */
function svg_sprite($svg) {
	return '<svg class="svg" role="presentation"><use xlink:href="' . get_stylesheet_directory_uri() . '/assets/img/sprite.svg#' . $svg . '" /></svg>';
}

/**
 * Components
 */
get_template_part('components/favicons');