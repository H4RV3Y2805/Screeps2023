// Role Builder

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var buildTarget = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if(buildTarget) {
                if(creep.build(buildTarget) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(buildTarget, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {
	        var energySource = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(energySource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(energySource, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;