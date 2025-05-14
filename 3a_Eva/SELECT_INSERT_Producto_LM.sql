DROP TABLE producto;

-- Creación de tabla de productos con un tipo de campo JSON:
CREATE TABLE producto (
	id_producto SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	caracteristicas JSONB NULL
);

-- Inserción de productos en la tabla:
INSERT INTO producto (nombre, caracteristicas) VALUES
('Camiseta manga corta', '{"marca": "RipNDip",
						   "color": "beige",
						   "talla": "L",
						   "cantidad": "2"}'),
						   
('Sudadera', '{"marca": "Adidas",
			   "color": "verde",
			   "talla": "XL",
			   "cantidad": "1"}');

-- Consulta de los productos:
SELECT id_producto, nombre, caracteristicas
	FROM public.producto;

-- Sobreescritura de uno de los productos:
UPDATE public.producto SET
caracteristicas = '{"marca": "RipNDip", "color": "beige", "talla": "L", "cantidad": "2"}'::JSONB WHERE
id_producto = 1;

-- Consultas de los productos con filtro:
SELECT id_producto, nombre, caracteristicas
	FROM public.producto
	WHERE caracteristicas ->> 'color' = 'verde';

SELECT * FROM producto
	WHERE caracteristicas ->> 'color' = 'verde';

-- También se pueden realizar consultas teniendo JSONB(inary) con la siguiente sintaxis:
SELECT nombre, caracteristicas ->> 'marca' AS marca, caracteristicas ->> 'color' AS color
	FROM public.producto
	WHERE caracteristicas @> '{"marca": "Adidas"}';

-- Consultas teniendo como filtro el color 'beige':
SELECT * FROM producto
	WHERE caracteristicas @> '{"color": "beige"}';

SELECT * FROM producto
	WHERE caracteristicas ->> 'color' = 'beige';

-- Para conocer las distintas claves de la tabla:
SELECT DISTINCT JSONB_OBJECT_KEYS(caracteristicas)
	FROM public.producto;

-- Para cambiar la cantidad de uno de los valores:
UPDATE producto 
	SET caracteristicas = JSONB_SET(caracteristicas, '{cantidad}', '5')
	WHERE caracteristicas @> '{"color": "beige"}';

-- Si queremos añadir una clave extra en algún registro, se haría así:
UPDATE producto 
	-- No existe la clave valor, por lo que se genera una clave automáticamente:
	SET caracteristicas = JSONB_SET(caracteristicas, '{stock}', '10')  
	WHERE caracteristicas @> '{"color": "beige"}';

-- Si queremos filtrar por una clave que sólo tengan registros concretos:
SELECT * FROM producto
	WHERE caracteristicas ? 'stock';