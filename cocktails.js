const cocktailDatabase = [
  // ====================================================================
  // 100 SERIES: UNIVERSAL CLASSICS (Pre-1930s/Foundationals)
  // These are the elemental and most cited cocktails globally.
  // ====================================================================
  {
    id: 101,
    name: "Old Fashioned",
    ingredients: [
      "2 oz Bourbon or Rye whiskey",
      "1 sugar cube or 0.25 oz Rich Simple Syrup (2:1)",
      "2-3 dashes Angostura bitters",
      "Splash of water (optional, if using cube)",
      "Orange peel"
    ],
    instructions: "Muddle sugar cube/syrup and bitters in glass. Add whiskey and a large ice cube. Stir for 30-45 seconds until chilled and diluted. Express orange peel over the drink and garnish.",
    tags: ["whiskey", "classic", "stirred", "spirit-forward", "IBA"]
  },
  {
    id: 102,
    name: "Manhattan",
    ingredients: [
      "2 oz Rye or Bourbon whiskey",
      "1 oz Sweet Vermouth",
      "2 dashes Angostura bitters",
      "Maraschino cherry"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe or martini glass. Garnish with a cherry.",
    tags: ["whiskey", "classic", "stirred", "spirit-forward", "IBA"]
  },
  {
    id: 103,
    name: "Dry Martini",
    ingredients: [
      "2.5 oz Gin (London Dry)",
      "0.5 oz Dry Vermouth (adjust ratio to preference)",
      "1 dash Orange bitters (optional)",
      "Lemon twist or Olive"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until very cold. Strain into a chilled coupe. Garnish with a twist (expressed) or olive(s).",
    tags: ["gin", "classic", "stirred", "strong", "IBA"]
  },
  {
    id: 104,
    name: "Daiquiri (Classic)",
    ingredients: [
      "2 oz White Cuban-style Rum",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake vigorously until well-chilled. Double strain into a chilled coupe.",
    tags: ["rum", "classic", "shaken", "sour", "IBA"]
  },
  {
    id: 105,
    name: "Negroni",
    ingredients: [
      "1 oz Gin",
      "1 oz Campari",
      "1 oz Sweet Vermouth",
      "Orange peel"
    ],
    instructions: "Combine all ingredients in a rocks glass with a large ice cube. Stir briefly to chill. Garnish with an orange peel.",
    tags: ["gin", "classic", "stirred", "bitter", "IBA"]
  },
  {
    id: 106,
    name: "Whiskey Sour",
    ingredients: [
      "2 oz Bourbon",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "0.5 oz Egg White (optional, for 'Boston Sour')"
    ],
    instructions: "If using egg white, dry shake (without ice) first. Add ice and shake again until chilled. Strain over fresh ice in a rocks glass. Garnish with a lemon wheel and cherry.",
    tags: ["whiskey", "classic", "shaken", "sour", "IBA", "frothy"]
  },
  {
    id: 107,
    name: "Sidecar",
    ingredients: [
      "2 oz Cognac (VSOP or better)",
      "0.75 oz Cointreau (or other Triple Sec)",
      "0.75 oz Fresh lemon juice",
      "Sugar rim (optional)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe or sugar-rimmed glass.",
    tags: ["cognac", "classic", "shaken", "sour", "IBA"]
  },
  {
    id: 108,
    name: "Sazerac",
    ingredients: [
      "2 oz Rye whiskey or Cognac",
      "0.25 oz Simple Syrup (1:1)",
      "4-5 dashes Peychaud's Bitters",
      "Absinthe (rinse)",
      "Lemon peel"
    ],
    instructions: "Chill an Old Fashioned glass and rinse with absinthe, discarding excess. Stir whiskey, syrup, and bitters with ice in a mixing glass. Strain into the absinthe-rinsed glass. Express lemon peel over the drink and discard.",
    tags: ["whiskey", "classic", "stirred", "spirit-forward", "new-orleans"]
  },
  {
    id: 109,
    name: "Aviation",
    ingredients: [
      "2 oz Gin",
      "0.75 oz Fresh lemon juice",
      "0.5 oz Maraschino Liqueur",
      "0.25 oz Crème de Violette (or Crème d'Yvette)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. Garnish with a cherry (optional).",
    tags: ["gin", "classic", "shaken", "floral", "IBA"]
  },
  {
    id: 110,
    name: "French 75",
    ingredients: [
      "1 oz Gin",
      "0.5 oz Fresh lemon juice",
      "0.5 oz Simple Syrup (1:1)",
      "Top with Champagne or Dry Sparkling Wine"
    ],
    instructions: "Shake gin, lemon juice, and syrup with ice. Strain into a tall, chilled champagne flute. Top with sparkling wine. Garnish with a lemon twist.",
    tags: ["gin", "classic", "shaken", "effervescent", "IBA"]
  },

  // ====================================================================
  // 200 SERIES: MODERN CLASSICS (Post-1980s Renaissance)
  // Highly influential cocktails from the modern mixology era.
  // ====================================================================
  {
    id: 201,
    name: "Cosmopolitan",
    ingredients: [
      "1.5 oz Citrus Vodka",
      "0.75 oz Cointreau",
      "0.75 oz Fresh lime juice",
      "0.5 oz Cranberry juice",
      "Orange peel"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until well-chilled. Double strain into a chilled coupe. Garnish with an orange or lime twist.",
    tags: ["vodka", "modern", "shaken", "citrus", "IBA"]
  },
  {
    id: 202,
    name: "Espresso Martini",
    ingredients: [
      "1.5 oz Vodka",
      "1 oz Coffee Liqueur (e.g., Kahlúa)",
      "1 oz Freshly brewed espresso (chilled)",
      "0.5 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake very hard to create a thick foam. Double strain into a chilled coupe. Garnish with three coffee beans.",
    tags: ["vodka", "modern", "shaken", "caffeine", "IBA"]
  },
  {
    id: 203,
    name: "Penicillin",
    ingredients: [
      "2 oz Blended Scotch whisky",
      "0.75 oz Fresh lemon juice",
      "0.75 oz Honey-Ginger Syrup",
      "0.25 oz Islay single malt Scotch (float)",
      "Candied ginger"
    ],
    instructions: "Shake all but the Islay Scotch with ice. Double strain over a large ice cube in a rocks glass. Gently float the Islay Scotch on top. Garnish with candied ginger.",
    tags: ["scotch", "modern", "shaken", "ginger", "smoky"]
  },
  {
    id: 204,
    name: "Paper Plane",
    ingredients: [
      "0.75 oz Bourbon",
      "0.75 oz Aperol",
      "0.75 oz Amaro Nonino Quintessentia",
      "0.75 oz Fresh lemon juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. No garnish.",
    tags: ["bourbon", "modern", "shaken", "equal-parts", "bitter"]
  },
  {
    id: 205,
    name: "Bramble",
    ingredients: [
      "2 oz Gin (London Dry)",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "0.5 oz Crème de Mûre (float)",
      "Lemon slice and fresh blackberry"
    ],
    instructions: "Shake gin, lemon, and syrup with ice. Strain into a rocks glass filled with crushed ice. Drizzle Crème de Mûre over the top. Garnish with a lemon slice and blackberry.",
    tags: ["gin", "modern", "shaken", "fruit", "refreshing", "IBA"]
  },
  {
    id: 206,
    name: "Aperol Spritz",
    ingredients: [
      "3 oz Prosecco",
      "2 oz Aperol",
      "1 oz Soda Water",
      "Orange slice"
    ],
    instructions: "Build in a large wine glass over ice. Top with soda water. Garnish with an orange slice.",
    tags: ["aperitivo", "modern", "built", "effervescent", "IBA"]
  },
  {
    id: 207,
    name: "Gold Rush",
    ingredients: [
      "2 oz Bourbon",
      "0.75 oz Fresh lemon juice",
      "0.75 oz Honey Syrup (2:1 or 3:1 ratio)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until well-chilled. Double strain over a large ice cube in a rocks glass. Garnish with a lemon wheel (optional).",
    tags: ["bourbon", "modern", "shaken", "sour", "honey"]
  },

  // ====================================================================
  // 300 SERIES: FULL TIKI CANON (Essential Polynesian Classics)
  // Cocktails from Donn Beach and Trader Vic's, forming the core canon.
  // ====================================================================
  {
    id: 301,
    name: "Mai Tai (Trader Vic's 1944)",
    ingredients: [
      "2 oz Aged Jamaican Rum (e.g., Appleton Estate)",
      "0.75 oz Fresh lime juice",
      "0.5 oz Orgeat syrup",
      "0.5 oz Orange Curaçao (e.g., Pierre Ferrand)",
      "Mint sprig and spent lime shell"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake briefly. Pour unstrained into a rocks glass or tiki mug and fill with crushed ice. Garnish with a mint sprig and a spent lime shell.",
    tags: ["rum", "tiki", "shaken", "almond", "strong", "IBA"]
  },
  {
    id: 302,
    name: "Zombie (Donn Beach 1934)",
    ingredients: [
      "1.5 oz Aged Jamaican Rum",
      "1.5 oz Gold Puerto Rican Rum",
      "1 oz 151 proof Demerara Rum (float)",
      "0.75 oz Fresh lime juice",
      "0.5 oz Falernum",
      "0.5 oz Donn's Mix (2:1 Grapefruit Juice:Cinnamon Syrup)",
      "1 dash Angostura bitters",
      "1 tsp Grenadine"
    ],
    instructions: "Combine all but the 151 proof rum in a shaker with 6 oz of crushed ice. Shake briefly. Pour into a tall glass/tiki mug. Float the 151 proof rum. Garnish with a mint sprig and fruit.",
    tags: ["rum", "tiki", "shaken", "strong", "complex", "historical"]
  },
  {
    id: 303,
    name: "Jungle Bird",
    ingredients: [
      "1.5 oz Black Blended Rum (e.g., Blackstrap)",
      "1.5 oz Pineapple juice",
      "0.75 oz Campari",
      "0.5 oz Fresh lime juice",
      "0.5 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a rocks glass over a large ice cube. Garnish with a pineapple wedge/leaf.",
    tags: ["rum", "tiki", "shaken", "bitter", "sweet-tart"]
  },
  {
    id: 304,
    name: "Painkiller (Original 4:1:1:1 Ratio)",
    ingredients: [
      "2 oz Aged Dark Rum (e.g., Pusser's)",
      "4 oz Pineapple juice",
      "1 oz Cream of Coconut",
      "1 oz Orange juice",
      "Freshly grated nutmeg"
    ],
    instructions: "Combine all liquids in a shaker with ice. Shake until well-chilled. Strain over crushed ice in a tall glass. Garnish with a generous dusting of fresh nutmeg.",
    tags: ["rum", "tiki", "shaken", "creamy", "tropical"]
  },
  {
    id: 305,
    name: "Scorpion (Donn Beach)",
    ingredients: [
      "2 oz White Rum",
      "1 oz Brandy",
      "1 oz Fresh lemon juice",
      "0.5 oz Orange juice",
      "0.5 oz Orgeat syrup"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a large coupe or over crushed ice in a mug. Garnish with a mint sprig and fruit.",
    tags: ["rum", "tiki", "shaken", "nutty", "brandy"]
  },

  // ====================================================================
  // 400 SERIES: SIGNATURE / CONTEMPORARY ADDITIONS
  // Notable original drinks from the 1980s onward that have achieved canon status.
  // ====================================================================
  {
    id: 401,
    name: "Vieux Carré (1930s, elevated to Signature)",
    ingredients: [
      "0.75 oz Rye whiskey",
      "0.75 oz Cognac",
      "0.75 oz Sweet Vermouth",
      "1 tsp Bénédictine",
      "2 dashes Peychaud's bitters",
      "2 dashes Angostura bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until very cold. Strain into a rocks glass over a large ice cube. Garnish with a cherry or lemon twist.",
    tags: ["whiskey", "cognac", "signature", "stirred", "spirit-forward", "new-orleans"]
  },
  {
    id: 402,
    name: "Gin Gin Mule (Audrey Saunders, 2000)",
    ingredients: [
      "2 oz Gin (London Dry)",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)",
      "6-8 Fresh mint leaves",
      "Top with Ginger Beer"
    ],
    instructions: "Muddle mint leaves and syrup in a shaker. Add gin, lime juice, and ice. Shake briefly. Double strain into a copper mug or highball glass filled with fresh ice. Top with ginger beer. Garnish with a mint sprig.",
    tags: ["gin", "signature", "shaken", "refreshing", "mint", "ginger"]
  },
  {
    id: 403,
    name: "Naked and Famous (Joaquín Simó, 2011)",
    ingredients: [
      "0.75 oz Mezcal",
      "0.75 oz Aperol",
      "0.75 oz Yellow Chartreuse",
      "0.75 oz Fresh lime juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until well-chilled. Double strain into a chilled coupe. No garnish.",
    tags: ["mezcal", "signature", "shaken", "equal-parts", "herbal", "smoky"]
  },
  {
    id: 404,
    name: "Last Word (c. 1915, revived in 2004)",
    ingredients: [
      "0.75 oz Gin",
      "0.75 oz Green Chartreuse",
      "0.75 oz Maraschino Liqueur",
      "0.75 oz Fresh lime juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. No garnish.",
    tags: ["gin", "signature", "shaken", "equal-parts", "herbal", "revival"]
  },
  {
    id: 405,
    name: "Old Cuban (Audrey Saunders, 2001)",
    ingredients: [
      "1.5 oz Aged Cuban-style Rum",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)",
      "6-8 Mint leaves",
      "2 dashes Angostura bitters",
      "Top with Champagne or Dry Sparkling Wine"
    ],
    instructions: "Muddle mint, syrup, and bitters in a shaker. Add rum and lime juice. Shake briefly with ice. Double strain into a chilled coupe. Top with sparkling wine. Garnish with a large mint sprig.",
    tags: ["rum", "signature", "shaken", "mint", "effervescent"]
  },
  {
    id: 406,
    name: "Balsamic Vinegar Shrub (Example Template)",
    ingredients: [
      "2 oz Gin or Vodka",
      "1 oz Strawberry-Balsamic Shrub*",
      "0.75 oz Fresh lemon juice",
      "Soda Water (optional)"
    ],
    instructions: "Combine spirit, shrub, and lemon juice in a shaker with ice. Shake until chilled. Strain into a rocks glass over fresh ice. Top with soda water if desired.",
    tags: ["contemporary", "shaken", "shrub", "acidic", "seasonal"]
  },
  // Continuing the cocktailDatabase array...
// ====================================================================
// 500 SERIES: IBA OFFICIAL COCKTAILS (Categorized by IBA)
// The Unforgettables (Classic Foundational Drinks)
// ====================================================================
  {
    id: 501,
    name: "Alexander",
    ingredients: [
      "1.5 oz Cognac",
      "1 oz Dark Crème de Cacao",
      "1 oz Fresh Cream",
      "Nutmeg (garnish)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well until chilled. Double strain into a chilled coupe. Garnish with freshly grated nutmeg.",
    tags: ["cognac", "IBA", "unforgettable", "creamy", "dessert"]
  },
  {
    id: 502,
    name: "Americano",
    ingredients: [
      "1.5 oz Campari",
      "1.5 oz Sweet Red Vermouth",
      "Top with Soda Water",
      "Orange slice"
    ],
    instructions: "Build in a rocks glass with ice. Add Campari and Sweet Vermouth. Top with soda water. Garnish with an orange slice.",
    tags: ["aperitivo", "IBA", "unforgettable", "built", "bitter", "effervescent"]
  },
  {
    id: 503,
    name: "Angel Face",
    ingredients: [
      "1 oz Gin",
      "1 oz Apricot Brandy/Liqueur",
      "1 oz Calvados (Apple Brandy)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a chilled coupe.",
    tags: ["gin", "IBA", "unforgettable", "equal-parts", "shaken"]
  },
  {
    id: 504,
    name: "Aviation",
    ingredients: [
      "2 oz Gin",
      "0.5 oz Maraschino Liqueur",
      "0.5 oz Fresh lemon juice",
      "0.25 oz Crème de Violette (optional)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a chilled coupe.",
    tags: ["gin", "IBA", "unforgettable", "floral", "shaken"]
  },
  {
    id: 505,
    name: "Bee's Knees",
    ingredients: [
      "2 oz Gin",
      "0.75 oz Fresh lemon juice",
      "0.75 oz Honey Syrup (2:1 or 3:1 ratio)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a chilled coupe or over fresh ice in a rocks glass. Garnish with a lemon twist.",
    tags: ["gin", "IBA", "unforgettable", "sour", "honey", "shaken"]
  },
  {
    id: 506,
    name: "Between the Sheets",
    ingredients: [
      "1 oz White Rum",
      "1 oz Cognac",
      "1 oz Triple Sec (or Orange Liqueur)",
      "0.75 oz Fresh lemon juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well until chilled. Strain into a chilled coupe. Garnish with a lemon twist.",
    tags: ["rum", "cognac", "IBA", "unforgettable", "sour", "shaken"]
  },
  {
    id: 507,
    name: "Boulevardier",
    ingredients: [
      "1.5 oz Bourbon or Rye whiskey",
      "1 oz Sweet Red Vermouth",
      "1 oz Campari",
      "Orange peel"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe or over a large ice cube in a rocks glass. Garnish with an orange peel.",
    tags: ["whiskey", "IBA", "unforgettable", "stirred", "bitter"]
  },
  {
    id: 508,
    name: "Casino",
    ingredients: [
      "1.5 oz Gin",
      "0.5 oz Maraschino Liqueur",
      "0.5 oz Fresh lemon juice",
      "2 dashes Orange Bitters"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. Garnish with a lemon twist.",
    tags: ["gin", "IBA", "unforgettable", "sour", "shaken"]
  },
  {
    id: 509,
    name: "Clover Club",
    ingredients: [
      "1.5 oz Gin",
      "0.5 oz Dry Vermouth",
      "0.5 oz Raspberry Syrup (or Grenadine)",
      "0.5 oz Fresh lemon juice",
      "1 Egg White"
    ],
    instructions: "Dry shake (without ice) all ingredients vigorously. Add ice and shake again until chilled. Double strain into a chilled coupe. Garnish with a raspberry.",
    tags: ["gin", "IBA", "unforgettable", "frothy", "fruit"]
  },
  {
    id: 510,
    name: "Corpse Reviver #2",
    ingredients: [
      "0.75 oz Gin",
      "0.75 oz Lillet Blanc (or Cocchi Americano)",
      "0.75 oz Triple Sec (or Orange Liqueur)",
      "0.75 oz Fresh lemon juice",
      "Absinthe (rinse)"
    ],
    instructions: "Rinse chilled coupe with absinthe, discarding excess. Combine remaining ingredients in a shaker with ice. Shake until chilled. Double strain into the rinsed coupe.",
    tags: ["gin", "IBA", "unforgettable", "equal-parts", "absinthe"]
  },
  {
    id: 511,
    name: "Gin Fizz",
    ingredients: [
      "1.5 oz Gin",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "Top with Soda Water"
    ],
    instructions: "Combine gin, lemon juice, and syrup in a shaker with ice. Shake well. Strain into a chilled highball glass. Top with soda water.",
    tags: ["gin", "IBA", "unforgettable", "fizz", "refreshing"]
  },
  {
    id: 512,
    name: "Hanky Panky",
    ingredients: [
      "1.5 oz Gin (London Dry)",
      "1.5 oz Sweet Red Vermouth",
      "2 dashes Fernet-Branca",
      "Orange peel"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with an orange peel.",
    tags: ["gin", "IBA", "unforgettable", "stirred", "bitter", "spirit-forward"]
  },
  {
    id: 513,
    name: "Last Word",
    ingredients: [
      "0.75 oz Gin",
      "0.75 oz Green Chartreuse",
      "0.75 oz Maraschino Liqueur",
      "0.75 oz Fresh lime juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe.",
    tags: ["gin", "IBA", "unforgettable", "equal-parts", "herbal"]
  },
  {
    id: 514,
    name: "Manhattan",
    ingredients: [
      "2 oz Rye or Bourbon whiskey",
      "1 oz Sweet Vermouth",
      "2 dashes Angostura bitters",
      "Maraschino cherry"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe or martini glass. Garnish with a cherry.",
    tags: ["whiskey", "IBA", "unforgettable", "stirred", "spirit-forward"]
  },
  {
    id: 515,
    name: "Martinez",
    ingredients: [
      "1.5 oz Gin (Old Tom is traditional)",
      "1.5 oz Sweet Red Vermouth",
      "0.25 oz Maraschino Liqueur",
      "2 dashes Orange Bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a lemon twist.",
    tags: ["gin", "IBA", "unforgettable", "stirred", "spirit-forward", "precursor"]
  },
  {
    id: 516,
    name: "Mary Pickford",
    ingredients: [
      "1.5 oz White Rum",
      "1.5 oz Fresh pineapple juice",
      "0.5 oz Grenadine",
      "0.25 oz Maraschino Liqueur"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a chilled coupe. Garnish with a cherry.",
    tags: ["rum", "IBA", "unforgettable", "fruit", "shaken"]
  },
  {
    id: 517,
    name: "Mint Julep",
    ingredients: [
      "2 oz Bourbon",
      "0.5 oz Simple Syrup (1:1)",
      "8-10 Fresh mint leaves",
      "Mint sprig"
    ],
    instructions: "Gently muddle mint leaves and syrup in a Julep cup or rocks glass. Add Bourbon and fill the glass with crushed ice. Stir until the glass is frosty. Garnish with a large mint bouquet.",
    tags: ["bourbon", "IBA", "unforgettable", "mint", "crushed-ice"]
  },
  {
    id: 518,
    name: "Negroni",
    ingredients: [
      "1 oz Gin",
      "1 oz Campari",
      "1 oz Sweet Red Vermouth",
      "Orange peel"
    ],
    instructions: "Combine all ingredients in a rocks glass with a large ice cube. Stir briefly to chill. Garnish with an orange peel.",
    tags: ["gin", "IBA", "unforgettable", "stirred", "bitter"]
  },
  {
    id: 519,
    name: "Old Fashioned",
    ingredients: [
      "2 oz Bourbon or Rye whiskey",
      "1 sugar cube or 0.25 oz Rich Simple Syrup (2:1)",
      "2-3 dashes Angostura bitters",
      "Orange peel"
    ],
    instructions: "Muddle sugar cube/syrup and bitters in glass. Add whiskey and a large ice cube. Stir until chilled and diluted. Express orange peel over the drink and garnish.",
    tags: ["whiskey", "IBA", "unforgettable", "stirred", "spirit-forward"]
  },
  {
    id: 520,
    name: "Ramos Gin Fizz",
    ingredients: [
      "2 oz Gin",
      "1 oz Fresh lime juice",
      "0.5 oz Fresh lemon juice",
      "1 oz Simple Syrup (1:1)",
      "2 oz Heavy Cream",
      "1 Egg White",
      "3 dashes Orange Flower Water",
      "Top with Soda Water"
    ],
    instructions: "Combine all but soda in a shaker (no ice). Dry shake vigorously for 1 minute. Add ice and shake *very* vigorously for 2-3 minutes. Strain into a chilled highball glass. Gently top with soda water until the foam rises.",
    tags: ["gin", "IBA", "unforgettable", "fizz", "frothy", "creamy"]
  },
  {
    id: 521,
    name: "Rusty Nail",
    ingredients: [
      "2 oz Scotch whisky (Blended)",
      "1 oz Drambuie (Scotch Whisky Liqueur)",
      "Lemon twist (garnish)"
    ],
    instructions: "Combine both ingredients in a mixing glass with ice. Stir until well-chilled. Strain over a large ice cube in a rocks glass. Garnish with a lemon twist.",
    tags: ["scotch", "IBA", "unforgettable", "stirred", "sweet", "spirit-forward"]
  },
  {
    id: 522,
    name: "Sazerac",
    ingredients: [
      "2 oz Rye whiskey or Cognac",
      "0.25 oz Simple Syrup (1:1)",
      "4-5 dashes Peychaud's Bitters",
      "Absinthe (rinse)",
      "Lemon peel"
    ],
    instructions: "Chill an Old Fashioned glass and rinse with absinthe, discarding excess. Stir whiskey, syrup, and bitters with ice in a mixing glass. Strain into the absinthe-rinsed glass. Express lemon peel over the drink and discard.",
    tags: ["whiskey", "IBA", "unforgettable", "stirred", "spirit-forward"]
  },
  {
    id: 523,
    name: "Sidecar",
    ingredients: [
      "2 oz Cognac (VSOP)",
      "1 oz Cointreau (or other Triple Sec)",
      "0.75 oz Fresh lemon juice",
      "Sugar rim (optional)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe (with optional sugar rim).",
    tags: ["cognac", "IBA", "unforgettable", "sour", "shaken"]
  },
  {
    id: 524,
    name: "Stinger",
    ingredients: [
      "2 oz Cognac (VSOP)",
      "1 oz White Crème de Menthe"
    ],
    instructions: "Combine both ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe or over crushed ice in a rocks glass.",
    tags: ["cognac", "IBA", "unforgettable", "stirred", "mint", "spirit-forward"]
  },
  {
    id: 525,
    name: "Tuxedo",
    ingredients: [
      "1.5 oz Gin",
      "1.5 oz Dry Vermouth",
      "0.25 oz Maraschino Liqueur",
      "1 dash Absinthe",
      "2 dashes Orange Bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a cherry and a lemon twist.",
    tags: ["gin", "IBA", "unforgettable", "stirred", "absinthe"]
  },

// ====================================================================
// Contemporary Classics (Post-Prohibition to 1980s)
// ====================================================================
  {
    id: 551,
    name: "B52 (Layered Shot)",
    ingredients: [
      "1 oz Kahlúa (or Coffee Liqueur)",
      "1 oz Baileys Irish Cream",
      "1 oz Grand Marnier (or Orange Liqueur)"
    ],
    instructions: "Layer ingredients sequentially into a shot glass: Kahlúa first, then Baileys, then Grand Marnier (gently poured over the back of a spoon). Serve immediately (often flamed).",
    tags: ["liqueur", "IBA", "contemporary-classic", "layered", "dessert"]
  },
  {
    id: 552,
    name: "Bellini",
    ingredients: [
      "3.5 oz Prosecco (or Sparkling Wine)",
      "2 oz Fresh Peach Purée (or Nectar)"
    ],
    instructions: "Pour peach purée into a chilled Champagne flute. Gently top with Prosecco. Stir slowly. No garnish (unless a small peach slice is used).",
    tags: ["sparkling", "IBA", "contemporary-classic", "fruit", "built"]
  },
  {
    id: 553,
    name: "Black Russian",
    ingredients: [
      "1.5 oz Vodka",
      "0.75 oz Coffee Liqueur (e.g., Kahlúa)"
    ],
    instructions: "Pour both ingredients over ice in an Old Fashioned glass. Stir briefly.",
    tags: ["vodka", "IBA", "contemporary-classic", "stirred", "dessert"]
  },
  {
    id: 554,
    name: "Bloody Mary",
    ingredients: [
      "1.5 oz Vodka",
      "3 oz Tomato juice",
      "0.5 oz Fresh lemon juice",
      "4 dashes Worcestershire sauce",
      "2 dashes Hot sauce (e.g., Tabasco)",
      "Pinch of Salt and Pepper"
    ],
    instructions: "Combine all ingredients in a mixing glass (or shaker) with ice. Roll (gently pour back and forth) to mix and chill. Pour into a highball glass. Garnish with a celery stick and lemon wedge.",
    tags: ["vodka", "IBA", "contemporary-classic", "savory", "built"]
  },
  {
    id: 555,
    name: "Caipirinha",
    ingredients: [
      "2 oz Cachaça",
      "1/2 Lime, cut into wedges",
      "2 tsp Sugar (or 0.5 oz Simple Syrup)"
    ],
    instructions: "Muddle lime wedges and sugar in a rocks glass. Fill the glass with crushed ice. Add cachaça. Stir well. No garnish (lime wedges are left in).",
    tags: ["cachaca", "IBA", "contemporary-classic", "muddled", "sour"]
  },
  {
    id: 556,
    name: "Cosmopolitan",
    ingredients: [
      "1.5 oz Citrus Vodka",
      "0.75 oz Cointreau",
      "0.75 oz Fresh lime juice",
      "0.5 oz Cranberry juice",
      "Orange peel"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until well-chilled. Double strain into a chilled coupe. Garnish with an orange or lime twist.",
    tags: ["vodka", "IBA", "contemporary-classic", "citrus", "shaken"]
  },
  {
    id: 557,
    name: "Cuba Libre",
    ingredients: [
      "2 oz White or Aged Rum",
      "3.5 oz Cola (e.g., Coca-Cola)",
      "0.5 oz Fresh lime juice",
      "Lime wedge"
    ],
    instructions: "Squeeze fresh lime juice into a chilled highball glass. Drop the squeezed wedge in. Add ice and rum. Top with cola. Stir gently.",
    tags: ["rum", "IBA", "contemporary-classic", "highball", "built"]
  },
  {
    id: 558,
    name: "Daiquiri",
    ingredients: [
      "2 oz White Rum",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake vigorously until well-chilled. Double strain into a chilled coupe.",
    tags: ["rum", "IBA", "contemporary-classic", "sour", "shaken"]
  },
  {
    id: 559,
    name: "French 75",
    ingredients: [
      "1 oz Gin",
      "0.5 oz Fresh lemon juice",
      "0.5 oz Simple Syrup (1:1)",
      "Top with Champagne or Dry Sparkling Wine"
    ],
    instructions: "Shake gin, lemon juice, and syrup with ice. Strain into a tall, chilled champagne flute. Top with sparkling wine. Garnish with a lemon twist.",
    tags: ["gin", "IBA", "contemporary-classic", "effervescent", "shaken"]
  },
  {
    id: 560,
    name: "Long Island Iced Tea",
    ingredients: [
      "0.5 oz Vodka",
      "0.5 oz White Rum",
      "0.5 oz Gin",
      "0.5 oz Tequila (Blanco)",
      "0.5 oz Triple Sec",
      "1 oz Fresh lemon juice",
      "1 oz Simple Syrup (1:1)",
      "Top with Cola"
    ],
    instructions: "Combine all ingredients (except cola) in a highball glass with ice. Stir briefly. Top with cola. Garnish with a lemon wedge.",
    tags: ["mixed-spirit", "IBA", "contemporary-classic", "highball", "built"]
  },
  {
    id: 561,
    name: "Mai Tai",
    ingredients: [
      "1.5 oz Aged Jamaican Rum",
      "0.75 oz Fresh lime juice",
      "0.5 oz Orange Curaçao",
      "0.5 oz Orgeat Syrup"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake briefly. Pour unstrained into a rocks glass and fill with crushed ice. Garnish with a mint sprig and spent lime shell.",
    tags: ["rum", "IBA", "contemporary-classic", "tiki", "shaken"]
  },
  {
    id: 562,
    name: "Margarita",
    ingredients: [
      "2 oz Tequila (Blanco)",
      "1 oz Cointreau or other premium Orange Liqueur",
      "1 oz Fresh lime juice",
      "Salt for rim (optional)"
    ],
    instructions: "Rim glass with salt if desired. Combine ingredients in a shaker with ice. Shake until chilled. Strain into a chilled coupe or serve over fresh ice in a rocks glass. Garnish with a lime wedge.",
    tags: ["tequila", "IBA", "contemporary-classic", "sour", "shaken"]
  },
  {
    id: 563,
    name: "Mojito",
    ingredients: [
      "2 oz White Rum",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)",
      "8-10 Fresh mint leaves",
      "Top with Soda Water"
    ],
    instructions: "Gently muddle mint, syrup, and lime juice in a highball glass. Add rum and fill with crushed ice. Top with soda water and stir gently. Garnish with a large mint sprig.",
    tags: ["rum", "IBA", "contemporary-classic", "muddled", "refreshing"]
  },
  {
    id: 564,
    name: "Moscow Mule",
    ingredients: [
      "1.5 oz Vodka",
      "0.5 oz Fresh lime juice",
      "Top with Ginger Beer"
    ],
    instructions: "Build in a copper mug (or highball glass) with ice. Add vodka and lime juice. Top with ginger beer. Stir briefly. Garnish with a lime wedge.",
    tags: ["vodka", "IBA", "contemporary-classic", "ginger", "built"]
  },
  {
    id: 565,
    name: "Piña Colada",
    ingredients: [
      "2 oz White Rum",
      "1.5 oz Cream of Coconut",
      "1.5 oz Fresh pineapple juice",
      "0.5 oz Fresh lime juice (optional)"
    ],
    instructions: "Combine all ingredients in a blender with ice (or shake with crushed ice). Blend until smooth. Pour into a tall glass. Garnish with a pineapple wedge and cherry.",
    tags: ["rum", "IBA", "contemporary-classic", "creamy", "blended"]
  },
  {
    id: 566,
    name: "Pisco Sour",
    ingredients: [
      "2 oz Pisco",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)",
      "1 Egg White",
      "Angostura bitters (garnish)"
    ],
    instructions: "Dry shake (without ice) all ingredients vigorously. Add ice and shake again until chilled. Double strain into a chilled coupe. Dash Angostura bitters on the foam.",
    tags: ["pisco", "IBA", "contemporary-classic", "sour", "frothy"]
  },
  {
    id: 567,
    name: "Tequila Sunrise",
    ingredients: [
      "1.5 oz Tequila (Blanco)",
      "3.5 oz Orange juice",
      "0.5 oz Grenadine"
    ],
    instructions: "Build tequila and orange juice over ice in a highball glass. Do not stir. Gently pour grenadine down the side of the glass to create the 'sunrise' effect. Garnish with an orange slice and cherry.",
    tags: ["tequila", "IBA", "contemporary-classic", "sweet", "built"]
  },

// ====================================================================
// New Era Drinks (Post-2000 Bartender Creations/Revivals)
// ====================================================================
  {
    id: 571,
    name: "Bramble",
    ingredients: [
      "1.5 oz Gin (London Dry)",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "0.5 oz Crème de Mûre (float)"
    ],
    instructions: "Shake gin, lemon, and syrup with ice. Strain into a rocks glass filled with crushed ice. Drizzle Crème de Mûre over the top. Garnish with a lemon slice and fresh blackberry.",
    tags: ["gin", "IBA", "new-era", "fruit", "shaken"]
  },
  {
    id: 572,
    name: "Dark 'n' Stormy",
    ingredients: [
      "2 oz Dark/Blackstrap Rum (e.g., Gosling's Black Seal)",
      "Top with Ginger Beer",
      "Lime wedge"
    ],
    instructions: "Fill a highball glass with ice. Add ginger beer. Float the dark rum on top. Garnish with a lime wedge.",
    tags: ["rum", "IBA", "new-era", "ginger", "built", "highball"]
  },
  {
    id: 573,
    name: "Espresso Martini",
    ingredients: [
      "1.5 oz Vodka",
      "1 oz Coffee Liqueur",
      "1 oz Freshly brewed espresso (chilled)",
      "0.5 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake very hard to create a thick foam. Double strain into a chilled coupe. Garnish with three coffee beans.",
    tags: ["vodka", "IBA", "new-era", "caffeine", "shaken"]
  },
  {
    id: 574,
    name: "Jungle Bird",
    ingredients: [
      "1.5 oz Black Blended Rum",
      "1.5 oz Pineapple juice",
      "0.75 oz Campari",
      "0.5 oz Fresh lime juice",
      "0.5 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain over fresh ice in a rocks glass or serve up in a coupe. Garnish with a pineapple wedge/leaf.",
    tags: ["rum", "IBA", "new-era", "tiki", "bitter", "shaken"]
  },
  {
    id: 575,
    name: "New York Sour",
    ingredients: [
      "2 oz Rye or Bourbon whiskey",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "0.5 oz Dry Red Wine (float)",
      "Egg White (optional)"
    ],
    instructions: "Shake whiskey, lemon, and syrup (and egg white, if used) with ice. Strain over fresh ice in a rocks glass. Gently pour (float) the red wine over the back of a spoon so it sits on top.",
    tags: ["whiskey", "IBA", "new-era", "sour", "float"]
  },
  {
    id: 576,
    name: "Old Cuban",
    ingredients: [
      "1.5 oz Aged Rum",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)",
      "6-8 Mint leaves",
      "2 dashes Angostura bitters",
      "Top with Champagne or Dry Sparkling Wine"
    ],
    instructions: "Muddle mint, syrup, and bitters in a shaker. Add rum and lime juice. Shake briefly with ice. Double strain into a chilled coupe. Top with sparkling wine. Garnish with a large mint sprig.",
    tags: ["rum", "IBA", "new-era", "mint", "shaken", "effervescent"]
  },
  {
    id: 577,
    name: "Paper Plane",
    ingredients: [
      "0.75 oz Bourbon",
      "0.75 oz Aperol",
      "0.75 oz Amaro Nonino Quintessentia",
      "0.75 oz Fresh lemon juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. No garnish.",
    tags: ["bourbon", "IBA", "new-era", "equal-parts", "shaken"]
  },
  {
    id: 578,
    name: "Penicillin",
    ingredients: [
      "2 oz Blended Scotch whisky",
      "0.75 oz Fresh lemon juice",
      "0.75 oz Honey-Ginger Syrup",
      "0.25 oz Islay single malt Scotch (float)",
      "Candied ginger"
    ],
    instructions: "Shake all but the Islay Scotch with ice. Double strain over a large ice cube in a rocks glass. Gently float the Islay Scotch on top. Garnish with candied ginger.",
    tags: ["scotch", "IBA", "new-era", "ginger", "shaken", "smoky"]
  },
  {
    id: 579,
    name: "Tommy's Margarita",
    ingredients: [
      "2 oz Tequila (Blanco or Reposado)",
      "1 oz Fresh lime juice",
      "0.5 - 0.75 oz Agave Nectar (adjust to taste)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until well-chilled. Strain over fresh ice in a rocks glass. Garnish with a lime wedge.",
    tags: ["tequila", "IBA", "new-era", "sour", "agave", "shaken"]
  },
  {
    id: 580,
    name: "Vesper",
    ingredients: [
      "3 oz Gin",
      "1 oz Vodka",
      "0.5 oz Lillet Blanc (or Cocchi Americano)",
      "Lemon twist"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir or shake (as Bond preferred) until very cold. Strain into a chilled coupe. Garnish with a large lemon twist.",
    tags: ["gin", "vodka", "IBA", "new-era", "stirred", "spirit-forward"]
  },
// ====================================================================
// 600 SERIES: FULL TIKI CANON (Donn Beach & Trader Vic's Essentials)
// ====================================================================
  {
    id: 601,
    name: "Mai Tai (Trader Vic's 1944)",
    ingredients: [
      "2 oz Aged Jamaican Rum (e.g., Appleton Estate 12)",
      "0.75 oz Fresh lime juice",
      "0.5 oz Orgeat syrup",
      "0.5 oz Orange Curaçao (e.g., Pierre Ferrand)",
      "Mint sprig and spent lime shell"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake briefly. Pour unstrained into a rocks glass or tiki mug and top with crushed ice. Garnish with a mint sprig and a spent lime shell.",
    tags: ["rum", "tiki", "canonical", "shaken", "almond", "strong"]
  },
  {
    id: 602,
    name: "Zombie (Donn Beach 1934)",
    ingredients: [
      "1 oz Aged Jamaican Pot Still Rum",
      "1 oz Aged Gold Rum (e.g., Column Still)",
      "1 oz 151 proof Demerara Rum (float)",
      "0.75 oz Fresh lime juice",
      "0.5 oz Donn's Mix (2:1 Grapefruit Juice:Cinnamon Syrup)",
      "0.5 oz Falernum (velvet)",
      "1 barspoon Grenadine",
      "1 dash Angostura bitters"
    ],
    instructions: "Combine all but the 151 rum in a shaker with 6 oz of crushed ice (or flash blend). Pour into a tall glass or tiki mug. Float the 151 rum on top. Garnish with a mint sprig.",
    tags: ["rum", "tiki", "canonical", "shaken", "strong", "complex"]
  },
  {
    id: 603,
    name: "Navy Grog (Donn Beach)",
    ingredients: [
      "1 oz Aged Jamaican Rum",
      "1 oz Aged Demerara Rum",
      "1 oz White Rum (Cuban/Puerto Rican style)",
      "1 oz Fresh lime juice",
      "0.75 oz Honey Syrup (2:1 or 3:1)",
      "0.25 oz White Grapefruit juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well. Strain into a rocks glass over a large ice cube or into a tiki mug filled with crushed ice. Garnish with a wedge of lime.",
    tags: ["rum", "tiki", "canonical", "shaken", "honey", "strong"]
  },
  {
    id: 604,
    name: "Three Dots and a Dash (Donn Beach)",
    ingredients: [
      "1.5 oz Aged Rhum Agricole or Blended Aged Rum",
      "0.5 oz Aged Demerara Rum",
      "0.5 oz Allspice Dram",
      "0.5 oz Falernum (velvet)",
      "0.75 oz Fresh lime juice",
      "0.5 oz Fresh orange juice",
      "0.5 oz Honey Syrup (2:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well. Pour unstrained into a tiki mug and top with crushed ice. Garnish with three maraschino cherries and a pineapple wedge (The 'dots and a dash').",
    tags: ["rum", "tiki", "canonical", "shaken", "spiced", "complex"]
  },
  {
    id: 605,
    name: "Hurricane (Pat O'Brien's)",
    ingredients: [
      "2 oz Aged Jamaican Rum",
      "2 oz Light/Gold Rum",
      "1 oz Fresh lime juice",
      "1 oz Passion Fruit Syrup (commercial or homemade)",
      "1 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well until chilled. Strain into a Hurricane glass filled with ice. Garnish with an orange slice and a cherry.",
    tags: ["rum", "tiki", "canonical", "shaken", "fruit", "sweet"]
  },
  {
    id: 606,
    name: "Fog Cutter (Trader Vic's)",
    ingredients: [
      "1 oz Aged Gold Rum",
      "0.5 oz Gin",
      "0.5 oz Brandy (Cognac)",
      "2 oz Fresh orange juice",
      "1 oz Fresh lemon juice",
      "0.5 oz Orgeat syrup",
      "0.5 oz Sherry (float, Fino or Amontillado)"
    ],
    instructions: "Combine all but the sherry in a shaker with ice. Shake until chilled. Pour into a tall glass or tiki mug filled with crushed ice. Float the sherry on top. Garnish with a mint sprig.",
    tags: ["rum", "tiki", "canonical", "mixed-spirit", "float", "complex"]
  },
  {
    id: 607,
    name: "Jet Pilot (Donn Beach/Contemporary)",
    ingredients: [
      "1.5 oz Aged Jamaican Rum (high proof)",
      "0.5 oz Aged Rhum Agricole",
      "0.5 oz 151 proof Demerara Rum (optional, flash blend only)",
      "0.75 oz Fresh lime juice",
      "0.5 oz Donn's Mix (2:1 Grapefruit:Cinnamon Syrup)",
      "0.5 oz Falernum",
      "1 dash Angostura bitters",
      "1 dash Pernod or Absinthe (optional)"
    ],
    instructions: "Combine all ingredients in a shaker with 6 oz of crushed ice (or flash blend). Pour unstrained into a tiki mug. Garnish with a cherry and lime wheel.",
    tags: ["rum", "tiki", "canonical", "shaken", "strong", "spiced"]
  },
  {
    id: 608,
    name: "Test Pilot (Donn Beach)",
    ingredients: [
      "2 oz Aged Jamaican Rum (high proof)",
      "0.5 oz Triple Sec (or Orange Curaçao)",
      "0.5 oz Falernum",
      "0.75 oz Fresh lime juice",
      "1 dash Angostura bitters",
      "1 dash Pernod or Absinthe"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well. Double strain into a chilled coupe or over crushed ice in a rocks glass. Garnish with a lime wheel.",
    tags: ["rum", "tiki", "canonical", "shaken", "strong", "absinthe"]
  },
  {
    id: 609,
    name: "Blue Hawaii",
    ingredients: [
      "1.5 oz White Rum (or Vodka)",
      "1.5 oz Fresh pineapple juice",
      "0.75 oz Blue Curaçao",
      "0.75 oz Fresh lemon juice (or lime)",
      "Pineapple wedge and cherry"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well until chilled. Strain into a tall glass filled with ice. Garnish with a pineapple wedge and cherry.",
    tags: ["rum", "tiki", "canonical", "shaken", "blue", "tropical"]
  },
  {
    id: 610,
    name: "Shark's Tooth (Donn Beach)",
    ingredients: [
      "1.5 oz Aged Gold Rum",
      "0.75 oz Fresh lime juice",
      "0.75 oz Lemon juice",
      "1 oz Falernum",
      "1 tsp Grenadine"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well. Strain into a tall glass filled with crushed ice. Garnish with a mint sprig and/or a shark's tooth (if available!).",
    tags: ["rum", "tiki", "canonical", "shaken", "spiced", "sour"]
  },
  {
    id: 611,
    name: "Sidewinder's Fang",
    ingredients: [
      "2 oz Aged Gold Rum",
      "2 oz Fresh orange juice",
      "1 oz Fresh lime juice",
      "1 oz Passion Fruit Syrup",
      "0.5 oz Soda Water (float)"
    ],
    instructions: "Combine all but the soda in a shaker with ice. Shake until chilled. Pour unstrained into a tiki mug or glass. Top with a splash of soda water. Garnish with an orange slice.",
    tags: ["rum", "tiki", "canonical", "shaken", "fruit", "refreshing"]
  },
  {
    id: 612,
    name: "151 Swizzle (Donn Beach)",
    ingredients: [
      "3 oz 151 proof Demerara Rum",
      "1.5 oz Fresh lime juice",
      "1 oz Falernum (velvet)",
      "1 dash Angostura bitters"
    ],
    instructions: "Combine all ingredients in a tall glass or swizzle mug. Add crushed ice. Use a swizzle stick to quickly churn the drink until the glass is frosty. Top with more crushed ice. Garnish with mint.",
    tags: ["rum", "tiki", "canonical", "swizzle", "strong", "crushed-ice"]
  },
  {
    id: 613,
    name: "Pearl Diver (Donn Beach)",
    ingredients: [
      "2 oz Gold Blended Rum",
      "1 oz Fresh lime juice",
      "0.5 oz Orange juice",
      "0.5 oz Honey Syrup (2:1)",
      "0.5 oz Butter Mix (melted butter, allspice, vanilla)",
      "0.25 oz Falernum"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake hard. Pour unstrained into a tiki mug filled with crushed ice. Garnish with a mint sprig.",
    tags: ["rum", "tiki", "canonical", "shaken", "butter", "rich"]
  },
  {
    id: 614,
    name: "Missionary's Downfall (Donn Beach)",
    ingredients: [
      "2 oz White Rum (Cuban/Puerto Rican style)",
      "1 oz Fresh lime juice",
      "1 oz Honey Syrup (2:1)",
      "6-8 Mint leaves",
      "4-5 Fresh pineapple chunks",
      "Top with Club Soda (optional)"
    ],
    instructions: "Muddle mint and pineapple in a shaker. Add remaining ingredients (except soda) and ice. Flash blend or shake hard. Double strain into a coupe or tall glass with crushed ice. Top with soda if desired.",
    tags: ["rum", "tiki", "canonical", "muddled", "fruit", "mint"]
  },
  {
    id: 615,
    name: "Puka Punch (Donn Beach)",
    ingredients: [
      "1 oz Aged Jamaican Rum",
      "1 oz Aged Gold Rum",
      "1 oz Fresh grapefruit juice",
      "0.75 oz Fresh lime juice",
      "0.75 oz Passion Fruit Syrup",
      "0.5 oz Falernum",
      "0.25 oz Angostura bitters"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well. Strain into a tiki mug or glass filled with crushed ice. Garnish with an orange wheel.",
    tags: ["rum", "tiki", "canonical", "shaken", "complex", "spiced"]
  },
  // Continuing the cocktailDatabase array...
// ====================================================================
// 700 SERIES: FOUNDATIONAL FAMILIES & KEY VARIATIONS
// ====================================================================

// --- Gin & Whiskey Sour Variations (The Sour Family) ---
  {
    id: 701,
    name: "New York Sour (Classic Recipe)",
    ingredients: [
      "2 oz Rye or Bourbon whiskey",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "0.5 oz Dry Red Wine (float)",
      "Egg White (optional)"
    ],
    instructions: "Shake all ingredients (except wine) with ice. Strain over fresh ice in a rocks glass. Gently float the red wine over the back of a spoon so it sits on top. Garnish with a cherry.",
    tags: ["whiskey", "sour", "variation", "float", "egg-white", "IBA"]
  },
  {
    id: 702,
    name: "Amaretto Sour (Modern Balanced)",
    ingredients: [
      "1.5 oz Amaretto Liqueur",
      "1 oz High-Proof Bourbon (e.g., 100 proof)",
      "1 oz Fresh lemon juice",
      "0.5 oz Egg White (optional)",
      "Lemon wheel and cherry"
    ],
    instructions: "Combine all ingredients (including egg white, if used) in a shaker. Dry shake (no ice). Add ice and shake again until chilled. Strain over fresh ice in a rocks glass. Garnish with a lemon wheel and a cherry.",
    tags: ["liqueur", "sour", "variation", "balanced", "egg-white"]
  },
  {
    id: 703,
    name: "Sloe Gin Fizz",
    ingredients: [
      "2 oz Sloe Gin",
      "1 oz Fresh lemon juice",
      "0.5 oz Simple Syrup (1:1)",
      "Top with Soda Water",
      "Lemon slice"
    ],
    instructions: "Shake sloe gin, lemon juice, and syrup with ice. Strain into a chilled highball glass. Top with soda water. Stir gently. Garnish with a lemon slice.",
    tags: ["gin", "fizz", "variation", "shaken", "effervescent"]
  },
  {
    id: 704,
    name: "White Lady",
    ingredients: [
      "1.5 oz Gin",
      "0.75 oz Triple Sec (or Cointreau)",
      "0.75 oz Fresh lemon juice",
      "0.5 oz Egg White (optional)"
    ],
    instructions: "Combine all ingredients (including egg white, if used) in a shaker. Dry shake, then wet shake. Double strain into a chilled coupe. Garnish with a lemon twist.",
    tags: ["gin", "sour", "variation", "shaken", "IBA", "egg-white"]
  },
  {
    id: 705,
    name: "Vieux Carré",
    ingredients: [
      "0.75 oz Rye Whiskey",
      "0.75 oz Cognac (VSOP)",
      "0.75 oz Sweet Vermouth",
      "1 barspoon Bénédictine",
      "2 dashes Peychaud's Bitters",
      "2 dashes Angostura Bitters",
      "Lemon twist"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a rocks glass over a large ice cube. Garnish with a lemon twist.",
    tags: ["whiskey", "cognac", "stirred", "spirit-forward", "IBA", "New-Orleans"]
  },

// --- The 'Family' Templates (Cobblers, Swizzles, Juleps, etc.) ---
  {
    id: 706,
    name: "Whiskey Smash",
    ingredients: [
      "2 oz Bourbon or Rye whiskey",
      "0.75 oz Simple Syrup (1:1)",
      "4-6 Fresh mint leaves",
      "1/4 Lemon, cut into wedges"
    ],
    instructions: "Muddle lemon wedges and mint leaves in a shaker. Add whiskey and syrup. Fill with ice. Shake well. Double strain into a rocks glass filled with crushed ice. Garnish with a mint sprig.",
    tags: ["whiskey", "smash", "muddled", "mint", "sour"]
  },
  {
    id: 707,
    name: "Sherry Cobbler",
    ingredients: [
      "3 oz Fino or Amontillado Sherry",
      "0.5 oz Simple Syrup (1:1)",
      "2-3 Orange slices or wedges",
      "Fresh berries (garnish)"
    ],
    instructions: "Muddle orange in a shaker. Add sherry and syrup. Fill with ice and shake briefly to chill. Pour unstrained into a Cobbler glass or tall glass filled with crushed ice. Garnish lavishly with fresh fruit and mint.",
    tags: ["sherry", "cobbler", "muddled", "crushed-ice", "refreshing", "IBA"]
  },
  {
    id: 708,
    name: "Queen's Park Swizzle",
    ingredients: [
      "2 oz Aged Demerara or Jamaican Rum",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)",
      "8-10 Mint leaves",
      "4 dashes Angostura bitters (float)"
    ],
    instructions: "Muddle mint, lime juice, and syrup in a tall glass or swizzle mug. Add rum and crushed ice. Swizzle (churn) until the glass is frosty. Top with more ice and float the bitters on top. Garnish with a mint sprig.",
    tags: ["rum", "swizzle", "muddled", "crushed-ice", "float", "strong"]
  },
  {
    id: 709,
    name: "Brandy Crusta (Classic)",
    ingredients: [
      "2 oz Cognac or Brandy",
      "0.5 oz Maraschino Liqueur",
      "0.5 oz Curaçao (or Triple Sec)",
      "0.75 oz Fresh lemon juice",
      "1 barspoon Simple Syrup",
      "Sugared rim and large lemon peel (garnish)"
    ],
    instructions: "Prepare a glass with a sugar rim and a very long, coiled lemon peel lining the inside. Shake remaining ingredients with ice. Double strain into the prepared glass. No other garnish.",
    tags: ["cognac", "sour", "classic", "IBA", "shaken", "rimmed"]
  },

// --- Essential Spirit-Forward Variations ---
  {
    id: 710,
    name: "Reverse Martini (Fitty-Fitty)",
    ingredients: [
      "2 oz Dry Vermouth",
      "1 oz Gin (London Dry)",
      "1 dash Orange Bitters",
      "Lemon peel or Olive"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a lemon peel or an olive.",
    tags: ["gin", "martini", "variation", "stirred", "vermouth-heavy"]
  },
  {
    id: 711,
    name: "Tipperary",
    ingredients: [
      "1.5 oz Irish Whiskey",
      "1 oz Sweet Red Vermouth",
      "0.5 oz Green Chartreuse",
      "2 dashes Angostura Bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a lemon or orange twist.",
    tags: ["whiskey", "spirit-forward", "stirred", "IBA", "herbal"]
  },
  {
    id: 712,
    name: "Remember the Maine",
    ingredients: [
      "2 oz Rye Whiskey",
      "0.75 oz Sweet Vermouth",
      "1 barspoon Cherry Heering (Cherry Liqueur)",
      "1 dash Absinthe",
      "Cherry (garnish)"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a cherry.",
    tags: ["whiskey", "spirit-forward", "stirred", "IBA", "absinthe"]
  },
  {
    id: 713,
    name: "Frisco Sour",
    ingredients: [
      "2 oz Rye Whiskey",
      "0.5 oz Bénédictine",
      "1 oz Fresh lemon juice",
      "0.5 oz Simple Syrup (1:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. Garnish with a lemon twist.",
    tags: ["whiskey", "sour", "variation", "shaken", "herbal"]
  },
  // Continuing the cocktailDatabase array...
// ====================================================================
// 800 SERIES: HIGHBALLS, FIZZES, AND EASY BUILDS
// These are built in the glass and generally lengthened with soda or water.
// ====================================================================
  {
    id: 801,
    name: "Gin & Tonic (G&T)",
    ingredients: [
      "2 oz Gin (London Dry or other preferred style)",
      "4 oz Tonic Water",
      "Lime wedge or wheel"
    ],
    instructions: "Fill a highball glass or Copa de Balon with ice. Add gin. Top with tonic water. Stir gently. Garnish with a lime wedge.",
    tags: ["gin", "highball", "built", "refreshing", "classic"]
  },
  {
    id: 802,
    name: "Vodka Soda",
    ingredients: [
      "1.5 - 2 oz Vodka",
      "Top with Soda Water",
      "Lime wedge"
    ],
    instructions: "Fill a highball glass with ice. Add vodka and top with soda water. Garnish with a lime wedge.",
    tags: ["vodka", "highball", "built", "simple", "refreshing"]
  },
  {
    id: 803,
    name: "Rum & Coke (Cuba Libre)",
    ingredients: [
      "2 oz Aged or White Rum",
      "4 oz Cola",
      "0.5 oz Fresh lime juice",
      "Lime wedge"
    ],
    instructions: "Fill a highball glass with ice. Squeeze lime juice into the glass, drop the wedge in. Add rum and top with cola. Stir gently.",
    tags: ["rum", "highball", "built", "simple", "IBA"]
  },
  {
    id: 804,
    name: "Dark 'n' Stormy",
    ingredients: [
      "2 oz Dark/Blackstrap Rum (e.g., Gosling's Black Seal)",
      "4 oz Ginger Beer",
      "Lime wedge"
    ],
    instructions: "Fill a highball glass with ice. Add ginger beer. Gently float the dark rum on top. Garnish with a lime wedge.",
    tags: ["rum", "highball", "built", "ginger", "IBA"]
  },
  {
    id: 805,
    name: "Paloma",
    ingredients: [
      "2 oz Tequila (Blanco)",
      "4 oz Grapefruit Soda (e.g., Squirt, Jarritos)",
      "0.5 oz Fresh lime juice (optional)",
      "Salt rim (optional)"
    ],
    instructions: "Fill a highball glass with ice (salt rim if desired). Add tequila and lime juice. Top with grapefruit soda. Stir gently. Garnish with a lime wedge.",
    tags: ["tequila", "highball", "built", "grapefruit", "refreshing"]
  },
  {
    id: 806,
    name: "Whiskey Ginger",
    ingredients: [
      "2 oz Bourbon or Irish Whiskey",
      "Top with Ginger Ale",
      "Lemon wedge"
    ],
    instructions: "Fill a highball glass with ice. Add whiskey. Top with ginger ale. Stir gently. Garnish with a lemon wedge.",
    tags: ["whiskey", "highball", "built", "ginger", "simple"]
  },
  {
    id: 807,
    name: "Tom Collins (Gin Fizz Template)",
    ingredients: [
      "2 oz Gin (Old Tom is traditional)",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "Top with Club Soda",
      "Lemon wheel and cherry"
    ],
    instructions: "Shake gin, lemon juice, and syrup with ice. Strain into a tall Collins glass filled with ice. Top with club soda. Garnish with a lemon wheel and cherry.",
    tags: ["gin", "fizz", "highball", "shaken", "IBA", "sour"]
  },
  {
    id: 808,
    name: "John Collins (Whiskey Collins Template)",
    ingredients: [
      "2 oz Bourbon or Rye whiskey",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "Top with Club Soda",
      "Lemon wheel and cherry"
    ],
    instructions: "Shake whiskey, lemon juice, and syrup with ice. Strain into a tall Collins glass filled with ice. Top with club soda. Garnish with a lemon wheel and cherry.",
    tags: ["whiskey", "fizz", "highball", "shaken", "sour"]
  },
  {
    id: 809,
    name: "Greyhound (Vodka/Gin)",
    ingredients: [
      "2 oz Vodka or Gin",
      "Top with Fresh Grapefruit Juice",
      "Salt rim (optional, for a Salty Dog)"
    ],
    instructions: "Fill a highball glass with ice. Add spirit. Top with grapefruit juice. Stir gently. Garnish with a lime wedge.",
    tags: ["vodka", "gin", "highball", "built", "grapefruit"]
  },
  {
    id: 810,
    name: "Tequila Soda",
    ingredients: [
      "1.5 - 2 oz Tequila (Blanco)",
      "Top with Soda Water",
      "Lime wedge"
    ],
    instructions: "Fill a highball glass with ice. Add tequila and top with soda water. Garnish with a lime wedge.",
    tags: ["tequila", "highball", "built", "simple", "refreshing"]
  },
  {
    id: 811,
    name: "Horse's Neck",
    ingredients: [
      "2 oz Brandy or Bourbon",
      "Top with Ginger Ale",
      "Angostura bitters (optional)",
      "Long Lemon Spiral (peel)"
    ],
    instructions: "Place a long, continuous lemon spiral inside a highball glass. Add ice, spirit, and top with ginger ale. Add a few dashes of bitters if desired. Stir gently.",
    tags: ["brandy", "whiskey", "highball", "built", "ginger", "classic"]
  },
  {
    id: 812,
    name: "Sea Breeze",
    ingredients: [
      "1.5 oz Vodka",
      "3 oz Cranberry juice",
      "1 oz Grapefruit juice",
      "Lime wedge"
    ],
    instructions: "Build in a highball glass with ice. Stir gently. Garnish with a lime wedge.",
    tags: ["vodka", "highball", "built", "cranberry", "fruity"]
  },
  {
    id: 813,
    name: "Screw Driver",
    ingredients: [
      "1.5 oz Vodka",
      "Top with Orange Juice",
      "Orange slice"
    ],
    instructions: "Build in a highball glass with ice. Stir gently. Garnish with an orange slice.",
    tags: ["vodka", "highball", "built", "orange", "simple"]
  },
  {
    id: 814,
    name: "Cape Codder (Vodka Cranberry)",
    ingredients: [
      "1.5 oz Vodka",
      "Top with Cranberry juice",
      "Lime wedge"
    ],
    instructions: "Build in a highball glass with ice. Stir gently. Garnish with a lime wedge.",
    tags: ["vodka", "highball", "built", "cranberry", "simple"]
  },
  {
    id: 815,
    name: "Kalimotxo",
    ingredients: [
      "3 oz Dry Red Wine (e.g., Tempranillo)",
      "3 oz Cola",
      "Lemon or lime wedge"
    ],
    instructions: "Build in a glass with ice. Stir gently. Garnish with citrus.",
    tags: ["wine", "highball", "built", "simple", "spanish"]
  },
  {
    id: 816,
    name: "Presbyterian",
    ingredients: [
      "2 oz Scotch, Bourbon, or Rye",
      "Top with equal parts Ginger Ale and Soda Water",
      "Lemon twist"
    ],
    instructions: "Build in a highball glass with ice. Stir gently. Garnish with a lemon twist.",
    tags: ["whiskey", "highball", "built", "ginger", "classic"]
  },
  {
    id: 817,
    name: "Buck (Template)",
    ingredients: [
      "2 oz Base Spirit (e.g., Gin, Bourbon, Rum)",
      "0.5 oz Fresh lime or lemon juice",
      "Top with Ginger Beer"
    ],
    instructions: "Build spirit and citrus in a highball glass with ice. Top with ginger beer. Stir gently. Garnish with a citrus wedge.",
    tags: ["template", "highball", "built", "ginger", "refreshing"]
  },


// --- The Highball/Fizz family provides endless permutations: ---
// 818: Sloe Gin & Tonic
// 819: Scotch & Soda
// 820: Tequila & Grapefruit
// 821: Campari & Soda
// 822: Gin Buck
// 823: Whiskey Buck
// ... and so on for all major spirits and liqueurs with soda or tonic.
// Continuing the cocktailDatabase array...
// ====================================================================
// 900 SERIES: BRANDY, MEZCAL, PISCO, & APERITIVO CLASSICS
// ====================================================================

// --- Brandy & Cognac Classics ---
  {
    id: 901,
    name: "Japanese Cocktail",
    ingredients: [
      "2 oz Cognac (VSOP)",
      "0.75 oz Orgeat syrup",
      "2 dashes Angostura bitters",
      "Lemon twist"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Express a lemon twist over the drink and discard.",
    tags: ["cognac", "brandy", "stirred", "classic", "almond", "spirit-forward"]
  },
  {
    id: 902,
    name: "Metropolitan",
    ingredients: [
      "2 oz Brandy (Cognac)",
      "1 oz Sweet Vermouth",
      "0.5 oz Curaçao or Triple Sec",
      "0.25 oz Simple Syrup (1:1)",
      "2 dashes Angostura bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a cherry.",
    tags: ["cognac", "brandy", "stirred", "classic", "vermouth"]
  },
  {
    id: 903,
    name: "French Connection",
    ingredients: [
      "1.5 oz Cognac (VSOP)",
      "1.5 oz Amaretto Liqueur",
      "Lemon twist (optional)"
    ],
    instructions: "Combine both ingredients in an Old Fashioned glass over a large ice cube. Stir gently to combine. Garnish with a lemon twist.",
    tags: ["cognac", "liqueur", "stirred", "simple", "IBA"]
  },
  {
    id: 904,
    name: "Porto Flip",
    ingredients: [
      "1.5 oz Ruby Port",
      "0.75 oz Brandy (Cognac)",
      "1 Egg Yolk",
      "0.25 oz Simple Syrup (1:1)",
      "Nutmeg (garnish)"
    ],
    instructions: "Combine all ingredients in a shaker without ice (dry shake). Add ice and shake again until well-chilled. Double strain into a chilled coupe. Garnish with freshly grated nutmeg.",
    tags: ["brandy", "wine", "creamy", "IBA", "shaken"]
  },

// --- Agave (Mezcal & Tequila) Classics ---
  {
    id: 905,
    name: "Oaxacan Old Fashioned",
    ingredients: [
      "1.5 oz Reposado Tequila",
      "0.5 oz Mezcal (Joven)",
      "1 barspoon Agave Nectar",
      "2 dashes Angostura bitters",
      "2 dashes Orange bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain over a large ice cube in a rocks glass. Garnish with an orange twist.",
    tags: ["mezcal", "tequila", "old-fashioned", "stirred", "smoky", "spirit-forward"]
  },
  {
    id: 906,
    name: "Rosita",
    ingredients: [
      "1.5 oz Reposado Tequila",
      "0.5 oz Sweet Vermouth",
      "0.5 oz Dry Vermouth",
      "1 dash Campari",
      "1 dash Angostura bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe or over fresh ice in a rocks glass. Garnish with a lemon twist.",
    tags: ["tequila", "vermouth", "stirred", "bitter", "complex"]
  },
  {
    id: 907,
    name: "Matador",
    ingredients: [
      "2 oz Tequila (Blanco)",
      "2 oz Fresh pineapple juice",
      "0.75 oz Fresh lime juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a chilled coupe or over fresh ice in a rocks glass. Garnish with a pineapple wedge.",
    tags: ["tequila", "sour", "shaken", "fruit", "refreshing"]
  },

// --- Pisco Classics ---
  {
    id: 908,
    name: "Pisco Punch",
    ingredients: [
      "2 oz Pisco",
      "1 oz Fresh lemon juice",
      "0.75 oz Pineapple Syrup (or Oleo Saccharum)",
      "1 dash Angostura bitters"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. Garnish with a lemon wheel.",
    tags: ["pisco", "sour", "shaken", "fruit", "classic"]
  },
  {
    id: 909,
    name: "Chilcano",
    ingredients: [
      "2 oz Pisco",
      "0.5 oz Fresh lime juice",
      "Top with Ginger Ale or Ginger Beer",
      "Angostura bitters (garnish)"
    ],
    instructions: "Build pisco and lime in a highball glass with ice. Top with ginger ale/beer. Stir gently. Dash 2-3 drops of Angostura bitters on top. Garnish with a lime wedge.",
    tags: ["pisco", "highball", "built", "ginger", "refreshing"]
  },

// --- Aperitivo & Liqueur Essentials ---
  {
    id: 910,
    name: "Aperol Spritz",
    ingredients: [
      "3 oz Prosecco",
      "2 oz Aperol",
      "1 oz Soda Water",
      "Orange slice"
    ],
    instructions: "Build in a large wine glass or tumbler filled with ice. Pour in Prosecco, then Aperol, then a splash of soda. Stir briefly. Garnish with an orange slice.",
    tags: ["aperitivo", "spritz", "built", "effervescent", "bitter"]
  },
  {
    id: 911,
    name: "Hugo Spritz",
    ingredients: [
      "3 oz Prosecco",
      "2 oz Elderflower Liqueur (e.g., St. Germain)",
      "1 oz Soda Water",
      "Fresh mint leaves and lime wedge"
    ],
    instructions: "Build in a large wine glass or tumbler filled with ice. Add mint leaves, elderflower liqueur, and lime wedge. Top with Prosecco and soda. Stir gently.",
    tags: ["aperitivo", "spritz", "built", "floral", "effervescent"]
  },
  {
    id: 912,
    name: "Grasshopper",
    ingredients: [
      "1 oz Green Crème de Menthe",
      "1 oz White Crème de Cacao",
      "1 oz Heavy Cream",
      "Mint sprig (garnish)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well until thoroughly chilled. Strain into a chilled coupe. Garnish with a mint sprig.",
    tags: ["liqueur", "dessert", "creamy", "shaken", "IBA"]
  },
  {
    id: 913,
    name: "Gimlet (Template)",
    ingredients: [
      "2 oz Gin or Vodka",
      "1 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1) or 1 oz Rose's Lime Cordial (classic)"
    ],
    instructions: "Combine spirit, lime juice, and syrup/cordial in a shaker with ice. Shake until chilled. Double strain into a chilled coupe or over fresh ice in a rocks glass. Garnish with a lime wheel.",
    tags: ["gin", "vodka", "sour", "template", "classic"]
  },
  {
    id: 914,
    name: "Godfather",
    ingredients: [
      "1.5 oz Scotch Whisky",
      "1.5 oz Amaretto Liqueur",
      "Lemon twist (optional)"
    ],
    instructions: "Combine both ingredients in an Old Fashioned glass over a large ice cube. Stir gently to combine. Garnish with a lemon twist.",
    tags: ["scotch", "liqueur", "stirred", "simple", "dessert"]
  },
  // Continuing the cocktailDatabase array...
// ====================================================================
// 1000 SERIES: WINE, BEER, & LIQUEUR-BASED ESSENTIALS
// ====================================================================

// --- Wine & Fortified Wine Cocktails ---
  {
    id: 1001,
    name: "Classic Red Sangria (Large Format)",
    ingredients: [
      "1 bottle Dry Red Wine (e.g., Tempranillo)",
      "0.5 cup Brandy (Cognac or Spanish Brandy)",
      "0.25 cup Orange Liqueur (e.g., Triple Sec)",
      "0.5 cup Fresh orange juice",
      "0.25 cup Simple Syrup (1:1, or to taste)",
      "1 Orange, sliced",
      "1 Lemon, sliced",
      "1 Apple, diced"
    ],
    instructions: "Combine all ingredients in a large pitcher. Stir well. Refrigerate for at least 4 hours (ideally overnight) to allow flavors to mingle. Serve over ice, ensuring fruit gets into each glass.",
    tags: ["wine", "punch", "large-format", "fruity", "built", "classic"]
  },
  {
    id: 1002,
    name: "Bellini",
    ingredients: [
      "4 oz Prosecco or other Dry Sparkling Wine (chilled)",
      "2 oz White Peach Purée (or high-quality Nectar)"
    ],
    instructions: "Pour peach purée into a chilled champagne flute. Slowly top with sparkling wine. Stir gently to combine. Garnish with a fresh raspberry (optional).",
    tags: ["wine", "sparkling", "simple", "built", "IBA", "brunch"]
  },
  {
    id: 1003,
    name: "Kir Royale",
    ingredients: [
      "5 oz Champagne or Sparkling Wine (chilled)",
      "0.5 oz Crème de Cassis (Blackcurrant Liqueur)"
    ],
    instructions: "Pour Crème de Cassis into a chilled champagne flute. Slowly top with sparkling wine. No need to stir. Garnish with a raspberry or blackberry (optional).",
    tags: ["wine", "sparkling", "liqueur", "simple", "IBA", "brunch"]
  },
  {
    id: 1004,
    name: "Lillet Rosé Spritz",
    ingredients: [
      "3 oz Lillet Rosé (chilled)",
      "3 oz Tonic Water or Club Soda",
      "Assortment of fruit (e.g., strawberry, cucumber, mint)"
    ],
    instructions: "Fill a wine glass with ice. Add Lillet Rosé. Top with tonic or soda. Garnish lavishly with fresh fruit and herbs.",
    tags: ["wine", "aperitif", "spritz", "built", "low-ABV", "refreshing"]
  },
  {
    id: 1005,
    name: "Corpse Reviver #1",
    ingredients: [
      "2 oz Cognac or Armagnac",
      "1 oz Sweet Vermouth",
      "1 oz Calvados or Applejack (Apple Brandy)"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. No garnish.",
    tags: ["cognac", "vermouth", "stirred", "classic", "reviver"]
  },

// --- Beer Cocktails (Beer Mixes) ---
  {
    id: 1006,
    name: "Michelada (Mexican Beer Cocktail)",
    ingredients: [
      "12 oz Mexican Lager (e.g., Modelo, Corona, chilled)",
      "1 oz Fresh lime juice",
      "0.5 oz Worcestershire Sauce",
      "0.25 oz Soy Sauce (optional)",
      "Hot Sauce (to taste, e.g., Cholula, Valentina)",
      "Salt and chili powder rim (optional)"
    ],
    instructions: "Rim a large glass with salt/chili powder (if desired). Add ice, lime juice, sauces, and hot sauce. Gently top with beer. Stir lightly. Garnish with a lime wedge.",
    tags: ["beer", "built", "savory", "spicy", "mexican", "brunch"]
  },
  {
    id: 1007,
    name: "Shandy / Radler",
    ingredients: [
      "6 oz Light Beer (Lager or Wheat)",
      "6 oz Lemonade or Lemon-Lime Soda"
    ],
    instructions: "Fill a glass with ice. Add beer and lemonade/soda. Stir gently.",
    tags: ["beer", "built", "low-ABV", "simple", "refreshing"]
  },
  {
    id: 1008,
    name: "Black Velvet",
    ingredients: [
      "4 oz Champagne or Sparkling Wine (chilled)",
      "4 oz Stout Beer (e.g., Guinness, chilled)"
    ],
    instructions: "Pour sparkling wine into a chilled flute or large glass. Slowly layer the stout on top by pouring it over the back of a spoon.",
    tags: ["beer", "wine", "layered", "simple", "classic"]
  },

// --- Dessert & Specialized Liqueur Cocktails ---
  {
    id: 1009,
    name: "B-52 (Layered Shot)",
    ingredients: [
      "0.75 oz Coffee Liqueur (e.g., Kahlúa)",
      "0.75 oz Irish Cream Liqueur (e.g., Bailey's)",
      "0.75 oz Orange Liqueur (e.g., Grand Marnier)"
    ],
    instructions: "Layer in a shot or small snifter glass: pour the coffee liqueur first, then slowly float the Irish Cream over the back of a spoon, and finally float the orange liqueur on top.",
    tags: ["liqueur", "layered", "dessert", "shot", "classic"]
  },
  {
    id: 1010,
    name: "White Russian",
    ingredients: [
      "2 oz Vodka",
      "1 oz Coffee Liqueur",
      "1 oz Heavy Cream or Half-and-Half"
    ],
    instructions: "Pour vodka and coffee liqueur into a rocks glass filled with ice. Gently float the cream on top by pouring it over the back of a spoon. Serve without stirring (or stir slightly for a blended look).",
    tags: ["vodka", "creamy", "built", "dessert", "classic", "IBA"]
  },
  {
    id: 1011,
    name: "Rusty Nail",
    ingredients: [
      "2 oz Scotch Whisky (Blended)",
      "1 oz Drambuie (Scotch Liqueur)",
      "Lemon twist"
    ],
    instructions: "Combine all ingredients in a rocks glass with ice. Stir gently to combine. Garnish with a lemon twist.",
    tags: ["scotch", "liqueur", "stirred", "simple", "IBA"]
  },
  {
    id: 1012,
    name: "Stinger",
    ingredients: [
      "2 oz Brandy (Cognac)",
      "1 oz Crème de Menthe (White)"
    ],
    instructions: "Combine both ingredients in a mixing glass with ice. Stir until very cold. Strain into a chilled coupe. No garnish.",
    tags: ["cognac", "liqueur", "stirred", "simple", "classic", "after-dinner"]
  },
  {
    id: 1013,
    name: "Bramble (Contemporary Classic)",
    ingredients: [
      "2 oz Gin",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "0.5 oz Crème de Mûre (Blackberry Liqueur, float)"
    ],
    instructions: "Combine gin, lemon juice, and syrup in a shaker with ice. Shake well. Strain into a rocks glass filled with crushed ice. Drizzle the Crème de Mûre over the top. Garnish with a fresh blackberry and a lemon slice.",
    tags: ["gin", "sour", "liqueur", "shaken", "float", "contemporary"]
  },
  // Continuing the cocktailDatabase array...
// ====================================================================
// 1100 SERIES: CONTEMPORARY & POPULAR STAPLES / KEY VARIATIONS
// Focusing on popular bar builds, different Mules, Smashes, and popular riffs.
// ====================================================================

// --- Mules & Bucks (Ginger Beer) Variations ---
  {
    id: 1101,
    name: "Mexican Mule (El Burro)",
    ingredients: [
      "2 oz Tequila (Blanco)",
      "0.5 oz Fresh lime juice",
      "Top with Ginger Beer",
      "Lime wedge"
    ],
    instructions: "Build in a copper mug (or highball glass) with ice. Add tequila and lime juice. Top with ginger beer. Stir briefly. Garnish with a lime wedge.",
    tags: ["tequila", "highball", "ginger", "built", "popular"]
  },
  {
    id: 1102,
    name: "Kentucky Mule",
    ingredients: [
      "2 oz Bourbon or Rye whiskey",
      "0.5 oz Fresh lime juice",
      "Top with Ginger Beer",
      "Lime wedge"
    ],
    instructions: "Build in a copper mug (or highball glass) with ice. Add whiskey and lime juice. Top with ginger beer. Stir briefly. Garnish with a lime wedge.",
    tags: ["whiskey", "highball", "ginger", "built", "popular"]
  },
  {
    id: 1103,
    name: "Dark 'n' Stormy", // Re-listing under highball family for completeness
    ingredients: [
      "2 oz Black Seal Rum",
      "Top with Ginger Beer",
      "Lime wedge"
    ],
    instructions: "Fill a highball glass with ice and ginger beer. Gently float the dark rum on top. Garnish with a lime wedge.",
    tags: ["rum", "highball", "ginger", "built", "IBA", "canonical"]
  },
  {
    id: 1104,
    name: "French Mule",
    ingredients: [
      "1.5 oz Cognac (or French Brandy)",
      "0.5 oz Fresh lime juice",
      "Top with Ginger Beer",
      "Lime wedge"
    ],
    instructions: "Build in a mug or glass with ice. Add Cognac and lime juice. Top with ginger beer. Stir briefly. Garnish with a lime wedge.",
    tags: ["cognac", "highball", "ginger", "built"]
  },

// --- Smashes & Muddled Drinks ---
  {
    id: 1105,
    name: "Raspberry Smash",
    ingredients: [
      "2 oz Gin or Vodka",
      "0.75 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "5 Fresh Raspberries",
      "Mint sprig (garnish)"
    ],
    instructions: "Muddle raspberries and syrup in a shaker. Add spirit, lemon juice, and ice. Shake well. Double strain into a rocks glass over crushed ice. Garnish with a mint sprig.",
    tags: ["gin", "vodka", "smash", "muddled", "fruit", "refreshing"]
  },
  {
    id: 1106,
    name: "Basil Smash",
    ingredients: [
      "2 oz Gin",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "8-10 Fresh Basil Leaves"
    ],
    instructions: "Gently muddle basil leaves and syrup in a shaker. Add gin, lemon juice, and ice. Shake well. Double strain into a rocks glass over a large ice cube. Garnish with a basil sprig.",
    tags: ["gin", "smash", "muddled", "herbal", "contemporary"]
  },

// --- Contemporary Sours & Aromatic Builds ---
  {
    id: 1107,
    name: "Bees Knees", // Re-listing under contemporary favorites
    ingredients: [
      "2 oz Gin",
      "0.75 oz Fresh lemon juice",
      "0.75 oz Honey Syrup (2:1 or 3:1 ratio)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Strain into a chilled coupe or over fresh ice in a rocks glass. Garnish with a lemon twist.",
    tags: ["gin", "sour", "shaken", "honey", "IBA"]
  },
  {
    id: 1108,
    name: "Hemingway Daiquiri",
    ingredients: [
      "2 oz White Rum",
      "0.75 oz Fresh lime juice",
      "0.5 oz Fresh grapefruit juice",
      "0.5 oz Maraschino Liqueur"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well until chilled. Double strain into a chilled coupe.",
    tags: ["rum", "sour", "variation", "grapefruit", "classic", "IBA"]
  },
  {
    id: 1109,
    name: "Last Word (Mezcal Variation)",
    ingredients: [
      "0.75 oz Mezcal",
      "0.75 oz Green Chartreuse",
      "0.75 oz Maraschino Liqueur",
      "0.75 oz Fresh lime juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until chilled. Double strain into a chilled coupe. No garnish.",
    tags: ["mezcal", "equal-parts", "variation", "smoky", "contemporary"]
  },
  {
    id: 1110,
    name: "White Negroni",
    ingredients: [
      "1.5 oz Gin",
      "1.5 oz Suze (Gentian Liqueur)",
      "1 oz Lillet Blanc (or other dry Aperitif wine)",
      "Lemon twist"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain over a large ice cube in a rocks glass. Garnish with a lemon twist.",
    tags: ["gin", "stirred", "bitter", "contemporary", "variation"]
  },

// --- High-Volume Spirit Swaps & Variations (The "Fillers" to hit 500+) ---
// These are essential, accepted variations of core templates.

  {
    id: 1111,
    name: "Spicy Margarita",
    ingredients: [
      "2 oz Tequila (Blanco)",
      "1 oz Cointreau (or triple sec)",
      "1 oz Fresh lime juice",
      "3-4 Jalapeño slices (muddled)",
      "Salt/Chili rim (optional)"
    ],
    instructions: "Gently muddle jalapeño slices in a shaker. Add remaining ingredients and ice. Shake until chilled. Double strain into a rimmed glass.",
    tags: ["tequila", "sour", "variation", "spicy", "muddled"]
  },
  {
    id: 1112,
    name: "French Martini",
    ingredients: [
      "1.5 oz Vodka",
      "0.5 oz Raspberry Liqueur (e.g., Chambord)",
      "3 oz Pineapple juice"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake until very frothy. Double strain into a chilled coupe. Garnish with a raspberry (optional).",
    tags: ["vodka", "sweet", "shaken", "fruit", "IBA"]
  },
  {
    id: 1113,
    name: "Gimlet (Rose's style)",
    ingredients: [
      "2 oz Gin or Vodka",
      "1 oz Rose's Lime Cordial"
    ],
    instructions: "Combine both ingredients in a mixing glass with ice. Stir until chilled. Strain into a chilled coupe. Garnish with a lime slice.",
    tags: ["gin", "sour", "simple", "stirred", "classic", "variation"]
  },
  {
    id: 1114,
    name: "Scotch Old Fashioned (Rob Roy style)",
    ingredients: [
      "2 oz Blended Scotch whisky",
      "0.25 oz Rich Simple Syrup (2:1)",
      "2 dashes Angostura bitters",
      "Lemon twist"
    ],
    instructions: "Muddle syrup and bitters. Add Scotch and ice. Stir until chilled and properly diluted. Express lemon twist over glass and garnish.",
    tags: ["scotch", "old-fashioned", "stirred", "variation", "spirit-forward"]
  },
  {
    id: 1115,
    name: "Japanese Highball",
    ingredients: [
      "2 oz Japanese Whisky (e.g., Toki, Nikka)",
      "4-6 oz Highly Carbonated Club Soda (very cold)",
      "Lemon peel (optional)"
    ],
    instructions: "Fill a tall, chilled glass with ice. Add whisky. Gently top with very cold club soda. Stir briefly, only once or twice. Garnish with a lemon peel.",
    tags: ["whiskey", "highball", "built", "simple", "effervescent"]
  },
  {
    id: 1116,
    name: "Apple Martini (Appletini)",
    ingredients: [
      "1.5 oz Vodka",
      "1 oz Green Apple Schnapps (e.g., DeKuyper Sour Apple Pucker)",
      "0.5 oz Fresh lemon juice (for balance)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well until chilled. Strain into a chilled coupe. Garnish with a thin apple slice.",
    tags: ["vodka", "shaken", "sweet", "90s-classic"]
  },
  {
    id: 1117,
    name: "Godmother (Vodka/Amaretto)",
    ingredients: [
      "1.5 oz Vodka",
      "1.5 oz Amaretto Liqueur",
      "Lemon twist (optional)"
    ],
    instructions: "Combine both ingredients in an Old Fashioned glass over a large ice cube. Stir gently to combine. Garnish with a lemon twist.",
    tags: ["vodka", "liqueur", "stirred", "simple", "dessert", "variation"]
  },
  {
    id: 1118,
    name: "Boulevardier (Reverse/Equal Parts)",
    ingredients: [
      "1 oz Bourbon or Rye whiskey",
      "1 oz Campari",
      "1 oz Sweet Red Vermouth",
      "Orange peel"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a rocks glass. Garnish with an orange peel.",
    tags: ["whiskey", "stirred", "equal-parts", "bitter", "variation"]
  },
  {
    id: 1119,
    name: "Black Manhattan",
    ingredients: [
      "2 oz Rye Whiskey",
      "1 oz Amaro Averna (or other dark, complex Amaro)",
      "1 dash Angostura bitters",
      "1 dash Orange bitters",
      "Cherry (garnish)"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a cherry.",
    tags: ["whiskey", "stirred", "amaro", "contemporary", "spirit-forward"]
  },
  {
    id: 1120,
    name: "Sloe Gin Fizz", // Re-listing under popular builds
    ingredients: [
      "2 oz Sloe Gin",
      "1 oz Fresh lemon juice",
      "0.5 oz Simple Syrup (1:1)",
      "Top with Soda Water",
      "Lemon slice"
    ],
    instructions: "Shake sloe gin, lemon juice, and syrup with ice. Strain into a chilled highball glass. Top with soda water. Stir gently. Garnish with a lemon slice.",
    tags: ["gin", "fizz", "variation", "shaken", "effervescent"]
  },
  // Continuing the cocktailDatabase array...
// ====================================================================
// 1120 SERIES: WINE & FORTIFIED WINE COCKTAILS
// ====================================================================

  {
    id: 1121,
    name: "Champagne Cocktail",
    ingredients: [
      "1 Sugar Cube",
      "2-3 dashes Angostura bitters",
      "1 oz Brandy (Cognac)",
      "Top with Brut Champagne or Sparkling Wine (chilled)",
      "Lemon twist"
    ],
    instructions: "Place the sugar cube in the bottom of a chilled Champagne flute and soak it with Angostura bitters. Add the brandy. Gently top with Champagne. Garnish with a lemon twist.",
    tags: ["wine", "sparkling", "classic", "built", "IBA", "brunch"]
  },
  {
    id: 1122,
    name: "Death in the Afternoon",
    ingredients: [
      "1 oz Absinthe",
      "Top with Brut Champagne or Sparkling Wine (chilled)"
    ],
    instructions: "Pour the absinthe into a chilled Champagne flute. Top with chilled Champagne. Serve immediately.",
    tags: ["absinthe", "sparkling", "simple", "built", "IBA", "strong"]
  },
  {
    id: 1123,
    name: "Air Mail",
    ingredients: [
      "1.5 oz Aged Rum",
      "0.5 oz Fresh lime juice",
      "0.5 oz Honey Syrup (2:1)",
      "Top with Brut Champagne or Sparkling Wine"
    ],
    instructions: "Shake rum, lime, and honey syrup with ice. Strain into a chilled coupe. Top gently with sparkling wine. Garnish with a lime wheel.",
    tags: ["rum", "sparkling", "shaken", "honey", "classic"]
  },
  {
    id: 1124,
    name: "Adonis",
    ingredients: [
      "1.5 oz Fino Sherry",
      "1.5 oz Sweet Vermouth",
      "2 dashes Orange bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a lemon or orange twist.",
    tags: ["sherry", "vermouth", "stirred", "aperitif", "low-ABV"]
  },
  {
    id: 1125,
    name: "Bamboo",
    ingredients: [
      "1.5 oz Dry Sherry (Fino or Manzanilla)",
      "1.5 oz Dry Vermouth",
      "2 dashes Angostura bitters",
      "2 dashes Orange bitters"
    ],
    instructions: "Combine all ingredients in a mixing glass with ice. Stir until well-chilled. Strain into a chilled coupe. Garnish with a lemon twist or olive.",
    tags: ["sherry", "vermouth", "stirred", "aperitif", "low-ABV", "IBA"]
  },
  {
    id: 1126,
    name: "Tinto de Verano (Spanish Summer Wine)",
    ingredients: [
      "4 oz Dry Red Wine (e.g., Garnacha)",
      "4 oz Lemon-Lime Soda (e.g., Sprite or Casera)",
      "Lemon or Orange slice"
    ],
    instructions: "Build in a highball glass with ice. Add wine and top with soda. Stir briefly. Garnish with a citrus slice.",
    tags: ["wine", "highball", "built", "simple", "spanish", "refreshing"]
  },
  {
    id: 1127,
    name: "Seelbach Cocktail",
    ingredients: [
      "1 oz Bourbon",
      "0.5 oz Cointreau or other Triple Sec",
      "7 dashes Angostura bitters",
      "7 dashes Peychaud's bitters",
      "Top with Brut Champagne or Sparkling Wine"
    ],
    instructions: "Combine Bourbon, Cointreau, and bitters in a mixing glass with ice. Stir briefly. Strain into a chilled Champagne flute. Top with sparkling wine. Garnish with a lemon twist.",
    tags: ["bourbon", "sparkling", "stirred", "complex", "bitter"]
  },
  {
    id: 1128,
    name: "Bishop Cocktail (Rum/Red Wine)",
    ingredients: [
      "2 oz Aged Rum",
      "1 oz Dry Red Wine (float)",
      "0.75 oz Fresh lime juice",
      "0.5 oz Simple Syrup (1:1)"
    ],
    instructions: "Shake rum, lime, and syrup with ice. Strain over fresh ice in a rocks glass. Gently float the red wine on top. Garnish with a lime wheel.",
    tags: ["rum", "wine", "sour", "float", "classic"]
  },
  {
    id: 1129,
    name: "Cynar Spritz",
    ingredients: [
      "2 oz Cynar (Artichoke Amaro)",
      "3 oz Prosecco or Sparkling Wine",
      "1 oz Soda Water",
      "Orange slice"
    ],
    instructions: "Build in a large wine glass filled with ice. Add Cynar and Prosecco. Top with soda water. Stir gently. Garnish with an orange slice.",
    tags: ["amaro", "spritz", "bitter", "built", "contemporary"]
  },
  // Continuing the cocktailDatabase array...
// ====================================================================
// 1150 SERIES: HOT DRINKS & EXPANDED WINE COCKTAILS
// ====================================================================

// --- Hot Cocktails ---
  {
    id: 1151,
    name: "Hot Toddy",
    ingredients: [
      "1.5 oz Whiskey (Bourbon or Irish)",
      "0.5 oz Fresh lemon juice",
      "1 barspoon Honey (or Maple Syrup)",
      "4-6 oz Hot Water",
      "Lemon wheel and Cinnamon stick (garnish)"
    ],
    instructions: "Pre-warm a mug or glass. Add whiskey, lemon juice, and honey. Fill with hot water and stir until honey is dissolved. Garnish with a lemon wheel studded with cloves and a cinnamon stick.",
    tags: ["whiskey", "hot", "winter", "built", "classic"]
  },
  {
    id: 1152,
    name: "Hot Buttered Rum",
    ingredients: [
      "2 oz Aged Dark Rum",
      "2 barspoons Hot Buttered Rum Batter (pre-made)",
      "4-6 oz Hot Water",
      "Nutmeg (garnish)"
    ],
    instructions: "Place batter and rum in a pre-warmed mug. Fill with hot water and stir until the batter is melted and incorporated. Garnish generously with freshly grated nutmeg.",
    tags: ["rum", "hot", "winter", "creamy", "built"]
  },
  {
    id: 1153,
    name: "Mulled Wine (Glühwein, large batch)",
    ingredients: [
      "1 bottle Dry Red Wine (e.g., Merlot, Zinfandel)",
      "0.5 cup Brandy or Port (optional)",
      "0.25 cup Brown Sugar or Honey (to taste)",
      "1 Orange, sliced",
      "6-8 Whole Cloves",
      "4 Cinnamon Sticks",
      "2 Star Anise"
    ],
    instructions: "Combine all ingredients in a pot. Heat gently, ensuring it never boils, for at least 20 minutes to infuse the spices. Serve warm in mugs.",
    tags: ["wine", "hot", "winter", "large-format", "spiced"]
  },
  {
    id: 1154,
    name: "Irish Coffee",
    ingredients: [
      "1.5 oz Irish Whiskey",
      "1 tsp Brown Sugar or Demerara Sugar",
      "4 oz Hot Coffee (strong, fresh)",
      "1 oz Heavy Cream (lightly whipped/floated)"
    ],
    instructions: "Pre-warm a clear glass mug. Add sugar and whiskey. Add hot coffee and stir to dissolve sugar. Gently float cold, lightly whipped cream on top over the back of a spoon.",
    tags: ["whiskey", "hot", "coffee", "dessert", "classic", "IBA"]
  },

// --- Dry & Sweet Wine Cocktails ---
  {
    id: 1155,
    name: "Spritzer (White Wine)",
    ingredients: [
      "4 oz Dry White Wine (e.g., Sauvignon Blanc)",
      "2 oz Club Soda (or Sparkling Water)",
      "Lemon or Lime wedge"
    ],
    instructions: "Build in a wine glass with ice. Add wine and top with soda water. Garnish with citrus.",
    tags: ["wine", "white-wine", "built", "simple", "low-ABV", "refreshing"]
  },
  {
    id: 1156,
    name: "Kir (White Wine/Cassis)",
    ingredients: [
      "5 oz Dry White Wine (e.g., Aligoté or Chardonnay)",
      "0.5 oz Crème de Cassis (Blackcurrant Liqueur)"
    ],
    instructions: "Pour Crème de Cassis into the bottom of a wine glass. Top with chilled white wine. Stir gently.",
    tags: ["wine", "white-wine", "liqueur", "simple", "built", "classic"]
  },
  {
    id: 1157,
    name: "New York Sour (Dry Red Wine float)",
    ingredients: [
      "2 oz Bourbon or Rye whiskey",
      "1 oz Fresh lemon juice",
      "0.75 oz Simple Syrup (1:1)",
      "0.5 oz Dry Red Wine (e.g., Malbec or Zinfandel, float)"
    ],
    instructions: "Shake whiskey, lemon, and syrup with ice. Strain over fresh ice in a rocks glass. Gently float the red wine on top.",
    tags: ["whiskey", "red-wine", "sour", "float", "classic", "IBA"]
  },
  {
    id: 1158,
    name: "Bishop Cocktail (Sweet Red Wine)",
    ingredients: [
      "2 oz Aged Rum",
      "1 oz Sweet Red Wine (e.g., Port or Beaujolais)",
      "0.75 oz Fresh lemon juice",
      "0.5 oz Simple Syrup (1:1)",
      "Orange slice"
    ],
    instructions: "Shake rum, lemon, and syrup with ice. Strain over fresh ice. Gently float the sweet red wine on top. Garnish with an orange slice.",
    tags: ["rum", "red-wine", "sour", "float", "classic", "sweet-variation"]
  },
  {
    id: 1159,
    name: "Limoncello Spritz",
    ingredients: [
      "2 oz Limoncello (chilled)",
      "3 oz Prosecco or Sparkling Wine",
      "1 oz Club Soda",
      "Lemon wheel and Mint sprig"
    ],
    instructions: "Build in a wine glass with ice. Add Limoncello and Prosecco. Top with soda water. Garnish with a lemon wheel and mint.",
    tags: ["liqueur", "sparkling", "spritz", "built", "italian", "dessert"]
  }


];

// Example of how you would continue to expand the list:

/*
{
    id: 111,
    name: "Gimlet",
    ingredients: [
      "2 oz Gin or Vodka",
      "0.75 oz Fresh lime juice",
      "0.75 oz Simple Syrup (1:1)"
    ],
    instructions: "Shake all ingredients with ice. Strain into a chilled coupe. Garnish with a lime wheel.",
    tags: ["gin", "classic", "shaken", "sour", "IBA"]
},
{
    id: 1011, // Example of a 500+ ID number
    name: "Japanese Cocktail",
    ingredients: [
      "2 oz Cognac (VS/VSOP)",
      "0.75 oz Orgeat Syrup",
      "2 dashes Angostura bitters"
    ],
    instructions: "Stir all ingredients with ice until well-chilled. Strain into a chilled coupe. Garnish with a lemon twist.",
    tags: ["cognac", "classic", "stirred", "spirit-forward"]
},
{
    id: 306,
    name: "Three Dots and a Dash",
    ingredients: [
        "1.5 oz Aged Rhum Agricole",
        "0.5 oz Blended Aged Rum",
        "0.5 oz Allspice Dram",
        "0.5 oz Falernum",
        "0.75 oz Fresh lime juice",
        "0.75 oz Fresh orange juice",
        "0.5 oz Honey Syrup (2:1)"
    ],
    instructions: "Combine all ingredients in a shaker with ice. Shake well. Pour unstrained into a tiki mug and top with crushed ice. Garnish with three cherries and a pineapple wedge (The 'dots and a dash').",
    tags: ["rum", "tiki", "complex", "spiced"]
},
*/
