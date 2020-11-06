export type FormFields = {
  search: string;
};

export type Props = {
  search: string;
  handleSearch: (search: string) => void;
}