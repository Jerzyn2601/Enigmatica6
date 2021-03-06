events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                output: 'thermal:blizz_powder',
                count: 3,
                id: 'pedestals:pedestal_crushing/blizz_rod'
            },
            {
                input: 'thermal:blitz_rod',
                output: 'thermal:blitz_powder',
                count: 3,
                id: 'pedestals:pedestal_crushing/blitz_rod'
            },
            {
                input: 'thermal:basalz_rod',
                output: 'thermal:basalz_powder',
                count: 3,
                id: 'pedestals:pedestal_crushing/basalz_rod'
            },
            {
                input: 'minecraft:end_stone',
                output: 'occultism:crushed_end_stone',
                count: 4,
                id: 'pedestals:pedestal_crushing/end_stone'
            },
            {
                input: 'minecraft:obsidian',
                output: 'emendatusenigmatica:obsidian_dust',
                count: 4,
                id: 'pedestals:pedestal_crushing/obsidian'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'pedestals:pedestal_crushing',
            ingredient: {
                item: recipe.input
            },
            result: {
                item: recipe.output,
                count: recipe.count
            }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
