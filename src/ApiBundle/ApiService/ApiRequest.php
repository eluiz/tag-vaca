<?php

namespace ApiBundle\ApiService;

use ApiBundle\ApiService\ApiResponseError;

class ApiRequest
{
    protected $client;
    protected $object;

    public function __construct($parameters)
    {
        $this->object = $parameters['object'];
        $this->client = new \GuzzleHttp\Client([
            'base_uri' => $parameters['base_uri'],
            'headers' => $parameters['headers']
        ]);
    }

    public function list($query=[])
    {
        $res = $this->client->get($this->object);
        return json_decode($res->getBody());
    }

    public function get($id)
    {   
        try{
            $res = $this->client->get($this->object.'/'.$id);
             return json_decode($res->getBody());
        }catch(Exception $e){
            echo 'aaa';
        }
    }

    public function save($obj)
    {
        // return throw new Exception("Error Processing Request", 1);
        
        // $res = $this->client->post($this->object, [], $obj);
        $res = $this->client->post($this->object, ['body'=>json_encode($obj)]);
        return $res;
    }

    public function modify($id, $obj)
    {
        // $res = $this->client->put($this->object.'/'.$id, [], $obj
        $res = $this->client->request('PUT', $this->object.'/'.$id, ['body'=>json_encode($obj)]);
        return $res;
    }

    public function delete($id)
    {
        $res = $this->client->delete($this->object.'/'.$id);
        return $res;
    }

    private function getQueryString($query)
    {
        $str = [];
        print_r($query);
        foreach($query as $k=>$v){
            foreach($v as $k2=>$v2){
                echo $k2;
            }
        }
    }

}
