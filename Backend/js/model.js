// taskModel.js
const db = require('./db');

class Task {
  static async getAllTaak() {
    const [rows] = await db.query('SELECT * FROM taak');
    return rows;
  }

  static async createTaak(title, description, priority) {
    await db.query('INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)', [title, description, priority]);
  }

  // Voeg andere methoden toe afhankelijk van je behoeften
}

module.exports = Task;
