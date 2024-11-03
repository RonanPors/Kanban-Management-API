import client from '../config/pg.client.js';
import List from './list.datamapper.js';
import Card from './card.datamapper.js';
import Tag from './tag.datamapper.js';
import CardHasTag from './card-has-tag.datamapper.js';

export const listDatamapper = new List(client);
export const cardDatamapper = new Card(client);
export const tagDatamapper = new Tag(client);
export const cardHasTagDatamapper = new CardHasTag(client);
