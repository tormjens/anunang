<?php
function anunang_scripts() {
	
	wp_enqueue_script(
		'app-js',
		get_stylesheet_directory_uri() . '/dist/js/scripts.js'
	);

	wp_localize_script(
		'app-js',
		'App',
		array(
			'partials'   => trailingslashit( get_template_directory_uri() ) . 'partials/',
			'api'        => '/wp-json/wp/v2',
			'title'		 => get_bloginfo( 'name' ),
			'post_types' => get_post_types(array('public' => true), 'objects'),
			'taxonomies' => get_taxonomies(array('public' => true), 'objects')
		)
	);
}
add_action( 'wp_enqueue_scripts', 'anunang_scripts' );