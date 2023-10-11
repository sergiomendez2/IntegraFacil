const problems= [
    // Nivel Facil
    [

        {
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_1/Ejercicio.png',
            correctOption: './images/parte/facil/Paso_1/respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_1/respuestas/Incorrecta_2.png',
                './images/parte/facil/Paso_1/respuestas/Incorrecto_1.png'
            ],
            consejo: 'Verifica tu funcion, ten un analisis de cual puede ser tu sustitución en "u" y cual puede ser tu sustitución en "dv" ya que este determina el resultado de tu integración.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_2/Paso_2.png',
            correctOption: './images/parte/facil/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_2/Respuestas/Incorrecto_1.png',
                './images/parte/facil/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Revisa los signos al igual que tu sustitución de tus variables si se encuentran en la pocicion correcta.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_3/Paso_3.png',
            correctOption: './images/parte/facil/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_3/Respuestas/Incorrecta_1.png',
                './images/parte/facil/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda operar bien los signos, verificar que tus integrales sean las correctas despues de haberlas efectuado.',
        },
        {
            nivel: 'Facil',
            problemImage: './images/parte/facil/Paso_4/Paso_4.png',
            correctOption: './images/parte/facil/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/facil/Paso_4/Respuestas/Incorrecto_1.png',
                './images/parte/facil/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda la variable "c" siempre va sumada, revisa los signos de tu respuesta.',
        },
    ],
    // Nivel Intermedio
    [
        {
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedia/Paso_1/Ejercicio.png',
            correctOption: './images/parte/intermedia/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedia/Paso_1/Respuestas/Incorrecta_2.png',
                './images/parte/intermedia/Paso_1/Respuestas/Incorrecto_1.png'
            ],
            consejo: 'Recuerda que la derivada del logaritmo natural de una variable es diferente al logaritmo natural de un funcion.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedia/Paso_2/Paso_2.png',
            correctOption: './images/parte/intermedia/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedia/Paso_2/Respuestas/Incorrecta_2.png',
                './images/parte/intermedia/Paso_2/Respuestas/Incorrecto_1.png'
            ],
            consejo: 'Antes de sustituir en la formula revisa que todo este completo, revisa signos y variables.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedia/Paso_3/Paso_3.png',
            correctOption: './images/parte/intermedia/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/intermedia/Paso_3/Respuestas/Incorrecto_1.png',
                './images/parte/intermedia/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'El resultado de una multiplicacion, si tiene un numerador y un mismo denominador puedes hacer una cancelacion, revisa tus numeradores y denominadores.',
        },
        {
            nivel: 'Intermedio',
            problemImage: './images/parte/intermedia/Paso_4/Paso_4.png',
            correctOption: './images/parte/intermedia/Paso_4/Respuestas/Correcta.png',
            incorrectOptions: [
                './images/parte/intermedia/Paso_4/Respuestas/Incorrecta_1.png',
                './images/parte/intermedia/Paso_4/Respuestas/Incorrecta_2.png'
            ],
            consejo: 'hay integrales que son directas,"uno" dividido "x" es un es un caso de integracion directa, sabieno que la derivada de (lnx) es igul a "uno" dividido "x", la integral seria "lnx".',
        },
    ],
    // Nivel Dificil
    [
        {
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_1/Ejercicio.png',
            correctOption: './images/parte/dificil/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_1/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'En una derivada el exponente es restado, al igual que las integrales ya definidas de un coseno es seno positivo.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_2/Paso_2.png',
            correctOption: './images/parte/dificil/Paso_2/Respuestas/Correcta.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_2/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Una varible "x" no puede salir fuera de la integral, revisa tus multiplicaciones una variable no se puede multiplicar con una funcion y volverla al cuadrado.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_3/Paso_3.png',
            correctOption: './images/parte/dificil/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_3/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Considera bien que parte sera "u" y que parte dera "dv" ordena y opera, asi mismo una integral definida no se puede cambiar de signo, revisa tu procedimiento para que no tengas inconvenientes.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_4/Paso_4.png',
            correctOption: './images/parte/dificil/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_4/Respuestas/Incorrecto_1.png',
                './images/parte/dificil/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Ten en consideracion el cambio de signo al hacer operaciones ya que estos pueden alterar tu resultado final.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_5/Paso_5.png',
            correctOption: './images/parte/dificil/Paso_5/Respuetas/Correcto.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_5/Respuetas/Incorrecto_1.png',
                './images/parte/dificil/Paso_5/Respuetas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda tener siempre presente los signos en las operaciones, en multiplicaciones no puedes eliminar factores, es necesario que sean semejantes para que puede efectar eliminaciones, cuando tengas exponentes no puesdes simplemente eliminar, te aconsejamos que reveses tus procedimientos y los signos.',
        },
        {
            nivel: 'Dificil',
            problemImage: './images/parte/dificil/Paso_6/Paso_6.png',
            correctOption: './images/parte/dificil/Paso_6/Respuestas/Correcta.png',
            incorrectOptions: [
                './images/parte/dificil/Paso_6/Respuestas/Incorrecta_1.png',
                './images/parte/dificil/Paso_6/Respuestas/Incorrecta_2.png'
            ],
            consejo: 'Los signos los debes de sustituir tal como te los pide la formula recuerda no cambiarlos si no es necesario, los exponentes se deben de conservar para que la multipliecaión de el resultado final deseado.',
        }
    ]
]

export default problems