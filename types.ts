
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Program {
  id: string;
  name: string;
  category: string;
  image: string;
  duration: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
