const client = require("./client");

async function createUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `INSERT INTO users(username, password)
            VALUES($1, $2)
            ON CONFLICT (username) DO NOTHING
            RETURNING *
        `,
      [username, password]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
        WHERE id=$1
    `,
      [userId]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function loginUser(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
        WHERE username=$1
    `,
      [username]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser({ id, username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      UPDATE users
        SET username=$2, password=$3
        WHERE id=$1
        RETURNING *
    `,
      [id, username, password]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

// * Must delete Cart (orders_products) before using this function
async function deleteUser(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      DELETE from users
        WHERE id=$1
        RETURNING *
    `,
      [userId]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUser, getUser, updateUser, deleteUser, loginUser };
