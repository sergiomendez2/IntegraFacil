const problems = [

    [

        {
            message: 'De las tres opciones selecciona la sustitucion correcta en "u" de la integral mostrada.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_1/ejercicio_1_fácil.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_1/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'Vuelve la parte más difícil "u" para poder integrar de la mejor manera.',
        },
        {
            message: 'Seleccione el resultado correcto de sustitución de la integral.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_2/correcta_paso_1.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_2/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda que las sustituciones se derivan, al derivar al exponente se le resta uno.',
        },
        {
            message: 'Se le presentan tres despejes seleccione el correcto',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_3/correcta_paso_2.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_3/Respuestas/incorrecta2.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_3/Respuestas/incorrecta1.png'
            ],
            consejo: 'Recuerda que estamos despejando la variable x para dejarlo todo en términos de una misma variable.',
        },
        {
            message: 'Seleccione le integral con la sustitución correspondiente.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_4/correcta_paso_3.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_4/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Las sustituciones dependen de la forma en que tomaste tu variable “u” y de la forma que integraste en el paso anterior.',
        },
        {
            message: 'Se te plantean tres multiplicaciones selecciona la correcta.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_5/correcta_paso_4.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_5/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_5/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_5/Respuestas/incorrecta2.png'
            ],
            consejo: 'Después de tener la integral con su respectiva sustitución recuerda operar para tener una integral más fácil de resolver.',
        },
        {
            message: 'Escoge la integral equivalente a la integral mostrada.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_6/correcta_paso_5.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_6/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_6/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_6/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda que al efectuar una multiplicación los exponentes se suman, te recomendamos que revises tus exponentes y tus signos dentro de tu integral.',
        },
        {
            message: 'Se presentan tres resultados de integración escoge el correcto.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_7/correcta_paso_6.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_7/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_7/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_7/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda al integrar al exponente se le suma uno, cuando tengas una fracción como denominador puedes usar la ley del sándwich para que te quede una fracción simple.',
        },
        {
            message: 'se presentan tres respuestas son sus sustituciones correspondientes escoge el correcto.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_1/Paso_8/correcta_paso_7.png',
            correctOption: './images/sustitucion/facil/Ejercicio_1/Paso_8/Respuestas/correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_1/Paso_8/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_1/Paso_8/Respuestas/incorrecta2.png'
            ],
            consejo: 'Los exponentes al integrar se les suma uno y esto no cambia al efectuar las sustituciones correspondientes, verifica tus exponentes y tus signos.',
        },
    ],

    [
        {
            message: 'Seleccione cual es "u" de la integral mostrada.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_1/ejercicio_2_fácil.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_1/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al sustituir se colocan los signos que se tiene en la función.',
        },
        {
            message: 'seleccione el resultado correcto de sustitución de la integral.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_2/correcta_paso_1.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_2/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al efectuar las derivadas correspondientes recuerda que al exponente se le resta uno.',
        },
        {
            message: 'selecciona el despeje correspondiente al planteamiento anterior.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_3/correcta_paso_2.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_3/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_3/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al hacer un despeje cuando se encuentra multiplicando pasa a dividir conservando su signo, no se cambia.',
        },
        {
            message: 'seleccione la integral con su respectiva sustitución.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_4/correcta_paso_3.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_4/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda siempre corroborar tus sustituciones anteriores, ya que tus variables en “du” pueden tener algún error.',
        },
        {
            message: 'escoja la integral simplificada.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_5/correcta_paso_4.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_5/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_5/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_5/Respuestas/incorrecta2.png'
            ],
            consejo: 'Para tener una integral más fácil de resolver es recomendable sacar fuera de la integral la constante esta sale de la misma forma con la que se encuentra dentro de la integral sin afectar a su numerador y denomiadonr.',
        },
        {
            message: 'seleccione la respuesta correcta de la integral anterior.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_6/correcta_paso_5.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_6/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_6/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_6/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al efectuar la integración al exponente "n" se le suma uno, esto mismo se efectúa como denominador quedando una fracción, en varios casos puede efectuar cancelaciones.',
        },
        {
            message: 'se le plantean tres respuestas de la multiplicación escoja la correcta.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_7/correcta_paso_6.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_7/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_7/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_7/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda que tu denominador tiene el mismo valor que el exponente del numerador.',
        },
        {
            message: 'escoja la respuesta con las sustituciones correctas.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/Ejercicio_2/Paso_8/correcta_paso_7.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_8/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/Ejercicio_2/Paso_8/Respuestas/incorrecta1.png',
                './images/sustitucion/facil/Ejercicio_2/Paso_8/Respuestas/incorrecta2.png'
            ],
            consejo: 'Después de las integraciones puedes hacer una multiplicación recuerda que esto lo efectúas lineal, no se te olvide sustituir la variable "u", el exponente afecta a todo el término.',
        },
    ],

//     nivel intermedio
    [
        {
            message: 'Seleccione cual es "u" de la integral mostrada.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/ejercicio_1_intermedio.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/Respuestas/incorrecta2.png'
            ],
            consejo: 'Después de hacer las sustituciones puedes corroborar que al derivar te queden términos que aparecen en la integral original, puedes sustituirlas para hacer una integral más fácil de resolver.',
        },
        {
            message: 'Se le presentan tres derivadas escoja la correcta.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/correcta_paso_1.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda la forma de derivar un logaritmo natural, saca la constante y te quedara una forma más fácil de derivar.',
        },
        {
            message: 'Seleccione el despeje correspondiente.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/correcta_paso_2.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda que después de la derivada puedes despejarlo los valores para que sean semejantes a la integral original y sea mas sencillo su operación.',
        },
        {
            message: 'Escoja la integral correcta con sus respectivas sustituciones',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/correcta_paso_3.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/Respuestas/incorrecta1.png'
            ],
            consejo: 'Consejo sustituye correctamente los valores, dejando la integral en términos de una misma variable.',
        },
        {
            message: 'Escoja la integral simplificada equivalente a la anterior.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_5/correcta_paso_4.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_5/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_5/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_5/Respuestas/incorrecta2.png'
            ],
            consejo: 'Las constantes las puedes sacar la integral para después poder integrar de la forma más fácil, ten presente que los exponentes no afectan aun a los procedimientos.',
        },
        {
            message: 'Se le presentan tres respuestas de la integral escoja la correcta.\n',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_6/correcta_paso_5.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_6/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_6/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_6/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al integrar el exponente se le suma uno, esto mismo lo Tenes que operar en el denominador, luego de haber hecho los pasos anteriores, la constate que está fuera de la integral la debes de multiplicar por el resultado que te dio al resolver la integral.',
        },
        {
            message: 'seleccione el resultado correcto de la multiplicación.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_7/correcta_paso_6.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_7/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_7/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_7/Respuestas/incorrecta2.png'
            ],
            consejo: 'Revisa tus exponentes ya que estes tienen que ser equivalentes a los exponentes del resultado de tu integración.',
        },
        {
            message: 'Seleccione la respuesta final de la integral.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_8/correcta_paso_7.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_8/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_8/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_8/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al finalizar sustituye las variables que tienes, estas colócalas con el mismo signo que tenían en la función original más la constante de integración que es "c".',
        },
    ],

    [
        {
            message: 'Seleccione la integral equivalente a la integral anterior.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_1/ejercicio_2_intermedio.png',
            correctOption: './images/sustitucion/facil/Ejercicio_2/Paso_1/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_1/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_1/Respuestas/Incorrecto2.png'
            ],
            consejo: 'Para hacer una integral más fácil de resolver déjala lineal, al pasar un denominar como numerador el exponente se coloca negativo.',
        },
        {
            message: 'Escoja la sustitución correcta.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/correcta_paso_1.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/Respuestas/incorrecta2.png'
            ],
            consejo: 'Haz "u" la parte más complicada sin importar el signo del exponente.',
        },
        {
            message: 'De la sustitución anterior seleccione la derivada correcta.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/correcta_paso_2.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda a la hora de derivar al exponente de resta uno y el signo de la deriva se conserva al menos que tengas un exponente negativo.',
        },
        {
            message: 'Seleccione el despeje correcto.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/correcta_paso_3.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/Respuestas/incorrecta2.png'
            ],
            consejo: 'Coloca los signos correctamente esto puede ocasionarte una respuesta errónea.',
        },
        {
            message: 'Seleccione la integral con las sustituciones correspondientes.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/correcta_paso_4.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al hacer la sustitución dentro de la función el signo del exponente no lo afecta, ten cuidado como planteas la integral.',
        },
        {
            message: 'Seleccione la multiplicación correcta dentro de la integral.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/correcta_paso_5.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/Respuestas/incorrecta2.png'
            ],
            consejo: 'Efectuar una multiplicación los exponentes se suman.',
        },
        {
            message: 'Seleccione la integral equivalente a la anterior.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_7/correcta_paso_6.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_7/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_7/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_7/Respuestas/incorrecta2.png'
            ],
            consejo: 'Cuando tienes una función que contiene sumas puedes separarlas por integrales en esta no se afectan por el signo del exponente.',
        },
        {
            message: 'escoja la respuesta correcta de las integrales operadas.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_8/correcto_paso_7.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_8/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_8/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_8/Respuestas/incorrecta2.png'
            ],
            consejo: 'Los exponentes se ven afectados al realizar la integración, se le suma uno, esto también ocurre en la parte del denominador se efectúa la suma del exponente más uno.',
        },
        {
            message: 'Escoja la integral con las sustituciones correctas.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_9/correcta_paso_8.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_9/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_9/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_9/Respuestas/incorrecta2.png'
            ],
            consejo: 'Recuerda apoyarte de la ley de sándwich para efectuar estas fracciones, revisa los signos de tu función.',
        },
        {
            message: 'Escoja la integral con las sustituciones correctas.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_10/correcta_paso_9.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_10/Respuestas/correcta.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_10/Respuestas/incorrecta1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_10/Respuestas/incorrecta2.png'
            ],
            consejo: 'Al sustituir el resultado de la integración, revisa los signos de la sustitución que sean los correctos, puedes apoyarte del procedimiento por si no te recuerdas con hiciste la sustitución inicial.',
        },

    ],

    //     nivel avanzado
    [
        {
            message: 'Se te plantean tres sustituciones completas seleccione la correcta.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_1/Paso_1.png',
            correctOption: './images/sustitucion/dificil/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_1/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'si elevas al cuadro de un lado lo debes de hacer del otro lado de la igualdad para conservarlo.',
        },
        {
            message: 'De las opciones siguientes selecciones la integral con su respectiva sustituciones.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_2/Paso_2.png',
            correctOption: './images/sustitucion/dificil/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_2/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Revisa tus signos dentro de tu integral.',
        },
        {
            message: 'Se te presentan tres integrales equivalente selecciona el correcto.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_3/Paso_3.png',
            correctOption: './images/sustitucion/dificil/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_3/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'No efectúes multiplicación ya que tienes una raíz, revisa los signos de tu integral, recuerda que las constantes las puedes sacar de la integral.',
        },
        {
            message: 'Se te plantean tres sustituciones en “x” selecciona la correcta',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_4/Paso_4.png',
            correctOption: './images/sustitucion/dificil/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_4/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'haz "u" la parte más difícil, puedes utilizar otra variable no específicamente tiene que ser "u", revisa colocar la sustitución con sus signos correctos.',
        },
        {
            message: 'Escoja una de las tres integrales con las sustituciones correctas.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_5/Paso_5.png',
            correctOption: './images/sustitucion/dificil/Paso_5/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_5/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_5/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'sustituye la integral con la variable que ha escogido, no sustituyas por las variables que se escogió la primera vez.',
        },
        {
            message: 'se le plantean tres resultados de la multiplicación seleccione el correcto.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_6/Paso_6.png',
            correctOption: './images/sustitucion/dificil/Paso_6/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_6/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_6/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'recuerda que la raíz cuadrada la puedes expresar como fracción y al multiplicar este se suman sus exponentes, no lo trabajes como raíz, te complicaras más.',
        },
        {
            message: 'Se presentan tres integrales equivalentes a la anterior seleccione la correcta.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_7/Paso_7.png',
            correctOption: './images/sustitucion/dificil/Paso_7/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_7/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_7/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda que al integrar es "n" más uno, y esto también se efectúa en el denominador.',
        },
        {
            message: 'Seleccione la respuesta correcta de la integral anterior.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_8/Paso_8.png',
            correctOption: './images/sustitucion/dificil/Paso_8/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_8/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_8/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'No te olvides de la ley del sándwich te será muy útil para las fracciones, revisa tus signos.',
        },
        {
            message: 'seleccione el resultado de la multiplicacion .',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_9/Paso_9.png',
            correctOption: './images/sustitucion/dificil/Paso_9/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_9/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_9/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'revisa tus exponentes estos deben de estar correctamente, puedes apoyarte del proceso para verificar que estas yendo por el buen camino.',
        },
        {
            message: 'seleccione la respuesta con la sustitución correspondiente.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_10/Paso_10.png',
            correctOption: './images/sustitucion/dificil/Paso_10/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_10/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_10/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'no te dejes engañar, aunque los exponentes pueden ser iguales, revisa tus signos dentro de tus paréntesis algo puedes tener mal, te recomiendo que verifiques los exponentes de las demás variantes.',
        },
        {
            message: 'seleccione la respuesta con la sustitución correspondiente.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_11/Paso_11.png',
            correctOption: './images/sustitucion/dificil/Paso_11/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_11/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_11/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'cambia las variables por las sustituciones que se hayan efectuado, recuerda se hicieron dos sustituciones, primero sustituye por la segunda sustitución y después sustituye por la primera, te recomendamos que veas tus signos.',
        },

    ],
];

export default problems;