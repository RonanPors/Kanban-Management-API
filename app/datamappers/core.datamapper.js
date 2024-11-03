export default class CoreDatamapper {

  tableName;

  constructor(client) {
    this.client = client;
  }

  /**
   * Finds a record by a specific key and value.
   * @param {string} key - The column name to search by.
   * @param {string|number} value - The value to search for.
   * @returns {Promise<Object>} The first row that matches the key and value.
   */
  async findByKey(key, value) {

    const query = `
      SELECT * 
      FROM ${this.tableName}
      WHERE
        ${key} = $1;
    `;

    const result = await this.client.query(query, [value]);

    return result.rows;
  }

  //FIXME: poursuivre avec les tests méthodes de base (findAll, create, update, delete)
  /**
 * Finds all records in the table.
 * @returns {Promise<Array>} An array of all rows.
 */
  async findAll() {
    const query = `SELECT * FROM ${this.tableName};`;
    const result = await this.client.query(query);
    return result.rows;
  }

  /**
 * Creates a new record in the table.
 * @param {Object} data - The data to insert.
 * @returns {Promise<Object>} The inserted row.
 */
  async create(data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');

    const query = `
    INSERT INTO ${this.tableName} (${keys.join(', ')})
    VALUES (${placeholders})
    RETURNING *;
  `;

    const result = await this.client.query(query, values);
    return result.rows[0];
  }

  /**
 * Updates a record in the table.
 * @param {number} id - The id of the record to update.
 * @param {Object} data - The data to update.
 * @returns {Promise<Object>} The updated row.
 */
  async update(id, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map((key, index) => `${key} = $${index + 2}`).join(', ');

    const query = `
    UPDATE ${this.tableName}
    SET ${setClause}
    WHERE id = $1
    RETURNING *;
  `;

    const result = await this.client.query(query, [id, ...values]);
    return result.rows[0];
  }

  /**
 * Deletes a record from the table.
 * @param {number} id - The id of the record to delete.
 * @returns {Promise<void>}
 */
  async delete(id) {
    const query = `
    DELETE FROM ${this.tableName}
    WHERE id = $1;
  `;

    await this.client.query(query, [id]);
  }
};
