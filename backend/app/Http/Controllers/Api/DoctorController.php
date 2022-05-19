<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Doctor;
use App\Models\DoctorSchedule;

class DoctorController extends BaseController
{
    public function index(Request $request) {
        $doctors = Doctor::all();
        return $this->sendResponse($doctors, 'Get data successfully.');
    }

    public function doctorSchedules(Request $request) {
        $doctor_schedule = DoctorSchedule::all();
        return $this->sendResponse($doctor_schedule, 'Get data successfully.');
    }
}
