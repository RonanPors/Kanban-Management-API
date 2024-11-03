import CoreDatamapper from "./core.datamapper";

export default class CardHasTag extends CoreDatamapper {

  tableName = 'card_has_tag';

  // Pas obligatoire, mais permet de passer le client à la classe parente.
  constructor(client) {
    super(client);
  }
};
