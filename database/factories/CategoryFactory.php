<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use Illuminate\Support\Str;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title      = $this->faker->sentence($this->faker->numberBetween(1, 4));
        $slug       = Str::slug($title);

        return [
            'name'         => $title,    
            'slug'          => $slug,
            'description'   => $this->faker->sentence(25),
        ];
    }
}