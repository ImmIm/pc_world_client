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
      filters: {
        frequency: [1500, 2000, 2500, 3000, 3500],
        cores: [1, 2, 3, 4, 5, 6],
      },
    },
    categories: {
      status: '',
      error: '',
      categories: []
    },
  };