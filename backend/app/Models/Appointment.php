<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory;
    // use SoftDeletes;

    protected $fillable = [
        'appointment_date',
        'start_time',
        'end_time',
        'doctor_id',
        'user_id',
    ];

    public function users() {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

    public function doctors() {
        return $this->belongsTo('App\Models\Doctor', 'doctor_id');
    }
}
