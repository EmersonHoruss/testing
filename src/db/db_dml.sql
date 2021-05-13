-- ******* USER *******
-- **** User ****
-- Create
INSERT INTO
  usuario (nombre, username, correo)
VALUES
  (
    'testingName',
    'testingUsername',
    'testingMail'
  );
-- Read users
SELECT
  *
FROM
  usuario;
-- Read
SELECT
  *
FROM
  usuario
WHERE
  idusuario = '3a7edfa8-b363-11eb-beed-842afd1385ba';
-- Update
UPDATE
  usuario
SET
  nombre = 'testingName2',
  username = 'testingUsername2',
  correo = 'testingEmail2'
WHERE
  idusuario = '3a7edfa8-b363-11eb-beed-842afd1385ba';
-- Delete users
DELETE FROM
  usuario;
-- Delete
DELETE FROM
  usuario
WHERE
  idusuario = '3a7edfa8-b363-11eb-beed-842afd1385ba';
-- ******* MEMORY MANANGEMENT *******
  -- **** Memory ****
  -- **** Partition ****
  -- **** Work ****
  -- **** Event ****