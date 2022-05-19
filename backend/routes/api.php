<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\AppointmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', function (Request $request) {
        return $request->user();
    });
    Route::get('/doctor-schedules', [DoctorController::class, 'doctorSchedules']);
    Route::get('/doctors', [DoctorController::class, 'index']);
    Route::get('/appointments', [AppointmentController::class, 'index']);
    Route::get('/my-appointments', [AppointmentController::class, 'show']);
    Route::post('/appointments', [AppointmentController::class, 'create']);
    Route::delete('/appointment/{id}', [AppointmentController::class, 'destroy']);
});
