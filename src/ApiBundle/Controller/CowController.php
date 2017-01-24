<?php

namespace ApiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;


class CowController extends Controller
{
    /**
     * @Route("/cows")
     * @Method({"GET"})
     */
    public function listCowsAction(Request $request)
    {
        $query = $request->query->all();
        $apiRequest = $this->get('api.cows');
        $res = $apiRequest->list($query);
        return new JsonResponse($res);
    }

    /**
     * @Route("/cows/{id}")
     * @Method({"GET"})
     */
    public function getCowAction($id)
    {
        $apiRequest = $this->get('api.cows');
        $res = $apiRequest->get($id);
        return new JsonResponse($res);
    }

    /**
     * @Route("/cows")
     * @Method({"POST"})
     */
    public function saveCowAction(Request $request)
    {
        $cow = json_decode($request->getContent());

        $ApiRequest = $this->get('api.cows');
        $res = $ApiRequest->save($cow);
        return new JsonResponse($res);
    }

    /**
     * @Route("/cows/{id}")
     * @Method({"PUT"})
     */
    public function modifyCowAction(Request $request, $id)
    {
        $cow = json_decode($request->getContent());

        $ApiRequest = $this->get('api.cows');
        $res = $ApiRequest->modify($id, $cow);
        return new JsonResponse($res);
    }

    /**
     * @Route("/cows/{id}")
     * @Method({"DELETE"})
     */
    public function deleteCowAction($id)
    {
        $ApiRequest = $this->get('api.cows');
        $res = $ApiRequest->delete($id);
        return new JsonResponse($res);
    }
}
