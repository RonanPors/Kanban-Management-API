import CoreDatamapper from "./core.datamapper.js";

export default class List extends CoreDatamapper {

  tableName = 'list';

  // Pas obligatoire mais plus lisible
  constructor(client) {
    super(client);
  }
};
