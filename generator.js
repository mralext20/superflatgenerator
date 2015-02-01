// Blocks
var blocks = [
{
    name: "Air",
    damage: 0,
    id: 0
},
{
    name: "Stone",
    damage: 0,
    id: 1
},
{
    name: "Grass Block",
    damage: 0,
    id: 2
},
{
    name: "Dirt",
    damage: 0,
    id: 3
},
{
    name: "Cobblestone",
    damage: 0,
    id: 4
},
{
    name: "Wooden Plank",
    damage: 0,
    id: 5
},
{
    name: "Oak Sapling",
    damage: 0,
    id: 6
},
{
    name: "Spruce Sapling",
    damage: 1,
    id: 6
},
{
    name: "Birch Sapling",
    damage: 2,
    id: 6
},
{
    name: "Bedrock",
    damage: 0,
    id: 7
},
{
    name: "Water",
    damage: 0,
    id: 8
},
{
    name: "Stationary water",
    damage: 0,
    id: 9
},
{
    name: "Lava",
    damage: 0,
    id: 10
},
{
    name: "Stationary lava",
    damage: 0,
    id: 11
},
{
    name: "Sand",
    damage: 0,
    id: 12
},
{
    name: "Gravel",
    damage: 0,
    id: 13
},
{
    name: "Gold Ore",
    damage: 0,
    id: 14
},
{
    name: "Iron Ore",
    damage: 0,
    id: 15
},
{
    name: "Coal Ore",
    damage: 0,
    id: 16
},
{
    name: "Log",
    damage: 0,
    id: 17
},
{
    name: "Redwood (Log)",
    damage: 1,
    id: 17
},
{
    name: "Birch (Log)",
    damage: 2,
    id: 17
},
{
    name: "Leaves",
    damage: 0,
    id: 18
},
{
    name: "Redwood (Leaves)",
    damage: 1,
    id: 18
},
{
    name: "Birch (Leaves)",
    damage: 2,
    id: 18
},
{
    name: "Sponge",
    damage: 0,
    id: 19
},
{
    name: "Glass",
    damage: 0,
    id: 20
},
{
    name: "Lapis Lazuli Ore",
    damage: 0,
    id: 21
},
{
    name: "Lapis Lazuli Block",
    damage: 0,
    id: 22
},
{
    name: "Sandstone",
    damage: 0,
    id: 24
},
{
    name: "Chiseled Sandstone",
    damage: 1,
    id: 24
},
{
    name: "Smooth Sandstone",
    damage: 2,
    id: 24
},
{
    name: "Bed (Block)",
    damage: 0,
    id: 26
},
{
    name: "Powered Rail",
    damage: 0,
    id: 27
},
{
    name: "Cobweb",
    damage: 0,
    id: 30
},
{
    name: "Dead Shrub (Tall Grass Retexture)",
    damage: 0,
    id: 31
},
{
    name: "Dead Bush",
    damage: 0,
    id: 32
},
{
    name: "White Wool",
    damage: 0,
    id: 35
},
{
    name: "Orange Wool",
    damage: 1,
    id: 35
},
{
    name: "Magenta Wool",
    damage: 2,
    id: 35
},
{
    name: "Light Blue Wool",
    damage: 3,
    id: 35
},
{
    name: "Yellow Wool",
    damage: 4,
    id: 35
},
{
    name: "Lime Green Wool",
    damage: 5,
    id: 35
},
{
    name: "Pink Wool",
    damage: 6,
    id: 35
},
{
    name: "Gray Wool",
    damage: 7,
    id: 35
},
{
    name: "Light Gray Wool",
    damage: 8,
    id: 35
},
{
    name: "Cyan Wool",
    damage: 9,
    id: 35
},
{
    name: "Purple Wool",
    damage: 10,
    id: 35
},
{
    name: "Blue Wool",
    damage: 11,
    id: 35
},
{
    name: "Brown Wool",
    damage: 12,
    id: 35
},
{
    name: "Green Wool",
    damage: 13,
    id: 35
},
{
    name: "Red Wool",
    damage: 14,
    id: 35
},
{
    name: "Black Wool",
    damage: 15,
    id: 35
},
{
    name: "Yellow Flower",
    damage: 0,
    id: 37
},
{
    name: "Cyan Flower",
    damage: 0,
    id: 38
},
{
    name: "Brown Mushroom",
    damage: 0,
    id: 39
},
{
    name: "Red Mushroom",
    damage: 0,
    id: 40
},
{
    name: "Gold Block",
    damage: 0,
    id: 41
},
{
    name: "Iron Block",
    damage: 0,
    id: 42
},
{
    name: "Double Slab (Stone)",
    damage: 0,
    id: 43
},
{
    name: "Double Slab (Sandstone)",
    damage: 1,
    id: 43
},
{
    name: "Double Slab (Wood alternate)",
    damage: 2,
    id: 43
},
{
    name: "Double Slab (Cobblestone)",
    damage: 3,
    id: 43
},
{
    name: "Double Slab (Brick)",
    damage: 4,
    id: 43
},
{
    name: "Double Slab (Stone)",
    damage: 6,
    id: 43
},
{
    name: "Slab (Stone)",
    damage: 0,
    id: 44
},
{
    name: "Slab (Sandstone)",
    damage: 1,
    id: 44
},
{
    name: "Slab (Wood alternate)",
    damage: 2,
    id: 44
},
{
    name: "Slab (Cobblestone)",
    damage: 3,
    id: 44
},
{
    name: "Slab (Brick)",
    damage: 4,
    id: 44
},
{
    name: "Slab (Stone Brick)",
    damage: 5,
    id: 44
},
{
    name: "Slab (Stone)",
    damage: 6,
    id: 44
},
{
    name: "Slab (Quartz)",
    damage: 7,
    id: 44
},
{
    name: "Brick Block",
    damage: 0,
    id: 45
},
{
    name: "TNT",
    damage: 0,
    id: 46
},
{
    name: "Bookshelf",
    damage: 0,
    id: 47
},
{
    name: "Moss Stone (Mossy Cobblestone)",
    damage: 0,
    id: 48
},
{
    name: "Obsidian",
    damage: 0,
    id: 49
},
{
    name: "Torch",
    damage: 0,
    id: 50
},
{
    name: "Fire",
    damage: 0,
    id: 51
},
{
    name: "Monster Spawner",
    damage: 0,
    id: 52
},
{
    name: "Wooden Stairs",
    damage: 0,
    id: 53
},
{
    name: "Chest",
    damage: 0,
    id: 54
},
{
    name: "Diamond Ore",
    damage: 0,
    id: 56
},
{
    name: "Diamond Block",
    damage: 0,
    id: 57
},
{
    name: "Crafting Table",
    damage: 0,
    id: 58
},
{
    name: "Crops (Block)",
    damage: 0,
    id: 59
},
{
    name: "Farmland",
    damage: 0,
    id: 60
},
{
    name: "Furnace",
    damage: 0,
    id: 61
},
{
    name: "Burning Furnace",
    damage: 0,
    id: 62
},
{
    name: "Sign Post",
    damage: 0,
    id: 63
},
{
    name: "Wooden Door (Block)",
    damage: 0,
    id: 64
},
{
    name: "Ladder",
    damage: 0,
    id: 65
},
{
    name: "Rail",
    damage: 0,
    id: 66
},
{
    name: "Cobblestone Stairs",
    damage: 0,
    id: 67
},
{
    name: "Wall Sign",
    damage: 0,
    id: 68
},
{
    name: "Iron Door (Block)",
    damage: 0,
    id: 71
},
{
    name: "Redstone Ore",
    damage: 0,
    id: 73
},
{
    name: "Glowing Redstone Ore",
    damage: 0,
    id: 74
},
{
    name: "Snow",
    damage: 0,
    id: 78
},
{
    name: "Ice",
    damage: 0,
    id: 79
},
{
    name: "Snow Block",
    damage: 0,
    id: 80
},
{
    name: "Cactus",
    damage: 0,
    id: 81
},
{
    name: "Clay Block",
    damage: 0,
    id: 82
},
{
    name: "Sugar Cane",
    damage: 0,
    id: 83
},
{
    name: "Fence",
    damage: 0,
    id: 85
},
{
    name: "Pumpkin",
    damage: 0,
    id: 86
},
{
    name: "Netherrack",
    damage: 0,
    id: 87
},
{
    name: "Glowstone",
    damage: 0,
    id: 89
},
{
    name: "Jack 'o' Lantern",
    damage: 0,
    id: 91
},
{
    name: "Cake block",
    damage: 0,
    id: 92
},
{
    name: "Invisible bedrock",
    damage: 0,
    id: 95
},
{
    name: "Trapdoor",
    damage: 0,
    id: 96
},
{
    name: "Stone Monster Egg",
    damage: 0,
    id: 97
},
{
    name: "Cobblestone Monster Egg",
    damage: 1,
    id: 97
},
{
    name: "Stone Brick Monster Egg",
    damage: 2,
    id: 97
},
{
    name: "Mossy Stone Brick Monster Egg",
    damage: 3,
    id: 97
},
{
    name: "Cracked Stone Monster Egg",
    damage: 4,
    id: 97
},
{
    name: "Chiseled Stone Monster Egg",
    damage: 5,
    id: 97
},
{
    name: "Stone Bricks",
    damage: 0,
    id: 98
},
{
    name: "Stone Bricks (mossy)",
    damage: 1,
    id: 98
},
{
    name: "Stone Bricks (cracked)",
    damage: 2,
    id: 98
},
{
    name: "Huge Brown Mushroom",
    damage: 0,
    id: 99
},
{
    name: "Huge Red Mushroom",
    damage: 0,
    id: 100
},
{
    name: "Iron Bars",
    damage: 0,
    id: 101
},
{
    name: "Glass Pane",
    damage: 0,
    id: 102
},
{
    name: "Melon",
    damage: 0,
    id: 103
},
{
    name: "Pumpkin Stem",
    damage: 0,
    id: 104
},
{
    name: "Melon Stem",
    damage: 0,
    id: 105
},
{
    name: "Vines",
    damage: 0,
    id: 106
},
{
    name: "Fence Gate",
    damage: 0,
    id: 107
},
{
    name: "Brick Stairs",
    damage: 0,
    id: 108
},
{
    name: "Stone Brick Stairs",
    damage: 0,
    id: 109
},
{
    name: "Mycelium",
    damage: 0,
    id: 110
},
{
    name: "Lily Pad",
    damage: 0,
    id: 111
},
{
    name: "Nether Brick (block)",
    damage: 0,
    id: 112
},
{
    name: "Nether Brick Stairs",
    damage: 0,
    id: 114
},
{
    name: "End Portal Frame",
    damage: 0,
    id: 120
},
{
    name: "End Stone",
    damage: 0,
    id: 121
},
{
    name: "Cake",
    damage: 0,
    id: 126
},
{
    name: "Cocoa",
    damage: 0,
    id: 127
},
{
    name: "Sandstone Stairs",
    damage: 0,
    id: 128
},
{
    name: "Emerald Ore",
    damage: 0,
    id: 129
},
{
    name: "Block of Emerald",
    damage: 0,
    id: 133
},
{
    name: "Spruce Stairs",
    damage: 0,
    id: 134
},
{
    name: "Birch Stairs",
    damage: 0,
    id: 135
},
{
    name: "Jungle Stairs",
    damage: 0,
    id: 136
},
{
    name: "Cobblestone Wall",
    damage: 0,
    id: 139
},
{
    name: "Carrot",
    damage: 0,
    id: 141
},
{
    name: "Potato",
    damage: 0,
    id: 142
},
{
    name: "Block of Quartz",
    damage: 0,
    id: 155
},
{
    name: "Chiseled Quartz Block",
    damage: 1,
    id: 155
},
{
    name: "Pillar Quartz Block",
    damage: 2,
    id: 155
},
{
    name: "Quartz Stairs",
    damage: 0,
    id: 156
},
{
    name: "Wooden Double Slab",
    damage: 0,
    id: 157
},
{
    name: "Wooden Slab",
    damage: 0,
    id: 158
},
{
    name: "Stained Clay",
    damage: 0,
    id: 159
},
{
    name: "Acacia Leaves",
    damage: 0,
    id: 161
},
{
    name: "Dark Oak Leaves",
    damage: 1,
    id: 161
},
{
    name: "Acacia Wood",
    damage: 0,
    id: 162
},
{
    name: "Dark Oak Wood",
    damage: 1,
    id: 162
},
{
    name: "Acacia Wood Stairs",
    damage: 0,
    id: 163
},
{
    name: "Dark Oak Wood Stairs",
    damage: 0,
    id: 164
},
{
    name: "Hay Bale",
    damage: 0,
    id: 170
},
{
    name: "Carpet",
    damage: 0,
    id: 171
},
{
    name: "Hardened Clay",
    damage: 0,
    id: 172
},
{
    name: "Block of Coal",
    damage: 0,
    id: 173
},
{
    name: "Packed Ice",
    damage: 0,
    id: 174
},
{
    name: "Large Flower",
    damage: 0,
    id: 175
},
{
    name: "Block 243",
    damage: 0,
    id: 243
},
{
    name: "Beetroot",
    damage: 0,
    id: 244
},
{
    name: "Stone Cutter",
    damage: 0,
    id: 245
},
{
    name: "Glowing Obsidian",
    damage: 0,
    id: 246
},
{
    name: "Nether Reactor Core",
    damage: 0,
    id: 247
},
{
    name: "'Update Game' block 1",
    damage: 0,
    id: 248
},
{
    name: "'Update Game' block 2",
    damage: 0,
    id: 249
},
{
    name: "Glitch Grass (grass_carried)",
    damage: 0,
    id: 253
},
{
    name: "Glitch Leaves (leaves_carried)",
    damage: 0,
    id: 254
},
{
    name: "Glitch Stone (info_reserved6)",
    damage: 0,
    id: 255
}
];


function populateList(query) {
    blocks.forEach(function(block) {

        if (query != "") { // query isnt empty
            var bnamel = block["name"].toLowerCase();
            var queryl = query.toLowerCase();

            if (bnamel.indexOf(queryl) == -1) return;
        }

        var id = block["id"];
        var name = block["name"];

        console.log("query = '" + query + "'");
        $("div#blocklist-list").append(
            "<a href=\"#\" class=\"list-group-item list-block\" data-block-id=\"" + 
            id + "\" data-block-name=\"" + name + 
            "\">" + id +": " + name + "</a>");
    });


    $("a.list-block").click(function() {
        addBlock({name: $(this).attr("data-block-name"), id: $(this).attr("data-block-id")});

        $("a.list-added-block").click(function() {
            $(this).remove();
            updateGeneration();
        });
    });
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
    populateList("");

    $("#search-input").on("keyup", function() {
        $("div#blocklist-list").empty();
        setTimeout(function() {
            populateList($("#search-input").val());
        }, 2);
    });

    $("a#navbar_reset").click(function() {
        var conf = confirm("Are you sure you want to delete all added blocks?");

        if (conf) {
            resetList();
        }
    });

    window.addEventListener("beforeunload", function(e) {
        var conf = "If you leave, you will lose all progress!";

        (e || window.event).returnValue = conf;
        return conf;
    });
});