export const preloadedState = {
    auth: {
      currentUser: null,
      userPicture: '',
      isLogined: false,
      status: '',
      error: '',
    },
    ui: {
      theme: 'bright',
      authBackdrop: false,
      loginModal: false,
      signUpModal: false,
    },
    data: {
      category: '',
      status: '',
      error: '',
      products: [],
      productCount: 0,
      maxProducts: 10
      
    },
    categories: {
      status: '',
      error: '',
      categories: []
    },
    filters: {
      selectedOptions: {},
      status: '',
      error: '',
      options: []
    }
  };