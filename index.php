<!DOCTYPE html>
<html ng-app="app">
<head>
	<base href="/">
	<title><?php bloginfo( 'name' ) ?></title>
	<?php wp_head(); ?>
</head>
<body>

	<?php
	/**
	 * Include the Header
	 * We do this in PHP.
	 */
	get_template_part('partials/header')
	?>

	<header>
		<h1>
			<a href="<?php echo site_url(); ?>">AngularJS Demo Theme</a>
		</h1>
	</header>

	<app-partial src="partials/menu.html"></app-partial>

	<div ng-view></div>

	<footer>
		&copy; <?php echo date( 'Y' ); ?>
	</footer>

</body>
</html>