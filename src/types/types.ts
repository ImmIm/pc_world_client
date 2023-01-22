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

export type Filter = {
  option: string;
  data: string[] | number[]
}




export type CpuProduct = {
  product_id: number;
  frequency: number;
  n_cores: number;
  model: string;
  socket: string;
}

export type GpuProduct = {
  product_id: number;
  frequency: number;
  chip_code_name: string;
  gpu_name: string;
  video_memory: string;
  video_memory_type: string;
}

export type Product =  {
  id: number;
  product_name: string;
  category_id: number;
  price: number;
  producer_country: string;
  producer_info: string;
  main_picture: string;
} & (CpuProduct | GpuProduct)

export type FilterOptions = {optionName: string, data: string[]}[]