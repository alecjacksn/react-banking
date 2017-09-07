INSERT INTO users 
(userName, email, img, authID)

VALUES
($1, $2, $3, $4)
RETURNING *;
