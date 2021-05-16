-- ******* USER *******
-- **** User ****
-- Create
INSERT INTO
  tuser 
VALUES
  (
    'uykME',
    'name',
    'password',
    'username',
    'mail'
  );
-- Read users
SELECT
  *
FROM
  user;
-- Read
SELECT
  *
FROM
  user
WHERE
  iduser = '3a7edfa8-b363-11eb-beed-842afd1385ba';
-- Update
UPDATE
  user
SET
  _name = 'testingName2',
  _password = 'testingName2',
  _username = 'testingUsername2',
  _mail = 'testingEmail2'
WHERE
  iduser = '3a7edfa8-b363-11eb-beed-842afd1385ba';
-- Delete users
DELETE FROM
  user;
-- Delete
DELETE FROM
  user
WHERE
  iduser = '3a7edfa8-b363-11eb-beed-842afd1385ba';
-- ******* MEMORY MANANGEMENT *******
  -- **** Memory ****
  -- **** Partition ****
  -- **** Work ****
  -- **** Event ****