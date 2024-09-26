const db = require("../../data/dbConfig");

function find() {
  return db("users as u").select("u.id", "u.username").orderBy("u.id");
}

function findBy(filter) {
  return db("users as u")
    .select("u.id", "u.username", "u.password")
    .where(filter);
}

function findById(user_id) {
  return db("users as u")
    .select("u.id", "u.username")
    .where("u.id", user_id)
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}
module.exports = {
  add,
  find,
  findBy,
  findById,
};
