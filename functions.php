<?php
$anunang_includes = [
  'inc/scripts.php',
  'inc/cpt.php',
  'inc/extras.php',
  'inc/api.php',
];

foreach ($anunang_includes as $file) {
  if (!$filepath = locate_template($file)) {
    trigger_error(sprintf(__('Error locating %s for inclusion', 'anunang'), $file), E_USER_ERROR);
  }

  require_once $filepath;
}
unset($file, $filepath);
