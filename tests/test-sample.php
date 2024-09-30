<?php

class TestSample extends WP_UnitTestCase
{

    function test_it_works()
    {
		echo '@TODELETE- testing is running ' . PHP_EOL;
		$this->assertTrue( true );
		$this->assertTrue(function_exists('do_action'));
    }
}
