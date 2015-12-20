<?php

function register_people_post_type() {

  $labels = array(
    'name'                => __( 'Personer', 'roots' ),
    'singular_name'       => __( 'Person', 'roots' ),
    'menu_name'           => __( 'Personer', 'roots' ),
    'name_admin_bar'      => __( 'Personer', 'roots' ),
    'parent_item_colon'   => __( 'Foreldreperson:', 'roots' ),
    'all_items'           => __( 'Alle personer', 'roots' ),
    'add_new_item'        => __( 'Legg til ny person', 'roots' ),
    'add_new'             => __( 'Legg til ny', 'roots' ),
    'new_item'            => __( 'Ny person', 'roots' ),
    'edit_item'           => __( 'Endre person', 'roots' ),
    'update_item'         => __( 'Oppdater person', 'roots' ),
    'view_item'           => __( 'Vis person', 'roots' ),
    'search_items'        => __( 'Søk etter person', 'roots' ),
    'not_found'           => __( 'Ingen personer funnet', 'roots' ),
    'not_found_in_trash'  => __( 'Ingen personer funnet i papirkurven', 'roots' ),
  );
  $args = array(
    'label'               => __( 'Personer', 'roots' ),
    'description'         => __( 'Beskrivelse', 'roots' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'editor' ),
    'taxonomies'          => array(  ),
    'hierarchical'        => true,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'menu_position'       => 5,
    'show_in_admin_bar'   => true,
    'show_in_nav_menus'   => true,
    'can_export'          => true,
    'has_archive'         => 'personer',
    'rewrite'             => array( 'slug' => 'person' ),
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'post',
    'show_in_rest'       => true,
    'rest_base'          => 'persons',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
  );
  register_post_type( 'people', $args );

}
add_action( 'init', 'register_people_post_type', 0 );