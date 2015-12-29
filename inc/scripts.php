<?php
function ngpress_scripts() {

	wp_enqueue_style(
		'app-css',
		get_stylesheet_directory_uri() . '/dist/css/styles.css'
	);

	wp_enqueue_script(
		'app-js',
		get_stylesheet_directory_uri() . '/dist/js/scripts.js',
		array( 'jquery' )
	);

	wp_localize_script(
		'app-js',
		'App',
		array(
			'partials'         => trailingslashit( get_template_directory_uri() ) . 'templates/',
			'partial_relative' => str_replace(home_url( '' ), '', trailingslashit( get_template_directory_uri() ) ) . 'templates/',
			'api'              => '/wp-json/wp/v2',
			'title'            => get_bloginfo( 'name' ),
			'post_types'       => get_post_types(array('public' => true), 'objects'),
			'taxonomies'       => get_taxonomies(array('public' => true), 'objects')
		)
	);
}
add_action( 'wp_enqueue_scripts', 'ngpress_scripts' );