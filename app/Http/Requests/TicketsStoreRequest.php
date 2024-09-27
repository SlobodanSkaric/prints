<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TicketsStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "tickets_number" => "required|string|max:55|unique:tickets,tickets_number",
            "pri_348810" => "integer",
            "pri_327120" => "integer",
            "pri_521342" => "integer",
            "commnets" => "string",
            "description" => "string"
        ];
    }
}
