/* eslint-disable camelcase */
// import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';
import { KiboApolloClient } from '@kibocommerce/graphql-client';
import ApolloClient, { ApolloClientOptions } from 'apollo-client';

export interface ClientInstance extends ApolloClient<any> {
  tokenProvider?: KiboApolloClient;
}

export interface ApiConfig {
  uri: string;
  authHost: string;
  projectKey: string;
  clientId: string;
  clientSecret: string;
  scopes: string[];
}

export interface Token {
  access_token: string;
  expires_at: number;
  expires_in: number;
  scope: string;
  token_type: string;
  refresh_token: string;
}

export interface CookiesConfig {
  currencyCookieName: string;
  countryCookieName: string;
  localeCookieName: string;
  storeCookieName: string;
}

export interface LocaleItem {
  name: string;
  label: string;
}

export interface Auth {
  onTokenChange?: (token: Token) => void;
  onTokenRead?: () => string;
  onTokenRemove?: () => void;
}

export interface StoreService {
  changeCurrentStore: (id: string) => void
}

export interface SetupConfig<TCacheShape> {
  api?: ApiConfig;
  customOptions?: ApolloClientOptions<TCacheShape>;
  currency?: string;
  locale?: string;
  country?: string;
  countries?: LocaleItem[];
  currencies?: LocaleItem[];
  locales?: LocaleItem[];
  languageMap?: Record<string, any>;
  acceptLanguage?: string[];
  store: string;
  cookies?: CookiesConfig;
  auth?: Auth;
  storeService?: StoreService;
  forceToken?: boolean;
}

export interface CustomerCredentials {
  username: string;
  password: string;
}

export interface Config<T = any> {
  client?: ApolloClient<T>;
  api: ApiConfig;
  customOptions?: ApolloClientOptions<any>;
  currency: string;
  locale: string;
  country: string;
  countries: LocaleItem[];
  currencies: LocaleItem[];
  locales: LocaleItem[];
  languageMap: Record<string, any>;
  acceptLanguage: string[];
  store: string;
  cookies: CookiesConfig;
  auth?: Auth;
  storeService?: StoreService;
  forceToken?: boolean;
  handleIsTokenUserSession: (token: Token) => boolean;
}
