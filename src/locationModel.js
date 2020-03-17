class Location {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS locations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      latitude NUMERIC NOT NULL,
      longitude NUMERIC NOT NULL)
      `;
    return this.dao.run(sql);
  }

  create(name, description, latitude, longitude) {
    const sql =
      'INSERT INTO locations (name, description, latitude, longitude) VALUES (?,?, ?, ? );';
    return this.dao.run(sql, [name, description, latitude, longitude]);
  }

  getAll() {
    return this.dao.all('SELECT * FROM locations;');
  }

  getWithId(id) {
    return this.dao.get('SELECT * FROM locations WHERE id = ?;', [id]);
  }

  delete(id) {
    return this.dao.get('DELETE FROM locations WHERE id = ?', [id]);
  }
}
module.exports = Location;
