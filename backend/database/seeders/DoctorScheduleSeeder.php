<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DoctorScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $doctor_schedules = array(
            array(
                'doctor_id' => 1,
                'weekday' => 1,
                'duration' => 60,
                'start_time' => '8:00',
                'end_time' => '12:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'doctor_id' => 1,
                'weekday' => 3,
                'duration' => 60,
                'start_time' => '8:00',
                'end_time' => '12:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'doctor_id' => 1,
                'weekday' => 5,
                'duration' => 60,
                'start_time' => '8:00',
                'end_time' => '12:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'doctor_id' => 2,
                'weekday' => 2,
                'duration' => 30,
                'start_time' => '13:00',
                'end_time' => '15:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'doctor_id' => 2,
                'weekday' => 4,
                'duration' => 30,
                'start_time' => '13:00',
                'end_time' => '15:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'doctor_id' => 2,
                'weekday' => 6,
                'duration' => 30,
                'start_time' => '13:00',
                'end_time' => '15:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            )
        );

        DB::table('doctor_schedules')->insert($doctor_schedules);
    }
}
