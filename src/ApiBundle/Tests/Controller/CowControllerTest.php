<?php

namespace ApiBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CowControllerTest extends WebTestCase
{
    public function testListCows()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/api/cows');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());

    }

    public function testSaveCows()
    {
        $client = static::createClient();
        $cow = [
            'weight'=> 200,
            'age'=> 15,
            'price'=> 950
        ];
        $crawler = $client->request('post', '/api/cows', [], [], [], json_encode($cow));

        $this->assertEquals(201, $client->getResponse()->getStatusCode());
    }
}
