type MapMocks<Type> = {
  [Prop in keyof Type]: jest.Mock;
};

interface AsyncMocks {
  cache?: {
    get?: jest.Mock;
    set?: jest.Mock;
    setnx?: jest.Mock;
    getAll?: jest.Mock;
    delete?: jest.Mock;
    flush?: jest.Mock;
    keys?: jest.Mock;
  };
  collection?: {
    fetch?: jest.Mock;
    create?: jest.Mock;
    update?: jest.Mock;
    deleteCollection?: jest.Mock;
    dropColumn?: jest.Mock;
    addColumn?: jest.Mock;
    columns?: jest.Mock;
    remove?: jest.Mock;
    count?: jest.Mock;
    createIndex?: jest.Mock;
    createUniqueIndex?: jest.Mock;
    upsert?: jest.Mock;
  };
  query?: {
    query?: CbServer.PlatformQueryState;
    andFilter?: jest.Mock;
    or?: jest.Mock;
    equalTo?: jest.Mock;
    greaterThan?: jest.Mock;
    greaterThanEqualTo?: jest.Mock;
    lessThan?: jest.Mock;
    lessThanEqualTo?: jest.Mock;
    notEqualTo?: jest.Mock;
    matches?: jest.Mock;
    setPage?: jest.Mock;
    columns?: jest.Mock;
    ascending?: jest.Mock;
    descending?: jest.Mock;
    rawQuery?: jest.Mock;
  };
  lock?: {
    lock?: jest.Mock;
    unlock?: jest.Mock;
    rlock?: jest.Mock;
    runlock?: jest.Mock;
  };
  newCollection?: jest.Mock;
  database?: {
    query?: jest.Mock;
    exec?: jest.Mock;
    performOperation?: jest.Mock;
  };
  users?: MapMocks<Partial<CbServer.UsersAsync<Record<string, unknown>>>>;
  roles?: MapMocks<Partial<CbServer.RolesAsync>>;
  fs?: MapMocks<Partial<CbServer.FSAsync>>;
  file?: MapMocks<Partial<CbServer.FileAsync>>;
  preloader?: MapMocks<Partial<CbServer.PreloaderAsync>>;
  triggers?: MapMocks<Partial<CbServer.TriggersAsync>>;
  timers?: MapMocks<Partial<CbServer.TimersAsync>>;
  role?: MapMocks<Partial<CbServer.RoleAsync>>;
  customSync?: MapMocks<Partial<CbServer.CustomSyncAsync>>;
  secret?: MapMocks<Partial<CbServer.SecretAsync>>;
  auth?: MapMocks<Partial<CbServer.AuthAsync>>;
  googleCloudLogger?: MapMocks<Partial<CbServer.GoogleCloudLoggerAsync>>;
  edges?: MapMocks<Partial<CbServer.EdgesAsync>>;
  devices?: MapMocks<Partial<CbServer.DevicesAsync>>;
}
export class ClearBladeAsyncMock {
  mocks: Required<AsyncMocks>;
  Cache: jest.Mock;
  Collection: jest.Mock;
  FS: jest.Mock;
  File: jest.Mock;
  Query: jest.Mock;
  Lock: jest.Mock;
  newCollection: jest.Mock;
  Database: jest.Mock;
  Users: jest.Mock;
  Roles: jest.Mock;
  Triggers: jest.Mock;
  Preloader: jest.Mock;
  Timers: jest.Mock;
  Role: jest.Mock;
  CustomSync: jest.Mock;
  Secret: jest.Mock;
  Edges: jest.Mock;
  Auth: jest.Mock;
  Devices: jest.Mock;
  GoogleCloudLogger: jest.Mock;
  constructor(asyncMocks: AsyncMocks = {}) {
    const getMockOrDefault = (mock?: jest.Mock) => mock || jest.fn(() => Promise.resolve());

    this.mocks = {
      cache: {
        get: getMockOrDefault(asyncMocks.cache?.get),
        set: getMockOrDefault(asyncMocks.cache?.set),
        setnx: getMockOrDefault(asyncMocks.cache?.setnx),
        getAll: getMockOrDefault(asyncMocks.cache?.getAll),
        delete: getMockOrDefault(asyncMocks.cache?.delete),
        flush: getMockOrDefault(asyncMocks.cache?.flush),
        keys: getMockOrDefault(asyncMocks.cache?.keys),
      },
      collection: {
        fetch: getMockOrDefault(asyncMocks.collection?.fetch),
        create: getMockOrDefault(asyncMocks.collection?.create),
        update: getMockOrDefault(asyncMocks.collection?.update),
        deleteCollection: getMockOrDefault(asyncMocks.collection?.deleteCollection),
        dropColumn: getMockOrDefault(asyncMocks.collection?.dropColumn),
        addColumn: getMockOrDefault(asyncMocks.collection?.addColumn),
        columns: getMockOrDefault(asyncMocks.collection?.columns),
        remove: getMockOrDefault(asyncMocks.collection?.remove),
        count: getMockOrDefault(asyncMocks.collection?.count),
        createIndex: getMockOrDefault(asyncMocks.collection?.createIndex),
        createUniqueIndex: getMockOrDefault(asyncMocks.collection?.createUniqueIndex),
        upsert: getMockOrDefault(asyncMocks.collection?.upsert),
      },
      fs: {
        readDir: getMockOrDefault(asyncMocks.fs?.readDir),
        readFile: getMockOrDefault(asyncMocks.fs?.readFile),
        writeFile: getMockOrDefault(asyncMocks.fs?.writeFile),
        renameFile: getMockOrDefault(asyncMocks.fs?.renameFile),
        copyFile: getMockOrDefault(asyncMocks.fs?.copyFile),
        deleteFile: getMockOrDefault(asyncMocks.fs?.deleteFile),
        stat: getMockOrDefault(asyncMocks.fs?.stat),
      },
      file: {
        stat: getMockOrDefault(asyncMocks.file?.stat),
        read: getMockOrDefault(asyncMocks.file?.read),
        write: getMockOrDefault(asyncMocks.file?.write),
        rename: getMockOrDefault(asyncMocks.file?.rename),
        copy: getMockOrDefault(asyncMocks.file?.copy),
        delete: getMockOrDefault(asyncMocks.file?.delete),
      },
      query: {
        query: asyncMocks.query?.query,
        andFilter: getMockOrDefault(asyncMocks.query?.andFilter),
        or: getMockOrDefault(asyncMocks.query?.or),
        equalTo: getMockOrDefault(asyncMocks.query?.equalTo),
        greaterThan: getMockOrDefault(asyncMocks.query?.greaterThan),
        greaterThanEqualTo: getMockOrDefault(asyncMocks.query?.greaterThanEqualTo),
        lessThan: getMockOrDefault(asyncMocks.query?.lessThan),
        lessThanEqualTo: getMockOrDefault(asyncMocks.query?.lessThanEqualTo),
        notEqualTo: getMockOrDefault(asyncMocks.query?.notEqualTo),
        matches: getMockOrDefault(asyncMocks.query?.matches),
        setPage: getMockOrDefault(asyncMocks.query?.setPage),
        columns: getMockOrDefault(asyncMocks.query?.columns),
        ascending: getMockOrDefault(asyncMocks.query?.ascending),
        descending: getMockOrDefault(asyncMocks.query?.descending),
        rawQuery: getMockOrDefault(asyncMocks.query?.rawQuery),
      },
      newCollection: asyncMocks.newCollection || jest.fn(() => Promise.resolve()),
      lock: {
        lock: getMockOrDefault(asyncMocks.lock?.lock),
        unlock: getMockOrDefault(asyncMocks.lock?.unlock),
        rlock: getMockOrDefault(asyncMocks.lock?.rlock),
        runlock: getMockOrDefault(asyncMocks.lock?.runlock),
      },
      database: {
        query: getMockOrDefault(asyncMocks.database?.query),
        exec: getMockOrDefault(asyncMocks.database?.exec),
        performOperation: getMockOrDefault(asyncMocks.database?.performOperation),
      },
      users: {
        read: getMockOrDefault(asyncMocks.users?.read),
      },
      roles: {
        read: getMockOrDefault(asyncMocks.roles?.read),
        grantedTo: getMockOrDefault(asyncMocks.roles?.grantedTo),
      },
      triggers: {
        create: getMockOrDefault(asyncMocks.triggers?.create),
        read: getMockOrDefault(asyncMocks.triggers?.read),
        update: getMockOrDefault(asyncMocks.triggers?.update),
        delete: getMockOrDefault(asyncMocks.triggers?.delete),
      },
      preloader: {
        listen: getMockOrDefault(asyncMocks.preloader?.listen),
      },
      timers: {
        create: getMockOrDefault(asyncMocks.timers?.create),
        read: getMockOrDefault(asyncMocks.timers?.read),
        update: getMockOrDefault(asyncMocks.timers?.update),
        delete: getMockOrDefault(asyncMocks.timers?.delete),
      },
      role: {
        applyTo: getMockOrDefault(asyncMocks.role?.applyTo),
        setPermissions: getMockOrDefault(asyncMocks.role?.setPermissions),
      },
      customSync: {
        AllEdges: getMockOrDefault(asyncMocks.customSync?.AllEdges),
        Platform: getMockOrDefault(asyncMocks.customSync?.Platform),
        Now: getMockOrDefault(asyncMocks.customSync?.Now),
        sync: getMockOrDefault(asyncMocks.customSync?.sync),
      },
      secret: {
        create: getMockOrDefault(asyncMocks.secret?.create),
        delete: getMockOrDefault(asyncMocks.secret?.delete),
        deleteWithQuery: getMockOrDefault(asyncMocks.secret?.deleteWithQuery),
        read: getMockOrDefault(asyncMocks.secret?.read),
        update: getMockOrDefault(asyncMocks.secret?.update),
        readWithQuery: getMockOrDefault(asyncMocks.secret?.readWithQuery),
      },
      auth: {
        authAnon: getMockOrDefault(asyncMocks.auth?.authAnon),
        authDevice: getMockOrDefault(asyncMocks.auth?.authDevice),
        authUser: getMockOrDefault(asyncMocks.auth?.authUser),
        impersonateUser: getMockOrDefault(asyncMocks.auth?.impersonateUser),
        reauth: getMockOrDefault(asyncMocks.auth?.reauth),
        userIDFromToken: getMockOrDefault(asyncMocks.auth?.userIDFromToken),
      },
      devices: {
        create: getMockOrDefault(asyncMocks.devices?.create),
        delete: getMockOrDefault(asyncMocks.devices?.delete),
        read: getMockOrDefault(asyncMocks.devices?.read),
        update: getMockOrDefault(asyncMocks.devices?.update),
      },
      edges: {
        create: getMockOrDefault(asyncMocks.edges?.create),
        delete: getMockOrDefault(asyncMocks.edges?.delete),
        read: getMockOrDefault(asyncMocks.edges?.read),
        update: getMockOrDefault(asyncMocks.edges?.update),
      },
      googleCloudLogger: {
        adminAuditLog: getMockOrDefault(asyncMocks.googleCloudLogger?.adminAuditLog),
        deviceEventLog: getMockOrDefault(asyncMocks.googleCloudLogger?.deviceEventLog),
      },
    };

    this.Cache = jest.fn(() => this.mocks.cache);
    this.Collection = jest.fn(() => this.mocks.collection);
    this.FS = jest.fn(() => this.mocks.fs);
    this.File = jest.fn(() => this.mocks.file);
    this.Query = jest.fn(() => this.mocks.query);
    this.Lock = jest.fn(() => this.mocks.lock);
    this.newCollection = this.mocks.newCollection;
    this.Database = jest.fn(() => this.mocks.database);
    this.Users = jest.fn(() => this.mocks.users);
    this.Roles = jest.fn(() => this.mocks.roles);
    this.FS = jest.fn(() => this.mocks.fs);
    this.File = jest.fn(() => this.mocks.file);
    this.Triggers = jest.fn(() => this.mocks.triggers);
    this.Preloader = jest.fn(() => this.mocks.preloader);
    this.Timers = jest.fn(() => this.mocks.timers);
    this.Role = jest.fn(() => this.mocks.role);
    this.CustomSync = jest.fn(() => this.mocks.customSync);
    this.Secret = jest.fn(() => this.mocks.secret);
    this.Auth = jest.fn(() => this.mocks.auth);
    this.GoogleCloudLogger = jest.fn(() => this.mocks.googleCloudLogger);
    this.Edges = jest.fn(() => this.mocks.edges);
    this.Devices = jest.fn(() => this.mocks.devices);
  }
}
