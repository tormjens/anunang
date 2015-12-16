<?php
function no_redirect_guess_404_permalink( $header ){
    global $wp_query;
    $wp_query->query_vars['name'] = '';
    // unset( $wp_query->query_vars['name'] );

    $header = 'HTTP/1.1 200 OK';

    return $header;
}

add_filter( 'status_header', 'no_redirect_guess_404_permalink' );