<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\URL;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if($this->isHttpException($exception)) {
            switch (intval($exception->getStatusCode())) {
                case 404:
                    return response()->view("app");
                    break;
                default:
                    return parent::render($request, $exception);
            }
        }
        elseif ($request->ajax()) {
            global $error_handler_default_error_message;
            $error = isset($error_handler_default_error_message) ? $error_handler_default_error_message : "Unable to process your request";
            return response()->json($error, 500);
        }
        else {
            return parent::render($request, $exception);
        }
    }
}