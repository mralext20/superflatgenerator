// Blocks
var blocks = [
    {
        name: "Air",
        id: 0
    },
    {
        name: "Stone",
        id: 1
    },
    {
        name: "Grass Block",
        id: 2
    },
    {
        name: "Dirt",
        id: 3
    },
    {
        name: "Cobblestone",
        id: 4
    },
    {
        name: "Wooden Plank",
        id: 5
    },
    {
        name: "Oak Sapling",
        id: 6
    },
    {
        name: "Spruce Sapling",
        id: 6
    },
    {
        name: "Birch Sapling",
        id: 6
    },
    {
        name: "Bedrock",
        id: 7
    },
    {
        name: "Water",
        id: 8
    },
    {
        name: "Stationary water",
        id: 9
    },
    {
        name: "Lava",
        id: 10
    },
    {
        name: "Stationary lava",
        id: 11
    },
    {
        name: "Sand",
        id: 12
    },
    {
        name: "Gravel",
        id: 13
    },
    {
        name: "Gold Ore",
        id: 14
    },
    {
        name: "Iron Ore",
        id: 15
    },
    {
        name: "Coal Ore",
        id: 16
    },
    {
        name: "Log",
        id: 17
    },
    {
        name: "Redwood (Log)",
        id: 17
    },
    {
        name: "Birch (Log)",
        id: 17
    },
    {
        name: "Leaves",
        id: 18
    },
    {
        name: "Redwood (Leaves)",
        id: 18
    },
    {
        name: "Birch (Leaves)",
        id: 18
    },
    {
        name: "Sponge",
        id: 19
    },
    {
        name: "Glass",
        id: 20
    },
    {
        name: "Lapis Lazuli Ore",
        id: 21
    },
    {
        name: "Lapis Lazuli Block",
        id: 22
    },
    {
        name: "Sandstone",
        id: 24
    },
    {
        name: "Chiseled Sandstone",
        id: 24
    },
    {
        name: "Smooth Sandstone",
        id: 24
    },
    {
        name: "Bed (Block)",
        id: 26
    },
    {
        name: "Powered Rail",
        id: 27
    },
    {
        name: "Cobweb",
        id: 30
    },
    {
        name: "Dead Shrub (Tall Grass Retexture)",
        id: 31
    },
    {
        name: "Dead Bush",
        id: 32
    },
    {
        name: "White Wool",
        id: 35
    },
    {
        name: "Orange Wool",
        id: 35
    },
    {
        name: "Magenta Wool",
        id: 35
    },
    {
        name: "Light Blue Wool",
        id: 35
    },
    {
        name: "Yellow Wool",
        id: 35
    },
    {
        name: "Lime Green Wool",
        id: 35
    },
    {
        name: "Pink Wool",
        id: 35
    },
    {
        name: "Gray Wool",
        id: 35
    },
    {
        name: "Light Gray Wool",
        id: 35
    },
    {
        name: "Cyan Wool",
        id: 35
    },
    {
        name: "Purple Wool",
        id: 35
    },
    {
        name: "Blue Wool",
        id: 35
    },
    {
        name: "Brown Wool",
        id: 35
    },
    {
        name: "Green Wool",
        id: 35
    },
    {
        name: "Red Wool",
        id: 35
    },
    {
        name: "Black Wool",
        id: 35
    },
    {
        name: "Yellow Flower",
        id: 37
    },
    {
        name: "Cyan Flower",
        id: 38
    },
    {
        name: "Brown Mushroom",
        id: 39
    },
    {
        name: "Red Mushroom",
        id: 40
    },
    {
        name: "Gold Block",
        id: 41
    },
    {
        name: "Iron Block",
        id: 42
    },
    {
        name: "Double Slab (Stone)",
        id: 43
    },
    {
        name: "Double Slab (Sandstone)",
        id: 43
    },
    {
        name: "Double Slab (Wood alternate)",
        id: 43
    },
    {
        name: "Double Slab (Cobblestone)",
        id: 43
    },
    {
        name: "Double Slab (Brick)",
        id: 43
    },
    {
        name: "Double Slab (Stone)",
        id: 43
    },
    {
        name: "Slab (Stone)",
        id: 44
    },
    {
        name: "Slab (Sandstone)",
        id: 44
    },
    {
        name: "Slab (Wood alternate)",
        id: 44
    },
    {
        name: "Slab (Cobblestone)",
        id: 44
    },
    {
        name: "Slab (Brick)",
        id: 44
    },
    {
        name: "Slab (Stone Brick)",
        id: 44
    },
    {
        name: "Slab (Stone)",
        id: 44
    },
    {
        name: "Slab (Quartz)",
        id: 44
    },
    {
        name: "Brick Block",
        id: 45
    },
    {
        name: "TNT",
        id: 46
    },
    {
        name: "Bookshelf",
        id: 47
    },
    {
        name: "Moss Stone (Mossy Cobblestone)",
        id: 48
    },
    {
        name: "Obsidian",
        id: 49
    },
    {
        name: "Torch",
        id: 50
    },
    {
        name: "Fire",
        id: 51
    },
    {
        name: "Monster Spawner",
        id: 52
    },
    {
        name: "Wooden Stairs",
        id: 53
    },
    {
        name: "Chest",
        id: 54
    },
    {
        name: "Diamond Ore",
        id: 56
    },
    {
        name: "Diamond Block",
        id: 57
    },
    {
        name: "Crafting Table",
        id: 58
    },
    {
        name: "Crops (Block)",
        id: 59
    },
    {
        name: "Farmland",
        id: 60
    },
    {
        name: "Furnace",
        id: 61
    },
    {
        name: "Burning Furnace",
        id: 62
    },
    {
        name: "Sign Post",
        id: 63
    },
    {
        name: "Wooden Door (Block)",
        id: 64
    },
    {
        name: "Ladder",
        id: 65
    },
    {
        name: "Rail",
        id: 66
    },
    {
        name: "Cobblestone Stairs",
        id: 67
    },
    {
        name: "Wall Sign",
        id: 68
    },
    {
        name: "Iron Door (Block)",
        id: 71
    },
    {
        name: "Redstone Ore",
        id: 73
    },
    {
        name: "Glowing Redstone Ore",
        id: 74
    },
    {
        name: "Snow",
        id: 78
    },
    {
        name: "Ice",
        id: 79
    },
    {
        name: "Snow Block",
        id: 80
    },
    {
        name: "Cactus",
        id: 81
    },
    {
        name: "Clay Block",
        id: 82
    },
    {
        name: "Sugar Cane",
        id: 83
    },
    {
        name: "Fence",
        id: 85
    },
    {
        name: "Pumpkin",
        id: 86
    },
    {
        name: "Netherrack",
        id: 87
    },
    {
        name: "Glowstone",
        id: 89
    },
    {
        name: "Jack 'o' Lantern",
        id: 91
    },
    {
        name: "Cake block",
        id: 92
    },
    {
        name: "Invisible bedrock",
        id: 95
    },
    {
        name: "Trapdoor",
        id: 96
    },
    {
        name: "Stone Monster Egg",
        id: 97
    },
    {
        name: "Cobblestone Monster Egg",
        id: 97
    },
    {
        name: "Stone Brick Monster Egg",
        id: 97
    },
    {
        name: "Mossy Stone Brick Monster Egg",
        id: 97
    },
    {
        name: "Cracked Stone Monster Egg",
        id: 97
    },
    {
        name: "Chiseled Stone Monster Egg",
        id: 97
    },
    {
        name: "Stone Bricks",
        id: 98
    },
    {
        name: "Stone Bricks (mossy)",
        id: 98
    },
    {
        name: "Stone Bricks (cracked)",
        id: 98
    },
    {
        name: "Huge Brown Mushroom",
        id: 99
    },
    {
        name: "Huge Red Mushroom",
        id: 100
    },
    {
        name: "Iron Bars",
        id: 101
    },
    {
        name: "Glass Pane",
        id: 102
    },
    {
        name: "Melon",
        id: 103
    },
    {
        name: "Pumpkin Stem",
        id: 104
    },
    {
        name: "Melon Stem",
        id: 105
    },
    {
        name: "Vines",
        id: 106
    },
    {
        name: "Fence Gate",
        id: 107
    },
    {
        name: "Brick Stairs",
        id: 108
    },
    {
        name: "Stone Brick Stairs",
        id: 109
    },
    {
        name: "Mycelium",
        id: 110
    },
    {
        name: "Lily Pad",
        id: 111
    },
    {
        name: "Nether Brick (block)",
        id: 112
    },
    {
        name: "Nether Brick Stairs",
        id: 114
    },
    {
        name: "End Portal Frame",
        id: 120
    },
    {
        name: "End Stone",
        id: 121
    },
    {
        name: "Cake",
        id: 126
    },
    {
        name: "Cocoa",
        id: 127
    },
    {
        name: "Sandstone Stairs",
        id: 128
    },
    {
        name: "Emerald Ore",
        id: 129
    },
    {
        name: "Block of Emerald",
        id: 133
    },
    {
        name: "Spruce Stairs",
        id: 134
    },
    {
        name: "Birch Stairs",
        id: 135
    },
    {
        name: "Jungle Stairs",
        id: 136
    },
    {
        name: "Cobblestone Wall",
        id: 139
    },
    {
        name: "Carrot",
        id: 141
    },
    {
        name: "Potato",
        id: 142
    },
    {
        name: "Block of Quartz",
        id: 155
    },
    {
        name: "Chiseled Quartz Block",
        id: 155
    },
    {
        name: "Pillar Quartz Block",
        id: 155
    },
    {
        name: "Quartz Stairs",
        id: 156
    },
    {
        name: "Wooden Double Slab",
        id: 157
    },
    {
        name: "Wooden Slab",
        id: 158
    },
    {
        name: "Stained Clay",
        id: 159
    },
    {
        name: "Acacia Leaves",
        id: 161
    },
    {
        name: "Dark Oak Leaves",
        id: 161
    },
    {
        name: "Acacia Wood",
        id: 162
    },
    {
        name: "Dark Oak Wood",
        id: 162
    },
    {
        name: "Acacia Wood Stairs",
        id: 163
    },
    {
        name: "Dark Oak Wood Stairs",
        id: 164
    },
    {
        name: "Hay Bale",
        id: 170
    },
    {
        name: "Carpet",
        id: 171
    },
    {
        name: "Hardened Clay",
        id: 172
    },
    {
        name: "Block of Coal",
        id: 173
    },
    {
        name: "Packed Ice",
        id: 174
    },
    {
        name: "Large Flower",
        id: 175
    },
    {
        name: "Block 243",
        id: 243
    },
    {
        name: "Beetroot",
        id: 244
    },
    {
        name: "Stone Cutter",
        id: 245
    },
    {
        name: "Glowing Obsidian",
        id: 246
    },
    {
        name: "Nether Reactor Core",
        id: 247
    },
    {
        name: "'Update Game' block 1",
        id: 248
    },
    {
        name: "'Update Game' block 2",
        id: 249
    },
    {
        name: "Glitch Grass (grass_carried)",
        id: 253
    },
    {
        name: "Glitch Leaves (leaves_carried)",
        id: 254
    },
    {
        name: "Glitch Stone (info_reserved6)",
        id: 255
    }
];

function populateList() {
    blocks.forEach(function(block) {
        $("div#blocklist-list").append(
            "<a href=\"#\" class=\"list-group-item list-block\" data-block-id=\"" + 
                block["id"] + "\" data-block-name=\"" + block["name"] + 
                "\">" + block["id"] +": " + block["name"] + "</a>"
        );
    })
}

function updateGeneration() {
    $("#generation-area").text("[");
    i = 0;
    $("div#addedlist-list").children().each(function() {
        i++; // increment lookahead
        if ($("div#addedlist-list").children()[i] == null) {
            $("#generation-area").append($(this).attr("data-block-id"));
        } else {
            $("#generation-area").append($(this).attr("data-block-id") + ",");
        }
    });
    $("#generation-area").append("]")
}

function resetList() {
    $("div#addedlist-list").empty();
    updateGeneration();
}

function addBlock(block) {
    $("div#addedlist-list").append(
        "<a href=\"#\" class=\"list-group-item list-added-block\" data-block-id=\"" + 
            block["id"] + "\" data-block-name=\"" + block["name"] + 
            "\">" + block["id"] +": " + block["name"] + "</a>"
    );

    updateGeneration();
}

$(document.body).ready(function() {
    populateList();

    $("a.list-block").click(function() {
        addBlock({name: $(this).attr("data-block-name"), id: $(this).attr("data-block-id")});

        $("a.list-added-block").click(function() {
            $(this).remove();
            updateGeneration();
        });
    });

    $("a#navbar_reset").click(function() {
        var conf = confirm("Are you sure you want to delete all added blocks?");

        if (conf) {
            resetList();
        }
    });
});