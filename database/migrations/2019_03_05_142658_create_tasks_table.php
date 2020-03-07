<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    public function up()
    {
        Schema::defaultStringLength(255);
        if (!Schema::hasTable('tasks')) {
            Schema::create('tasks', function (Blueprint $table) {
                $table->increments('id');
                $table->string('title');
                $table->unsignedInteger('project_id');
                $table->boolean('is_completed')->default(0);
                $table->timestamps();
            });
        }
    }

    public function down()
    {

    }
}