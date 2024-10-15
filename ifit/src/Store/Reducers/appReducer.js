const initialState = {
    theme: 'light',
    user: null,
    sidebarOpen: true,
  };
  
  const _changeTheme = (currentTheme) =>{
    return "NewTheme"+currentTheme
  }
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'TEST_REDUX':
       let newTheme=  _changeTheme(state.theme)
        return {
          ...state,
          theme: newTheme,
        };
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'TOGGLE_SIDEBAR':
        return {
          ...state,
          sidebarOpen: !state.sidebarOpen,
        };
      default:
        return state;
    }
  }
  