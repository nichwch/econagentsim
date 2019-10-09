
class Model {
    constructor(options){
        this.agents = options.agents;
        this.firms = options.firms;

        this.information = options.information
    }
}

// create agents from an array of options
let createdAgents = [
    {

    },
    {

    },
    {

    },

    ]
.map((options)=>{return new Agent(options)});

// add agents to our hashmap of agents, which is the implementation the model requires
let agents = new Map();
createdAgents.forEach((agent)=>{
    let hash = Math.random().toString(36).substr(2, 9);
    agent.set(hash,agent);
});

// create firms from an array of options
let createdFirms = [
    {

    },
    {

    },
    {

    },

    ]
.map((options)=>{return new Firm(options)});

// add firms to our hashmap of firms, which is the implementation the model requires
let firms = new Map();
createdFirms.forEach((firm)=>{
    let hash = Math.random().toString(36).substr(2, 9);
    firm.set(hash,firm);
});

let options = {
    agents:agents,
    firms:firms
}
