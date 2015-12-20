<?php

/**
 * Prepare term
 * @param  WP_REST_Response $response
 * @param  WP_Term $term
 * @param  WP_REST_Request $request
 * @return WP_REST_Response
 */
function anunang_api_prepare_term( $response, $term, $request ) {
	$args = array(
		'tax_query' => array(
			array(
				'taxonomy' => $term->taxonomy,
				'field' => 'slug',
				'terms' => $term->slug
			)
		),
		'posts_per_page' => 5
	);
	$posts = get_posts( $args );
	$posts_arr = array();
	foreach ( $posts as $p ) {
		$rest_post = new WP_REST_Posts_Controller($p->post_type);
		$posts_arr[] = $rest_post->prepare_item_for_response($p, $request)->data;
	}
	$response->data['posts'] = $posts_arr;
	return $response;
}
add_filter( 'rest_prepare_term', 'anunang_api_prepare_term', 10, 3 );

/**
 * Prepare posts
 * @param  WP_REST_Response $response
 * @param  WP_Post $post
 * @param  WP_REST_Request $request
 * @return WP_REST_Response
 */
function anunang_api_prepare_post( $response, $post, $request ) {

	// add categories
	$terms = wp_get_post_terms( $post->ID, 'category' );
	foreach($terms as $term) {
		$response->data['category'][] = $term;
	}

	return $response;
}
add_filter( 'rest_prepare_post', 'anunang_api_prepare_post', 10, 3 );