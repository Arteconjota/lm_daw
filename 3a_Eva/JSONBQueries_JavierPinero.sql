/*Crea una tabla usuarios con un id, nombre y un campo preferencias de tipo JSONB.
Inserta al menos tres usuarios con preferencias  (idioma (por ejemplo "es", o "en"), tema ("oscuro", "claro"), notificaciones (true, false)).
Adjuntar un fichero .sql con todas las queries:*/
-- 1. Creación e insert de la tabla y los registros 
CREATE TABLE usuarios (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
preferencias JSONB NULL
);

INSERT INTO usuarios(nombre, preferencias) VALUES
('David', '{"idioma": "en",
			"tema": "claro",
			"notificaciones": "false"}'),
('Noe', '{"idioma": "es",
			"tema": "oscuro",
			"notificaciones": "false"}'),
('Parsa', '{"idioma": "tu",
			"tema": "claro",
			"notificaciones": "true"}');
			
-- 2. Select de usuarios con el nombre y su tema
SELECT nombre, preferencias ->> 'tema' AS tema
	FROM public.usuarios;
	
-- 3. Buscar usuarios que tengan activadas las notificaciones.
SELECT nombre, preferencias ->> 'notificaciones' AS notificaciones
	FROM public.usuarios
	WHERE preferencias @> '{"notificaciones": "true"}';

SELECT nombre, preferencias ->> 'notificaciones' AS notificaciones
	FROM public.usuarios
	WHERE preferencias ->> 'notificaciones' = 'true';
	
-- 4. Actualizar el tema de un usuario a "oscuro".
UPDATE usuarios 
	SET preferencias = JSONB_SET(preferencias, '{tema}', '"oscuro"')
	WHERE nombre = 'Parsa';

-- 5. Añadir un nuevo campo 'newsletter' a todos los usuarios con valor false.
UPDATE usuarios 
	SET preferencias = JSONB_SET(preferencias, '{newsletter}', '"false"');