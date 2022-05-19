<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Appointment;
use Illuminate\Support\Facades\Auth;
use Validator;

class AppointmentController extends BaseController
{
    public function index(Request $request) {
        $appointments = Appointment::all();
        return $this->sendResponse($appointments, 'Get data successfully.');
    }

    public function show(Request $request) {
        $user = Auth::user();
        $appointments = Appointment::where('user_id', $user->id)->with('users', 'doctors')->get();
        return $this->sendResponse($appointments, 'Get data successfully.');
    }

    public function create(Request $request) {
        $user = Auth::user();
        $validator = Validator::make($request->all(), [
            'appointment_date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'doctor_id' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $appointment = Appointment::where('appointment_date', $request->appointment_date)
                                    ->where('start_time', $request->start_time)
                                    ->where('end_time', $request->end_time)
                                    ->where('doctor_id', $request->doctor_id)
                                    ->get();

        if(count($appointment) > 0) {
            $response = [
                'success' => false,
                'data'    => $appointment,
                'message' => 'Appointment already exist.',
            ];
            return response()->json($response);
        }

        $input = $request->all();
        $input['user_id'] = $user->id;
        $data = Appointment::create($input);
        $success['appointment'] =  $data;
        $success['appointments'] =  Appointment::all();

        return $this->sendResponse($success, 'Make and appointment successfully.');
    }

    public function destroy(Request $request, $id) {
        $appointment = Appointment::find($id);

        if ($appointment->delete()) {
            $user = Auth::user();
            $appointments = Appointment::where('user_id', $user->id)->with('users', 'doctors')->get();
            $success['appointments'] = $appointments;
            return $this->sendResponse($success, 'Delete appointment successfully.');
        }
        $response = [
            'success' => false,
            'data'    => $appointment,
            'message' => 'Can not delete appointment.',
        ];
        return response()->json($response);
    }
}
