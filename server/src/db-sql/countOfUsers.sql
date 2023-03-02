SELECT "role",
	count("role") as "count of users"
FROM "Users"
GROUP BY "role";