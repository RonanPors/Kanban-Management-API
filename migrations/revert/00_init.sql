-- Revert kanbanapi:00_init from pg

BEGIN;

DROP TABLE IF EXISTS "card_has_tag", "tag", "card", "list" CASCADE;

COMMIT;
