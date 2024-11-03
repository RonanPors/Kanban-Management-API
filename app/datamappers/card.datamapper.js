import CoreDatamapper from './core.datamapper.js';

export default class Card extends CoreDatamapper {

  tableName = 'card';

  // Pas obligatoire mais plus lisible
  constructor(client) {
    super(client);
  }
};
