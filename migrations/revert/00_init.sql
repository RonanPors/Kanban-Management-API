-- Revert kanbanapi:00_init from pg

BEGIN;

DROP TABLE IF EXISTS "list", "card", "tag", "card_has_tag";

COMMIT;
