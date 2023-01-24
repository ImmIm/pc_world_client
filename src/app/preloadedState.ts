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
      maxProducts: 10,
      currentProduct: {}
      
    },
    categories: {
      status: '',
      error: '',
      categories: []
    },
    filters: {
      filtering: false,
      selectedOptions: {},
      status: '',
      error: '',
      options: []
    }
  };