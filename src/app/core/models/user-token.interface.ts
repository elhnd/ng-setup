export interface UserToken {
    iat?: number;
    exp?: number;
    roles?: string[];
    username?: string;
}
  