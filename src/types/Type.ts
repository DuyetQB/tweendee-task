export interface IprosTable {
  rowKey?: string;
  loading?: boolean;
  onChange?: (pagination: any, filters: any, sorter: any, extra: any) => void;
  data: any[];
  onClickItem?: any;
  request?: any;
  total?: number;
  columns?: any[];
  textEmpty?: string;
  bordered?: boolean;
  defaultPageSize?: number;
  rowSelection?: any;
}


export interface FetchResult<T> {
  loading: boolean;
  error?: any;
  data?: T;
}
