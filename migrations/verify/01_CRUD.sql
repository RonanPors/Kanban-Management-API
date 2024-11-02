-- Verify kanbanapi:01_CRUD on pg

BEGIN;

SELECT *
FROM insert_card (
  '{"content": "content, "position": "position, "color": "color", "list_id": "list_id"}'::json
  )
WHERE 
  false;

SELECT *
FROM insert_list (
  '{"title": "title", "position": "position"}'::json
  )
WHERE 
  false;

SELECT *
FROM insert_tag (
  '{"name": "name", "color": "color"}'::json
  )
WHERE 
  false;

SELECT *
FROM insert_card_has_tag (
  '{"card_id": "card_id", "tag_id": "tag_id"}'::json
  )
WHERE 
  false;

ROLLBACK;
