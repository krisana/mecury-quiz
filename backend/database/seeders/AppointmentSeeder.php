<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $appointments = array(
            array(
                'doctor_id' => 1,
                'user_id' => 1,
                'appointment_date' => '2022-05-23',
                'start_time' => '8:00',
                'end_time' => '9:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'doctor_id' => 2,
                'user_id' => 3,
                'appointment_date' => '2022-05-28',
                'start_time' => '14:00',
                'end_time' => '14:30',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'doctor_id' => 1,
                'user_id' => 4,
                'appointment_date' => '2022-05-27',
                'start_time' => '9:00',
                'end_time' => '10:00',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
        );

        DB::table('appointments')->insert($appointments);
    }
}
