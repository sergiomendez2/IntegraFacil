const problems = [

    [

        {
            message: 'Seleccione la opcion correcta de la sustitucion en "u" de la integral mostrada.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio1/Paso_1/Ejercicio1.png',
            correctOption: './images/sustitucion/facil/ejercicio1/Paso_1/respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio1/Paso_1/respuestas/Incorrecto_1.png',
                './images/sustitucion/facil/ejercicio1/Paso_1/respuestas/Incorrecto_2.png'
            ],
            consejo: 'Vuelve la parte mas dificil "u" para poder integrar de la mejor manera.',
        },
        {
            message: 'Selecciona una de las opciones de la integral ya sustituida por "u".',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio1/Paso_2/Paso_2.png',
            correctOption: './images/sustitucion/facil/ejercicio1/Paso_2/respuestas_2/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio1/Paso_2/respuestas_2/Incorrecto_1.png',
                './images/sustitucion/facil/ejercicio1/Paso_2/respuestas_2/Incorrecto_2.png'
            ],
            consejo: 'Tu parte mas dificil sustituyela por "u" luego opera para tener todo en terminis de una solo variable y la integracion sea mas facil y eficiente.',
        },
        {
            message: 'De las tres opciones selecciona el resultado correcto de la integral.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio1/Paso_3/Paso_3.png',
            correctOption: './images/sustitucion/facil/ejercicio1/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio1/Paso_3/Respuestas/Incorrecto_1.png',
                './images/sustitucion/facil/ejercicio1/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda al integrar al exponente se le suma uno, cuando tengas una fraccion como denominador puedes usar la ley del sandwich para que te quede una fraccion simple.',
        },
        {
            message: 'Seleccine la respuesta final de la integral ya sustituida.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio1/Paso_4/Paso_4.png',
            correctOption: './images/sustitucion/facil/ejercicio1/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio1/Paso_4/Respuestas/Incorrecto_1.png',
                './images/sustitucion/facil/ejercicio1/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Los exponentes al integrar se les suma uno y esto no cambia al efectuar las sustituciones correspondientes, verifica tus exponentes y tus signos.',
        },
    ],

    [
        {
            message: 'Selecciones la sustitucion correcta en "u" de la integral mostrada.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio2/Paso_1/Ejercicio_2.png',
            correctOption: './images/sustitucion/facil/ejercicio2/Paso_1/respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio2/Paso_1/respuestas/Incorrecto_1.png',
                './images/sustitucion/facil/ejercicio2/Paso_1/respuestas/Incorrecto_2.png'
            ],
            consejo: 'Al sustituir se colocan los signos que se tiene en la funcion, asi mismo al efectuar las operaciones de la sustitucion, se deriva, no se integra.',
        },
        {
            message: 'Seleccione la opcion correcta de la integral sustituida con "u".',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio2/Paso_2/Paso_2.png',
            correctOption: './images/sustitucion/facil/ejercicio2/Paso_2/Respuestas/Correcta.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio2/Paso_2/Respuestas/Incorrecta_1.png',
                './images/sustitucion/facil/ejercicio2/Paso_2/Respuestas/Incorrecta_2.png'
            ],
            consejo: 'Para tener una integral mas facil de resolver es recomendable sacar fuera de la integral la constante esta sale de la misma forma con la que se encuentra dentro de la integral sin afectar a su numerados y deniminador.',
        },
        {
            message: 'De las opciones seleccione el resultado correcto de la integral mostrada.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio2/Paso_3/Paso_3.png',
            correctOption: './images/sustitucion/facil/ejercicio2/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio2/Paso_3/Respuestas/Incorrecto_1.png',
                './images/sustitucion/facil/ejercicio2/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Al efectuar la integracion al exponente "n" se le suma uno, esto mismo se efectua como denominador quedando una fraccion, en varios casos puede efectur cancelaciones.',
        },
        {
            message: 'Seleccione la respuesta correcta de la integral con variable "u"  sustituida con su valor original.',
            nivel: 'Facil',
            problemImage: './images/sustitucion/facil/ejercicio2/Paso_4/Paso_4.png',
            correctOption: './images/sustitucion/facil/ejercicio2/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/facil/ejercicio2/Paso_4/Respuestas/Incorrecto_1.png',
                './images/sustitucion/facil/ejercicio2/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Despues de las integracios puedes hacer una multiplicacion recuerda que esto lo efectuas lineal, al sustituir la variable "u" el exponente afecta a todo el ternino.',
        },
    ],

//     nivel intermedio
    [
        {
            message: 'Se muestran tres opciones de sustitucion en "u" seleccione la corresta.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/ejercicio_1.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Despues de hacer las sustituciones puedes corroborar que al derivar te queden terminos que aparecen en la integral original, puedes sustituirlas para hacer una integral mas facil de resolver.',
        },
        {
            message: 'Seleccione la integral equivalente sustituida con "u".',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/Paso_2.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Las cosntantes las puedes sacar la integral para despues poder integrar de la forma mas facil, ten presente que los exponentes no afectan aun a los procedimientos.',
        },
        {
            message: 'Seleccione la respuesta correcta de la integral mostrada.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/paso_3.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/Respuestas/Incorrecta_2.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_3/Respuestas/Incorrecto_1.png'
            ],
            consejo: 'Al integrar el exponente se le suma uno, esto mismo lo tenes que operar en el deniminador, luego de haber echo los pasos anteriores, la constate que esta fuera de la integral la debes de multiplicar por el resultado que te dio al resilver la integral.',
        },
        {
            message: 'Seleccione la respuesta equivalente a la respuesta mostrada de la integral.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/Paso_4.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_1/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Al finalizar sustituye las varibles que tienes, estas colocalas con el mismo signo que tenian en la funcion original mas la constante de integracion que es "c",\n',
        },
    ],

    [
        {
            message: 'Selecciona la integral equivalente a la integral mostrada.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_1/ejercicio_2.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_1/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Para hacer una integral mas facil de resolver dejala lineal, al pasar un denominar como numerador el exponente se coloca negativo.',
        },
        {
            message: 'De la integral mostrada seleccine una de las opciones de sustitucion.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/Paso_2.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Haz "u" la parte mas complicada sin importar el signo del exponente, coloca los signos correctamente esto puede ocacionarte una respuseta erronea.',
        },
        {
            message: 'Seleccionde una de las tres opciones la integral equivalente ya sustituida con "u".',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/Paso_3.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_3/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Al hacer las sustitucion dentro de la funcion el signo del exponente no lo afecta, ten cuidado como planteas la integral.',
        },
        {
            message: 'Seleccione la opcion corresta de las equivalencias siguientes de la integral mostrada.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/Paso_4.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Al efectuar una multiplicacion los exponente se suman, cuando tienes una funcion que contiene sumas puedes separarlas por integrales en esta no se afectan por el signo del exponente.',
        },
        {
            message: 'Se le presentan tres respuestas de la integral seleccione la corresta.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/Paso_5.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_5/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Los expoentes se ven afecados al realizar la integracion, se le suma uno, esto tambien ocurre en la parte del denominador se efectua la suma del exponente mas uno, recuerda apoyarte de la ley de sandwich para efectuar estas fracciones, revisa los signos de tu funcion.',
        },
        {
            message: 'Seleccione la opcion correcta ya sustituida con la variable original de la integral.',
            nivel: 'Intermedio',
            problemImage: './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/Paso_6.png',
            correctOption: './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/Respuestas/Incorrecto_1.png',
                './images/sustitucion/Intermedio/Ejercicio_2/Paso_6/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Al sustituir el resultado de la integracion, revisa los signos de la sustitucion que sean los corretos, puedes apoyarte del procedimiento por si no te recuerdas con hiciste las sustitucion inicial.',
        }
    ],

    //     nivel avanzado
    [
        {
            message: 'Seleccione la opcion correcta de la sustitucion de la integral mostrado.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_1/Ejercicio_1.png',
            correctOption: './images/sustitucion/dificil/Paso_1/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_1/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_1/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Si elevas al cuadro de un lado lo debes de hacer del otro lado de la igualdad para conservarlo.',
        },
        {
            message: 'Seleccione la opcion correcta de la integral sustituida con la variable "u".',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_2/Paso_2.png',
            correctOption: './images/sustitucion/dificil/Paso_2/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_2/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_2/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda sustituir la "u" dentro de la funcion, no efectues multiplicacion ya que tienes una raiz, recisa los signos de tu integral, recuerda que las constantes las puedes sacar de la integral.',
        },
        {
            message: 'Seleccione la opcion correcta de la sustitucion, de la integral mostrada.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_3/Paso_3.png',
            correctOption: './images/sustitucion/dificil/Paso_3/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_3/Respuestas/Incorrecto.png',
                './images/sustitucion/dificil/Paso_3/Respuestas/Incorrecto_1.png'
            ],
            consejo: 'Haz "u" la parte mas dificil, puedes utilizar otra varible no especificamente tiene que ser "u", revisa colocar la usustitucion con sus signos correctos.',
        },
        {
            message: 'Seleccione una de las opciones correctas de la nueva integral ya sustituida con la varible "x".',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_4/Paso_4.png',
            correctOption: './images/sustitucion/dificil/Paso_4/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_4/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_4/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Sustituye la integral con la variable que haz escogido, no sustituyas por las variables que se escogio la primera vez.',
        },
        {
            message: 'De la integral mostrada seleccione la respuesta correcta equivalente.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_5/Paso_5.png',
            correctOption: './images/sustitucion/dificil/Paso_5/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_5/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_5/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda que la raiz cuadrada la puedes expresar como fraccion y al multiplicar este se suman sus exponentes, no lo trabajes como raiz, te complicaras mas.',
        },
        {
            message: 'Seleccione la respuesta correcta de la integral ya mostrada.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_6/Paso_6.png',
            correctOption: './images/sustitucion/dificil/Paso_6/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_6/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_6/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Recuerda que al integrar es "n" mas uno, y esto tambien se efectua en el deniminador, no te olvides de la ley del sandwich te sera muy util para las fracciones.',
        },
        {
            message: 'De las tres opciones seleccione la respuesta correcta a la multiplicacion.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_7/Paso_7.png',
            correctOption: './images/sustitucion/dificil/Paso_7/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_7/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_7/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Revisa tus exponentes estos deben de estar correctamente, puedes apoyarte del proceso para verificar que estas yendo por el buen camino.',
        },
        {
            message: 'De las tres opciones siguientes selecciona la respuesta con las sustitucion correcta.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_8/Paso_8.png',
            correctOption: './images/sustitucion/dificil/Paso_8/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_8/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_8/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'No te dejes engañar aunque los exponentes pueden se iguales, revisa tus signos dentro de tus parentesis algo puedes tener mal, te recomiendo que verifiques los exponentes de las demas variantes.',
        },
        {
            message: 'De las tres opciones siguientes selecciona la respuesta con las sustitucion correcta.',
            nivel: 'Dificil',
            problemImage: './images/sustitucion/dificil/Paso_9/Paso_9.png',
            correctOption: './images/sustitucion/dificil/Paso_9/Respuestas/Correcto.png',
            incorrectOptions: [
                './images/sustitucion/dificil/Paso_9/Respuestas/Incorrecto_1.png',
                './images/sustitucion/dificil/Paso_9/Respuestas/Incorrecto_2.png'
            ],
            consejo: 'Cambia las variables por las sutituciones que se hayan efectuado, recuerda se hicieron dos sustituciones, primero sustituye por la segunda sustitucion y despues sustituye por la primera, te recomendamos que veas tus signos.',
        }
    ],
];

export default problems;