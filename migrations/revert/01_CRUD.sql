-- Revert kanbanapi:01_CRUD from pg

BEGIN;

DROP FUNCTION IF EXISTS "insert_card";

DROP FUNCTION IF EXISTS "insert_list";

DROP FUNCTION IF EXISTS "insert_tag";

DROP FUNCTION IF EXISTS "insert_card_has_tag";

COMMIT;
