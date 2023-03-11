export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:"BQDZkhmz3UtbfvT1iXu0F7w23Cg8fnY2eK-y_yrNPyZOJryQk7aMnR2p38vhpkrF7WoBnE7LUkopJq4V2ziT3A5M9NYMtihihruWzYyLp9NSFB_l6yuoH6c-37U2mrGq5TyDBwKljp3BPGHjt4tSsf1miQMRKUGogsrkaq3RYCx1Mgc-JQm958qRvkwNP0ieXy_0hi3Q-ty_7CL-XzypAvSRkQ"
}

const reducer= (state,action)=>{
    console.log(action)
    
    switch(action.type){
     case "SET_USER":
      return{
          ...state,
          user:action.user
      };
      
     case "SET_TOKEN":
      return{
          ...state,
          token: action.token
      }
      
      default: 
      return state
    }
    
}

export default reducer;