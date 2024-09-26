export interface New {
  _id:         string;
  title:       string;
  subtitle:    string;
  content:     string;
  author:      string;
  date:        String;
  imgUrl:      string;
  category:    string;
  subcategory: string;
  newsType:    string;
  published:   boolean;
  tags:        string[];
  __v:         number;
}
