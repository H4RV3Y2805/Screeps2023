// Role Repairer

var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.repairing = true;
	        creep.say('🔧 repairing');
	    }

	    if(creep.memory.repairing) {
	        var repairTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: object => object.hits < (object.hitsMax/4)
               });
   
            if(repairTarget) {
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

module.exports = roleRepairer;