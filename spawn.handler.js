/*

MOVE, 50
WORK, 100
CARRY, 50
ATTACK, 80
RANGED_ATTACK, 150
HEAL, 250
TOUGH, 10
CLAIM, 600

*/

var spawnHandler = {
  run: function () {
    var harvesters = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "harvester"
    );
    console.log("Harvesters: " + harvesters.length);

    var upgraders = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "upgrader"
    );
    console.log("Upgraders: " + upgraders.length);

    var builders = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "builder"
    );
    console.log("Builders: " + builders.length);

    if (harvesters.length < 2) {
      var newName = "Harvester" + Game.time;
      console.log("Spawning new harvester: " + newName);
      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], newName, {
        memory: { role: "harvester" },
      });
    }

    if (upgraders.length < 1) {
      var newName = "Upgrader" + Game.time;
      console.log("Spawning new upgrader: " + newName);
      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], newName, {
        memory: { role: "upgrader" },
      });
    }

    if (builders.length < 1) {
      var newName = "Builder" + Game.time;
      console.log("Spawning new builder: " + newName);
      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], newName, {
        memory: { role: "builder" },
      });
    }
  },
};

module.exports = spawnHandler;
