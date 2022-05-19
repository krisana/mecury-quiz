<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = array(
            array(
                'name' => 'นายกร',
                'email' => 'korn@medcury.com',
                'phone' => '0810000001',
                'pin_code' => '111111',
                'password' => Hash::make('111111'),
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'name' => 'นายนก',
                'email' => 'nok@medcury.com',
                'phone' => '0810000002',
                'pin_code' => '222222',
                'password' => Hash::make('222222'),
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'name' => 'นายตูน',
                'email' => 'toon@medcury.com',
                'phone' => '0810000003',
                'pin_code' => '333333',
                'password' => Hash::make('333333'),
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
            array(
                'name' => 'นายหมาย',
                'email' => 'mhay@medcury.com',
                'phone' => '0810000004',
                'pin_code' => '444444',
                'password' => Hash::make('444444'),
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ),
        );

        foreach ($users as $key => $user) {
            User::create($user);
        }
    }
}
