# Error nº 1

1. ¿Qué error encontraste? (Descripción clara del problema) 
El formulario no se puede enviar.
2. ¿Cómo se puede reproducir? (Pasos detallados)
Clicando en el botón 'Registrarse'.
3. ¿Cuál debería ser el comportamiento esperado?
Debería enviar los datos del formulario.
4. ¿Qué se obtiene en su lugar?
Nada, no se obtiene respuesta.
5. ¿Alguna sugerencia de solución?
Revisar el código de JavaScript e implementar una función que registre los valores del formulario.

# Error nº 2

1. ¿Qué error encontraste? (Descripción clara del problema)
El nombre puede ser numérico, cuando no es posible.
2. ¿Cómo se puede reproducir? (Pasos detallados)
Si escribimos un nombre compuesto por números, no se valida el error y se puede enviar igualmente.
3. ¿Cuál debería ser el comportamiento esperado?
Validar si se ha introducio un valor alfabético y determinar si se envía o no el formulario.
4. ¿Qué se obtiene en su lugar?
Al clicar en 'Enviar', devuelve un alert notificando que el formulario se envió correctamente.
5. ¿Alguna sugerencia de solución?
Implementar una condición para validar que el valor del campo nombre no incluya caracteres numéricos.

# Error nº 3

1. ¿Qué error encontraste? (Descripción clara del problema)
El campo email no valida que sea tipo email: "xxxxx@email.com". En HTML es tipo 'text'.
2. ¿Cómo se puede reproducir? (Pasos detallados)
Si escribimos un email compuesto por valores alfanuméricos, lo acepta, pero sin validar que incluya el formato de una dirección de correo electrónico.
3. ¿Cuál debería ser el comportamiento esperado?
Validar si se ha introducio un valor acorde al formato email.
4. ¿Qué se obtiene en su lugar?
Al clicar en 'Enviar', devuelve un alert notificando que el formulario se envió correctamente.
5. ¿Alguna sugerencia de solución?
Implementar una condición para validar que el valor del campo email está en el formato de tipo email.

# Error nº 4

1. ¿Qué error encontraste? (Descripción clara del problema)
No hay límite de caracteres en ninguno de los campos.
2. ¿Cómo se puede reproducir? (Pasos detallados)
Escribiendo tanto como queramos en los campos.
3. ¿Cuál debería ser el comportamiento esperado?
Que tuviese un límite de caracteres por evitar errores.
4. ¿Qué se obtiene en su lugar?
Tres campos infinitos para rellenar.
5. ¿Alguna sugerencia de solución?
Implementar restricciones 'max-length' en los campos.

# Error nº 5

1. ¿Qué error encontraste? (Descripción clara del problema)
No se comprueba si la 'Contraseña' y 'Confirmar Contraseña' son iguales.
2. ¿Cómo se puede reproducir? (Pasos detallados)
Escribiendo valores distintos en estos campos.
3. ¿Cuál debería ser el comportamiento esperado?
Que validase si los valores introducidos son iguales y, sino, mostrar un alert notificándolo.
4. ¿Qué se obtiene en su lugar?
Nada.
5. ¿Alguna sugerencia de solución?
Implementar una función/método condicional que valide si los valores introducidos en estos campos son iguales para continuar y poder enviar el formulario.

# Error nº 6

1. ¿Qué error encontraste? (Descripción clara del problema)
No se comprueba si el checkbox de 'Acepto los términos y condiciones' está checked o no.
2. ¿Cómo se puede reproducir? (Pasos detallados)
Clicando el botón 'Registrarse' para enviar el formulario sin clicar previamente en el checkbox.
3. ¿Cuál debería ser el comportamiento esperado?
Que saltase un alert al enviar el formulario avisando de que es necesario aceptar los términos.
4. ¿Qué se obtiene en su lugar?
Nada.
5. ¿Alguna sugerencia de solución?
Implementar una comprobación de que el checkbox figura como checked y no enviar el formulario.

# Error nº 7

1. ¿Qué error encontraste? (Descripción clara del problema)
Se establece un filtro de edad máxima/mínima demasiado amplio. Acepta tener 200 años y también años en negativo (valores más que improbables).
2. ¿Cómo se puede reproducir? (Pasos detallados)
Aumento o disminuyo con las flechas del input el número hasta que yo quiera.
3. ¿Cuál debería ser el comportamiento esperado?
Que saltase un alert avisando de que el valor introducido no es válido.
Que el propio input no permitiese introducir valores negativos ni superiores a una edad más común.
4. ¿Qué se obtiene en su lugar?
Posibilidades infinitas de edad.
5. ¿Alguna sugerencia de solución?
Implementar una validación.
Implementar un max y min en el propio tag.

# Error nº 8

1. ¿Qué error encontraste? (Descripción clara del problema)
Se pueden introducir caracteres alfabéticos y especiales en el campo 'Teléfono'.
2. ¿Cómo se puede reproducir? (Pasos detallados)
Introduciendo los valores que queramos en este input.
3. ¿Cuál debería ser el comportamiento esperado?
Que saltase un alert al enviar el formulario avisando de que los valores introducidos no son correctos, concretando que tienen que ser valores numéricos.
4. ¿Qué se obtiene en su lugar?
Nada.
5. ¿Alguna sugerencia de solución?
Implementar una comprobación de que los valores son sólo numéricos.