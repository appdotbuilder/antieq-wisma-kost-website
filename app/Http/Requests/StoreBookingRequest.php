<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
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
            'room_id' => 'required|exists:rooms,id',
            'guest_name' => 'required|string|max:255',
            'guest_email' => 'required|email|max:255',
            'guest_phone' => 'required|string|max:20',
            'guest_id_number' => 'nullable|string|max:50',
            'check_in_date' => 'required|date|after_or_equal:today',
            'check_out_date' => 'nullable|date|after:check_in_date',
            'booking_type' => 'required|in:monthly,daily',
            'special_requests' => 'nullable|string|max:1000',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'room_id.required' => 'Please select a room.',
            'room_id.exists' => 'The selected room is not available.',
            'guest_name.required' => 'Name is required.',
            'guest_email.required' => 'Email is required.',
            'guest_email.email' => 'Please provide a valid email address.',
            'guest_phone.required' => 'Phone number is required.',
            'check_in_date.required' => 'Check-in date is required.',
            'check_in_date.after_or_equal' => 'Check-in date must be today or later.',
            'check_out_date.after' => 'Check-out date must be after check-in date.',
            'booking_type.required' => 'Please select booking type.',
            'booking_type.in' => 'Invalid booking type selected.',
        ];
    }
}