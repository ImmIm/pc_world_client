export type UserInfo = {
  id: number;
  first_name: string;
  last_name: string;
  e_mail: string;
  password: string;
  phone: string | undefined;
  image: string | undefined;
} | null;

export type UserResponce = {
  user: UserInfo;
  image: any;
};

export type loginData = {
  email: string;
  password: string;
};

export type signUpData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type CategoryProps = {
  category: { name: string; category_picture: string; description: string };
};


export type Category = { id: number, name: string; category_picture: string; description: string }