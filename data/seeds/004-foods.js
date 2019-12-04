exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE foods RESTART IDENTITY CASCADE")
    .then(function() {
      // Inserts seed entries
      return knex("foods").insert([
        {
          id: 1,
          fatsecret_food_id: 8362,
          food_name: "white bread",
          serving_desc: "a slice",
          metric_serving_amt: 1,
          metric_serving_unit: "a slice",
          retrieved_at: knex.fn.now(6),
          serving_id: 2,
          calories_kcal: 66,
          fat_g: 0.82,
          trans_fat_g: 0.82,
          saturated_fat_g: 0.17,
          monounsaturated_fat_g: 0.17,
          polyunsaturated_fat_g: 0.339,
          protein_g: 1.91,
          carbs_g: 12.65,
          sugar_g: 1.08,
          fiber_g: 0.6,
          sodium_mg: 170,
          vitamin_a_daily_pct: 0,
          vitamin_c_daily_pct: 0,
          iron_daily_pct: 5,
          calcium_daily_pct: 0
        },
        {
          id: 2,
          fatsecret_food_id: 8462,
          food_name: "cheese pizza",
          serving_desc: "a slice",
          metric_serving_amt: 1,
          metric_serving_unit: "a slice",
          retrieved_at: knex.fn.now(6),
          serving_id: 2,
          calories_kcal: 66,
          fat_g: 0.82,
          trans_fat_g: 0.82,
          saturated_fat_g: 0.17,
          monounsaturated_fat_g: 0.17,
          polyunsaturated_fat_g: 0.339,
          protein_g: 1.91,
          carbs_g: 12.65,
          sugar_g: 1.08,
          fiber_g: 0.6,
          sodium_mg: 170,
          vitamin_a_daily_pct: 0,
          vitamin_c_daily_pct: 0,
          iron_daily_pct: 5,
          calcium_daily_pct: 0
        },
        {
          id: 3,
          fatsecret_food_id: 8862,
          food_name: "chicken breast",
          serving_desc: "one",
          metric_serving_amt: 1,
          metric_serving_unit: "one",
          retrieved_at: knex.fn.now(6),
          serving_id: 2,
          calories_kcal: 66,
          fat_g: 0.82,
          trans_fat_g: 0.82,
          saturated_fat_g: 0.17,
          monounsaturated_fat_g: 0.17,
          polyunsaturated_fat_g: 0.339,
          protein_g: 1.91,
          carbs_g: 12.65,
          sugar_g: 1.08,
          fiber_g: 0.6,
          sodium_mg: 170,
          vitamin_a_daily_pct: 0,
          vitamin_c_daily_pct: 0,
          iron_daily_pct: 5,
          calcium_daily_pct: 0
        },
        {
          id: 4,
          fatsecret_food_id: 8372,
          food_name: "salmon",
          serving_desc: "1oz boneless",
          metric_serving_amt: 1,
          metric_serving_unit: "one",
          retrieved_at: knex.fn.now(6),
          serving_id: 2,
          calories_kcal: 66,
          fat_g: 0.82,
          trans_fat_g: 0.82,
          saturated_fat_g: 0.17,
          monounsaturated_fat_g: 0.17,
          polyunsaturated_fat_g: 0.339,
          protein_g: 1.91,
          carbs_g: 12.65,
          sugar_g: 1.08,
          fiber_g: 0.6,
          sodium_mg: 170,
          vitamin_a_daily_pct: 0,
          vitamin_c_daily_pct: 0,
          iron_daily_pct: 5,
          calcium_daily_pct: 0
        },
        {
          id: 5,
          fatsecret_food_id: 5735,
          food_name: "Roasted Potato",
          serving_desc: "1 small (1-3/4\\\" to 2-1/4\\\" dia, raw)",
          metric_serving_amt: 110.000,
          metric_serving_unit: "g",
          retrieved_at: knex.fn.now(6),
          serving_id: 21131,
          calories_kcal: 164,
          fat_g: 0.82,
          trans_fat_g: 7.70,
          saturated_fat_g: 0.990,
          monounsaturated_fat_g: 2.562,
          polyunsaturated_fat_g: 3.786,
          protein_g: 2.55,
          carbs_g: 22.07,
          sugar_g: 0.99,
          fiber_g: 2.7,
          sodium_mg: 111,
          vitamin_a_daily_pct: 0,
          vitamin_c_daily_pct: 0,
          iron_daily_pct: 6,
          calcium_daily_pct: 2
        }
      ]);
    });
};
