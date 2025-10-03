export interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
  article: {
    title: string;
    content: string;
  };
}

export interface ServiceData {
  [key: string]: Service;
}

export interface RequestFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  requestType: string;
  message: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface Article {
  title: string;
  summary: string;
  image: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}
