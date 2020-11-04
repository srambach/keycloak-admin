/**
 * https://www.keycloak.org/docs-api/6.0/rest-api/index.html#_clientscoperepresentation
 */

export interface UserFederationLdapGeneralRepresentation {
  displayName?: string;
  vendor?: string;
}

export interface UserFederationLdapConnectionRepresentation {
  connectionUrl?: string;
  enableStartTls?: Boolean;
  useTruststoreSpi?: string;
  connectionPooling?: Boolean;
  connectionTimeout?: string;
  bindType?: string;
  bindDn?: string;
  bindCredentials?: string;
}

export interface UserFederationLdapSearchingRepresentation {
  editMode?: string;
  usersDn?: string;
  usernameLdapAttribute?: string;
  rdnLdapAttribute?: string;
  uuidLdapAttribute?: string;
  userObjectClasses?: string;
  userLdapFilter?: string;
  searchScope?: string;
  readTimeout?: string;
  pagination?: Boolean;
}

export interface UserFederationLdapSynchronizationRepresentation {
  importUsers?: Boolean;
  batchSize?: string;
  periodicFullSync?: Boolean;
  periodicChangedUsersSync?: Boolean;
}

export interface UserFederationLdapKerberosIntegrationRepresentation {
  allowKerberosAuthentication?: Boolean;
  useKerberosForPasswordAuthentication?: Boolean;
}

export interface UserFederationLdapCacheRepresentation {
  cachePolicy?: Boolean;
}

export interface UserFederationLdapAdvancedRepresentation {
  enableLadpv3PasswordModify?: Boolean;
  validatePasswordPolicy?: Boolean;
  trustEmail?: Boolean;
}

export interface UserFederationLdapSettings
  extends UserFederationLdapGeneralRepresentation,
    UserFederationLdapConnectionRepresentation,
    UserFederationLdapSearchingRepresentation,
    UserFederationLdapSynchronizationRepresentation,
    UserFederationLdapKerberosIntegrationRepresentation,
    UserFederationLdapCacheRepresentation,
    UserFederationLdapAdvancedRepresentation {}
