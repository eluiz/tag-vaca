<?php

namespace ApiBundle\ApiService;

class ApiResponseError
{
	private $status;
	
	public ResponseError($status, $message = null)
	{
		$this->status = $status;

	}
}