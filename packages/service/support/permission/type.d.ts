import { ApiRequestProps } from '../../type/next';

export type ReqHeaderAuthType = {
  cookie?: string;
  token?: string;
  apikey?: string; // abandon
  rootkey?: string;
  userid?: string;
  authorization?: string;
};
export type AuthModeType = {
  req: ApiRequestProps;
  authToken?: boolean;
  authRoot?: boolean;
  authApiKey?: boolean;
  per?: 'r' | 'w' | 'owner';
};
