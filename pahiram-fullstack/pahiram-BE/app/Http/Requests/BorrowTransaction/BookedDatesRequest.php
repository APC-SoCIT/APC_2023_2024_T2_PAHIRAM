<?php

namespace App\Http\Requests\BorrowTransaction;

use App\Exceptions\RequestExtraPayloadMsg;
use App\Exceptions\RequestValidationFailedMsg;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class BookedDatesRequest extends FormRequest
{
    private $errorCode = 422;
    private $pending = null;
    public function rules(): array
    {
        return [
            'itemGroupId' => [
                'required',
                'exists:item_groups,id'
            ],

        ];
    }
    public function all($keys = null)
    {
        $data = parent::all($keys);
        $data['itemGroupId'] = $this->route('itemGroupId');

        return $data;
    }
    protected function passedValidation()
    {
        $request = $this->input();
        $rules = $this->rules();
        $errorCode = $this->errorCode;
        RequestExtraPayloadMsg::errorResponse($request, $rules, $errorCode);
    }
    public function failedValidation(Validator $validator)
    {
        $message = "Failed to cancel borrowing request";
        $errorCode = $this->errorCode;
        RequestValidationFailedMsg::errorResponse($validator, $message, $errorCode);
    }
}
