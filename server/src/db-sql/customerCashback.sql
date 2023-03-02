UPDATE "Users"
SET balance = balance + (
		SELECT prize
		FROM (
				SELECT SUM("Contests".prize) AS "prize",
					"Contests"."userId" as "userid"
				FROM "Users" as "users"
					JOIN "Contests" ON users.id = "Contests"."userId"
				WHERE users.role = 'customer'
					AND "Contests"."createdAt" BETWEEN '2022-12-25' AND '2023-01-14'
				GROUP BY "Contests"."userId"
			) as "sum_prize"
		WHERE id = sum_prize.userid
	) * 0.1
WHERE id in (
		SELECT "Contests"."userId" as "userid"
		FROM "Users" as "users"
			JOIN "Contests" ON users.id = "Contests"."userId"
		WHERE users.role = 'customer'
			AND "Contests"."createdAt" BETWEEN '2022-12-25' AND '2023-01-14'
		GROUP BY "Contests"."userId"
	);