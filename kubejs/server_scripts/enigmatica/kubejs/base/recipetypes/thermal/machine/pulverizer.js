events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:ores/netherite',
                experience: 0.2,
                outputs: [Item.of('minecraft:netherite_scrap', 2)],
                id: 'thermal:machine/pulverizer/pulverizer_netherite'
            },
            {
                input: 'byg:pink_sandstone',
                outputs: [
                    Item.of('byg:pink_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_pink_sandstone',
                experience: 0.2
            },
            {
                input: 'byg:purple_sandstone',
                outputs: [
                    Item.of('byg:purple_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_purple_sandstone',
                experience: 0.2
            },
            {
                input: 'byg:blue_sandstone',
                outputs: [
                    Item.of('byg:blue_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_blue_sandstone',
                experience: 0.2
            },
            {
                input: 'byg:white_sandstone',
                outputs: [
                    Item.of('byg:white_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_white_sandstone',
                experience: 0.2
            },
            {
                input: 'byg:black_sandstone',
                outputs: [
                    Item.of('byg:black_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_black_sandstone',
                experience: 0.2
            },
            {
                input: 'atmospheric:arid_sandstone',
                outputs: [
                    Item.of('atmospheric:arid_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_arid_sandstone',
                experience: 0.2
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                outputs: [
                    Item.of('atmospheric:red_arid_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_red_arid_sandstone',
                experience: 0.2
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                outputs: [
                    Item.of('buildinggadgets:construction_paste', 3),
                    Item.of('buildinggadgets:construction_paste', 2).chance(0.5)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_construction_block',
                experience: 0.2
            },
            {
                input: 'create:limesand',
                outputs: [
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
                ],
                id: 'thermal:machine/pulverizer/pulverizer_limesand',
                experience: 0.2
            },
            {
                input: '#forge:storage_blocks/aurora',
                outputs: [Item.of('betterendforge:crystal_shards', 4)],
                id: 'thermal:machine/pulverizer/pulverizer_aurora',
                experience: 0.2
            },
            {
                input: '#forge:end_stones',
                outputs: [Item.of('occultism:crushed_end_stone', 4)],
                id: 'thermal:machine/pulverizer/pulverizer_end_stone',
                experience: 0.2
            },
            {
                input: '#forge:obsidian',
                outputs: [Item.of('emendatusenigmatica:obsidian_dust'), Item.of('minecraft:obsidian').chance(0.75)],
                experience: 0.2,
                id: 'thermal:machine/pulverizer/pulverizer_obsidian'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
