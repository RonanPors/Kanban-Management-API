-- Deploy kanbanapi:01_CRUD to pg

BEGIN;

-- Insert Card
CREATE FUNCTION "insert_card"(json) RETURNS "card" AS $$

  INSERT INTO "card" (
    "content",
    "position",
    "color",
    "list_id"
  ) VALUES (
    $1->>'content',
    COALESCE(($1->>'position')::INT, 1),
    COALESCE($1->>'color', '#FFFFFF'),
    ($1->>'list_id')::INT
  ) RETURNING *

$$ LANGUAGE sql
VOLATILE STRICT;

-- Insert List
CREATE FUNCTION "insert_list"(json) RETURNS "list" AS $$

  INSERT INTO "list" (
    "title",
    "position"
  ) VALUES (
    $1->>'title',
    COALESCE(($1->>'position')::INT, 1)
  ) RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- Insert tag
CREATE FUNCTION "insert_tag"(json) RETURNS "tag" AS $$

  INSERT INTO "tag" (
    "name",
    "color"
  ) VALUES (
    $1->>'name',
    COALESCE($1->>'color', '#FFFFFF')
  ) RETURNING *

$$ LANGUAGE SQL

VOLATILE STRICT;

-- Insert card has tag
CREATE FUNCTION "insert_card_has_tag"(json) RETURNS "card_has_tag" AS $$

  INSERT INTO "card_has_tag" (
    "card_id",
    "tag_id"
  ) VALUES (
    ($1->>'card_id')::INT,
    ($1->>'tag_id')::INT
  ) RETURNING *

$$ LANGUAGE SQL

VOLATILE STRICT;

-- Update card
CREATE FUNCTION "update_card"(json) RETURNS "card" AS $$

  UPDATE "card" SET
    "content" = COALESCE($1->>'content', "content"),
    "position" = COALESCE(($1->>'position')::INT, "position"),
    "color" = COALESCE($1->>'color', "color"),
    "list_id" = COALESCE(($1->>'list_id')::INT, "list_id"),
    "updated_at" = now()
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE SQL

VOLATILE STRICT;


-- Update list
CREATE FUNCTION "update_list"(json) RETURNS "list" AS $$

  UPDATE "list" SET
    "title" = COALESCE($1->>'title', "title"),
    "position" = COALESCE(($1->>'position')::INT, "position"),
    "updated_at" = now()
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE SQL

VOLATILE STRICT;

-- Update tag
CREATE FUNCTION "update_tag"(json) RETURNS "tag" AS $$

  UPDATE "tag" SET
    "name" = COALESCE($1->>'name', "name"),
    "color" = COALESCE($1->>'color', "color"),
    "updated_at" = now()
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- Update card has tag
CREATE FUNCTION "update_card_has_tag"(json) RETURNS "card_has_tag" AS $$

  UPDATE "card_has_tag" SET
    "card_id" = COALESCE(($1->>'card_id')::INT, "card_id"),
    "tag_id" = COALESCE(($1->>'tag_id')::INT, "tag_id"),
    "updated_at" = now()
  WHERE "card_id" = ($1->>'card_id')::INT AND "tag_id" = ($1->>'tag_id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- Delete card
CREATE FUNCTION "delete_card"(json) RETURNS "card" AS $$

  DELETE FROM "card"
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- Delete list
CREATE FUNCTION "delete_list"(json) RETURNS "list" AS $$

  DELETE FROM "list"
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- Delete tag
CREATE FUNCTION "delete_tag"(json) RETURNS "tag" AS $$

  DELETE FROM "tag"
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- Delete card has tag
CREATE FUNCTION "delete_card_has_tag"(json) RETURNS "card_has_tag" AS $$

  DELETE FROM "card_has_tag"
  WHERE "card_id" = ($1->>'card_id')::INT AND "tag_id" = ($1->>'tag_id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

COMMIT;
