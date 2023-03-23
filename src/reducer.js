export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:"BQA1HCMQ2bh-ZpBrg3Zi-5V2MxHHgbr5L_l59Syf1H7iso3YxrHYG33ZsDHrKtTCA5bmFd9RqrCj7rtqCAQgy-x9H9Ky1B91hd3GvIdpI0sOHDBnzO9-3upfiuPuI4aUDFakcVKugYQIswrT9HuawHxJkZ_CIT8A51yP08_TMZW0zIKNbBqsCtmDmnun85xSAPiI7Hk8RAECfSlVV3iX9g5wDA"
    // token:"BQDZkhmz3UtbfvT1iXu0F7w23Cg8fnY2eK-y_yrNPyZOJryQk7aMnR2p38vhpkrF7WoBnE7LUkopJq4V2ziT3A5M9NYMtihihruWzYyLp9NSFB_l6yuoH6c-37U2mrGq5TyDBwKljp3BPGHjt4tSsf1miQMRKUGogsrkaq3RYCx1Mgc-JQm958qRvkwNP0ieXy_0hi3Q-ty_7CL-XzypAvSRkQ"
    // token: null
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
       
       case "SET_PLAYLISTS":
        return{
            ...state,
            playlists: action.playlists
            
        }
        
        case "SET_DISCOVER_WEEKLY":
        return{
            ...state,
            discover_weekly: action.discover_weekly
        }
      default: 
      return state
    }
    // state contains all the values like user , playlists ,playing etc
    
}

export default reducer;