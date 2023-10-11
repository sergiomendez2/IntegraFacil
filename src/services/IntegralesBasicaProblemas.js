const problems= [

    //     nivel facil
    [
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_1/Paso_1/ejercicio.png',
            correctOption: './images/basica/facil/Ejercicio_1/Paso_1/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_1/Paso_1/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_1/Paso_1/Respuestas/incorrecto2.png'
            ],
            consejo: 'Si el exponente esta en el denominador debemos subirlo al numerador con signo contrario al que tenemos, es decir si es positivo debe pasar negativo.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_1/Paso_2/paso_2.png',
            correctOption: './images/basica/facil/Ejercicio_1/Paso_2/Respuestas_2/correcta.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_1/Paso_2/Respuestas_2/incorrecta1.png',
                './images/basica/facil/Ejercicio_1/Paso_2/Respuestas_2/incorrecto2.png'
            ],
            consejo: 'Se debe sumar 1 al exponente y el nuevo exponente se coloca en el denominador.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_1/Paso_3/paso_3.png',
            correctOption: './images/basica/facil/Ejercicio_1/Paso_3/Respuestas_3/correcta.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_1/Paso_3/Respuestas_3/incorrecta1.png',
                './images/basica/facil/Ejercicio_1/Paso_3/Respuestas_3/incorrecta2.png'
            ],
            consejo: 'Siempre se debe simplificar las fracciones',
        }
    ],

    [
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_2/Paso_1/ejercicio.png',
            correctOption: './images/basica/facil/Ejercicio_2/Paso_1/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_2/Paso_1/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_2/Paso_1/Respuestas/incorrecto2.png'
            ],
            consejo: 'Se debe pasar a exponente las raíces.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_2/Paso_2/paso_2.png',
            correctOption: './images/basica/facil/Ejercicio_2/Paso_2/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_2/Paso_2/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_2/Paso_2/Respuestas/incorrecto2.png'
            ],
            consejo: 'Se debe operar las literales con sus exponentes, si son de igual literal multiplicado por diferente exponente, copia la literal y se suman los exponentes.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_2/paso_3/paso_3.png',
            correctOption: './images/basica/facil/Ejercicio_2/paso_3/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_2/paso_3/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_2/paso_3/Respuestas/incorrecto2.png'
            ],
            consejo: 'Debemos sumar 1 al exponente y dividir dentro del nuevo exponente.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_2/Paso_4/paso_4.png',
            correctOption: './images/basica/facil/Ejercicio_2/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_2/Paso_4/Respuestas/incorrecta1.png',
                './images/basica/facil/Ejercicio_2/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Aplicar la ley de extremos y medios para resolver las fracciones.',
        }
    ],

    [
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_3/Paso_1/ejercicio.png',
            correctOption: './images/basica/facil/Ejercicio_3/Paso_1/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_3/Paso_1/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_3/Paso_1/Respuestas/incorrecto2.png'
            ],
            consejo: 'Al ser una constante lo que está dentro de la integral se puede sacar directamente de la integral.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_3/Paso_2/paso_2.png',
            correctOption: './images/basica/facil/Ejercicio_3/Paso_2/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_3/Paso_2/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_3/Paso_2/Respuestas/incorrecto2.png'
            ],
            consejo: 'Se debe agregar una “X” a toda la expresión..',
        }
    ],

    [
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_4/Paso_1/ejercicio.png',
            correctOption: './images/basica/facil/Ejercicio_4/Paso_1/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_4/Paso_1/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_4/Paso_1/Respuestas/incorrecto2.png'
            ],
            consejo: 'En ese caso solo se saca la constante.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/basica/facil/Ejercicio_4/Paso_2/paso_2.png',
            correctOption: './images/basica/facil/Ejercicio_4/Paso_2/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/facil/Ejercicio_4/Paso_2/Respuestas/incorrecto1.png',
                './images/basica/facil/Ejercicio_4/Paso_2/Respuestas/incorrecto2.png'
            ],
            consejo: 'La respuesta es una integral directa.',
        },
    ],

    //     nivel intermedio
    [
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_1/Paso_1/Ejercicio_1_Intermedio.png',
            correctOption: './images/basica/intermedio/Ejercicio_1/Paso_1/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_1/Paso_1/Respuestas/incorrecto1.png',
                './images/basica/intermedio/Ejercicio_1/Paso_1/Respuestas/incorrecto2.png'
            ],
            consejo: 'Separar la integral en elementos más pequeños de ser posible.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_1/Paso_2/paso_1_correcto.png',
            correctOption: './images/basica/intermedio/Ejercicio_1/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_1/Paso_2/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_1/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Simplificar cada elemento de manera individual.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_1/Paso_3/paso_2_correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_1/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_1/Paso_3/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_1/Paso_3/Respuestas/incorrecta2.png'
            ],
            consejo: 'Tener cuidado con el signo del exponente cuando se coloca en el numerador.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_1/Paso_4/paso_3_correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_1/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_1/Paso_4/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_1/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Aplicar ley de extremos y medios cuando para simplificar la respuesta.',
        }
    ],

    [
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_2/Paso_1/Ejercicio_2_intermedio.png',
            correctOption: './images/basica/intermedio/Ejercicio_2/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_2/Paso_1/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_2/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'Utilizar la regla del trinomio cuadrado perfecto.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_2/Paso_2/paso_1_correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_2/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_2/Paso_2/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_2/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Dividir cada término de la integral en integrales individuales.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_2/Paso_3/paso_2_correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_2/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_2/Paso_3/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_2/Paso_3/Respuestas/incorrecta2.png'
            ],
            consejo: 'Trabajar cada integral individual recordando que siempre se debe dividir entre el exponente.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_2/paso_4/correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_2/paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_2/paso_4/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_2/paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Utilizar la ley de extremos y medios para simplificar la expresión.',
        }
    ],

    [
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_3/Paso_1/Ejercicio_3_intermedio.png',
            correctOption: './images/basica/intermedio/Ejercicio_3/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_3/Paso_1/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_3/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'Dividir el coseno cuadrado en coseno por coseno.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_3/Paso_2/correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_3/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_3/Paso_2/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_3/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recordar que el coseno no es equivalente a la cosecante.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_3/Paso_3/paso_2_correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_3/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_3/Paso_3/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_3/Paso_3/Respuestas/incorrecta2.png'
            ],
            consejo: 'Utilizar la sustitución trigonométrica adecuada.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/basica/intermedio/Ejercicio_3/Paso_4/paso_3_correcta.png',
            correctOption: './images/basica/intermedio/Ejercicio_3/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/intermedio/Ejercicio_3/Paso_4/Respuestas/incorrecta1.png',
                './images/basica/intermedio/Ejercicio_3/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Revisar las tablas ya que esta es una integral directa.',
        }
    ],

    //     nivel dificil
    [
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_1/Paso_1/Ejercicio_1_dificil.png',
            correctOption: './images/basica/dificil/Ejercicio_1/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_1/Paso_1/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_1/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'Dividir cada elemento del numerador entre el denominador común.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_1/Paso_2/correcta_paso_1.png',
            correctOption: './images/basica/dificil/Ejercicio_1/Paso_2/respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_1/Paso_2/respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_1/Paso_2/respuestas/incorrecta2.png'
            ],
            consejo: 'Recordar que "1/x" es una integral directa, no debemos subir la x al numerador.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_1/Paso_3/correcta_paso_2.png',
            correctOption: './images/basica/dificil/Ejercicio_1/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_1/Paso_3/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_1/Paso_3/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recordar que siempre se suma un "1" al exponente y se baja el exponente al denominador con el signo que tenga.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_1/Paso_4/correcta_paso_4.png',
            correctOption: './images/basica/dificil/Ejercicio_1/Paso_4/Respuestas/correcto.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_1/Paso_4/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_1/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Siempre que se cambia de lugar un número o literal debe cambiarse el signo del exponente.',
        }
    ],
    [
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_2/Paso_1/Ejercicio_2_dificil.png',
            correctOption: './images/basica/dificil/Ejercicio_2/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_2/Paso_1/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_2/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'El exponente 4 afecta solo al denominador pero completo.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_2/Paso_2/correcta_paso_1.png',
            correctOption: './images/basica/dificil/Ejercicio_2/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_2/Paso_2/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_2/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recordar que la constante afecta a todos los elementos de la integral.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_2/Paso_3/correcta_paso_2.png',
            correctOption: './images/basica/dificil/Ejercicio_2/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_2/Paso_3/Respuestas/incorrecto1.png',
                './images/basica/dificil/Ejercicio_2/Paso_3/Respuestas/incorrecto2.png'
            ],
            consejo: 'Tomar la constante de cada integral y cambiar de signo solo los exponentes que fueron intercambiados del denominador al numerador.',
        },//falta consejo
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_2/Paso_4/correcta_paso_3.png',
            correctOption: './images/basica/dificil/Ejercicio_2/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_2/Paso_4/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_2/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recordar que siempre se suma un "1" al exponente y es el mismo que va en el denominador.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_2/Paso_5/correcta_paso_4.png',
            correctOption: './images/basica/dificil/Ejercicio_2/Paso_5/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_2/Paso_5/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_2/Paso_5/Respuestas/incorrecta2.png'
            ],
            consejo: 'Poner atención cuando se manejan las constantes de cada parte de la respuesta.',
        }
    ],
    [
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_2/Paso_1/Ejercicio_2_dificil.png',
            correctOption: './images/basica/dificil/Ejercicio_2/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_2/Paso_1/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_2/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'El exponente 4 afecta solo al denominador pero completo.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_3/Paso_2/correcta.png',
            correctOption: './images/basica/dificil/Ejercicio_3/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_3/Paso_2/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_3/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Solo se cambia el signo del exponente si se mueve del denominador al numerador o viceversa.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_3/Paso_2/correcta.png',
            correctOption: './images/basica/dificil/Ejercicio_3/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_3/Paso_2/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_3/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Trabajar cada integral de forma individual.'
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_3/paso_4/correcta_paso_3.png',
            correctOption: './images/basica/dificil/Ejercicio_3/paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_3/paso_4/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_3/paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'La integral de "e" elevado a un exponente es la misma función, por la derivada del exponente.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/basica/dificil/Ejercicio_3/Paso_5/correcta_paso_4.png',
            correctOption: './images/basica/dificil/Ejercicio_3/Paso_5/Respuestas/correcta.png',
            incorrectOptions: [
                './images/basica/dificil/Ejercicio_3/Paso_5/Respuestas/incorrecta1.png',
                './images/basica/dificil/Ejercicio_3/Paso_5/Respuestas/incorrecta2.png'
            ],
            consejo: 'Aplicar ley de extremos y medios para simplificar la solución.',
        }
    ]
];

export default problems;