var recipes = [
    {
        name: "BBQ Pulled Pork",
        img_name: 'bbq',
        tags: ['Easy', 'American'],
        description: 'Slow-cooked tender pork in smoky barbecue sauce',
        rate: 4.7,
        reviews: 412,
        prep_time: 15,
        cook_time: 240,
        servings: 4,

        ingredients: [
            '1kg pork shoulder',
            '1 cup BBQ sauce',
            '1/2 cup apple cider vinegar',
            '2 tablespoons brown sugar',
            '1 tablespoon paprika',
            '1 tablespoon garlic powder',
            'Burger buns',
            'Coleslaw for serving'
        ],

        instructions: [
            'Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.',
            'Place pork in slow cooker with apple cider vinegar and 1/2 cup water.',
            'Cook on low for 8 hours or high for 4 hours until meat is very tender.',
            'Remove pork and shred with two forks. Discard excess fat.',
            'Return shredded pork to slow cooker, mix with BBQ sauce.',
            'Serve on toasted buns with coleslaw on top.'
        ],

        nutrision: {
            calories: 620,
            protein: 48,
            carbs: 52,
            fat: 22,
            fiber: 3,
            sodium: 1180
        },

        chefs_tips: [
            'Use pork shoulder for best results - it stays moist',
            'Let pork rest before shredding for juicier meat',
            'Make your own BBQ sauce for better flavor',
            'Leftovers freeze well for up to 3 months'
        ]
    },

    {
        name: "Honey Garlic Salmon",
        img_name: 'salmon',
        tags: ['Easy', 'Seafood'],
        description: 'Pan-seared salmon with a sweet and savory glaze',
        rate: 4.9,
        reviews: 187,
        prep_time: 10,
        cook_time: 15,
        servings: 2,

        ingredients: [
            '2 salmon fillets',
            '3 tablespoons honey',
            '2 tablespoons soy sauce',
            '4 cloves garlic',
            '1 tablespoon olive oil',
            '1 teaspoon ginger',
            'Sesame seeds',
            'Green onions'
        ],

        instructions: [
            'Pat salmon fillets dry and season with salt and pepper.',
            'Mix honey, soy sauce, garlic, and ginger.',
            'Heat olive oil in a skillet.',
            'Cook salmon for 4-5 minutes on each side.',
            'Pour sauce over salmon and let it caramelize.',
            'Serve with vegetables or rice.'
        ],

        nutrision: {
            calories: 380,
            protein: 35,
            carbs: 28,
            fat: 14,
            fiber: 0,
            sodium: 720
        },

        chefs_tips: [
            'Do not overcook salmon',
            'Use fresh garlic for best flavor',
            'Serve immediately while hot'
        ]
    },

    {
        name: "Margherita Pizza",
        img_name: 'pizza',
        tags: ['Intermediate', 'Italian'],
        description: 'Classic Italian pizza with fresh mozzarella and basil',
        rate: 4.9,
        reviews: 512,
        prep_time: 90,
        cook_time: 12,
        servings: 2,

        ingredients: [
            '300g pizza dough',
            '200g crushed tomatoes',
            '250g mozzarella',
            'Fresh basil',
            'Olive oil',
            'Garlic',
            'Parmesan cheese'
        ],

        instructions: [
            'Let dough rest for 1 hour.',
            'Preheat oven to maximum temperature.',
            'Prepare tomato sauce.',
            'Roll out dough.',
            'Add sauce and toppings.',
            'Bake until crust is golden.'
        ],

        nutrision: {
            calories: 580,
            protein: 24,
            carbs: 68,
            fat: 22,
            fiber: 4,
            sodium: 920
        },

        chefs_tips: [
            'Use a pizza stone for crispier crust',
            'Do not overload toppings',
            'Add basil after baking'
        ]
    },

    {
        name: "Pad Thai",
        img_name: 'padthai',
        tags: ['Intermediate', 'Asian'],
        description: 'Popular Thai stir-fried noodles with shrimp and peanuts',
        rate: 4.8,
        reviews: 445,
        prep_time: 20,
        cook_time: 15,
        servings: 2,

        ingredients: [
            '200g rice noodles',
            '200g shrimp',
            '2 eggs',
            '3 tablespoons tamarind paste',
            '2 tablespoons fish sauce',
            'Bean sprouts',
            'Crushed peanuts'
        ],

        instructions: [
            'Soak noodles in warm water.',
            'Prepare sauce mixture.',
            'Cook eggs and shrimp.',
            'Add noodles and sauce.',
            'Mix everything together.',
            'Serve with peanuts and lime.'
        ],

        nutrision: {
            calories: 540,
            protein: 32,
            carbs: 62,
            fat: 16,
            fiber: 4,
            sodium: 1120
        },

        chefs_tips: [
            'Do not oversoak noodles',
            'Cook on high heat',
            'Balance sweet and salty flavors'
        ]
    },

    {
        name: "Chicken Stir Fry",
        img_name: 'stirfry',
        tags: ['Easy', 'Asian'],
        description: 'Quick and healthy stir-fry with colorful vegetables',
        rate: 4.5,
        reviews: 324,
        prep_time: 15,
        cook_time: 15,
        servings: 4,

        ingredients: [
            '500g chicken breast',
            '2 bell peppers',
            '1 broccoli',
            '2 carrots',
            'Soy sauce',
            'Oyster sauce',
            'Garlic',
            'Fresh ginger'
        ],

        instructions: [
            'Prepare sauce mixture.',
            'Cook chicken until golden.',
            'Cook garlic and ginger.',
            'Add vegetables.',
            'Return chicken and add sauce.',
            'Serve with rice.'
        ],

        nutrision: {
            calories: 320,
            protein: 34,
            carbs: 18,
            fat: 12,
            fiber: 5,
            sodium: 840
        },

        chefs_tips: [
            'Cut ingredients before cooking',
            'Use high heat',
            'Do not overcrowd the pan'
        ]
    },
    {
        name: "Creamy Spaghetti Carbonara",
        img_name: 'Creamy_Spaghetti',
        tags: ['Easy', 'Italian'],
        description: 'A classic Italian pasta dish with eggs, cheese, and pancetta',
        rate: 4.8,
        reviews: 234,
        prep_time: 15,
        cook_time: 20,
        servings: 4,

        ingredients: [
            '400g spaghetti pasta',
            '200g pancetta or guanciale',
            '4 large eggs',
            '100g Pecorino Romano cheese',
            '50g Parmesan cheese',
            'Black pepper',
            'Salt'
        ],

        instructions: [
            'Boil salted water and cook spaghetti until al dente.',
            'Cook pancetta until crispy.',
            'Whisk eggs with cheeses and black pepper.',
            'Reserve pasta water before draining.',
            'Mix pasta with pancetta and egg mixture.',
            'Serve immediately with extra cheese.'
        ],

        nutrision: {
            calories: 520,
            protein: 28,
            carbs: 62,
            fat: 18,
            fiber: 3,
            sodium: 680
        },

        chefs_tips: [
            'Use room temperature eggs',
            'Work quickly to avoid scrambling eggs',
            'Reserve pasta water for creamy sauce',
            'Use freshly grated cheese'
        ]
    }
];

var cartona = ''
function changeRecipe() {
    var randomIndex = Math.floor(Math.random() * 6);
    cartona = `    
            <div class="meal  row  ">
                <div class="meal-img col-lg-5 px-0 position-relative ">
                    <img src="./images/${recipes[randomIndex].img_name}.png" alt="">
                    <div class="reviews px-3 py-2 rounded-5 bg-white shadow-lg">
                        <img src="./images/svg/svgexport-6.svg" alt="" class="reviews-icon">
                        <span class="fw-bold">${recipes[randomIndex].rate}</span>
                        <span class="text-muted">(${recipes[randomIndex].reviews} reviews)</span>
                    </div>
                    <div class="cook-info d-flex justify-content-between px-5 py-3 bg-white rounded-4  ">
                        <div class="prep-time d-flex flex-column gap-1 align-items-center">
                            <img src="./images/svg/svgexport-7.svg" alt="prep-time" class="cook-info-icon">
                            <p class="m-0 p-0" text-muted>Prep Time</p>
                            <span class="fw-bold">${recipes[randomIndex].prep_time} min </span>
                        </div>
                        <div class="cook-time d-flex flex-column gap-1 align-items-center">
                            <img src="./images/svg/svgexport-8.svg" alt="cook-time" class="cook-info-icon">
                            <p class="m-0 p-0 text-muted">Cook Time</p>
                            <span class="fw-bold">25${recipes[randomIndex].cook_time} min </span>
                        </div>
                        <div class="servings d-flex flex-column  gap-1 align-items-center">
                            <img src="./images/svg/svgexport-9.svg" alt="servings" class="cook-info-icon">
                            <p class="m-0 p-0 text-muted">Servings</p>
                            <span class="fw-bold">${recipes[randomIndex].servings} people </span>
                        </div>
                    </div>
                </div>
                <div class="meal-info col-lg-7 bg-white">
                    <div class="top">

                        <div class="meal-name  d-flex flex-column gap-2">
                            <div class="d-flex gap-2 align-items-center">
                                <span class="bg-success-subtle  text-success rounded-4 px-2  ">${recipes[randomIndex].tags[0]}</span>
                                <span class="bg-primary-subtle text-primary rounded-4 px-2  ">${recipes[randomIndex].tags[1]}</span>
                            </div>
                            <h3 class="fw-bold fs-1">${recipes[randomIndex].name}</h3>
                            <p class="text-muted fs-5">${recipes[randomIndex].description}</p>
                        </div>
                        <div class="meal-actions d-flex  gap-3">
                            <button><img src="./images/svg/svgexport-10.svg" alt=""></button>
                            <button><img src="./images/svg/svgexport-11.svg" alt=""></button>
                        </div>
                    </div>
                    <div class="bottom">
                        <ul class="nav d-flex justify-content-evenly  ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#ingredients-tab">
                                    <svg class=" svg-inline--fa fa-list-check" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="list-check" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
                                        </path>
                                    </svg>
                                    <span>Ingredients</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  " aria-current="page" href="#instructions-tab">
                                    <svg class="svg-inline--fa fa-book-open" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="book-open" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z">
                                        </path>
                                    </svg>
                                    <span>Instructions</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  " aria-current="page" href="#nutrisons-tab">
                                    <svg class="svg-inline--fa fa-chart-pie" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="chart-pie" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z">
                                        </path>
                                    </svg>
                                    <span>Nutrision</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  " aria-current="page" href="#chefs-tab">
                                    <svg class="svg-inline--fa fa-lightbulb" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="lightbulb" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z">
                                        </path>
                                    </svg>
                                    <span>Chef's Tips</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div id="ingredients-tab" class="section-tab">
                        <div class="tab-container">
                            <ul>
                               ${getIngredients(randomIndex)}
                            </ul>
                        </div>
                    </div>

                    <div id="instructions-tab" class="section-tab">
                        <div class="tab-container">
                            <ul>
                              ${getInstructions(randomIndex)}
                            </ul>
                        </div>
                    </div>

                    <div id="nutrisons-tab" class="section-tab">
                        <div class="tab-container  row px-2 g-2">

                            <div class=" col-md-6 p-2 ">
                                <div class="d-flex justify-content-between align-items-center nutrision-fact">
                                    <div class="d-flex gap-2 align-items-center">
                                        <div class="nutrision-icon bg-orange-100">
                                            <img src="./images/svg/svgexport-17.svg" alt="">
                                        </div>
                                        <span>Calories</span>
                                    </div>
                                    <span class="nutrision-value fw-bold">${recipes[randomIndex].nutrision.calories} kcal</span>
                                </div>

                            </div>
                            <div class=" col-md-6 p-2 ">
                                <div class="d-flex justify-content-between align-items-center nutrision-fact">
                                    <div class="d-flex gap-2 align-items-center">
                                        <div class="nutrision-icon bg-blue-100">
                                            <img src="./images/svg/svgexport-18.svg" alt="">
                                        </div>
                                        <span>Protein</span>
                                    </div>
                                    <span class="nutrision-value fw-bold">${recipes[randomIndex].nutrision.protein} g</span>
                                </div>

                            </div>
                            <div class=" col-md-6 p-2 ">
                                <div class="d-flex justify-content-between align-items-center nutrision-fact">
                                    <div class="d-flex gap-2 align-items-center">
                                        <div class="nutrision-icon bg-yellow-100">
                                            <img src="./images/svg/svgexport-19.svg" alt="">
                                        </div>
                                        <span>Carbohydrates</span>
                                    </div>
                                    <span class="nutrision-value fw-bold">${recipes[randomIndex].nutrision.carbs}g</span>
                                </div>

                            </div>
                            <div class=" col-md-6 p-2 ">
                                <div class="d-flex justify-content-between align-items-center nutrision-fact">
                                    <div class="d-flex gap-2 align-items-center">
                                        <div class="nutrision-icon bg-red-100">
                                            <img src="./images/svg/svgexport-20.svg" alt="">
                                        </div>
                                        <span>Fat</span>
                                    </div>
                                    <span class="nutrision-value fw-bold">${recipes[randomIndex].nutrision.fat}g</span>
                                </div>

                            </div>
                            <div class=" col-md-6 p-2 ">
                                <div class="d-flex justify-content-between align-items-center nutrision-fact">
                                    <div class="d-flex gap-2 align-items-center">
                                        <div class="nutrision-icon bg-green-100">
                                            <img src="./images/svg/svgexport-21.svg" alt="">
                                        </div>
                                        <span>Fiber</span>
                                    </div>
                                    <span class="nutrision-value fw-bold">${recipes[randomIndex].nutrision.fiber}g</span>
                                </div>

                            </div>
                            <div class=" col-md-6 p-2 ">
                                <div class="d-flex justify-content-between align-items-center nutrision-fact">
                                    <div class="d-flex gap-2 align-items-center">
                                        <div class="nutrision-icon bg-pink-100">
                                            <img src="./images/svg/svgexport-22.svg" alt="">
                                        </div>
                                        <span>Sodium</span>
                                    </div>
                                    <span class="nutrision-value fw-bold">${recipes[randomIndex].nutrision.Sodium}mg</span>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div id="chefs-tab" class="section-tab">
                        <div class="tab-container">
                            <ul>
                              ${getChefsTips(randomIndex)}
                            </ul>
                        </div>

                    </div>
                    <div class="change-recipe py-4 ">
                        <button onclick="changeRecipe()">
                            <img src="./images/svg/svgexport-24.svg" alt="try another recipe"
                                class="change-recipe-icon ">
                            <span>Try Another Recipe</span>
                        </button>
                    </div>
                </div>
            </div>
        `

    document.getElementById("recipient").innerHTML = cartona;
}

var getIngredients = function (index) {
    var ingredients = '';
    for (var i = 0; i < recipes[index].ingredients.length; i++) {
        ingredients += `
                              <li class="ingredient">
                                    <div class="num">
                                        ${i + 1}
                                    </div>
                                    <span class="descript">${recipes[index].ingredients[i]}</span>
                                </li>     
                     `
    }
    return ingredients;
}

var getInstructions = function (index) {
    var instructions = '';
    for (var i = 0; i < recipes[index].instructions.length; i++) {
        instructions += `
                 <li class="instruction">
                                    <div class="num">
                                        ${i + 1}
                                    </div>
                                    <span>${recipes[index].instructions[i]}</span>
                  </li>
                     `
    }
    return instructions;
}

var getChefsTips = function (index) {
    var tips = '';
    for (var i = 0; i < recipes[index].chefs_tips.length; i++) {
        tips += `
          <li>
                                    <img src="./images/svg/svgexport-23.svg" alt="" class="tick-icon">
                                    <span> ${recipes[index].chefs_tips[i]}</span>
                                </li>
        
        
           `
    }
    return tips;
}