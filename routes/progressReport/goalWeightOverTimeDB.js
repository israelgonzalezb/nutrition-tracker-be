const { db: pgPromiseDb } = require("../../data/pg-promise.js");

const goalWeightOverTime = async (user_id, time_zone, goal_start_date, goal_end_date) => {
  //calculates the actual_weight_kg in force at a given observation_date within the date range from "goal start date" to "goal end date"
  const queryString = require("./sql/goal_weights_over_time")(user_id, time_zone, goal_start_date, goal_end_date);
  return await pgPromiseDb.any(queryString);
};

module.exports = goalWeightOverTime;
