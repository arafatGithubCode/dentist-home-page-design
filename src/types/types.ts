export interface ISlide {
  title: string;
  subTitle: string;
  bgImg: string;
  img?: string;
  video: string;
}

export interface IProduct {
  images: string[];
  name: string;
  description: string;
  star: number;
  buttonText: string;
  category: string;
  productVideo: string;
}

export interface IDoctor {
  image: string;
  name: string;
  title: string;
  experience: string;
  workTime: string;
  phone: string;
  reviews: string;
  viewProfileLink: string;
  appointmentLink: string;
  badge: string;
  location: string;
}

export interface IEvent {
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  speaker: string;
  description: string;
  time: string;
}

export interface IBlog {
  title: string;
  description: string;
  publishData: string;
  category: string;
  image: string;
  publisher: {
    name: string;
    image: string;
  };
}

export interface IRecordService {
  numberOfAmount: string;
  title: string;
  subTitle: string;
}

export interface IPatientReview {
  image: string;
  name: string;
  date: string;
  star: number;
  description: string;
  platform: string;
}
