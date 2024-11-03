import CoreDatamapper from "./core.datamapper";

export default class Tag extends CoreDatamapper {

  tableName = 'tags';

  // Pas obligatoire mais plus lisible
  constructor(client) {
    super(client);
  }
};
