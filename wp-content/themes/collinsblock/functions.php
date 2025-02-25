<?php

function custom_blocks_main_nav_block_init()
{
    register_block_type(__DIR__ . '/build/main-nav');
    register_block_type(__DIR__ . '/build/instructor-list');
}
add_action('init', 'custom_blocks_main_nav_block_init');
