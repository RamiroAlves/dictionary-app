export interface IInput {
  value: string;
  onChangeText: (value: string) => void;
  iconCallback?: (ev: any) => void;
}
