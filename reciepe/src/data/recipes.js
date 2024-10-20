// src/data/recipes.js
const recipes = {
    breakfast: [
      { 
        name: "Masala Dosa", 
        ingredients: ["rice", "lentils", "potato", "onions", "spices", "oil"],
        preparation: `1. Soak rice and lentils overnight in water.
        2. Grind the soaked rice and lentils to a smooth batter, adding water as needed.
        3. Let the batter ferment for 8 hours or overnight.
        4. Boil and mash the potatoes, then mix in sautéed onions and spices.
        5. Heat a non-stick griddle and spread a ladleful of batter in a circular shape.
        6. Cook until golden brown, then add the potato filling and fold.`
      },
      { 
        name: "Upma", 
        ingredients: ["semolina", "mixed vegetables", "mustard seeds", "curry leaves", "oil", "water"],
        preparation: `1. Heat oil in a pan and add mustard seeds.
        2. Once they splutter, add curry leaves and mixed vegetables.
        3. Sauté for a few minutes, then add water and bring to a boil.
        4. Gradually add semolina while stirring continuously to avoid lumps.
        5. Cook until the semolina absorbs water and is fluffy.`
      },
    ],
    salads: [
      { 
        name: "Kachumber Salad", 
        ingredients: ["cucumber", "tomato", "onion", "lemon", "salt"],
        preparation: `1. Chop cucumber, tomato, and onion into small pieces.
        2. Mix them in a bowl and add salt to taste.
        3. Squeeze fresh lemon juice over the salad and mix well.`
      },
      { 
        name: "Pineapple Raita", 
        ingredients: ["pineapple", "yogurt", "coriander", "salt"],
        preparation: `1. Chop pineapple into small pieces.
        2. In a bowl, mix chopped pineapple with yogurt.
        3. Add salt and finely chopped coriander.
        4. Mix well and serve chilled.`
      },
    ],
    appetizers: [
      { 
        name: "Samosa", 
        ingredients: ["potatoes", "peas", "spices", "flour", "oil"],
        preparation: `1. Boil and mash potatoes; mix in boiled peas and spices.
        2. Make a dough with flour and water, let it rest for 30 minutes.
        3. Roll out the dough and cut into circles, fill with potato mixture, and fold.
        4. Deep fry in hot oil until golden brown.`
      },
      { 
        name: "Paneer Tikka", 
        ingredients: ["paneer", "yogurt", "spices", "bell peppers", "onions"],
        preparation: `1. Cut paneer and vegetables into cubes.
        2. Marinate them in yogurt mixed with spices for at least 1 hour.
        3. Skewer paneer and vegetables alternatively and grill or bake until charred.`
      },
    ],
    soups: [
      { 
        name: "Tomato Soup", 
        ingredients: ["tomatoes", "onion", "garlic", "spices", "cream"],
        preparation: `1. Sauté chopped onions and garlic in a pan until golden.
        2. Add chopped tomatoes and cook until soft.
        3. Blend the mixture to a smooth consistency and return to the pan.
        4. Add spices and cream; simmer for a few minutes before serving.`
      },
      { 
        name: "Dal Soup", 
        ingredients: ["lentils", "water", "onions", "spices"],
        preparation: `1. Wash and cook lentils with water until soft.
        2. In a separate pan, sauté chopped onions and spices until golden.
        3. Add the cooked lentils to the onion mixture and blend for a smooth consistency.
        4. Adjust the consistency with water if needed and simmer before serving.`
      },
    ],
    desserts: [
      { 
        name: "Gulab Jamun", 
        ingredients: ["milk powder", "flour", "baking soda", "sugar", "water", "oil"],
        preparation: `1. Mix milk powder, flour, and baking soda to form a dough.
        2. Shape the dough into small balls.
        3. Heat oil and deep fry the balls until golden brown.
        4. Soak them in a sugar syrup (made with water and sugar) after frying.`
      },
      { 
        name: "Rasmalai", 
        ingredients: ["paneer", "milk", "sugar", "cardamom", "saffron"],
        preparation: `1. Boil milk and reduce it to half, then add sugar and cardamom.
        2. Make paneer from milk and form small discs.
        3. Add the discs to the boiling milk and simmer for 10 minutes.
        4. Garnish with saffron and serve chilled.`
      },
    ],
    beverages: [
      { 
        name: "Masala Chai", 
        ingredients: ["tea leaves", "milk", "water", "spices", "sugar"],
        preparation: `1. Boil water and add tea leaves and spices.
        2. Let it simmer for a few minutes, then add milk and sugar.
        3. Boil again and strain into cups.`
      },
      { 
        name: "Lassi", 
        ingredients: ["yogurt", "water", "sugar", "cardamom"],
        preparation: `1. Blend yogurt with water and sugar until smooth.
        2. Add cardamom for flavor and serve chilled.`
      },
    ],
    mainDishes: [
      { 
        name: "Biryani", 
        ingredients: ["rice", "chicken", "spices", "onion", "yogurt"],
        preparation: `1. Marinate chicken with yogurt and spices for 1 hour.
        2. In a pot, layer partially cooked rice and marinated chicken.
        3. Cook on low heat until the chicken is tender and rice is fully cooked.`
      },
      { 
        name: "Paneer Butter Masala", 
        ingredients: ["paneer", "tomato", "cream", "butter", "spices"],
        preparation: `1. Sauté chopped tomatoes and spices until soft.
        2. Blend to a smooth paste, then return to the pan.
        3. Add paneer cubes and cream; simmer until heated through.`
      },
    ],
    snacks: [
      { 
        name: "Pakoras", 
        ingredients: ["gram flour", "potatoes", "spices", "oil"],
        preparation: `1. Slice potatoes and coat with a batter made from gram flour and spices.
        2. Deep fry until crispy and golden brown.`
      },
      { 
        name: "Bhujia", 
        ingredients: ["gram flour", "spices", "oil"],
        preparation: `1. Prepare a dough with gram flour and spices.
        2. Use a sev maker to fry into thin strands until crispy.`
      },
    ],
  };
  
  export default recipes;
  