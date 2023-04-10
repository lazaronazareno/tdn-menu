exports.handler = async (event, context) => {
  const questions = {
    "preguntas": [
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa Wild Classic?",
        "respuestas": [
          "Doble cheddar, panceta, lechuga, tomate, cebolla morada, pepinos agridulces, mayonesa y mostaza",
          "Queso suizo, jamón, lechuga, tomate, cebolla caramelizada y salsa especial",
          "Pollo a la parrilla, tocino, queso cheddar, lechuga, tomate y mayonesa",
          "Carne de res, tocino, queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza"
        ],
        "respuesta_correcta": "Doble cheddar, panceta, lechuga, tomate, cebolla morada, pepinos agridulces, mayonesa y mostaza"
      },
      {
        "pregunta": "¿Cuántas onzas de carne tiene la hamburguesa Wild Classic?",
        "respuestas": [
          "200 g",
          "250 g",
          "150 g",
          "180 g"
        ],
        "respuesta_correcta": "200 g"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa BBQ Steak?",
        "respuestas": [
          "Salsa barbacoa casera, queso pategras, panceta, cebolla caramelizada y huevo a la plancha",
          "Doble cheddar, panceta, lechuga, tomate, cebolla morada, pepinos agridulces, mayonesa y mostaza",
          "Pollo a la parrilla, tocino, queso cheddar, lechuga, tomate y mayonesa",
          "Carne de res, tocino, queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza"
        ],
        "respuesta_correcta": "Salsa barbacoa casera, queso pategras, panceta, cebolla caramelizada y huevo a la plancha"
      },
      {
        "pregunta": "¿Qué tipo de queso lleva la hamburguesa BBQ Steak?",
        "respuestas": [
          "Queso pategras",
          "Queso cheddar",
          "Queso suizo",
          "Queso azul"
        ],
        "respuesta_correcta": "Queso pategras"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa La Villa?",
        "respuestas": [
          "Provola ahumada, panceta, cebollas crispy, lechuga, tomate, relish casero y mayonesa ahumada",
          "Queso suizo, jamón, lechuga, tomate, cebolla caramelizada y salsa especial",
          "Pollo a la parrilla, tocino, queso cheddar, lechuga, tomate y mayonesa",
          "Carne de res, tocino, queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza"
        ],
        "respuesta_correcta": "Provola ahumada, panceta, cebollas crispy, lechuga, tomate, relish casero y mayonesa ahumada"
      },
      {
        "pregunta": "¿Qué tipo de queso tiene la hamburguesa La Villa?",
        "respuestas": [
          "Provola ahumada",
          "Cheddar",
          "Mozzarella",
          "Queso azul"
        ],
        "respuesta_correcta": "Provola ahumada"
      },
      {
        "pregunta": "¿Qué tipo de salsa tiene la hamburguesa La Villa?",
        "respuestas": [
          "Relish casero y mayonesa ahumada",
          "Salsa barbacoa",
          "Salsa de queso",
          "Salsa de mostaza"
        ],
        "respuesta_correcta": "Relish casero y mayonesa ahumada"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa Wild Grill TDN?",
        "respuestas": [
          "Provoleta al oregano, mollejas tiernizadas, ensalada criolla, rúcula, chimichurri y alioli",
          "Queso suizo, jamón, lechuga, tomate, cebolla caramelizada y salsa especial",
          "Pollo a la parrilla, tocino, queso cheddar, lechuga, tomate y mayonesa",
          "Carne de res, tocino, queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza"
        ],
        "respuesta_correcta": "Provoleta al oregano, mollejas tiernizadas, ensalada criolla, rúcula, chimichurri y alioli"
      },
      {
        "pregunta": "¿Qué tipo de queso tiene la hamburguesa Wild Grill TDN?",
        "respuestas": [
          "Provoleta al oregano",
          "Queso cheddar",
          "Queso suizo",
          "Queso azul"
        ],
        "respuesta_correcta": "Provoleta al oregano"
      },
      {
        "pregunta": "¿Qué tipo de salsa lleva la hamburguesa Wild Grill TDN?",
        "respuestas": [
          "Chimichurri y alioli",
          "Salsa barbacoa",
          "Salsa de tomate",
          "Salsa de queso"
        ],
        "respuesta_correcta": "Chimichurri y alioli"
      },
      {
        "pregunta": "¿Cuáles son los ingredientes principales de la Wildness Burger?",
        "respuestas": [
          "Mozzarella, cebollas y hongos salteados, y aderezo parmesano",
          "Queso cheddar, tocino, lechuga, tomate, cebolla y salsa especial",
          "Carne de res, queso provolone, pepinillos, lechuga, tomate y mayonesa",
          "Pollo a la parrilla, queso suizo, tocino, lechuga, tomate y mayonesa"
        ],
        "respuesta_correcta": "Mozzarella, cebollas y hongos salteados, y aderezo parmesano"
      },
      {
        "pregunta": "¿Cuántas onzas de carne tiene la Wildness Burger?",
        "respuestas": [
          "200 g",
          "250 g",
          "150 g",
          "180 g"
        ],
        "respuesta_correcta": "200 g"
      },
      {
        "pregunta": "¿Qué tipo de queso lleva la Wildness Burger?",
        "respuestas": [
          "Mozzarella",
          "Cheddar",
          "Provolone",
          "Queso suizo"
        ],
        "respuesta_correcta": "Mozzarella"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa Chilli Queen?",
        "respuestas": [
          "Guacamole, chilli con carne y queso en hebras",
          "Lechuga, tomate, cebolla y mayonesa",
          "Panceta, queso cheddar y cebolla caramelizada",
          "Mozzarella, champiñones y aderezo parmesano"
        ],
        "respuesta_correcta": "Guacamole, chilli con carne y queso en hebras"
      },
      {
        "pregunta": "¿Cuántos gramos pesa la hamburguesa Chilli Queen?",
        "respuestas": [
          "200 g",
          "250 g",
          "150 g",
          "180 g"
        ],
        "respuesta_correcta": "200 g"
      },
      {
        "pregunta": "¿Qué tipo de queso lleva la hamburguesa Chilli Queen?",
        "respuestas": [
          "Queso en hebras",
          "Queso cheddar",
          "Mozzarella",
          "Provolone"
        ],
        "respuesta_correcta": "Queso en hebras"
      },
      {
        "pregunta": "¿Cuáles son los ingredientes de la hamburguesa Veggie?",
        "respuestas": [
          "Doble de quinoa, vegetales salteados, queso brie, lechuga y alioli",
          "Carne de res, tocino, queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza",
          "Pollo a la parrilla, tocino, queso cheddar, lechuga, tomate y mayonesa",
          "Queso suizo, jamón, lechuga, tomate, cebolla caramelizada y salsa especial"
        ],
        "respuesta_correcta": "Doble de quinoa, vegetales salteados, queso brie, lechuga y alioli"
      },
      {
        "pregunta": "¿Cuántas capas de quinoa tiene la hamburguesa Veggie?",
        "respuestas": [
          "Doble",
          "Una",
          "Tres",
          "Cuatro"
        ],
        "respuesta_correcta": "Doble"
      },
      {
        "pregunta": "¿Qué tipo de queso tiene la hamburguesa Veggie?",
        "respuestas": [
          "Queso brie",
          "Queso cheddar",
          "Queso suizo",
          "Mozzarella"
        ],
        "respuesta_correcta": "Queso brie"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la TDN Burger?",
        "respuestas": [
          "Carne de res rellena con queso cheddar, cebolla caramelizada, lechuga y pepinos agridulces",
          "Pollo a la parrilla, tocino, queso cheddar, lechuga, tomate y mayonesa",
          "Doble cheddar, panceta, lechuga, tomate, cebolla morada, pepinos agridulces, mayonesa y mostaza",
          "Hamburguesa vegetariana con quinoa, vegetales salteados, queso brie, lechuga y alioli"
        ],
        "respuesta_correcta": "Carne de res rellena con queso cheddar, cebolla caramelizada, lechuga y pepinos agridulces"
      },
      {
        "pregunta": "¿Cuántas onzas de carne tiene la TDN Burger?",
        "respuestas": [
          "200 g",
          "250 g",
          "150 g",
          "180 g"
        ],
        "respuesta_correcta": "200 g"
      },
      {
        "pregunta": "¿Qué tipo de queso se utiliza en la TDN Burger?",
        "respuestas": [
          "Cheddar",
          "Mozzarella",
          "Provolone",
          "Queso Brie"
        ],
        "respuesta_correcta": "Cheddar"
      },
      {
        "pregunta": "¿Qué tipo de queso tiene la hamburguesa 3 Hot Chilli Pepper?",
        "respuestas": [
          "Queso cheddar",
          "Queso brie",
          "Queso provolone",
          "Queso azul"
        ],
        "respuesta_correcta": "Queso cheddar"
      },
      {
        "pregunta": "¿Cuáles son los ingredientes picantes que lleva la hamburguesa 3 Hot Chilli Pepper?",
        "respuestas": [
          "Jalapeños en conserva, chile en conserva y aderezo a base de rocoto y maní",
          "Tabasco, pimienta de cayena y mostaza picante",
          "Salsa de ajo, salsa de habanero y salsa de jalapeño",
          "Cebolla morada, tomate, chile serrano y cilantro"
        ],
        "respuesta_correcta": "Jalapeños en conserva, chile en conserva y aderezo a base de rocoto y maní"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la Grand TDN Burger?",
        "respuestas": [
          "Queso cheddar, jamón, queso danbo, huevo a la plancha, lechuga, tomate, pepinos, ketchup y mayonesa",
          "Doble cheddar, panceta, lechuga, tomate, cebolla morada, pepinos agridulces, mayonesa y mostaza",
          "Pollo a la parrilla, tocino, queso cheddar, lechuga, tomate y mayonesa",
          "Carne de res, tocino, queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza"
        ],
        "respuesta_correcta": "Queso cheddar, jamón, queso danbo, huevo a la plancha, lechuga, tomate, pepinos, ketchup y mayonesa"
      },
      {
        "pregunta": "¿Cuántas onzas de carne tiene la Grand TDN Burger?",
        "respuestas": [
          "200 g",
          "250 g",
          "150 g",
          "180 g"
        ],
        "respuesta_correcta": "200 g"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa Bourbon Cheeseburger?",
        "respuestas": [
          "Hamburguesa doble carne de 100 g en pan de campo con queso dambo gratinado, queso cheddar, aderezo a base de barbacoa casera y whisky bourbon, cebolla crispy",
          "Hamburguesa doble carne de 100 g en pan de campo con queso dambo gratinado, queso cheddar, aderezo a base de barbacoa casera y whisky bourbon, cebolla caramelizada",
          "Hamburguesa doble carne de 100 g en pan de campo con queso dambo gratinado, queso cheddar, aderezo a base de barbacoa casera y whisky bourbon, lechuga y tomate",
          "Hamburguesa doble carne de 100 g en pan de campo con queso dambo gratinado, queso cheddar, aderezo a base de barbacoa casera y whisky bourbon, pepinillos"
        ],
        "respuesta_correcta": "Hamburguesa doble carne de 100 g en pan de campo con queso dambo gratinado, queso cheddar, aderezo a base de barbacoa casera y whisky bourbon, cebolla crispy"
      },
      {
        "pregunta": "¿Cuántas onzas de carne tiene la hamburguesa Bourbon Cheeseburger?",
        "respuestas": [
          "200 g",
          "250 g",
          "150 g",
          "180 g"
        ],
        "respuesta_correcta": "200 g"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa DCDQ?",
        "respuestas": [
          "Hamburguesa doble carne de 100 g, TRIPLE queso cheddar, panceta, pepinos agridulces y aderezos a elección",
          "Hamburguesa doble carne de 100 g, TRIPLE queso cheddar, panceta, lechuga y tomate",
          "Hamburguesa doble carne de 100 g, TRIPLE queso cheddar, panceta, cebolla caramelizada",
          "Hamburguesa doble carne de 100 g, TRIPLE queso cheddar, panceta, pepinillos"
        ],
        "respuesta_correcta": "Hamburguesa doble carne de 100 g, TRIPLE queso cheddar, panceta, pepinos agridulces y aderezos a elección"
      },
      {
        "pregunta": "¿Cuántas capas de queso cheddar tiene la hamburguesa DCDQ?",
        "respuestas": [
          "Una",
          "Dos",
          "Tres",
          "Cuatro"
        ],
        "respuesta_correcta": "Tres"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa Bad Horsie?",
        "respuestas": [
          "Hamburguesa doble carne de 100 g provoleta al oregano, tomates asados, cebolla morada y alioli",
          "Hamburguesa doble carne de 100 g provoleta al oregano, tomates asados, cebolla caramelizada y alioli",
          "Hamburguesa doble carne de 100 g provoleta al oregano, tomates asados, lechuga y alioli",
          "Hamburguesa doble carne de 100 g provoleta al oregano, tomates asados, pepinillos y alioli"
        ],
        "respuesta_correcta": "Hamburguesa doble carne de 100 g provoleta al oregano, tomates asados, cebolla morada y alioli"
      },
      {
        "pregunta": "¿Qué tipo de queso lleva la hamburguesa Bad Horsie?",
        "respuestas": [
          "Queso cheddar",
          "Queso dambo",
          "Provoleta al oregano",
          "Queso suizo"
        ],
        "respuesta_correcta": "Provoleta al oregano"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa Big TDN?",
        "respuestas": [
          "Hamburguesa doble carne de 100 g triple queso cheddar pepinos agridulces, cebolla, lechuga y salsa secreta",
          "Hamburguesa doble carne de 100 g triple queso cheddar pepinos agridulces, cebolla caramelizada, lechuga y salsa secreta",
          "Hamburguesa doble carne de 100 g triple queso cheddar pepinos agridulces, cebolla, tomate y salsa secreta",
          "Hamburguesa doble carne de 100 g triple queso cheddar pepinos agridulces, cebolla, lechuga y mayonesa"
        ],
        "respuesta_correcta": "Hamburguesa doble carne de 100 g triple queso cheddar pepinos agridulces, cebolla, lechuga y salsa secreta"
      },
      {
        "pregunta": "¿Cuántas capas de queso cheddar tiene la hamburguesa Big TDN?",
        "respuestas": [
          "Una",
          "Dos",
          "Tres",
          "Cuatro"
        ],
        "respuesta_correcta": "Tres"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa De La Granja?",
        "respuestas": [
          "Hamburguesa doble carne de 100 queso danbo. jamon, huevo a la plancha y aderezo a elección",
          "Hamburguesa doble carne de 100 queso danbo. jamon, huevo a la plancha y mayonesa",
          "Hamburguesa doble carne de 100 queso danbo. jamon, huevo a la plancha y salsa barbacoa",
          "Hamburguesa doble carne de 100 queso danbo. jamon, huevo a la plancha y ketchup"
        ],
        "respuesta_correcta": "Hamburguesa doble carne de 100 queso danbo. jamon, huevo a la plancha y aderezo a elección"
      },
      {
        "pregunta": "¿Qué tipo de queso lleva la hamburguesa De La Granja?",
        "respuestas": [
          "Queso cheddar",
          "Queso dambo",
          "Provoleta al oregano",
          "Queso suizo"
        ],
        "respuesta_correcta": "Queso dambo"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa Quesodape?",
        "respuestas": [
          "Hamburguesa TRIPLE carne de 100 g provoleta al oregano queso Lincoln, y provola ahumada",
          "Hamburguesa TRIPLE carne de 100 g provoleta al oregano queso Lincoln, y queso cheddar",
          "Hamburguesa TRIPLE carne de 100 g provoleta al oregano queso Lincoln, y queso dambo",
          "Hamburguesa TRIPLE carne de 100 g provoleta al oregano queso Lincoln, y queso suizo"
        ],
        "respuesta_correcta": "Hamburguesa TRIPLE carne de 100 g provoleta al oregano queso Lincoln, y provola ahumada"
      },
      {
        "pregunta": "¿Cuántas capas de carne tiene la hamburguesa Quesodape?",
        "respuestas": [
          "Una",
          "Dos",
          "Tres",
          "Cuatro"
        ],
        "respuesta_correcta": "Tres"
      },
      {
        "pregunta": "¿Qué ingredientes tiene la hamburguesa TDN Sin TACC?",
        "respuestas": [
          "Hamburguesa doble carne de 100 g, doble cheddar, lechuga, tomate, cebolla morada, pepinos agridulces, mayonesa y ketchup",
          "Hamburguesa doble carne de 100 g, doble cheddar, lechuga, tomate, cebolla caramelizada, pepinos agridulces, mayonesa y ketchup",
          "Hamburguesa doble carne de 100 g, doble cheddar, lechuga, tomate, cebolla morada, pepinillos, mayonesa y ketchup",
          "Hamburguesa doble carne de 100 g, doble cheddar, lechuga, tomate, cebolla morada, pepinos agridulces y salsa barbacoa"
        ],
        "respuesta_correcta": "Hamburguesa doble carne de 100 g, doble cheddar, lechuga, tomate, cebolla morada, pepinos agridulces, mayonesa y ketchup"
      },
      {
        "pregunta": "¿Cuántas capas de queso cheddar tiene la hamburguesa TDN Sin TACC?",
        "respuestas": [
          "Una",
          "Dos",
          "Tres",
          "Cuatro"
        ],
        "respuesta_correcta": "Dos"
      },
      {
        "pregunta": "¿Qué ingredientes tiene el CCC Sandwich?",
        "respuestas": [
          "Pollo frito crocante estilo New Orleans, lechuga y alioli",
          "Pollo frito crocante estilo New Orleans, lechuga y mayonesa",
          "Pollo frito crocante estilo New Orleans, lechuga y salsa barbacoa",
          "Pollo frito crocante estilo New Orleans, lechuga y ketchup"
        ],
        "respuesta_correcta": "Pollo frito crocante estilo New Orleans, lechuga y alioli"
      },
      {
        "pregunta": "¿De qué estilo es el pollo frito en el CCC Sandwich?",
        "respuestas": [
          "Estilo Kentucky",
          "Estilo New Orleans",
          "Estilo Nashville",
          "Estilo Memphis"
        ],
        "respuesta_correcta": "Estilo New Orleans"
      },
      {
        "pregunta": "¿Qué ingredientes tiene el Grand CCC?",
        "respuestas": [
          "Pollo frito crocante estilo New Orleans, queso cheddar, panceta lechuga, tomate y aderezo de mostaza dulce",
          "Pollo frito crocante estilo New Orleans, queso cheddar, panceta lechuga, tomate y aderezo de mostaza picante",
          "Pollo frito crocante estilo New Orleans, queso cheddar, panceta lechuga, tomate y mayonesa",
          "Pollo frito crocante estilo New Orleans, queso cheddar, panceta lechuga, tomate y salsa barbacoa"
        ],
        "respuesta_correcta": "Pollo frito crocante estilo New Orleans, queso cheddar, panceta lechuga, tomate y aderezo de mostaza dulce"
      },
      {
        "pregunta": "¿De qué estilo es el pollo frito en el Grand CCC?",
        "respuestas": [
          "Estilo Kentucky",
          "Estilo New Orleans",
          "Estilo Nashville",
          "Estilo Memphis"
        ],
        "respuesta_correcta": "Estilo New Orleans"
      },
      {
        "pregunta": "¿Qué ingredientes tiene el Lucky Loin?",
        "respuestas": [
          "Lomo a la plancha con queso Lincoln, lechuga, tomate y mayonesa ahumada",
          "Lomo a la plancha con queso Lincoln, lechuga, tomate y mayonesa",
          "Lomo a la plancha con queso Lincoln, lechuga, tomate y salsa barbacoa",
          "Lomo a la plancha con queso Lincoln, lechuga, tomate y ketchup"
        ],
        "respuesta_correcta": "Lomo a la plancha con queso Lincoln, lechuga, tomate y mayonesa ahumada"
      },
      {
        "pregunta": "¿Qué tipo de queso lleva el Lucky Loin?",
        "respuestas": [
          "Queso cheddar",
          "Queso dambo",
          "Queso Lincoln",
          "Queso suizo"
        ],
        "respuesta_correcta": "Queso Lincoln"
      },
      {
        "pregunta": "¿Qué ingredientes tiene el Bubba Sandwich?",
        "respuestas": [
          "Langostinos crujientes con lechuga, cebolla morada y aderezo 1000 islas",
          "Langostinos crujientes con lechuga, cebolla caramelizada y aderezo 1000 islas",
          "Langostinos crujientes con lechuga, cebolla morada y mayonesa",
          "Langostinos crujientes con lechuga, cebolla morada y salsa barbacoa"
        ],
        "respuesta_correcta": "Langostinos crujientes con lechuga, cebolla morada y aderezo 1000 islas"
      },
      {
        "pregunta": "¿Qué tipo de aderezo lleva el Bubba Sandwich?",
        "respuestas": [
          "Aderezo 1000 islas",
          "Mayonesa",
          "Salsa barbacoa",
          "Ketchup"
        ],
        "respuesta_correcta": "Aderezo 1000 islas"
      }
    ]
  }

  const q = JSON.stringify(questions)

  return {
    statusCode: 200,
    body: q,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  }
}