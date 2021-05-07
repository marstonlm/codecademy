<?
/*
portal-config.php 

Use to store all of our IT 162 configuration info

*/
//prevents data from being sent early
ob_start();

//this helps us avoid PHP date errors:
date_default_timezone_set('America/Los_Angeles');

//echo basename($_SERVER['PHP_SELF']);

define('THIS_PAGE',basename($_SERVER['PHP_SELF']));

//echo THIS_PAGE;

//die;

/* --------Color Palette ----------
#4E0250 - Russian Violet
#801A86 - Mardi Gras
#645986 - Dark Blue Gray
#8FE388 - Light Green 
#58BC82 - Medium Sea Green
*/



?>