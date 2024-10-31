import 'dotenv/config';

import pg from 'pg';

/* const { Pool } = pg;

const pool = new Pool({
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

let queryStr = ``;

async function insertLists() {
  // Delete all rows from the table and restart the auto increment
  await pool.query('TRUNCATE TABLE "list" RESTART IDENTITY CASCADE');

  //Prepare the query who contains the data to be inserted
  queryStr = `
    INSERT INTO "list"
    (
      "title",
      "position"
    )
    VALUES
      (
        'Work',
        1
      ),
      ('Home', 2),
      ('Personal', 3),
      ('Shopping', 4),
      ('Movies', 5);
    RETURNING title
  `;

  //Send the query to the database for creating the data with queryStr
  const result = await pool.query(queryStr);
  return result;
};

async function insertTasks() {
  // Delete all rows from the table and restart the auto increment
  await pool.query('TRUNCATE TABLE "card" RESTART IDENTITY CASCADE');

  //Prepare the query who contains the data to be inserted
  queryStr = `
    INSERT INTO "card"
    (
      "position",
      "content",
      "color",
      "list_id"
    )
    VALUES
    (
      1,
      'Create a new project',
      '#FF0000',
      1
    ),
    (
      2,
      'Update the README.md',
      '#FF0000',
      1
    ),
    (
      3,
      'Finish the project',
      '#FF0000',
      1
    ),
    (
      1,
      'Buy some milk',
      '#FF0000',
      2
    ),
    (
      2,
      'Pay the bills',
      '#FF0000',
      2
    ),
    (
      1,
      'Go to the gym',
      '#FF0000',
      3
    ),
    (
      2,
      'Read a book',
      '#FF0000',
      3
    ),
    (
      1,
      'Buy a new phone',
      '#FF0000',
      4
    ),
    (
      2,
      'Buy a new laptop',
      '#FF0000',
      4
    ),
    (
      1,
      'Watch a movie',
      '#FF0000',
      5
    ),
    (
      2,
      'Watch a TV show',
      '#FF0000',
      5
    )
    RETURNING id
  `;

  //Send the query to the database for creating the data with queryStr
  const result = await pool.query(queryStr);
  return result;
};

async function insertTags() {
  // Delete all rows from the table and restart the auto increment
  await pool.query('TRUNCATE TABLE "tag" RESTART IDENTITY CASCADE');

  // Prepare the query who contains the data to be inserted
  queryStr = `
    INSERT INTO "tag"
    (
      "name",
      "color"
    )
    VALUES
    (
      'Important',
      '#FF0000'
    ),
    (
      'Urgent',
      '#FF0000'
    ),
    (
      'Personal',
      '#FF0000'
    ),
    (
      'Work',
      '#FF0000'
    )
    RETURNING id
    `;

  // Send the query to the database for creating the data with queryStr
  const result = await pool.query(queryStr);
  return result;
};

async function insertTasksHasTags() {
  // Delete all rows from the table and restart the auto increment
  await pool.query('TRUNCATE TABLE card_has_tag RESTART IDENTITY CASCADE');

  // Prepare the query who contains the data to be inserted
  queryStr = `
    INSERT INTO card_has_tag
    (
      card_id,
      tag_id
    )
    VALUES
    (
      1,
      1
    ),
    (
      2,
      2
    ),
    (
      3,
      3
    ),
    (
      4,
      4
    ),
    (
      5,
      1
    ),
    (
      6,
      2
    ),
    (
      7,
      3
    ),
    (
      8,
      4
    ),
    (
      9,
      1
    ),
    (
      10,
      2
    ),
    (
      11,
      3
    )
    RETURNING id
  `;

  // Send the query to the database for creating the data with queryStr
  const result = await pool.query(queryStr);
  return result;
};

(async () => {
  try {
    await insertLists();
    await insertTasks();
    await insertTags();
    await insertTasksHasTags();

    console.log('Seeding completed');
  } catch (error) {
    console.error('Error on seeding', error);
    } finally {
      await pool.end();
      }
      })();
      */

//! Refactoring the code above to a class

const config = {
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

class Seeder {
  constructor(config) {
    const { Pool } = pg;

    this.pool = new Pool(config);
    this.queryStr = '';
  }

  async insertLists() {
    await this.pool.query('TRUNCATE TABLE "list" RESTART IDENTITY CASCADE');

    this.queryStr = `
      INSERT INTO "list" 
      (
        "title",
        "position"
      )
      VALUES
        (
          'Work', 
          1
        ),
        (
          'Home', 
          2
        ),
        (
          'Personal', 
          3
        ),
        (
          'Shopping',
          4
        ),
        (
          'Movies',
          5
        )
      RETURNING title
    `;

    const result = await this.pool.query(this.queryStr);
    return result;
  }

  async insertTasks() {
    await this.pool.query('TRUNCATE TABLE "card" RESTART IDENTITY CASCADE');

    this.queryStr = `
      INSERT INTO "card"
      (
        "position", 
        "content", 
        "color", 
        "list_id"
      )
      VALUES
      (
        1, 
        'Create a new project', 
        '#FF0000', 
        1
      ),
      (
        2, 
        'Update the README.md', 
        '#FF0000', 
        1
      ),
      (
        3, 
        'Finish the project', 
        '#FF0000', 
        1
      ),
      (
        1, 
        'Buy some milk', 
        '#FF0000', 
        2
      ),
      (
        2, 
        'Pay the bills', 
        '#FF0000', 
        2
      ),
      (
        1, 
        'Go to the gym', 
        '#FF0000', 
        3
      ),
      (
        2, 
        'Read a book', 
        '#FF0000', 
        3
      ),
      (
        1, 
        'Buy a new phone', 
        '#FF0000', 
        4
      ),
      (
        2, 
        'Buy a new laptop', 
        '#FF0000', 
        4
      ),
      (
        1, 
        'Watch a movie', 
        '#FF0000', 
        5
      ),
      (
        2, 
        'Watch a TV show', 
        '#FF0000', 
        5
      )
      RETURNING id
    `;

    const result = await this.pool.query(this.queryStr);
    return result;
  }

  async insertTags() {
    await this.pool.query('TRUNCATE TABLE "tag" RESTART IDENTITY CASCADE');

    this.queryStr = `
      INSERT INTO "tag"
      (
        "name",
        "color"
      )
      VALUES
      (
        'Important',
        '#FF0000'
      ),
      (
        'Urgent',
        '#FF0000'
      ),
      (
        'Personal',
        '#FF0000'
      ),
      (
        'Work',
        '#FF0000'
      )
      RETURNING id
    `;

    const result = await this.pool.query(this.queryStr);
    return result;
  }

  async insertTasksHasTags() {
    await this.pool.query('TRUNCATE TABLE card_has_tag RESTART IDENTITY CASCADE');

    this.queryStr = `
      INSERT INTO card_has_tag
      (
        card_id,
        tag_id
      )
      VALUES
      (
        1, 
        1
      ),
      (
        2, 
        2
      ),
      (
        3, 
        3
      ),
      (
        4, 
        4
      ),
      (
        5, 
        1
      ),
      (
        6, 
        2
      ),
      (
        7, 
        3
      ),
      (
        8, 
        4
      ),
      (
        9, 
        1
      ),
      (
        10, 
        2
      ),
      (
        11, 
        3
      )
      RETURNING id
    `;

    const result = await this.pool.query(this.queryStr);
    return result;
  }

  async seed() {
    try {
      const insertLists = await this.insertLists();
      console.log(`${insertLists.length} lists have been inserted`);

      const insertTasks = await this.insertTasks();
      console.log(`${insertTasks.length} tasks have been inserted`);

      const insertTags = await this.insertTags();
      console.log(`${insertTags.length} tags have been inserted`);

      const insertTaskHasTags = await this.insertTasksHasTags();
      console.log(`${insertTaskHasTags.length} relations between tasks and tags have been inserted`);

      console.log('Seeding completed');
    } catch (error) {
      console.error('Error on seeding', error);
    } finally {
      await this.pool.end();
    }
  }
}


const seeder = new Seeder(config);
seeder.seed();
console.log(seeder);

