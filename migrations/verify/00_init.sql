-- Verify kanbanapi:00_init on pg

BEGIN;

SELECT * FROM "list" WHERE false;

SELECT * FROM "card" WHERE false;

SELECT * FROM "tag" WHERE false;

SELECT * FROM "card_has_tag" WHERE false;

ROLLBACK;
