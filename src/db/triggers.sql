-- ******* USER *******
-- **** User ****DELIMITER #
DELIMITER #
CREATE TRIGGER create_user
BEFORE INSERT ON usuario
FOR EACH  ROW 
BEGIN 
    SET NEW.idusuario = UUID(); 
END;
#
DELIMITER ;

DROP TRIGGER create_user;
-- ******* MEMORY MANANGEMENT *******
-- **** Memory ****
DELIMITER #
CREATE TRIGGER create_memory
BEFORE INSERT ON memoria
FOR EACH  ROW 
BEGIN 
    SET NEW.idmemoria = UUID(); 
END;
#
DELIMITER ;

DROP TRIGGER create_memory;
-- **** Partition ****
DELIMITER #
CREATE TRIGGER create_partition
BEFORE INSERT ON particion
FOR EACH  ROW 
BEGIN 
    SET NEW.idparticion = UUID(); 
END;
#
DELIMITER ;

DROP TRIGGER create_partition;
-- **** Work ****
DELIMITER #
CREATE TRIGGER create_work
BEFORE INSERT ON trabajo
FOR EACH  ROW 
BEGIN 
    SET NEW.idtrabajo = UUID(); 
END;
#
DELIMITER ;

DROP TRIGGER create_work;
-- **** Event ****
DELIMITER #
CREATE TRIGGER create_event
BEFORE INSERT ON evento
FOR EACH  ROW 
BEGIN 
    SET NEW.idevento = UUID(); 
END;
#
DELIMITER ;

DROP TRIGGER create_event;
