var objectiveData = [
// ungrouped easy
{"name": "Toss a Coin in the Fountain", "difficulty": 1},
{"name": "Take a Shit", "difficulty": 1}, // Spend 30 seconds in the Lav, they made me change it
{"name": "Watch an Entire Alzara Cutscene", "difficulty": 1},
{"name": "Draft a Donut", "difficulty": 1},
{"name": "Dig Up Nothing", "difficulty": 1},
{"name": "Read The Red Prince", "difficulty": 1}, // removed "aloud"
{"name": "Draft Both Exits from Dark Room", "difficulty": 1},
{"name": "End with a Live Animal", "difficulty": 1},
{"name": "End in Planetarium", "difficulty": 1},
{"name": "Read Newspaper Clipping", "difficulty": 1},

// ungrouped medium
{"name": "Spend 3 Gems Drafting a Room", "difficulty": 2},
{"name": "Retrieve Key After Checking Overnight", "difficulty": 2},
{"name": "Trade a Microchip", "difficulty": 2},
{"name": "Permanently Increase a Room's Rarity", "difficulty": 2},
{"name": "Re-roll a Draft 4+ Times", "difficulty": 2},
{"name": "Open a Delivered Package", "difficulty": 2},
{"name": "Reach Rank 9", "difficulty": 2},
{"name": "Shelter the Lavatory", "difficulty": 2},
{"name": "Eat in Pantry, Kitchen, and Dining in a Day", "difficulty": 2},
{"name": "Draft 8 Blue Rooms in a Row", "difficulty": 2},
{"name": "Draft 2+ Copies of Room in a Day", "difficulty": 2},
{"name": "Draft an Architect's House", "difficulty": 2},
{"name": "Draft West and East Wing Halls", "difficulty": 2},
{"name": "Change a Room's Color", "difficulty": 2},
{"name": "Open Tomb Door to Reservoir", "difficulty": 2},

// ungrouped hard
{"name": "Collect Items Spread to Conference Room", "difficulty": 3},
{"name": "Read a Library Book", "difficulty": 3}, // removed aloud
{"name": "Buy a Special Key", "difficulty": 3},
{"name": "End a Day with 90+ Steps Left", "difficulty": 3},
{"name": "Open All Doors in Great Hall", "difficulty": 3},
{"name": "Retrieve a Coin from Draining Water", "difficulty": 3},
{"name": "Draft the Cloister for Free", "difficulty": 3},
{"name": "Collect a Flower Gem", "difficulty": 3},
{"name": "Cash a Payroll Check", "difficulty": 3},
{"name": "End with 35+ Rooms", "difficulty": 3},

// ungrouped very hard
{"name": "Enter Antechamber", "difficulty": 4},
{"name": "Gain Chess Power", "difficulty": 4},

// ungrouped mine
{"name": "Any Trophy", "difficulty": 6},
{"name": "Read the Monk's Riddle", "difficulty": 6},
{"name": "Room 46", "difficulty": 6},
{"name": "Open a Filing Cabinet", "difficulty": 3},
{"name": "Open a Vault Door", "difficulty": 5},
{"name": "Operate a Powered Device", "difficulty": 3}, // Lab, Pump, Garage, Laundry, Furnace
{"name": "Draft a Visible Room from Dark Room", "difficulty": 2},
{"name": "Purchase a Book", "difficulty": 4},
{"name": "Unlock a Basement Door", "difficulty": 5},
{"name": "Pull a Backup Lever", "difficulty": 5}, // Weight Room, Throne Room, Secret Garden or Mechanarium
{"name": "Purchase a Book", "difficulty": 3},
{"name": "Purchase an Item from the Showroom", "difficulty": 4},
{"name": "Start a Day with 4+ Gems", "difficulty": 3},
{"name": "Dig up Treasure", "difficulty": 4},
{"name": "Obtain the Ruby Crown", "difficulty": 5},
{"name": "Unfreeze a Key", "difficulty": 4},
{"name": "Open 3+ chests in the Reservoir", "difficulty": 5},
{"name": "Enter the Precipice from the Tomb", "difficulty": 5},
{"name": "Draft Her Ladyship's Chambers and the Master Bedroom in a Day", "difficulty": 5},
{"name": "Draft Maid's Chambers and Servant's Quarters in a Day", "difficulty": 3},
{"name": "Draft 3 Tunnels in a row", "difficulty": 5},
{"name": "Draw a Spoiled Room", "difficulty": 3},
{"name": "Reach Rank 9 Without Drafting a Hallway", "difficulty": 3},
{"name": "Unlock the House with Shelter", "difficulty": 4},
{"name": "Win a Prize in Roulette", "difficulty": 5},
{"name": "Draft a Room with an Active Stopwatch", "difficulty": 4},
{"name": "Remove a Room from the Drafting Pool", "difficulty": 4},
{"name": "Buy or Sell an Upgrade Disk", "difficulty": 3},
{"name": "Upgrade the Planetarium", "difficulty": 4},
{"name": "Draft 3 Interior Green Rooms", "difficulty": 4},
{"name": "Donate to the Lost and Found", "difficulty": 4},
{"name": "Consume 8+ Inventory Items in a Day", "difficulty": 4},
{"name": "Refill an Empty Watering Can", "difficulty": 4},
{"name": "Trigger an Experiment Ending your Day", "difficulty": 3},
{"name": "Lose 25+ Steps to Weight Room", "difficulty": 2},
{"name": "Use 2 Wind Up Keys in a Day", "difficulty": 2},
{"name": "Read a Red, Blue, and Green Memo in a Day", "difficulty": 4},
{"name": "Ride the Boat", "difficulty": 4},
{"name": "Eat a Cupcake", "difficulty": 4},
{"name": "Dig Up Spread Dirt", "difficulty": 4},
{"name": "Enter Ballroom with 6+ Gems", "difficulty": 3},
{"name": "Draft an Empty Aquarium", "difficulty": 3},
{"name": "Draft 3 Dead Ends Adjacent to 1 Room", "difficulty": 3},
{"name": "Unlock a Door with the Kennel", "difficulty": 5},
{"name": "Watch Security Footage", "difficulty": 1},


//grouped squares (only one of each group can appear)
{"name": "End with 100+ Steps Taken", "difficulty": 1, "group": "steps"},
{"name": "End with 120+ Steps Taken", "difficulty": 2, "group": "steps"},

{"name": "Buy Out Any Shop", "difficulty": 2, "group": "buyout"},
{"name": "Buy Out Kitchen", "difficulty": 2, "group": "buyout"},
{"name": "Buy Out Commissary", "difficulty": 3, "group": "buyout"},

{"name": "30+ Coins", "difficulty": 2, "group": "coins"},
{"name": "40+ Coins", "difficulty": 3, "group": "coins"},

{"name": "10+ Gems", "difficulty": 2, "group": "gems"},
{"name": "15+ Gems", "difficulty": 3, "group": "gems"},

{"name": "8+ Keys", "difficulty": 2, "group": "keys"},
{"name": "12+ Keys", "difficulty": 3, "group": "keys"},

{"name": "3+ Dice", "difficulty": 2, "group": "dice"},
{"name": "4+ Dice", "difficulty": 3, "group": "dice"},

{"name": "6+ Keys, Gems, Coins Each", "difficulty": 2, "group": "basics"},
{"name": "8+ Keys, Gems, Coins Each", "difficulty": 3, "group": "basics"},
{"name": "4+ Dice, Keys, Gems, Coins Each", "difficulty": 4, "group": "basics"},

{"name": "Eat Salted Food", "difficulty": 2, "group": "food"},
{"name": "Gain >20 Steps in Dining Room", "difficulty": 2, "group": "food"},

{"name": "3+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "4+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "5+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "6+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "7+ Allowance", "difficulty": 4, "group": "allowance"},
{"name": "8+ Allowance", "difficulty": 4, "group": "allowance"}, // 8-11 added
{"name": "9+ Allowance", "difficulty": 4, "group": "allowance"},
{"name": "10+ Allowance", "difficulty": 5, "group": "allowance"},
{"name": "11+ Allowance", "difficulty": 5, "group": "allowance"},

{"name": "5+ Stars", "difficulty": 2, "group": "stars"},
{"name": "10+ Stars", "difficulty": 3, "group": "stars"},
{"name": "15+ Stars", "difficulty": 4, "group": "stars"},

{"name": "Fail 1 Parlor", "difficulty": 1, "group": "parlor"},
{"name": "Solve 2 Parlors", "difficulty": 1, "group": "parlor"},
{"name": "Solve 3 Parlors", "difficulty": 2, "group": "parlor"},
{"name": "Solve 4 Parlors", "difficulty": 2, "group": "parlor"},

{"name": "Solve 2 Dartboards", "difficulty": 1, "group": "billiard"},
{"name": "Solve 3 Dartboards", "difficulty": 2, "group": "billiard"},
{"name": "Solve 4 Dartboards", "difficulty": 3, "group": "billiard"},

{"name": "Trigger Experiment 2x", "difficulty": 2, "group": "experiment"},
{"name": "Trigger Experiment 4x", "difficulty": 3, "group": "experiment"},

{"name": "8+ Inventory Items", "difficulty": 2, "group": "inventory"},
{"name": "10+ Inventory Items", "difficulty": 2, "group": "inventory"},
{"name": "12+ Inventory Items", "difficulty": 3, "group": "inventory"},

{"name": "Use 2 Upgrade Disks", "difficulty": 2, "group": "disks"},
{"name": "Use 3 Upgrade Disks", "difficulty": 3, "group": "disks"},
{"name": "Use 4 Upgrade Disks", "difficulty": 3, "group": "disks"},
{"name": "Use 5 Upgrade Disks", "difficulty": 4, "group": "disks"},

{"name": "2 Safes in a Day", "difficulty": 1, "group": "safes"},
{"name": "3 Safes in a Day", "difficulty": 2, "group": "safes"},
{"name": "4 Safes in a Day", "difficulty": 4, "group": "safes"}, // changed difficulty 3 -> 4

{"name": "Open 2 Trunks in a Day", "difficulty": 2, "group": "trunks"},
{"name": "Open the Car Trunk", "difficulty": 2, "group": "trunks"},

{"name": "Open 2 Security Doors in a Day", "difficulty": 1, "group": "security"},
{"name": "Open 4 Security Doors in a Day", "difficulty": 2, "group": "security"},

{"name": "Draft 3 Archived Floorplans in a Day", "difficulty": 2, "group": "archived"},
{"name": "Draft 4 Archived Floorplans in a Day", "difficulty": 2, "group": "archived"},
{"name": "Draft 5 Archived Floorplans in a Day", "difficulty": 3, "group": "archived"},
{"name": "Draft 6 Archived Floorplans in a Day", "difficulty": 3, "group": "archived"},

{"name": "Open 3 Lockers in a Day", "difficulty": 2, "group": "lockers"},
{"name": "Open 5 Lockers in a Day", "difficulty": 3, "group": "lockers"},
{"name": "Draft Locker, Sauna, Pump Rooms in a Day", "difficulty": 3, "group": "lockers"},

{"name": "End with 8+ Dead Ends", "difficulty": 1, "group": "dead_ends"},
{"name": "End with 10+ Dead Ends", "difficulty": 2, "group": "dead_ends"},
{"name": "End with 12+ Dead Ends", "difficulty": 3, "group": "dead_ends"},
{"name": "End with 14+ Dead Ends", "difficulty": 4, "group": "dead_ends"},
{"name": "End with 16+ Dead Ends", "difficulty": 5, "group": "dead_ends"},

{"name": "Draft 6 Red Rooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 7 Bedrooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Green Rooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Hallways in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 1 of Each Color Room in a Day", "difficulty": 2, "group": "rooms"},
{"name": "Draft 2 of Each Color Room in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 3 of Each Color Room in a Day", "difficulty": 4, "group": "rooms"},

{"name": "End in Rank 1 Pancake House", "difficulty": 1, "group": "pancake"},
{"name": "End in Rank 2 Pancake House", "difficulty": 1, "group": "pancake"},
{"name": "End in Rank 3 Pancake House", "difficulty": 2, "group": "pancake"},
{"name": "End in Rank 4 Pancake House", "difficulty": 2, "group": "pancake"},
{"name": "End in Rank 5 Pancake House", "difficulty": 3, "group": "pancake"},

{"name": "1 Full Directory Category", "difficulty": 2, "group": "full_dir"},
{"name": "Full Directory of Red Rooms", "difficulty": 3, "group": "full_dir"},
{"name": "Full Directory of Hallways", "difficulty": 3, "group": "full_dir"},
{"name": "2 Full Directory Categories", "difficulty": 4, "group": "full_dir"},

{"name": "Add 2 New Floorplans", "difficulty": 1, "group": "new_plan"},
{"name": "Add 3 New Floorplans", "difficulty": 3, "group": "new_plan"},
{"name": "Add 4 New Floorplans", "difficulty": 4, "group": "new_plan"},

{"name": "Attend Grade 3", "difficulty": 2, "group": "classroom"},
{"name": "Attend Grade 4", "difficulty": 3, "group": "classroom"},
{"name": "Attend Grade 5", "difficulty": 4, "group": "classroom"},

{"name": "Become Cursed", "difficulty": 2, "group": "shrine"},
{"name": "Rotate a Room", "difficulty": 2, "group": "shrine"},

{"name": "Dig 10x in a Day", "difficulty": 2, "group": "dig"},
{"name": "Dig 15x in a Day", "difficulty": 3, "group": "dig"},

{"name": "View Fine Print", "difficulty": 2, "group": "magnifying_glass"},
{"name": "View Stamp(s) in the Library", "difficulty": 3, "group": "magnifying_glass"},

{"name": "Non-Outer Room Outside", "difficulty": 3, "group": "shrine_outer"},
{"name": "Pick 3 Berries", "difficulty": 3, "group": "shrine_outer"},

{"name": "Use an Elevator", "difficulty": 2, "group": "flames"},
{"name": "Light 4 Blue Flames", "difficulty": 2, "group": "flames"},

{"name": "Pull Antechamber Lever", "difficulty": 2, "group": "levers"},
{"name": "Pull 2 Unique Levers", "difficulty": 3, "group": "levers"},
{"name": "Pull 3 Unique Levers", "difficulty": 4, "group": "levers"},

// my grouped
{"name": "3 Red Letters", "difficulty": 2, "group": "red_letters"},
{"name": "4 Red Letters", "difficulty": 3, "group": "red_letters"},
{"name": "5 Red Letters", "difficulty": 4, "group": "red_letters"},
{"name": "6 Red Letters", "difficulty": 5, "group": "red_letters"},

{"name": "Have 2 Major Keys", "difficulty": 2, "group": "major_keys"},
{"name": "Have 3 Major Keys", "difficulty": 3, "group": "major_keys"},
{"name": "Have 4 Major Keys", "difficulty": 4, "group": "major_keys"},
{"name": "Have 5 Major Keys", "difficulty": 5, "group": "major_keys"},

{"name": "Make a Contraption", "difficulty": 3, "group": "contraptions"}, // moved here
{"name": "2 Unique Contraptions", "difficulty": 4, "group": "contraptions"},
{"name": "3 Unique Contraptions", "difficulty": 5, "group": "contraptions"},
{"name": "Have 2 Contraptions", "difficulty": 5, "group": "contraptions"},
{"name": "Collapse the Gem Mine", "difficulty": 5, "group": "contraptions"},
{"name": "Dig Up a Gem", "difficulty": 5, "group": "contraptions"},
{"name": "Break a Wall with the Power Hammer", "difficulty": 5, "group": "contraptions"},

{"name": "Any Sanctum Key", "difficulty": 4, "group": "sanctum_keys"},
{"name": "1 Sigil", "difficulty": 5, "group": "sanctum_keys"},
{"name": "2 Sigils", "difficulty": 6, "group": "sanctum_keys"},

{"name": "Add Mechanarium", "difficulty": 4, "group": "mechanarium"}, // moved here
{"name": "4 Door Mechanarium", "difficulty": 5, "group": "mechanarium"},
{"name": "Open the North Antechamber Door", "difficulty": 5, "group": "mechanarium"},

{"name": "Draft 2 Bishops", "difficulty": 3, "group": "chess"}, // Chapel, Attic, Bookshop, Rumpus
{"name": "Draft 3 Bishops", "difficulty": 4, "group": "chess"}, 
{"name": "Draft 2 Knights", "difficulty": 2, "group": "chess"}, // Observatory, Security, Armory, Treasure
{"name": "Draft 3 Knights", "difficulty": 6, "group": "chess"},
{"name": "Draft 2 Rooks", "difficulty": 3, "group": "chess"}, // Nook, Vault, Conservatory, Clock
{"name": "Draft 3 Rooks", "difficulty": 5, "group": "chess"},

{"name": "Draft a Room in Each Corner", "difficulty": 4, "group": "corners"},
{"name": "Draft a Dead End in Each Corner", "difficulty": 5, "group": "corners"},

{"name": "Read an Email from Each Terminal", "difficulty": 5, "group": "grotto"},
{"name": "Draft Throne Room", "difficulty": 5, "group": "grotto"},
{"name": "Remove a Crate from the Tunnel", "difficulty": 6, "group": "grotto"},
];
