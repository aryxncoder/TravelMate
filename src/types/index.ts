export interface Destination {
  _id?: string;
  name: string;
  country: string;
  description: string;
  notes: string;
  budget: number;
  imageUrl: string;
  status: 'bucket-list' | 'visited';
  dateAdded: string;
  dateVisited?: string;
}

export interface FilterStatus {
  all: boolean;
  bucketList: boolean;
  visited: boolean;
}