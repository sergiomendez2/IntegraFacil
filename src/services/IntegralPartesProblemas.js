const problems= [
    // Nivel Facil
    [
        {
            message: 'De las siguientes opciones selecciona la sustitución correcta de “u” y “dv”',
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_1/Paso_1.png',
            correctOption: './images/parte/facil/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_1/Respuestas/Incorrecto_1.png',
                './images/parte/facil/Paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'verifica tu función, ten un análisis de cuál puede ser tu sustitución en "u" y cuál puede ser tu sustitución en "dv" ya que este determina el resultado de tu integración.',
        },
        {
            message: 'Seleccione la correcta sustitución en el método de integración por partes para u, du,v y dv.',
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_2/Paso_2.png',
            correctOption: './images/parte/facil/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_2/Respuestas/Incorrecto_1.png',
                './images/parte/facil/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'recuerda “u” se deriva y “dv” se integra, revisa bien tus signos.',
        },
        {
            message: 'seleccione la integral correcta con la sustitución correspondiente.',
            nivel: 'Facil',
            problemImage: './images/parte/facil/paso_3/Paso_3.png',
            correctOption: './images/parte/facil/paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/paso_3/Respuestas/Incorrecto_1.png',
                './images/parte/facil/paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Revisa los signos al igual que tu sustitución de tus variables si se encuentran en la posición correcta.',
        },
        {
            message: 'De las tres opciones seleccione la respuesta correcta a la integral.',
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_4/Paso_4.png',
            correctOption: './images/parte/facil/Paso_4/Respuetas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_4/Respuetas/Incorrecto_1.png',
                './images/parte/facil/Paso_4/Respuetas/Incorrecto_1.png'
            ],
            consejo: 'recuerda operar bien los signos, verificar que tus integrales sean las correctas después de haberlas efectuado.',
        },
        {
            message: 'Seleccione la respuesta correcta después de efectuada las operaciones.',
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_5/Paso_5.png',
            correctOption: './images/parte/facil/Paso_5/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_5/Respuestas/Incorrecto_1.png',
                './images/parte/facil/Paso_5/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda la variable "c" siempre va sumada, revisa los signos de tu respuesta final.',
        }
    ],
    // Nivel Intermedio
    [
        {
            message: 'Seleccione la correcta sustitución para u y dv',
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedio/paso_1/Paso_1.png',
            correctOption: './images/parte/intermedio/paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedio/paso_1/Respuestas/Incorrecto_1.png',
                './images/parte/intermedio/paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Revisa el ejercicio para escoger “u” y “dv” ya que esto define el resultado de tu integral.',
        },
        {
            message: 'Seleccione la correcta sustitución en el método de integración por partes para u, du,v y dv.',
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedio/Paso_2/Paso_2.png',
            correctOption: './images/parte/intermedio/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedio/Paso_2/Respuestas/Incorrecto_1.png',
                './images/parte/intermedio/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda que la derivada del logaritmo natural de una variable es diferente al logaritmo natural de una función.',
        },
        {
            message: 'Seleccione la integral equivalente a la integral mostrada.',
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedio/paso_3/Paso_3.png',
            correctOption: './images/parte/intermedio/paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedio/paso_3/Respuestas/Incorrecto_1.png',
                './images/parte/intermedio/paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Antes de sustituir en la formula revisa que todo este completo, revisa signos y variables.',
        },
        {
            message: 'Seleccione la simplificación correcta de la integral.',
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedio/Paso_4/Paso_4.png',
            correctOption: './images/parte/intermedio/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedio/Paso_4/Respuestas/Incorrecto_1.png',
                './images/parte/intermedio/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'El resultado de una multiplicación si tiene un numerador y un mismo denominador puedes hacer una cancelación, revisa tus numeradores y denominadores.',
        },
        {
            message: 'Selecciona la respuesta correcta de la integral mostrada.',
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedio/Paso_5/Paso_5.png',
            correctOption: './images/parte/intermedio/Paso_5/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedio/Paso_5/Respuestas/Incorrecto_1.png',
                './images/parte/intermedio/Paso_5/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Hay integrales que son directas, “uno" dividido "x" es un es un caso de integración directa, sabiendo que la derivada de (lnx) es igual a "uno" dividido "x", la integral seria "lnx".',
        }
    ],
    // Nivel Dificil

    [
        {
            message: 'De las sustituciones siguientes seleccione la correcta para “u” y “dv”',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_1/Paso_1.png',
            correctOption: './images/parte/dificil/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_1/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Toma en cuenta puede ser “u” y que puede ser “dv” ya que esto define la estructura de tu integral.',
        },
        {
            message: 'Seleccione la correcta sustitución en el método de integración por partes para u, du,v y dv.',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_2/Paso_2.png',
            correctOption: './images/parte/dificil/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_2/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_2/Respuestas/Incorrecto_1.png'
            ],
            consejo: 'En una derivada el exponente es restado, al igual que las integrales ya definidas de un coseno es seno positivo.',
        },
        {
            message: 'Seleccione la correcta sustitución para u y dv. (segunda sustitución).',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_3/Paso_3.png',
            correctOption: './images/parte/dificil/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_3/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Sustituye tu integral por la “u” y la “dv” revisa tus exponentes y que la integral se encuentre en términos de una misma variable.',
        },
        {
            message: 'Seleccione la correcta sustitución en el método de integración por partes para u, du,v y dv. (segunda sustitución).',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_4/Paso_4.png',
            correctOption: './images/parte/dificil/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_4/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Una variable "x" no puede salir fuera de la integral, revisa tus multiplicaciones una variable no se puede multiplicar con una función y volverla al cuadrado.',
        },
        {
            message: 'De las sustituciones siguientes seleccione la correcta para “u” y “dv”',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_5/Paso_5.png',
            correctOption: './images/parte/dificil/Paso_5/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_5/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_5/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Toma en cuenta que puede ser “u” y que puede ser “dv” ya que esto define la estructura de tu integral.',
        },
        {
            message: 'De las sustituciones siguientes seleccione la correcta para “u” y “dv”',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_6/Paso_6.png',
            correctOption: './images/parte/dificil/Paso_6/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_6/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_6/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda que “u” de deriva y que “dv” se integra.',
        },
        {
            message: 'seleccione la integral con la sustitución y el planteamiento correcto.”',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_7/Paso_7.png',
            correctOption: './images/parte/dificil/Paso_7/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_7/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_7/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Una integral definida no se puede cambiar de signo, revisa tu procedimiento para que no tengas inconvenientes.',
        },
        {
            message: 'Seleccione el resultado correcto de la integral.”',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_8/Paso_8.png',
            correctOption: './images/parte/dificil/Paso_8/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_8/Respuestas/Incorrecta_2.png',
                './images/parte/dificil/Paso_8/Respuestas/Incorrecto_1.png'
            ],
            consejo: 'Recuerda que tiene doble sustitución el signo negativo afecta a todo el término, revisa tus signos y la respuesta de tu integral.',
        },
        {
            message: 'seleccione una de las respuestas equivalente a la anterior.”',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_9/Paso_9.png',
            correctOption: './images/parte/dificil/Paso_9/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_9/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_9/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Ten en consideración el cambio de signo al hacer operaciones ya que estos pueden alterar tu resultado final.',
        },
        {
            message: 'Se le presentan tres respuestas finales seleccione la correcta.”',
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_10/Paso_10.png',
            correctOption: './images/parte/dificil/Paso_10/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_10/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_10/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Revisa tus exponentes puede que tengas problemas ahí, al igual que tus signos presta atención a tu planteamiento anterior.',
        }
    ]
]

export default problems