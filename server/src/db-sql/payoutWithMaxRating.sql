UPDATE "Users"
SET balance = balance + 10
WHERE id IN (
		SELECT "Users".id AS id
		FROM "Users"
		WHERE "Users"."role" = 'creator'
		ORDER BY "rating" DESC
		FETCH FIRST 3 ROWS WITH TIES
	);