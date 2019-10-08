
# Model Assumptions:

Long term goal is to make as few variables exogenous as possible  
Derive EVERYTHING from individual behavior  

What is exogenous(for now)  
All initial variables (prices, information, agent parameters, firm parameters, etc. etc.)  

Model proceeds on a step by step basis  
Each step represents a day in real-time  
During each step, information is propagated and choices are made by agents and firms  

# Agents
*All agents are adults  
*All agents participate in the labor force  
*Agents make decisions based on their own information  
    Information is sourced from:  
        Public Information  
        Relationships with other Agents  
    Agent parameters will decide how they weigh this information  
    Depending on the parameters, they may weight public information more,  
      or the information of their peers. They may even ignore information unless  
      it is from an extremely trusted peer.  
    Agents have relationships with other Agents  
      In the model, all agents will be stored in a hashmap  
      Relationships will be represented as an undirected graph  

# Goods
  Price information about goods is never certain to agents or producers  
  Some information is public, and stored on the top level of the Model  
    This is available to both agents and producers  
    Public information always has a source  
      This source is either a firm or an Agent  
