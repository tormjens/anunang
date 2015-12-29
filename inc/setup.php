<?php

function ngpress_setup_theme() {

	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5' );

	register_nav_menu( 'primary', __('Primary Menu', 'ngpress') );

}

add_action( 'after_setup_theme', 'ngpress_setup_theme' );