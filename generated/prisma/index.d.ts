
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VotingPool
 * 
 */
export type VotingPool = $Result.DefaultSelection<Prisma.$VotingPoolPayload>
/**
 * Model VotingOption
 * 
 */
export type VotingOption = $Result.DefaultSelection<Prisma.$VotingOptionPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model VotingParticipation
 * 
 */
export type VotingParticipation = $Result.DefaultSelection<Prisma.$VotingParticipationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.votingPool`: Exposes CRUD operations for the **VotingPool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VotingPools
    * const votingPools = await prisma.votingPool.findMany()
    * ```
    */
  get votingPool(): Prisma.VotingPoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.votingOption`: Exposes CRUD operations for the **VotingOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VotingOptions
    * const votingOptions = await prisma.votingOption.findMany()
    * ```
    */
  get votingOption(): Prisma.VotingOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.votingParticipation`: Exposes CRUD operations for the **VotingParticipation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VotingParticipations
    * const votingParticipations = await prisma.votingParticipation.findMany()
    * ```
    */
  get votingParticipation(): Prisma.VotingParticipationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VotingPool: 'VotingPool',
    VotingOption: 'VotingOption',
    Vote: 'Vote',
    VotingParticipation: 'VotingParticipation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "votingPool" | "votingOption" | "vote" | "votingParticipation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VotingPool: {
        payload: Prisma.$VotingPoolPayload<ExtArgs>
        fields: Prisma.VotingPoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VotingPoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VotingPoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload>
          }
          findFirst: {
            args: Prisma.VotingPoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VotingPoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload>
          }
          findMany: {
            args: Prisma.VotingPoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload>[]
          }
          create: {
            args: Prisma.VotingPoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload>
          }
          createMany: {
            args: Prisma.VotingPoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VotingPoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload>
          }
          update: {
            args: Prisma.VotingPoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload>
          }
          deleteMany: {
            args: Prisma.VotingPoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VotingPoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VotingPoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingPoolPayload>
          }
          aggregate: {
            args: Prisma.VotingPoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVotingPool>
          }
          groupBy: {
            args: Prisma.VotingPoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotingPoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.VotingPoolCountArgs<ExtArgs>
            result: $Utils.Optional<VotingPoolCountAggregateOutputType> | number
          }
        }
      }
      VotingOption: {
        payload: Prisma.$VotingOptionPayload<ExtArgs>
        fields: Prisma.VotingOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VotingOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VotingOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload>
          }
          findFirst: {
            args: Prisma.VotingOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VotingOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload>
          }
          findMany: {
            args: Prisma.VotingOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload>[]
          }
          create: {
            args: Prisma.VotingOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload>
          }
          createMany: {
            args: Prisma.VotingOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VotingOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload>
          }
          update: {
            args: Prisma.VotingOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload>
          }
          deleteMany: {
            args: Prisma.VotingOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VotingOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VotingOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingOptionPayload>
          }
          aggregate: {
            args: Prisma.VotingOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVotingOption>
          }
          groupBy: {
            args: Prisma.VotingOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotingOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VotingOptionCountArgs<ExtArgs>
            result: $Utils.Optional<VotingOptionCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      VotingParticipation: {
        payload: Prisma.$VotingParticipationPayload<ExtArgs>
        fields: Prisma.VotingParticipationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VotingParticipationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VotingParticipationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload>
          }
          findFirst: {
            args: Prisma.VotingParticipationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VotingParticipationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload>
          }
          findMany: {
            args: Prisma.VotingParticipationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload>[]
          }
          create: {
            args: Prisma.VotingParticipationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload>
          }
          createMany: {
            args: Prisma.VotingParticipationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VotingParticipationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload>
          }
          update: {
            args: Prisma.VotingParticipationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload>
          }
          deleteMany: {
            args: Prisma.VotingParticipationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VotingParticipationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VotingParticipationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotingParticipationPayload>
          }
          aggregate: {
            args: Prisma.VotingParticipationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVotingParticipation>
          }
          groupBy: {
            args: Prisma.VotingParticipationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotingParticipationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VotingParticipationCountArgs<ExtArgs>
            result: $Utils.Optional<VotingParticipationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    votingPool?: VotingPoolOmit
    votingOption?: VotingOptionOmit
    vote?: VoteOmit
    votingParticipation?: VotingParticipationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    votes: number
    votingParticipation: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    votingParticipation?: boolean | UserCountOutputTypeCountVotingParticipationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotingParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotingParticipationWhereInput
  }


  /**
   * Count Type VotingPoolCountOutputType
   */

  export type VotingPoolCountOutputType = {
    options: number
    votes: number
    participation: number
  }

  export type VotingPoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | VotingPoolCountOutputTypeCountOptionsArgs
    votes?: boolean | VotingPoolCountOutputTypeCountVotesArgs
    participation?: boolean | VotingPoolCountOutputTypeCountParticipationArgs
  }

  // Custom InputTypes
  /**
   * VotingPoolCountOutputType without action
   */
  export type VotingPoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPoolCountOutputType
     */
    select?: VotingPoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VotingPoolCountOutputType without action
   */
  export type VotingPoolCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotingOptionWhereInput
  }

  /**
   * VotingPoolCountOutputType without action
   */
  export type VotingPoolCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * VotingPoolCountOutputType without action
   */
  export type VotingPoolCountOutputTypeCountParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotingParticipationWhereInput
  }


  /**
   * Count Type VotingOptionCountOutputType
   */

  export type VotingOptionCountOutputType = {
    votes: number
  }

  export type VotingOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | VotingOptionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * VotingOptionCountOutputType without action
   */
  export type VotingOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOptionCountOutputType
     */
    select?: VotingOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VotingOptionCountOutputType without action
   */
  export type VotingOptionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    role: number | null
  }

  export type UserSumAggregateOutputType = {
    role: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    password: string | null
    avatarImage: Uint8Array | null
    role: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    password: string | null
    avatarImage: Uint8Array | null
    role: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    email: number
    password: number
    avatarImage: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    role?: true
  }

  export type UserSumAggregateInputType = {
    role?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    password?: true
    avatarImage?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    password?: true
    avatarImage?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    password?: true
    avatarImage?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage: Uint8Array | null
    role: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    password?: boolean
    avatarImage?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votes?: boolean | User$votesArgs<ExtArgs>
    votingParticipation?: boolean | User$votingParticipationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    password?: boolean
    avatarImage?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "email" | "password" | "avatarImage" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | User$votesArgs<ExtArgs>
    votingParticipation?: boolean | User$votingParticipationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      votes: Prisma.$VotePayload<ExtArgs>[]
      votingParticipation: Prisma.$VotingParticipationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      email: string
      password: string
      avatarImage: Uint8Array | null
      role: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votingParticipation<T extends User$votingParticipationArgs<ExtArgs> = {}>(args?: Subset<T, User$votingParticipationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarImage: FieldRef<"User", 'Bytes'>
    readonly role: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User.votingParticipation
   */
  export type User$votingParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    where?: VotingParticipationWhereInput
    orderBy?: VotingParticipationOrderByWithRelationInput | VotingParticipationOrderByWithRelationInput[]
    cursor?: VotingParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotingParticipationScalarFieldEnum | VotingParticipationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VotingPool
   */

  export type AggregateVotingPool = {
    _count: VotingPoolCountAggregateOutputType | null
    _avg: VotingPoolAvgAggregateOutputType | null
    _sum: VotingPoolSumAggregateOutputType | null
    _min: VotingPoolMinAggregateOutputType | null
    _max: VotingPoolMaxAggregateOutputType | null
  }

  export type VotingPoolAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type VotingPoolSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type VotingPoolMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    image: Uint8Array | null
    startDate: Date | null
    endDate: Date | null
    anonymous: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latitude: number | null
    longitude: number | null
    address: string | null
  }

  export type VotingPoolMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    image: Uint8Array | null
    startDate: Date | null
    endDate: Date | null
    anonymous: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latitude: number | null
    longitude: number | null
    address: string | null
  }

  export type VotingPoolCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    image: number
    startDate: number
    endDate: number
    anonymous: number
    status: number
    createdAt: number
    updatedAt: number
    latitude: number
    longitude: number
    address: number
    _all: number
  }


  export type VotingPoolAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type VotingPoolSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type VotingPoolMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    startDate?: true
    endDate?: true
    anonymous?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    latitude?: true
    longitude?: true
    address?: true
  }

  export type VotingPoolMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    startDate?: true
    endDate?: true
    anonymous?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    latitude?: true
    longitude?: true
    address?: true
  }

  export type VotingPoolCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    startDate?: true
    endDate?: true
    anonymous?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    latitude?: true
    longitude?: true
    address?: true
    _all?: true
  }

  export type VotingPoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VotingPool to aggregate.
     */
    where?: VotingPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingPools to fetch.
     */
    orderBy?: VotingPoolOrderByWithRelationInput | VotingPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VotingPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VotingPools
    **/
    _count?: true | VotingPoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotingPoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotingPoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotingPoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotingPoolMaxAggregateInputType
  }

  export type GetVotingPoolAggregateType<T extends VotingPoolAggregateArgs> = {
        [P in keyof T & keyof AggregateVotingPool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotingPool[P]>
      : GetScalarType<T[P], AggregateVotingPool[P]>
  }




  export type VotingPoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotingPoolWhereInput
    orderBy?: VotingPoolOrderByWithAggregationInput | VotingPoolOrderByWithAggregationInput[]
    by: VotingPoolScalarFieldEnum[] | VotingPoolScalarFieldEnum
    having?: VotingPoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotingPoolCountAggregateInputType | true
    _avg?: VotingPoolAvgAggregateInputType
    _sum?: VotingPoolSumAggregateInputType
    _min?: VotingPoolMinAggregateInputType
    _max?: VotingPoolMaxAggregateInputType
  }

  export type VotingPoolGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    image: Uint8Array | null
    startDate: Date
    endDate: Date
    anonymous: boolean
    status: string
    createdAt: Date
    updatedAt: Date
    latitude: number | null
    longitude: number | null
    address: string | null
    _count: VotingPoolCountAggregateOutputType | null
    _avg: VotingPoolAvgAggregateOutputType | null
    _sum: VotingPoolSumAggregateOutputType | null
    _min: VotingPoolMinAggregateOutputType | null
    _max: VotingPoolMaxAggregateOutputType | null
  }

  type GetVotingPoolGroupByPayload<T extends VotingPoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotingPoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotingPoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotingPoolGroupByOutputType[P]>
            : GetScalarType<T[P], VotingPoolGroupByOutputType[P]>
        }
      >
    >


  export type VotingPoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
    anonymous?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    options?: boolean | VotingPool$optionsArgs<ExtArgs>
    votes?: boolean | VotingPool$votesArgs<ExtArgs>
    participation?: boolean | VotingPool$participationArgs<ExtArgs>
    _count?: boolean | VotingPoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votingPool"]>



  export type VotingPoolSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
    anonymous?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
  }

  export type VotingPoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "image" | "startDate" | "endDate" | "anonymous" | "status" | "createdAt" | "updatedAt" | "latitude" | "longitude" | "address", ExtArgs["result"]["votingPool"]>
  export type VotingPoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | VotingPool$optionsArgs<ExtArgs>
    votes?: boolean | VotingPool$votesArgs<ExtArgs>
    participation?: boolean | VotingPool$participationArgs<ExtArgs>
    _count?: boolean | VotingPoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VotingPoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VotingPool"
    objects: {
      options: Prisma.$VotingOptionPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      participation: Prisma.$VotingParticipationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      image: Uint8Array | null
      startDate: Date
      endDate: Date
      anonymous: boolean
      status: string
      createdAt: Date
      updatedAt: Date
      latitude: number | null
      longitude: number | null
      address: string | null
    }, ExtArgs["result"]["votingPool"]>
    composites: {}
  }

  type VotingPoolGetPayload<S extends boolean | null | undefined | VotingPoolDefaultArgs> = $Result.GetResult<Prisma.$VotingPoolPayload, S>

  type VotingPoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VotingPoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotingPoolCountAggregateInputType | true
    }

  export interface VotingPoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VotingPool'], meta: { name: 'VotingPool' } }
    /**
     * Find zero or one VotingPool that matches the filter.
     * @param {VotingPoolFindUniqueArgs} args - Arguments to find a VotingPool
     * @example
     * // Get one VotingPool
     * const votingPool = await prisma.votingPool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VotingPoolFindUniqueArgs>(args: SelectSubset<T, VotingPoolFindUniqueArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VotingPool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VotingPoolFindUniqueOrThrowArgs} args - Arguments to find a VotingPool
     * @example
     * // Get one VotingPool
     * const votingPool = await prisma.votingPool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VotingPoolFindUniqueOrThrowArgs>(args: SelectSubset<T, VotingPoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VotingPool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingPoolFindFirstArgs} args - Arguments to find a VotingPool
     * @example
     * // Get one VotingPool
     * const votingPool = await prisma.votingPool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VotingPoolFindFirstArgs>(args?: SelectSubset<T, VotingPoolFindFirstArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VotingPool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingPoolFindFirstOrThrowArgs} args - Arguments to find a VotingPool
     * @example
     * // Get one VotingPool
     * const votingPool = await prisma.votingPool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VotingPoolFindFirstOrThrowArgs>(args?: SelectSubset<T, VotingPoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VotingPools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingPoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VotingPools
     * const votingPools = await prisma.votingPool.findMany()
     * 
     * // Get first 10 VotingPools
     * const votingPools = await prisma.votingPool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votingPoolWithIdOnly = await prisma.votingPool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VotingPoolFindManyArgs>(args?: SelectSubset<T, VotingPoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VotingPool.
     * @param {VotingPoolCreateArgs} args - Arguments to create a VotingPool.
     * @example
     * // Create one VotingPool
     * const VotingPool = await prisma.votingPool.create({
     *   data: {
     *     // ... data to create a VotingPool
     *   }
     * })
     * 
     */
    create<T extends VotingPoolCreateArgs>(args: SelectSubset<T, VotingPoolCreateArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VotingPools.
     * @param {VotingPoolCreateManyArgs} args - Arguments to create many VotingPools.
     * @example
     * // Create many VotingPools
     * const votingPool = await prisma.votingPool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VotingPoolCreateManyArgs>(args?: SelectSubset<T, VotingPoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VotingPool.
     * @param {VotingPoolDeleteArgs} args - Arguments to delete one VotingPool.
     * @example
     * // Delete one VotingPool
     * const VotingPool = await prisma.votingPool.delete({
     *   where: {
     *     // ... filter to delete one VotingPool
     *   }
     * })
     * 
     */
    delete<T extends VotingPoolDeleteArgs>(args: SelectSubset<T, VotingPoolDeleteArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VotingPool.
     * @param {VotingPoolUpdateArgs} args - Arguments to update one VotingPool.
     * @example
     * // Update one VotingPool
     * const votingPool = await prisma.votingPool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VotingPoolUpdateArgs>(args: SelectSubset<T, VotingPoolUpdateArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VotingPools.
     * @param {VotingPoolDeleteManyArgs} args - Arguments to filter VotingPools to delete.
     * @example
     * // Delete a few VotingPools
     * const { count } = await prisma.votingPool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VotingPoolDeleteManyArgs>(args?: SelectSubset<T, VotingPoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VotingPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingPoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VotingPools
     * const votingPool = await prisma.votingPool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VotingPoolUpdateManyArgs>(args: SelectSubset<T, VotingPoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VotingPool.
     * @param {VotingPoolUpsertArgs} args - Arguments to update or create a VotingPool.
     * @example
     * // Update or create a VotingPool
     * const votingPool = await prisma.votingPool.upsert({
     *   create: {
     *     // ... data to create a VotingPool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VotingPool we want to update
     *   }
     * })
     */
    upsert<T extends VotingPoolUpsertArgs>(args: SelectSubset<T, VotingPoolUpsertArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VotingPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingPoolCountArgs} args - Arguments to filter VotingPools to count.
     * @example
     * // Count the number of VotingPools
     * const count = await prisma.votingPool.count({
     *   where: {
     *     // ... the filter for the VotingPools we want to count
     *   }
     * })
    **/
    count<T extends VotingPoolCountArgs>(
      args?: Subset<T, VotingPoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotingPoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VotingPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingPoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VotingPoolAggregateArgs>(args: Subset<T, VotingPoolAggregateArgs>): Prisma.PrismaPromise<GetVotingPoolAggregateType<T>>

    /**
     * Group by VotingPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingPoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VotingPoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VotingPoolGroupByArgs['orderBy'] }
        : { orderBy?: VotingPoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VotingPoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotingPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VotingPool model
   */
  readonly fields: VotingPoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VotingPool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VotingPoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends VotingPool$optionsArgs<ExtArgs> = {}>(args?: Subset<T, VotingPool$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends VotingPool$votesArgs<ExtArgs> = {}>(args?: Subset<T, VotingPool$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participation<T extends VotingPool$participationArgs<ExtArgs> = {}>(args?: Subset<T, VotingPool$participationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VotingPool model
   */
  interface VotingPoolFieldRefs {
    readonly id: FieldRef<"VotingPool", 'String'>
    readonly title: FieldRef<"VotingPool", 'String'>
    readonly description: FieldRef<"VotingPool", 'String'>
    readonly category: FieldRef<"VotingPool", 'String'>
    readonly image: FieldRef<"VotingPool", 'Bytes'>
    readonly startDate: FieldRef<"VotingPool", 'DateTime'>
    readonly endDate: FieldRef<"VotingPool", 'DateTime'>
    readonly anonymous: FieldRef<"VotingPool", 'Boolean'>
    readonly status: FieldRef<"VotingPool", 'String'>
    readonly createdAt: FieldRef<"VotingPool", 'DateTime'>
    readonly updatedAt: FieldRef<"VotingPool", 'DateTime'>
    readonly latitude: FieldRef<"VotingPool", 'Float'>
    readonly longitude: FieldRef<"VotingPool", 'Float'>
    readonly address: FieldRef<"VotingPool", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VotingPool findUnique
   */
  export type VotingPoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * Filter, which VotingPool to fetch.
     */
    where: VotingPoolWhereUniqueInput
  }

  /**
   * VotingPool findUniqueOrThrow
   */
  export type VotingPoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * Filter, which VotingPool to fetch.
     */
    where: VotingPoolWhereUniqueInput
  }

  /**
   * VotingPool findFirst
   */
  export type VotingPoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * Filter, which VotingPool to fetch.
     */
    where?: VotingPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingPools to fetch.
     */
    orderBy?: VotingPoolOrderByWithRelationInput | VotingPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VotingPools.
     */
    cursor?: VotingPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VotingPools.
     */
    distinct?: VotingPoolScalarFieldEnum | VotingPoolScalarFieldEnum[]
  }

  /**
   * VotingPool findFirstOrThrow
   */
  export type VotingPoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * Filter, which VotingPool to fetch.
     */
    where?: VotingPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingPools to fetch.
     */
    orderBy?: VotingPoolOrderByWithRelationInput | VotingPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VotingPools.
     */
    cursor?: VotingPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VotingPools.
     */
    distinct?: VotingPoolScalarFieldEnum | VotingPoolScalarFieldEnum[]
  }

  /**
   * VotingPool findMany
   */
  export type VotingPoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * Filter, which VotingPools to fetch.
     */
    where?: VotingPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingPools to fetch.
     */
    orderBy?: VotingPoolOrderByWithRelationInput | VotingPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VotingPools.
     */
    cursor?: VotingPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingPools.
     */
    skip?: number
    distinct?: VotingPoolScalarFieldEnum | VotingPoolScalarFieldEnum[]
  }

  /**
   * VotingPool create
   */
  export type VotingPoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * The data needed to create a VotingPool.
     */
    data: XOR<VotingPoolCreateInput, VotingPoolUncheckedCreateInput>
  }

  /**
   * VotingPool createMany
   */
  export type VotingPoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VotingPools.
     */
    data: VotingPoolCreateManyInput | VotingPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VotingPool update
   */
  export type VotingPoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * The data needed to update a VotingPool.
     */
    data: XOR<VotingPoolUpdateInput, VotingPoolUncheckedUpdateInput>
    /**
     * Choose, which VotingPool to update.
     */
    where: VotingPoolWhereUniqueInput
  }

  /**
   * VotingPool updateMany
   */
  export type VotingPoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VotingPools.
     */
    data: XOR<VotingPoolUpdateManyMutationInput, VotingPoolUncheckedUpdateManyInput>
    /**
     * Filter which VotingPools to update
     */
    where?: VotingPoolWhereInput
    /**
     * Limit how many VotingPools to update.
     */
    limit?: number
  }

  /**
   * VotingPool upsert
   */
  export type VotingPoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * The filter to search for the VotingPool to update in case it exists.
     */
    where: VotingPoolWhereUniqueInput
    /**
     * In case the VotingPool found by the `where` argument doesn't exist, create a new VotingPool with this data.
     */
    create: XOR<VotingPoolCreateInput, VotingPoolUncheckedCreateInput>
    /**
     * In case the VotingPool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VotingPoolUpdateInput, VotingPoolUncheckedUpdateInput>
  }

  /**
   * VotingPool delete
   */
  export type VotingPoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
    /**
     * Filter which VotingPool to delete.
     */
    where: VotingPoolWhereUniqueInput
  }

  /**
   * VotingPool deleteMany
   */
  export type VotingPoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VotingPools to delete
     */
    where?: VotingPoolWhereInput
    /**
     * Limit how many VotingPools to delete.
     */
    limit?: number
  }

  /**
   * VotingPool.options
   */
  export type VotingPool$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    where?: VotingOptionWhereInput
    orderBy?: VotingOptionOrderByWithRelationInput | VotingOptionOrderByWithRelationInput[]
    cursor?: VotingOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotingOptionScalarFieldEnum | VotingOptionScalarFieldEnum[]
  }

  /**
   * VotingPool.votes
   */
  export type VotingPool$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * VotingPool.participation
   */
  export type VotingPool$participationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    where?: VotingParticipationWhereInput
    orderBy?: VotingParticipationOrderByWithRelationInput | VotingParticipationOrderByWithRelationInput[]
    cursor?: VotingParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotingParticipationScalarFieldEnum | VotingParticipationScalarFieldEnum[]
  }

  /**
   * VotingPool without action
   */
  export type VotingPoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingPool
     */
    select?: VotingPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingPool
     */
    omit?: VotingPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingPoolInclude<ExtArgs> | null
  }


  /**
   * Model VotingOption
   */

  export type AggregateVotingOption = {
    _count: VotingOptionCountAggregateOutputType | null
    _min: VotingOptionMinAggregateOutputType | null
    _max: VotingOptionMaxAggregateOutputType | null
  }

  export type VotingOptionMinAggregateOutputType = {
    id: string | null
    text: string | null
    description: string | null
    image: Uint8Array | null
    poolId: string | null
  }

  export type VotingOptionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    description: string | null
    image: Uint8Array | null
    poolId: string | null
  }

  export type VotingOptionCountAggregateOutputType = {
    id: number
    text: number
    description: number
    image: number
    poolId: number
    _all: number
  }


  export type VotingOptionMinAggregateInputType = {
    id?: true
    text?: true
    description?: true
    image?: true
    poolId?: true
  }

  export type VotingOptionMaxAggregateInputType = {
    id?: true
    text?: true
    description?: true
    image?: true
    poolId?: true
  }

  export type VotingOptionCountAggregateInputType = {
    id?: true
    text?: true
    description?: true
    image?: true
    poolId?: true
    _all?: true
  }

  export type VotingOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VotingOption to aggregate.
     */
    where?: VotingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingOptions to fetch.
     */
    orderBy?: VotingOptionOrderByWithRelationInput | VotingOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VotingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VotingOptions
    **/
    _count?: true | VotingOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotingOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotingOptionMaxAggregateInputType
  }

  export type GetVotingOptionAggregateType<T extends VotingOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateVotingOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotingOption[P]>
      : GetScalarType<T[P], AggregateVotingOption[P]>
  }




  export type VotingOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotingOptionWhereInput
    orderBy?: VotingOptionOrderByWithAggregationInput | VotingOptionOrderByWithAggregationInput[]
    by: VotingOptionScalarFieldEnum[] | VotingOptionScalarFieldEnum
    having?: VotingOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotingOptionCountAggregateInputType | true
    _min?: VotingOptionMinAggregateInputType
    _max?: VotingOptionMaxAggregateInputType
  }

  export type VotingOptionGroupByOutputType = {
    id: string
    text: string
    description: string | null
    image: Uint8Array | null
    poolId: string
    _count: VotingOptionCountAggregateOutputType | null
    _min: VotingOptionMinAggregateOutputType | null
    _max: VotingOptionMaxAggregateOutputType | null
  }

  type GetVotingOptionGroupByPayload<T extends VotingOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotingOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotingOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotingOptionGroupByOutputType[P]>
            : GetScalarType<T[P], VotingOptionGroupByOutputType[P]>
        }
      >
    >


  export type VotingOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    description?: boolean
    image?: boolean
    poolId?: boolean
    votingPool?: boolean | VotingPoolDefaultArgs<ExtArgs>
    votes?: boolean | VotingOption$votesArgs<ExtArgs>
    _count?: boolean | VotingOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votingOption"]>



  export type VotingOptionSelectScalar = {
    id?: boolean
    text?: boolean
    description?: boolean
    image?: boolean
    poolId?: boolean
  }

  export type VotingOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "description" | "image" | "poolId", ExtArgs["result"]["votingOption"]>
  export type VotingOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votingPool?: boolean | VotingPoolDefaultArgs<ExtArgs>
    votes?: boolean | VotingOption$votesArgs<ExtArgs>
    _count?: boolean | VotingOptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VotingOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VotingOption"
    objects: {
      votingPool: Prisma.$VotingPoolPayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      description: string | null
      image: Uint8Array | null
      poolId: string
    }, ExtArgs["result"]["votingOption"]>
    composites: {}
  }

  type VotingOptionGetPayload<S extends boolean | null | undefined | VotingOptionDefaultArgs> = $Result.GetResult<Prisma.$VotingOptionPayload, S>

  type VotingOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VotingOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotingOptionCountAggregateInputType | true
    }

  export interface VotingOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VotingOption'], meta: { name: 'VotingOption' } }
    /**
     * Find zero or one VotingOption that matches the filter.
     * @param {VotingOptionFindUniqueArgs} args - Arguments to find a VotingOption
     * @example
     * // Get one VotingOption
     * const votingOption = await prisma.votingOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VotingOptionFindUniqueArgs>(args: SelectSubset<T, VotingOptionFindUniqueArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VotingOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VotingOptionFindUniqueOrThrowArgs} args - Arguments to find a VotingOption
     * @example
     * // Get one VotingOption
     * const votingOption = await prisma.votingOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VotingOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, VotingOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VotingOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingOptionFindFirstArgs} args - Arguments to find a VotingOption
     * @example
     * // Get one VotingOption
     * const votingOption = await prisma.votingOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VotingOptionFindFirstArgs>(args?: SelectSubset<T, VotingOptionFindFirstArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VotingOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingOptionFindFirstOrThrowArgs} args - Arguments to find a VotingOption
     * @example
     * // Get one VotingOption
     * const votingOption = await prisma.votingOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VotingOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, VotingOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VotingOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VotingOptions
     * const votingOptions = await prisma.votingOption.findMany()
     * 
     * // Get first 10 VotingOptions
     * const votingOptions = await prisma.votingOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votingOptionWithIdOnly = await prisma.votingOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VotingOptionFindManyArgs>(args?: SelectSubset<T, VotingOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VotingOption.
     * @param {VotingOptionCreateArgs} args - Arguments to create a VotingOption.
     * @example
     * // Create one VotingOption
     * const VotingOption = await prisma.votingOption.create({
     *   data: {
     *     // ... data to create a VotingOption
     *   }
     * })
     * 
     */
    create<T extends VotingOptionCreateArgs>(args: SelectSubset<T, VotingOptionCreateArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VotingOptions.
     * @param {VotingOptionCreateManyArgs} args - Arguments to create many VotingOptions.
     * @example
     * // Create many VotingOptions
     * const votingOption = await prisma.votingOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VotingOptionCreateManyArgs>(args?: SelectSubset<T, VotingOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VotingOption.
     * @param {VotingOptionDeleteArgs} args - Arguments to delete one VotingOption.
     * @example
     * // Delete one VotingOption
     * const VotingOption = await prisma.votingOption.delete({
     *   where: {
     *     // ... filter to delete one VotingOption
     *   }
     * })
     * 
     */
    delete<T extends VotingOptionDeleteArgs>(args: SelectSubset<T, VotingOptionDeleteArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VotingOption.
     * @param {VotingOptionUpdateArgs} args - Arguments to update one VotingOption.
     * @example
     * // Update one VotingOption
     * const votingOption = await prisma.votingOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VotingOptionUpdateArgs>(args: SelectSubset<T, VotingOptionUpdateArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VotingOptions.
     * @param {VotingOptionDeleteManyArgs} args - Arguments to filter VotingOptions to delete.
     * @example
     * // Delete a few VotingOptions
     * const { count } = await prisma.votingOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VotingOptionDeleteManyArgs>(args?: SelectSubset<T, VotingOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VotingOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VotingOptions
     * const votingOption = await prisma.votingOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VotingOptionUpdateManyArgs>(args: SelectSubset<T, VotingOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VotingOption.
     * @param {VotingOptionUpsertArgs} args - Arguments to update or create a VotingOption.
     * @example
     * // Update or create a VotingOption
     * const votingOption = await prisma.votingOption.upsert({
     *   create: {
     *     // ... data to create a VotingOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VotingOption we want to update
     *   }
     * })
     */
    upsert<T extends VotingOptionUpsertArgs>(args: SelectSubset<T, VotingOptionUpsertArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VotingOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingOptionCountArgs} args - Arguments to filter VotingOptions to count.
     * @example
     * // Count the number of VotingOptions
     * const count = await prisma.votingOption.count({
     *   where: {
     *     // ... the filter for the VotingOptions we want to count
     *   }
     * })
    **/
    count<T extends VotingOptionCountArgs>(
      args?: Subset<T, VotingOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotingOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VotingOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VotingOptionAggregateArgs>(args: Subset<T, VotingOptionAggregateArgs>): Prisma.PrismaPromise<GetVotingOptionAggregateType<T>>

    /**
     * Group by VotingOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VotingOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VotingOptionGroupByArgs['orderBy'] }
        : { orderBy?: VotingOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VotingOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotingOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VotingOption model
   */
  readonly fields: VotingOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VotingOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VotingOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votingPool<T extends VotingPoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VotingPoolDefaultArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends VotingOption$votesArgs<ExtArgs> = {}>(args?: Subset<T, VotingOption$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VotingOption model
   */
  interface VotingOptionFieldRefs {
    readonly id: FieldRef<"VotingOption", 'String'>
    readonly text: FieldRef<"VotingOption", 'String'>
    readonly description: FieldRef<"VotingOption", 'String'>
    readonly image: FieldRef<"VotingOption", 'Bytes'>
    readonly poolId: FieldRef<"VotingOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VotingOption findUnique
   */
  export type VotingOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * Filter, which VotingOption to fetch.
     */
    where: VotingOptionWhereUniqueInput
  }

  /**
   * VotingOption findUniqueOrThrow
   */
  export type VotingOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * Filter, which VotingOption to fetch.
     */
    where: VotingOptionWhereUniqueInput
  }

  /**
   * VotingOption findFirst
   */
  export type VotingOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * Filter, which VotingOption to fetch.
     */
    where?: VotingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingOptions to fetch.
     */
    orderBy?: VotingOptionOrderByWithRelationInput | VotingOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VotingOptions.
     */
    cursor?: VotingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VotingOptions.
     */
    distinct?: VotingOptionScalarFieldEnum | VotingOptionScalarFieldEnum[]
  }

  /**
   * VotingOption findFirstOrThrow
   */
  export type VotingOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * Filter, which VotingOption to fetch.
     */
    where?: VotingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingOptions to fetch.
     */
    orderBy?: VotingOptionOrderByWithRelationInput | VotingOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VotingOptions.
     */
    cursor?: VotingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VotingOptions.
     */
    distinct?: VotingOptionScalarFieldEnum | VotingOptionScalarFieldEnum[]
  }

  /**
   * VotingOption findMany
   */
  export type VotingOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * Filter, which VotingOptions to fetch.
     */
    where?: VotingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingOptions to fetch.
     */
    orderBy?: VotingOptionOrderByWithRelationInput | VotingOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VotingOptions.
     */
    cursor?: VotingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingOptions.
     */
    skip?: number
    distinct?: VotingOptionScalarFieldEnum | VotingOptionScalarFieldEnum[]
  }

  /**
   * VotingOption create
   */
  export type VotingOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a VotingOption.
     */
    data: XOR<VotingOptionCreateInput, VotingOptionUncheckedCreateInput>
  }

  /**
   * VotingOption createMany
   */
  export type VotingOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VotingOptions.
     */
    data: VotingOptionCreateManyInput | VotingOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VotingOption update
   */
  export type VotingOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a VotingOption.
     */
    data: XOR<VotingOptionUpdateInput, VotingOptionUncheckedUpdateInput>
    /**
     * Choose, which VotingOption to update.
     */
    where: VotingOptionWhereUniqueInput
  }

  /**
   * VotingOption updateMany
   */
  export type VotingOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VotingOptions.
     */
    data: XOR<VotingOptionUpdateManyMutationInput, VotingOptionUncheckedUpdateManyInput>
    /**
     * Filter which VotingOptions to update
     */
    where?: VotingOptionWhereInput
    /**
     * Limit how many VotingOptions to update.
     */
    limit?: number
  }

  /**
   * VotingOption upsert
   */
  export type VotingOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the VotingOption to update in case it exists.
     */
    where: VotingOptionWhereUniqueInput
    /**
     * In case the VotingOption found by the `where` argument doesn't exist, create a new VotingOption with this data.
     */
    create: XOR<VotingOptionCreateInput, VotingOptionUncheckedCreateInput>
    /**
     * In case the VotingOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VotingOptionUpdateInput, VotingOptionUncheckedUpdateInput>
  }

  /**
   * VotingOption delete
   */
  export type VotingOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
    /**
     * Filter which VotingOption to delete.
     */
    where: VotingOptionWhereUniqueInput
  }

  /**
   * VotingOption deleteMany
   */
  export type VotingOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VotingOptions to delete
     */
    where?: VotingOptionWhereInput
    /**
     * Limit how many VotingOptions to delete.
     */
    limit?: number
  }

  /**
   * VotingOption.votes
   */
  export type VotingOption$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * VotingOption without action
   */
  export type VotingOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingOption
     */
    select?: VotingOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingOption
     */
    omit?: VotingOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingOptionInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    poolId: string | null
    optionId: string | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    poolId: string | null
    optionId: string | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    timestamp: number
    userId: number
    poolId: number
    optionId: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    poolId?: true
    optionId?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    poolId?: true
    optionId?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    poolId?: true
    optionId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    timestamp: Date
    userId: string | null
    poolId: string
    optionId: string
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    poolId?: boolean
    optionId?: boolean
    user?: boolean | Vote$userArgs<ExtArgs>
    votingPool?: boolean | VotingPoolDefaultArgs<ExtArgs>
    option?: boolean | VotingOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>



  export type VoteSelectScalar = {
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    poolId?: boolean
    optionId?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "userId" | "poolId" | "optionId", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Vote$userArgs<ExtArgs>
    votingPool?: boolean | VotingPoolDefaultArgs<ExtArgs>
    option?: boolean | VotingOptionDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      votingPool: Prisma.$VotingPoolPayload<ExtArgs>
      option: Prisma.$VotingOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      userId: string | null
      poolId: string
      optionId: string
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Vote$userArgs<ExtArgs> = {}>(args?: Subset<T, Vote$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    votingPool<T extends VotingPoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VotingPoolDefaultArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends VotingOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VotingOptionDefaultArgs<ExtArgs>>): Prisma__VotingOptionClient<$Result.GetResult<Prisma.$VotingOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly timestamp: FieldRef<"Vote", 'DateTime'>
    readonly userId: FieldRef<"Vote", 'String'>
    readonly poolId: FieldRef<"Vote", 'String'>
    readonly optionId: FieldRef<"Vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote.user
   */
  export type Vote$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model VotingParticipation
   */

  export type AggregateVotingParticipation = {
    _count: VotingParticipationCountAggregateOutputType | null
    _min: VotingParticipationMinAggregateOutputType | null
    _max: VotingParticipationMaxAggregateOutputType | null
  }

  export type VotingParticipationMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    poolId: string | null
  }

  export type VotingParticipationMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    poolId: string | null
  }

  export type VotingParticipationCountAggregateOutputType = {
    id: number
    timestamp: number
    userId: number
    poolId: number
    _all: number
  }


  export type VotingParticipationMinAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    poolId?: true
  }

  export type VotingParticipationMaxAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    poolId?: true
  }

  export type VotingParticipationCountAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    poolId?: true
    _all?: true
  }

  export type VotingParticipationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VotingParticipation to aggregate.
     */
    where?: VotingParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingParticipations to fetch.
     */
    orderBy?: VotingParticipationOrderByWithRelationInput | VotingParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VotingParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingParticipations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingParticipations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VotingParticipations
    **/
    _count?: true | VotingParticipationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotingParticipationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotingParticipationMaxAggregateInputType
  }

  export type GetVotingParticipationAggregateType<T extends VotingParticipationAggregateArgs> = {
        [P in keyof T & keyof AggregateVotingParticipation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotingParticipation[P]>
      : GetScalarType<T[P], AggregateVotingParticipation[P]>
  }




  export type VotingParticipationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotingParticipationWhereInput
    orderBy?: VotingParticipationOrderByWithAggregationInput | VotingParticipationOrderByWithAggregationInput[]
    by: VotingParticipationScalarFieldEnum[] | VotingParticipationScalarFieldEnum
    having?: VotingParticipationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotingParticipationCountAggregateInputType | true
    _min?: VotingParticipationMinAggregateInputType
    _max?: VotingParticipationMaxAggregateInputType
  }

  export type VotingParticipationGroupByOutputType = {
    id: string
    timestamp: Date
    userId: string
    poolId: string
    _count: VotingParticipationCountAggregateOutputType | null
    _min: VotingParticipationMinAggregateOutputType | null
    _max: VotingParticipationMaxAggregateOutputType | null
  }

  type GetVotingParticipationGroupByPayload<T extends VotingParticipationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotingParticipationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotingParticipationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotingParticipationGroupByOutputType[P]>
            : GetScalarType<T[P], VotingParticipationGroupByOutputType[P]>
        }
      >
    >


  export type VotingParticipationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    poolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    votingPool?: boolean | VotingPoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votingParticipation"]>



  export type VotingParticipationSelectScalar = {
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    poolId?: boolean
  }

  export type VotingParticipationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "userId" | "poolId", ExtArgs["result"]["votingParticipation"]>
  export type VotingParticipationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    votingPool?: boolean | VotingPoolDefaultArgs<ExtArgs>
  }

  export type $VotingParticipationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VotingParticipation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      votingPool: Prisma.$VotingPoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      userId: string
      poolId: string
    }, ExtArgs["result"]["votingParticipation"]>
    composites: {}
  }

  type VotingParticipationGetPayload<S extends boolean | null | undefined | VotingParticipationDefaultArgs> = $Result.GetResult<Prisma.$VotingParticipationPayload, S>

  type VotingParticipationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VotingParticipationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotingParticipationCountAggregateInputType | true
    }

  export interface VotingParticipationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VotingParticipation'], meta: { name: 'VotingParticipation' } }
    /**
     * Find zero or one VotingParticipation that matches the filter.
     * @param {VotingParticipationFindUniqueArgs} args - Arguments to find a VotingParticipation
     * @example
     * // Get one VotingParticipation
     * const votingParticipation = await prisma.votingParticipation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VotingParticipationFindUniqueArgs>(args: SelectSubset<T, VotingParticipationFindUniqueArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VotingParticipation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VotingParticipationFindUniqueOrThrowArgs} args - Arguments to find a VotingParticipation
     * @example
     * // Get one VotingParticipation
     * const votingParticipation = await prisma.votingParticipation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VotingParticipationFindUniqueOrThrowArgs>(args: SelectSubset<T, VotingParticipationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VotingParticipation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingParticipationFindFirstArgs} args - Arguments to find a VotingParticipation
     * @example
     * // Get one VotingParticipation
     * const votingParticipation = await prisma.votingParticipation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VotingParticipationFindFirstArgs>(args?: SelectSubset<T, VotingParticipationFindFirstArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VotingParticipation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingParticipationFindFirstOrThrowArgs} args - Arguments to find a VotingParticipation
     * @example
     * // Get one VotingParticipation
     * const votingParticipation = await prisma.votingParticipation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VotingParticipationFindFirstOrThrowArgs>(args?: SelectSubset<T, VotingParticipationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VotingParticipations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingParticipationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VotingParticipations
     * const votingParticipations = await prisma.votingParticipation.findMany()
     * 
     * // Get first 10 VotingParticipations
     * const votingParticipations = await prisma.votingParticipation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votingParticipationWithIdOnly = await prisma.votingParticipation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VotingParticipationFindManyArgs>(args?: SelectSubset<T, VotingParticipationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VotingParticipation.
     * @param {VotingParticipationCreateArgs} args - Arguments to create a VotingParticipation.
     * @example
     * // Create one VotingParticipation
     * const VotingParticipation = await prisma.votingParticipation.create({
     *   data: {
     *     // ... data to create a VotingParticipation
     *   }
     * })
     * 
     */
    create<T extends VotingParticipationCreateArgs>(args: SelectSubset<T, VotingParticipationCreateArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VotingParticipations.
     * @param {VotingParticipationCreateManyArgs} args - Arguments to create many VotingParticipations.
     * @example
     * // Create many VotingParticipations
     * const votingParticipation = await prisma.votingParticipation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VotingParticipationCreateManyArgs>(args?: SelectSubset<T, VotingParticipationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VotingParticipation.
     * @param {VotingParticipationDeleteArgs} args - Arguments to delete one VotingParticipation.
     * @example
     * // Delete one VotingParticipation
     * const VotingParticipation = await prisma.votingParticipation.delete({
     *   where: {
     *     // ... filter to delete one VotingParticipation
     *   }
     * })
     * 
     */
    delete<T extends VotingParticipationDeleteArgs>(args: SelectSubset<T, VotingParticipationDeleteArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VotingParticipation.
     * @param {VotingParticipationUpdateArgs} args - Arguments to update one VotingParticipation.
     * @example
     * // Update one VotingParticipation
     * const votingParticipation = await prisma.votingParticipation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VotingParticipationUpdateArgs>(args: SelectSubset<T, VotingParticipationUpdateArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VotingParticipations.
     * @param {VotingParticipationDeleteManyArgs} args - Arguments to filter VotingParticipations to delete.
     * @example
     * // Delete a few VotingParticipations
     * const { count } = await prisma.votingParticipation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VotingParticipationDeleteManyArgs>(args?: SelectSubset<T, VotingParticipationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VotingParticipations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingParticipationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VotingParticipations
     * const votingParticipation = await prisma.votingParticipation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VotingParticipationUpdateManyArgs>(args: SelectSubset<T, VotingParticipationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VotingParticipation.
     * @param {VotingParticipationUpsertArgs} args - Arguments to update or create a VotingParticipation.
     * @example
     * // Update or create a VotingParticipation
     * const votingParticipation = await prisma.votingParticipation.upsert({
     *   create: {
     *     // ... data to create a VotingParticipation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VotingParticipation we want to update
     *   }
     * })
     */
    upsert<T extends VotingParticipationUpsertArgs>(args: SelectSubset<T, VotingParticipationUpsertArgs<ExtArgs>>): Prisma__VotingParticipationClient<$Result.GetResult<Prisma.$VotingParticipationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VotingParticipations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingParticipationCountArgs} args - Arguments to filter VotingParticipations to count.
     * @example
     * // Count the number of VotingParticipations
     * const count = await prisma.votingParticipation.count({
     *   where: {
     *     // ... the filter for the VotingParticipations we want to count
     *   }
     * })
    **/
    count<T extends VotingParticipationCountArgs>(
      args?: Subset<T, VotingParticipationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotingParticipationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VotingParticipation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingParticipationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VotingParticipationAggregateArgs>(args: Subset<T, VotingParticipationAggregateArgs>): Prisma.PrismaPromise<GetVotingParticipationAggregateType<T>>

    /**
     * Group by VotingParticipation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotingParticipationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VotingParticipationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VotingParticipationGroupByArgs['orderBy'] }
        : { orderBy?: VotingParticipationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VotingParticipationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotingParticipationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VotingParticipation model
   */
  readonly fields: VotingParticipationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VotingParticipation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VotingParticipationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votingPool<T extends VotingPoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VotingPoolDefaultArgs<ExtArgs>>): Prisma__VotingPoolClient<$Result.GetResult<Prisma.$VotingPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VotingParticipation model
   */
  interface VotingParticipationFieldRefs {
    readonly id: FieldRef<"VotingParticipation", 'String'>
    readonly timestamp: FieldRef<"VotingParticipation", 'DateTime'>
    readonly userId: FieldRef<"VotingParticipation", 'String'>
    readonly poolId: FieldRef<"VotingParticipation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VotingParticipation findUnique
   */
  export type VotingParticipationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * Filter, which VotingParticipation to fetch.
     */
    where: VotingParticipationWhereUniqueInput
  }

  /**
   * VotingParticipation findUniqueOrThrow
   */
  export type VotingParticipationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * Filter, which VotingParticipation to fetch.
     */
    where: VotingParticipationWhereUniqueInput
  }

  /**
   * VotingParticipation findFirst
   */
  export type VotingParticipationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * Filter, which VotingParticipation to fetch.
     */
    where?: VotingParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingParticipations to fetch.
     */
    orderBy?: VotingParticipationOrderByWithRelationInput | VotingParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VotingParticipations.
     */
    cursor?: VotingParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingParticipations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingParticipations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VotingParticipations.
     */
    distinct?: VotingParticipationScalarFieldEnum | VotingParticipationScalarFieldEnum[]
  }

  /**
   * VotingParticipation findFirstOrThrow
   */
  export type VotingParticipationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * Filter, which VotingParticipation to fetch.
     */
    where?: VotingParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingParticipations to fetch.
     */
    orderBy?: VotingParticipationOrderByWithRelationInput | VotingParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VotingParticipations.
     */
    cursor?: VotingParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingParticipations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingParticipations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VotingParticipations.
     */
    distinct?: VotingParticipationScalarFieldEnum | VotingParticipationScalarFieldEnum[]
  }

  /**
   * VotingParticipation findMany
   */
  export type VotingParticipationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * Filter, which VotingParticipations to fetch.
     */
    where?: VotingParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VotingParticipations to fetch.
     */
    orderBy?: VotingParticipationOrderByWithRelationInput | VotingParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VotingParticipations.
     */
    cursor?: VotingParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VotingParticipations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VotingParticipations.
     */
    skip?: number
    distinct?: VotingParticipationScalarFieldEnum | VotingParticipationScalarFieldEnum[]
  }

  /**
   * VotingParticipation create
   */
  export type VotingParticipationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * The data needed to create a VotingParticipation.
     */
    data: XOR<VotingParticipationCreateInput, VotingParticipationUncheckedCreateInput>
  }

  /**
   * VotingParticipation createMany
   */
  export type VotingParticipationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VotingParticipations.
     */
    data: VotingParticipationCreateManyInput | VotingParticipationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VotingParticipation update
   */
  export type VotingParticipationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * The data needed to update a VotingParticipation.
     */
    data: XOR<VotingParticipationUpdateInput, VotingParticipationUncheckedUpdateInput>
    /**
     * Choose, which VotingParticipation to update.
     */
    where: VotingParticipationWhereUniqueInput
  }

  /**
   * VotingParticipation updateMany
   */
  export type VotingParticipationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VotingParticipations.
     */
    data: XOR<VotingParticipationUpdateManyMutationInput, VotingParticipationUncheckedUpdateManyInput>
    /**
     * Filter which VotingParticipations to update
     */
    where?: VotingParticipationWhereInput
    /**
     * Limit how many VotingParticipations to update.
     */
    limit?: number
  }

  /**
   * VotingParticipation upsert
   */
  export type VotingParticipationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * The filter to search for the VotingParticipation to update in case it exists.
     */
    where: VotingParticipationWhereUniqueInput
    /**
     * In case the VotingParticipation found by the `where` argument doesn't exist, create a new VotingParticipation with this data.
     */
    create: XOR<VotingParticipationCreateInput, VotingParticipationUncheckedCreateInput>
    /**
     * In case the VotingParticipation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VotingParticipationUpdateInput, VotingParticipationUncheckedUpdateInput>
  }

  /**
   * VotingParticipation delete
   */
  export type VotingParticipationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
    /**
     * Filter which VotingParticipation to delete.
     */
    where: VotingParticipationWhereUniqueInput
  }

  /**
   * VotingParticipation deleteMany
   */
  export type VotingParticipationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VotingParticipations to delete
     */
    where?: VotingParticipationWhereInput
    /**
     * Limit how many VotingParticipations to delete.
     */
    limit?: number
  }

  /**
   * VotingParticipation without action
   */
  export type VotingParticipationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingParticipation
     */
    select?: VotingParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingParticipation
     */
    omit?: VotingParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotingParticipationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    email: 'email',
    password: 'password',
    avatarImage: 'avatarImage',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VotingPoolScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    image: 'image',
    startDate: 'startDate',
    endDate: 'endDate',
    anonymous: 'anonymous',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address'
  };

  export type VotingPoolScalarFieldEnum = (typeof VotingPoolScalarFieldEnum)[keyof typeof VotingPoolScalarFieldEnum]


  export const VotingOptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    description: 'description',
    image: 'image',
    poolId: 'poolId'
  };

  export type VotingOptionScalarFieldEnum = (typeof VotingOptionScalarFieldEnum)[keyof typeof VotingOptionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    userId: 'userId',
    poolId: 'poolId',
    optionId: 'optionId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const VotingParticipationScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    userId: 'userId',
    poolId: 'poolId'
  };

  export type VotingParticipationScalarFieldEnum = (typeof VotingParticipationScalarFieldEnum)[keyof typeof VotingParticipationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VotingPoolOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    status: 'status',
    address: 'address'
  };

  export type VotingPoolOrderByRelevanceFieldEnum = (typeof VotingPoolOrderByRelevanceFieldEnum)[keyof typeof VotingPoolOrderByRelevanceFieldEnum]


  export const VotingOptionOrderByRelevanceFieldEnum: {
    id: 'id',
    text: 'text',
    description: 'description',
    poolId: 'poolId'
  };

  export type VotingOptionOrderByRelevanceFieldEnum = (typeof VotingOptionOrderByRelevanceFieldEnum)[keyof typeof VotingOptionOrderByRelevanceFieldEnum]


  export const VoteOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    poolId: 'poolId',
    optionId: 'optionId'
  };

  export type VoteOrderByRelevanceFieldEnum = (typeof VoteOrderByRelevanceFieldEnum)[keyof typeof VoteOrderByRelevanceFieldEnum]


  export const VotingParticipationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    poolId: 'poolId'
  };

  export type VotingParticipationOrderByRelevanceFieldEnum = (typeof VotingParticipationOrderByRelevanceFieldEnum)[keyof typeof VotingParticipationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarImage?: BytesNullableFilter<"User"> | Uint8Array | null
    role?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    votes?: VoteListRelationFilter
    votingParticipation?: VotingParticipationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votes?: VoteOrderByRelationAggregateInput
    votingParticipation?: VotingParticipationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarImage?: BytesNullableFilter<"User"> | Uint8Array | null
    role?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    votes?: VoteListRelationFilter
    votingParticipation?: VotingParticipationListRelationFilter
  }, "id" | "cpf" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarImage?: BytesNullableWithAggregatesFilter<"User"> | Uint8Array | null
    role?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VotingPoolWhereInput = {
    AND?: VotingPoolWhereInput | VotingPoolWhereInput[]
    OR?: VotingPoolWhereInput[]
    NOT?: VotingPoolWhereInput | VotingPoolWhereInput[]
    id?: StringFilter<"VotingPool"> | string
    title?: StringFilter<"VotingPool"> | string
    description?: StringFilter<"VotingPool"> | string
    category?: StringFilter<"VotingPool"> | string
    image?: BytesNullableFilter<"VotingPool"> | Uint8Array | null
    startDate?: DateTimeFilter<"VotingPool"> | Date | string
    endDate?: DateTimeFilter<"VotingPool"> | Date | string
    anonymous?: BoolFilter<"VotingPool"> | boolean
    status?: StringFilter<"VotingPool"> | string
    createdAt?: DateTimeFilter<"VotingPool"> | Date | string
    updatedAt?: DateTimeFilter<"VotingPool"> | Date | string
    latitude?: FloatNullableFilter<"VotingPool"> | number | null
    longitude?: FloatNullableFilter<"VotingPool"> | number | null
    address?: StringNullableFilter<"VotingPool"> | string | null
    options?: VotingOptionListRelationFilter
    votes?: VoteListRelationFilter
    participation?: VotingParticipationListRelationFilter
  }

  export type VotingPoolOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    anonymous?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    options?: VotingOptionOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    participation?: VotingParticipationOrderByRelationAggregateInput
    _relevance?: VotingPoolOrderByRelevanceInput
  }

  export type VotingPoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VotingPoolWhereInput | VotingPoolWhereInput[]
    OR?: VotingPoolWhereInput[]
    NOT?: VotingPoolWhereInput | VotingPoolWhereInput[]
    title?: StringFilter<"VotingPool"> | string
    description?: StringFilter<"VotingPool"> | string
    category?: StringFilter<"VotingPool"> | string
    image?: BytesNullableFilter<"VotingPool"> | Uint8Array | null
    startDate?: DateTimeFilter<"VotingPool"> | Date | string
    endDate?: DateTimeFilter<"VotingPool"> | Date | string
    anonymous?: BoolFilter<"VotingPool"> | boolean
    status?: StringFilter<"VotingPool"> | string
    createdAt?: DateTimeFilter<"VotingPool"> | Date | string
    updatedAt?: DateTimeFilter<"VotingPool"> | Date | string
    latitude?: FloatNullableFilter<"VotingPool"> | number | null
    longitude?: FloatNullableFilter<"VotingPool"> | number | null
    address?: StringNullableFilter<"VotingPool"> | string | null
    options?: VotingOptionListRelationFilter
    votes?: VoteListRelationFilter
    participation?: VotingParticipationListRelationFilter
  }, "id">

  export type VotingPoolOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    anonymous?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: VotingPoolCountOrderByAggregateInput
    _avg?: VotingPoolAvgOrderByAggregateInput
    _max?: VotingPoolMaxOrderByAggregateInput
    _min?: VotingPoolMinOrderByAggregateInput
    _sum?: VotingPoolSumOrderByAggregateInput
  }

  export type VotingPoolScalarWhereWithAggregatesInput = {
    AND?: VotingPoolScalarWhereWithAggregatesInput | VotingPoolScalarWhereWithAggregatesInput[]
    OR?: VotingPoolScalarWhereWithAggregatesInput[]
    NOT?: VotingPoolScalarWhereWithAggregatesInput | VotingPoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VotingPool"> | string
    title?: StringWithAggregatesFilter<"VotingPool"> | string
    description?: StringWithAggregatesFilter<"VotingPool"> | string
    category?: StringWithAggregatesFilter<"VotingPool"> | string
    image?: BytesNullableWithAggregatesFilter<"VotingPool"> | Uint8Array | null
    startDate?: DateTimeWithAggregatesFilter<"VotingPool"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"VotingPool"> | Date | string
    anonymous?: BoolWithAggregatesFilter<"VotingPool"> | boolean
    status?: StringWithAggregatesFilter<"VotingPool"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VotingPool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VotingPool"> | Date | string
    latitude?: FloatNullableWithAggregatesFilter<"VotingPool"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"VotingPool"> | number | null
    address?: StringNullableWithAggregatesFilter<"VotingPool"> | string | null
  }

  export type VotingOptionWhereInput = {
    AND?: VotingOptionWhereInput | VotingOptionWhereInput[]
    OR?: VotingOptionWhereInput[]
    NOT?: VotingOptionWhereInput | VotingOptionWhereInput[]
    id?: StringFilter<"VotingOption"> | string
    text?: StringFilter<"VotingOption"> | string
    description?: StringNullableFilter<"VotingOption"> | string | null
    image?: BytesNullableFilter<"VotingOption"> | Uint8Array | null
    poolId?: StringFilter<"VotingOption"> | string
    votingPool?: XOR<VotingPoolScalarRelationFilter, VotingPoolWhereInput>
    votes?: VoteListRelationFilter
  }

  export type VotingOptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    poolId?: SortOrder
    votingPool?: VotingPoolOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
    _relevance?: VotingOptionOrderByRelevanceInput
  }

  export type VotingOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VotingOptionWhereInput | VotingOptionWhereInput[]
    OR?: VotingOptionWhereInput[]
    NOT?: VotingOptionWhereInput | VotingOptionWhereInput[]
    text?: StringFilter<"VotingOption"> | string
    description?: StringNullableFilter<"VotingOption"> | string | null
    image?: BytesNullableFilter<"VotingOption"> | Uint8Array | null
    poolId?: StringFilter<"VotingOption"> | string
    votingPool?: XOR<VotingPoolScalarRelationFilter, VotingPoolWhereInput>
    votes?: VoteListRelationFilter
  }, "id">

  export type VotingOptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    poolId?: SortOrder
    _count?: VotingOptionCountOrderByAggregateInput
    _max?: VotingOptionMaxOrderByAggregateInput
    _min?: VotingOptionMinOrderByAggregateInput
  }

  export type VotingOptionScalarWhereWithAggregatesInput = {
    AND?: VotingOptionScalarWhereWithAggregatesInput | VotingOptionScalarWhereWithAggregatesInput[]
    OR?: VotingOptionScalarWhereWithAggregatesInput[]
    NOT?: VotingOptionScalarWhereWithAggregatesInput | VotingOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VotingOption"> | string
    text?: StringWithAggregatesFilter<"VotingOption"> | string
    description?: StringNullableWithAggregatesFilter<"VotingOption"> | string | null
    image?: BytesNullableWithAggregatesFilter<"VotingOption"> | Uint8Array | null
    poolId?: StringWithAggregatesFilter<"VotingOption"> | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    timestamp?: DateTimeFilter<"Vote"> | Date | string
    userId?: StringNullableFilter<"Vote"> | string | null
    poolId?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    votingPool?: XOR<VotingPoolScalarRelationFilter, VotingPoolWhereInput>
    option?: XOR<VotingOptionScalarRelationFilter, VotingOptionWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    poolId?: SortOrder
    optionId?: SortOrder
    user?: UserOrderByWithRelationInput
    votingPool?: VotingPoolOrderByWithRelationInput
    option?: VotingOptionOrderByWithRelationInput
    _relevance?: VoteOrderByRelevanceInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_poolId?: VoteUserIdPoolIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    timestamp?: DateTimeFilter<"Vote"> | Date | string
    userId?: StringNullableFilter<"Vote"> | string | null
    poolId?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    votingPool?: XOR<VotingPoolScalarRelationFilter, VotingPoolWhereInput>
    option?: XOR<VotingOptionScalarRelationFilter, VotingOptionWhereInput>
  }, "id" | "userId_poolId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    poolId?: SortOrder
    optionId?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Vote"> | string | null
    poolId?: StringWithAggregatesFilter<"Vote"> | string
    optionId?: StringWithAggregatesFilter<"Vote"> | string
  }

  export type VotingParticipationWhereInput = {
    AND?: VotingParticipationWhereInput | VotingParticipationWhereInput[]
    OR?: VotingParticipationWhereInput[]
    NOT?: VotingParticipationWhereInput | VotingParticipationWhereInput[]
    id?: StringFilter<"VotingParticipation"> | string
    timestamp?: DateTimeFilter<"VotingParticipation"> | Date | string
    userId?: StringFilter<"VotingParticipation"> | string
    poolId?: StringFilter<"VotingParticipation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votingPool?: XOR<VotingPoolScalarRelationFilter, VotingPoolWhereInput>
  }

  export type VotingParticipationOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
    user?: UserOrderByWithRelationInput
    votingPool?: VotingPoolOrderByWithRelationInput
    _relevance?: VotingParticipationOrderByRelevanceInput
  }

  export type VotingParticipationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_poolId?: VotingParticipationUserIdPoolIdCompoundUniqueInput
    AND?: VotingParticipationWhereInput | VotingParticipationWhereInput[]
    OR?: VotingParticipationWhereInput[]
    NOT?: VotingParticipationWhereInput | VotingParticipationWhereInput[]
    timestamp?: DateTimeFilter<"VotingParticipation"> | Date | string
    userId?: StringFilter<"VotingParticipation"> | string
    poolId?: StringFilter<"VotingParticipation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votingPool?: XOR<VotingPoolScalarRelationFilter, VotingPoolWhereInput>
  }, "id" | "userId_poolId">

  export type VotingParticipationOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
    _count?: VotingParticipationCountOrderByAggregateInput
    _max?: VotingParticipationMaxOrderByAggregateInput
    _min?: VotingParticipationMinOrderByAggregateInput
  }

  export type VotingParticipationScalarWhereWithAggregatesInput = {
    AND?: VotingParticipationScalarWhereWithAggregatesInput | VotingParticipationScalarWhereWithAggregatesInput[]
    OR?: VotingParticipationScalarWhereWithAggregatesInput[]
    NOT?: VotingParticipationScalarWhereWithAggregatesInput | VotingParticipationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VotingParticipation"> | string
    timestamp?: DateTimeWithAggregatesFilter<"VotingParticipation"> | Date | string
    userId?: StringWithAggregatesFilter<"VotingParticipation"> | string
    poolId?: StringWithAggregatesFilter<"VotingParticipation"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage?: Uint8Array | null
    role?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutUserInput
    votingParticipation?: VotingParticipationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage?: Uint8Array | null
    role?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    votingParticipation?: VotingParticipationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutUserNestedInput
    votingParticipation?: VotingParticipationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    votingParticipation?: VotingParticipationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage?: Uint8Array | null
    role?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotingPoolCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    options?: VotingOptionCreateNestedManyWithoutVotingPoolInput
    votes?: VoteCreateNestedManyWithoutVotingPoolInput
    participation?: VotingParticipationCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    options?: VotingOptionUncheckedCreateNestedManyWithoutVotingPoolInput
    votes?: VoteUncheckedCreateNestedManyWithoutVotingPoolInput
    participation?: VotingParticipationUncheckedCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    options?: VotingOptionUpdateManyWithoutVotingPoolNestedInput
    votes?: VoteUpdateManyWithoutVotingPoolNestedInput
    participation?: VotingParticipationUpdateManyWithoutVotingPoolNestedInput
  }

  export type VotingPoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    options?: VotingOptionUncheckedUpdateManyWithoutVotingPoolNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVotingPoolNestedInput
    participation?: VotingParticipationUncheckedUpdateManyWithoutVotingPoolNestedInput
  }

  export type VotingPoolCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
  }

  export type VotingPoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VotingPoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VotingOptionCreateInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
    votingPool: VotingPoolCreateNestedOneWithoutOptionsInput
    votes?: VoteCreateNestedManyWithoutOptionInput
  }

  export type VotingOptionUncheckedCreateInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
    poolId: string
    votes?: VoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type VotingOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    votingPool?: VotingPoolUpdateOneRequiredWithoutOptionsNestedInput
    votes?: VoteUpdateManyWithoutOptionNestedInput
  }

  export type VotingOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    poolId?: StringFieldUpdateOperationsInput | string
    votes?: VoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type VotingOptionCreateManyInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
    poolId: string
  }

  export type VotingOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type VotingOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateInput = {
    id?: string
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutVotesInput
    votingPool: VotingPoolCreateNestedOneWithoutVotesInput
    option: VotingOptionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    poolId: string
    optionId: string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVotesNestedInput
    votingPool?: VotingPoolUpdateOneRequiredWithoutVotesNestedInput
    option?: VotingOptionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    poolId: string
    optionId: string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VotingParticipationCreateInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutVotingParticipationInput
    votingPool: VotingPoolCreateNestedOneWithoutParticipationInput
  }

  export type VotingParticipationUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    userId: string
    poolId: string
  }

  export type VotingParticipationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVotingParticipationNestedInput
    votingPool?: VotingPoolUpdateOneRequiredWithoutParticipationNestedInput
  }

  export type VotingParticipationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type VotingParticipationCreateManyInput = {
    id?: string
    timestamp?: Date | string
    userId: string
    poolId: string
  }

  export type VotingParticipationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VotingParticipationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type VotingParticipationListRelationFilter = {
    every?: VotingParticipationWhereInput
    some?: VotingParticipationWhereInput
    none?: VotingParticipationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VotingParticipationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VotingOptionListRelationFilter = {
    every?: VotingOptionWhereInput
    some?: VotingOptionWhereInput
    none?: VotingOptionWhereInput
  }

  export type VotingOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VotingPoolOrderByRelevanceInput = {
    fields: VotingPoolOrderByRelevanceFieldEnum | VotingPoolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VotingPoolCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    anonymous?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
  }

  export type VotingPoolAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type VotingPoolMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    anonymous?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
  }

  export type VotingPoolMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    anonymous?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
  }

  export type VotingPoolSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VotingPoolScalarRelationFilter = {
    is?: VotingPoolWhereInput
    isNot?: VotingPoolWhereInput
  }

  export type VotingOptionOrderByRelevanceInput = {
    fields: VotingOptionOrderByRelevanceFieldEnum | VotingOptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VotingOptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    description?: SortOrder
    image?: SortOrder
    poolId?: SortOrder
  }

  export type VotingOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    description?: SortOrder
    image?: SortOrder
    poolId?: SortOrder
  }

  export type VotingOptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    description?: SortOrder
    image?: SortOrder
    poolId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VotingOptionScalarRelationFilter = {
    is?: VotingOptionWhereInput
    isNot?: VotingOptionWhereInput
  }

  export type VoteOrderByRelevanceInput = {
    fields: VoteOrderByRelevanceFieldEnum | VoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VoteUserIdPoolIdCompoundUniqueInput = {
    userId: string
    poolId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
    optionId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
    optionId?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
    optionId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VotingParticipationOrderByRelevanceInput = {
    fields: VotingParticipationOrderByRelevanceFieldEnum | VotingParticipationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VotingParticipationUserIdPoolIdCompoundUniqueInput = {
    userId: string
    poolId: string
  }

  export type VotingParticipationCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
  }

  export type VotingParticipationMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
  }

  export type VotingParticipationMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VotingParticipationCreateNestedManyWithoutUserInput = {
    create?: XOR<VotingParticipationCreateWithoutUserInput, VotingParticipationUncheckedCreateWithoutUserInput> | VotingParticipationCreateWithoutUserInput[] | VotingParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutUserInput | VotingParticipationCreateOrConnectWithoutUserInput[]
    createMany?: VotingParticipationCreateManyUserInputEnvelope
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VotingParticipationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VotingParticipationCreateWithoutUserInput, VotingParticipationUncheckedCreateWithoutUserInput> | VotingParticipationCreateWithoutUserInput[] | VotingParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutUserInput | VotingParticipationCreateOrConnectWithoutUserInput[]
    createMany?: VotingParticipationCreateManyUserInputEnvelope
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VotingParticipationUpdateManyWithoutUserNestedInput = {
    create?: XOR<VotingParticipationCreateWithoutUserInput, VotingParticipationUncheckedCreateWithoutUserInput> | VotingParticipationCreateWithoutUserInput[] | VotingParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutUserInput | VotingParticipationCreateOrConnectWithoutUserInput[]
    upsert?: VotingParticipationUpsertWithWhereUniqueWithoutUserInput | VotingParticipationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VotingParticipationCreateManyUserInputEnvelope
    set?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    disconnect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    delete?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    update?: VotingParticipationUpdateWithWhereUniqueWithoutUserInput | VotingParticipationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VotingParticipationUpdateManyWithWhereWithoutUserInput | VotingParticipationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VotingParticipationScalarWhereInput | VotingParticipationScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VotingParticipationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VotingParticipationCreateWithoutUserInput, VotingParticipationUncheckedCreateWithoutUserInput> | VotingParticipationCreateWithoutUserInput[] | VotingParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutUserInput | VotingParticipationCreateOrConnectWithoutUserInput[]
    upsert?: VotingParticipationUpsertWithWhereUniqueWithoutUserInput | VotingParticipationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VotingParticipationCreateManyUserInputEnvelope
    set?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    disconnect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    delete?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    update?: VotingParticipationUpdateWithWhereUniqueWithoutUserInput | VotingParticipationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VotingParticipationUpdateManyWithWhereWithoutUserInput | VotingParticipationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VotingParticipationScalarWhereInput | VotingParticipationScalarWhereInput[]
  }

  export type VotingOptionCreateNestedManyWithoutVotingPoolInput = {
    create?: XOR<VotingOptionCreateWithoutVotingPoolInput, VotingOptionUncheckedCreateWithoutVotingPoolInput> | VotingOptionCreateWithoutVotingPoolInput[] | VotingOptionUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingOptionCreateOrConnectWithoutVotingPoolInput | VotingOptionCreateOrConnectWithoutVotingPoolInput[]
    createMany?: VotingOptionCreateManyVotingPoolInputEnvelope
    connect?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutVotingPoolInput = {
    create?: XOR<VoteCreateWithoutVotingPoolInput, VoteUncheckedCreateWithoutVotingPoolInput> | VoteCreateWithoutVotingPoolInput[] | VoteUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVotingPoolInput | VoteCreateOrConnectWithoutVotingPoolInput[]
    createMany?: VoteCreateManyVotingPoolInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VotingParticipationCreateNestedManyWithoutVotingPoolInput = {
    create?: XOR<VotingParticipationCreateWithoutVotingPoolInput, VotingParticipationUncheckedCreateWithoutVotingPoolInput> | VotingParticipationCreateWithoutVotingPoolInput[] | VotingParticipationUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutVotingPoolInput | VotingParticipationCreateOrConnectWithoutVotingPoolInput[]
    createMany?: VotingParticipationCreateManyVotingPoolInputEnvelope
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
  }

  export type VotingOptionUncheckedCreateNestedManyWithoutVotingPoolInput = {
    create?: XOR<VotingOptionCreateWithoutVotingPoolInput, VotingOptionUncheckedCreateWithoutVotingPoolInput> | VotingOptionCreateWithoutVotingPoolInput[] | VotingOptionUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingOptionCreateOrConnectWithoutVotingPoolInput | VotingOptionCreateOrConnectWithoutVotingPoolInput[]
    createMany?: VotingOptionCreateManyVotingPoolInputEnvelope
    connect?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutVotingPoolInput = {
    create?: XOR<VoteCreateWithoutVotingPoolInput, VoteUncheckedCreateWithoutVotingPoolInput> | VoteCreateWithoutVotingPoolInput[] | VoteUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVotingPoolInput | VoteCreateOrConnectWithoutVotingPoolInput[]
    createMany?: VoteCreateManyVotingPoolInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VotingParticipationUncheckedCreateNestedManyWithoutVotingPoolInput = {
    create?: XOR<VotingParticipationCreateWithoutVotingPoolInput, VotingParticipationUncheckedCreateWithoutVotingPoolInput> | VotingParticipationCreateWithoutVotingPoolInput[] | VotingParticipationUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutVotingPoolInput | VotingParticipationCreateOrConnectWithoutVotingPoolInput[]
    createMany?: VotingParticipationCreateManyVotingPoolInputEnvelope
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VotingOptionUpdateManyWithoutVotingPoolNestedInput = {
    create?: XOR<VotingOptionCreateWithoutVotingPoolInput, VotingOptionUncheckedCreateWithoutVotingPoolInput> | VotingOptionCreateWithoutVotingPoolInput[] | VotingOptionUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingOptionCreateOrConnectWithoutVotingPoolInput | VotingOptionCreateOrConnectWithoutVotingPoolInput[]
    upsert?: VotingOptionUpsertWithWhereUniqueWithoutVotingPoolInput | VotingOptionUpsertWithWhereUniqueWithoutVotingPoolInput[]
    createMany?: VotingOptionCreateManyVotingPoolInputEnvelope
    set?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    disconnect?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    delete?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    connect?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    update?: VotingOptionUpdateWithWhereUniqueWithoutVotingPoolInput | VotingOptionUpdateWithWhereUniqueWithoutVotingPoolInput[]
    updateMany?: VotingOptionUpdateManyWithWhereWithoutVotingPoolInput | VotingOptionUpdateManyWithWhereWithoutVotingPoolInput[]
    deleteMany?: VotingOptionScalarWhereInput | VotingOptionScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutVotingPoolNestedInput = {
    create?: XOR<VoteCreateWithoutVotingPoolInput, VoteUncheckedCreateWithoutVotingPoolInput> | VoteCreateWithoutVotingPoolInput[] | VoteUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVotingPoolInput | VoteCreateOrConnectWithoutVotingPoolInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVotingPoolInput | VoteUpsertWithWhereUniqueWithoutVotingPoolInput[]
    createMany?: VoteCreateManyVotingPoolInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVotingPoolInput | VoteUpdateWithWhereUniqueWithoutVotingPoolInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVotingPoolInput | VoteUpdateManyWithWhereWithoutVotingPoolInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VotingParticipationUpdateManyWithoutVotingPoolNestedInput = {
    create?: XOR<VotingParticipationCreateWithoutVotingPoolInput, VotingParticipationUncheckedCreateWithoutVotingPoolInput> | VotingParticipationCreateWithoutVotingPoolInput[] | VotingParticipationUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutVotingPoolInput | VotingParticipationCreateOrConnectWithoutVotingPoolInput[]
    upsert?: VotingParticipationUpsertWithWhereUniqueWithoutVotingPoolInput | VotingParticipationUpsertWithWhereUniqueWithoutVotingPoolInput[]
    createMany?: VotingParticipationCreateManyVotingPoolInputEnvelope
    set?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    disconnect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    delete?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    update?: VotingParticipationUpdateWithWhereUniqueWithoutVotingPoolInput | VotingParticipationUpdateWithWhereUniqueWithoutVotingPoolInput[]
    updateMany?: VotingParticipationUpdateManyWithWhereWithoutVotingPoolInput | VotingParticipationUpdateManyWithWhereWithoutVotingPoolInput[]
    deleteMany?: VotingParticipationScalarWhereInput | VotingParticipationScalarWhereInput[]
  }

  export type VotingOptionUncheckedUpdateManyWithoutVotingPoolNestedInput = {
    create?: XOR<VotingOptionCreateWithoutVotingPoolInput, VotingOptionUncheckedCreateWithoutVotingPoolInput> | VotingOptionCreateWithoutVotingPoolInput[] | VotingOptionUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingOptionCreateOrConnectWithoutVotingPoolInput | VotingOptionCreateOrConnectWithoutVotingPoolInput[]
    upsert?: VotingOptionUpsertWithWhereUniqueWithoutVotingPoolInput | VotingOptionUpsertWithWhereUniqueWithoutVotingPoolInput[]
    createMany?: VotingOptionCreateManyVotingPoolInputEnvelope
    set?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    disconnect?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    delete?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    connect?: VotingOptionWhereUniqueInput | VotingOptionWhereUniqueInput[]
    update?: VotingOptionUpdateWithWhereUniqueWithoutVotingPoolInput | VotingOptionUpdateWithWhereUniqueWithoutVotingPoolInput[]
    updateMany?: VotingOptionUpdateManyWithWhereWithoutVotingPoolInput | VotingOptionUpdateManyWithWhereWithoutVotingPoolInput[]
    deleteMany?: VotingOptionScalarWhereInput | VotingOptionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutVotingPoolNestedInput = {
    create?: XOR<VoteCreateWithoutVotingPoolInput, VoteUncheckedCreateWithoutVotingPoolInput> | VoteCreateWithoutVotingPoolInput[] | VoteUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVotingPoolInput | VoteCreateOrConnectWithoutVotingPoolInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVotingPoolInput | VoteUpsertWithWhereUniqueWithoutVotingPoolInput[]
    createMany?: VoteCreateManyVotingPoolInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVotingPoolInput | VoteUpdateWithWhereUniqueWithoutVotingPoolInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVotingPoolInput | VoteUpdateManyWithWhereWithoutVotingPoolInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VotingParticipationUncheckedUpdateManyWithoutVotingPoolNestedInput = {
    create?: XOR<VotingParticipationCreateWithoutVotingPoolInput, VotingParticipationUncheckedCreateWithoutVotingPoolInput> | VotingParticipationCreateWithoutVotingPoolInput[] | VotingParticipationUncheckedCreateWithoutVotingPoolInput[]
    connectOrCreate?: VotingParticipationCreateOrConnectWithoutVotingPoolInput | VotingParticipationCreateOrConnectWithoutVotingPoolInput[]
    upsert?: VotingParticipationUpsertWithWhereUniqueWithoutVotingPoolInput | VotingParticipationUpsertWithWhereUniqueWithoutVotingPoolInput[]
    createMany?: VotingParticipationCreateManyVotingPoolInputEnvelope
    set?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    disconnect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    delete?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    connect?: VotingParticipationWhereUniqueInput | VotingParticipationWhereUniqueInput[]
    update?: VotingParticipationUpdateWithWhereUniqueWithoutVotingPoolInput | VotingParticipationUpdateWithWhereUniqueWithoutVotingPoolInput[]
    updateMany?: VotingParticipationUpdateManyWithWhereWithoutVotingPoolInput | VotingParticipationUpdateManyWithWhereWithoutVotingPoolInput[]
    deleteMany?: VotingParticipationScalarWhereInput | VotingParticipationScalarWhereInput[]
  }

  export type VotingPoolCreateNestedOneWithoutOptionsInput = {
    create?: XOR<VotingPoolCreateWithoutOptionsInput, VotingPoolUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: VotingPoolCreateOrConnectWithoutOptionsInput
    connect?: VotingPoolWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutOptionInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VotingPoolUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<VotingPoolCreateWithoutOptionsInput, VotingPoolUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: VotingPoolCreateOrConnectWithoutOptionsInput
    upsert?: VotingPoolUpsertWithoutOptionsInput
    connect?: VotingPoolWhereUniqueInput
    update?: XOR<XOR<VotingPoolUpdateToOneWithWhereWithoutOptionsInput, VotingPoolUpdateWithoutOptionsInput>, VotingPoolUncheckedUpdateWithoutOptionsInput>
  }

  export type VoteUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutOptionInput | VoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutOptionInput | VoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutOptionInput | VoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutOptionInput | VoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutOptionInput | VoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutOptionInput | VoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type VotingPoolCreateNestedOneWithoutVotesInput = {
    create?: XOR<VotingPoolCreateWithoutVotesInput, VotingPoolUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VotingPoolCreateOrConnectWithoutVotesInput
    connect?: VotingPoolWhereUniqueInput
  }

  export type VotingOptionCreateNestedOneWithoutVotesInput = {
    create?: XOR<VotingOptionCreateWithoutVotesInput, VotingOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VotingOptionCreateOrConnectWithoutVotesInput
    connect?: VotingOptionWhereUniqueInput
  }

  export type UserUpdateOneWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type VotingPoolUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<VotingPoolCreateWithoutVotesInput, VotingPoolUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VotingPoolCreateOrConnectWithoutVotesInput
    upsert?: VotingPoolUpsertWithoutVotesInput
    connect?: VotingPoolWhereUniqueInput
    update?: XOR<XOR<VotingPoolUpdateToOneWithWhereWithoutVotesInput, VotingPoolUpdateWithoutVotesInput>, VotingPoolUncheckedUpdateWithoutVotesInput>
  }

  export type VotingOptionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<VotingOptionCreateWithoutVotesInput, VotingOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VotingOptionCreateOrConnectWithoutVotesInput
    upsert?: VotingOptionUpsertWithoutVotesInput
    connect?: VotingOptionWhereUniqueInput
    update?: XOR<XOR<VotingOptionUpdateToOneWithWhereWithoutVotesInput, VotingOptionUpdateWithoutVotesInput>, VotingOptionUncheckedUpdateWithoutVotesInput>
  }

  export type UserCreateNestedOneWithoutVotingParticipationInput = {
    create?: XOR<UserCreateWithoutVotingParticipationInput, UserUncheckedCreateWithoutVotingParticipationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotingParticipationInput
    connect?: UserWhereUniqueInput
  }

  export type VotingPoolCreateNestedOneWithoutParticipationInput = {
    create?: XOR<VotingPoolCreateWithoutParticipationInput, VotingPoolUncheckedCreateWithoutParticipationInput>
    connectOrCreate?: VotingPoolCreateOrConnectWithoutParticipationInput
    connect?: VotingPoolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotingParticipationNestedInput = {
    create?: XOR<UserCreateWithoutVotingParticipationInput, UserUncheckedCreateWithoutVotingParticipationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotingParticipationInput
    upsert?: UserUpsertWithoutVotingParticipationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotingParticipationInput, UserUpdateWithoutVotingParticipationInput>, UserUncheckedUpdateWithoutVotingParticipationInput>
  }

  export type VotingPoolUpdateOneRequiredWithoutParticipationNestedInput = {
    create?: XOR<VotingPoolCreateWithoutParticipationInput, VotingPoolUncheckedCreateWithoutParticipationInput>
    connectOrCreate?: VotingPoolCreateOrConnectWithoutParticipationInput
    upsert?: VotingPoolUpsertWithoutParticipationInput
    connect?: VotingPoolWhereUniqueInput
    update?: XOR<XOR<VotingPoolUpdateToOneWithWhereWithoutParticipationInput, VotingPoolUpdateWithoutParticipationInput>, VotingPoolUncheckedUpdateWithoutParticipationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VoteCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    votingPool: VotingPoolCreateNestedOneWithoutVotesInput
    option: VotingOptionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    poolId: string
    optionId: string
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VotingParticipationCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    votingPool: VotingPoolCreateNestedOneWithoutParticipationInput
  }

  export type VotingParticipationUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    poolId: string
  }

  export type VotingParticipationCreateOrConnectWithoutUserInput = {
    where: VotingParticipationWhereUniqueInput
    create: XOR<VotingParticipationCreateWithoutUserInput, VotingParticipationUncheckedCreateWithoutUserInput>
  }

  export type VotingParticipationCreateManyUserInputEnvelope = {
    data: VotingParticipationCreateManyUserInput | VotingParticipationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    timestamp?: DateTimeFilter<"Vote"> | Date | string
    userId?: StringNullableFilter<"Vote"> | string | null
    poolId?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
  }

  export type VotingParticipationUpsertWithWhereUniqueWithoutUserInput = {
    where: VotingParticipationWhereUniqueInput
    update: XOR<VotingParticipationUpdateWithoutUserInput, VotingParticipationUncheckedUpdateWithoutUserInput>
    create: XOR<VotingParticipationCreateWithoutUserInput, VotingParticipationUncheckedCreateWithoutUserInput>
  }

  export type VotingParticipationUpdateWithWhereUniqueWithoutUserInput = {
    where: VotingParticipationWhereUniqueInput
    data: XOR<VotingParticipationUpdateWithoutUserInput, VotingParticipationUncheckedUpdateWithoutUserInput>
  }

  export type VotingParticipationUpdateManyWithWhereWithoutUserInput = {
    where: VotingParticipationScalarWhereInput
    data: XOR<VotingParticipationUpdateManyMutationInput, VotingParticipationUncheckedUpdateManyWithoutUserInput>
  }

  export type VotingParticipationScalarWhereInput = {
    AND?: VotingParticipationScalarWhereInput | VotingParticipationScalarWhereInput[]
    OR?: VotingParticipationScalarWhereInput[]
    NOT?: VotingParticipationScalarWhereInput | VotingParticipationScalarWhereInput[]
    id?: StringFilter<"VotingParticipation"> | string
    timestamp?: DateTimeFilter<"VotingParticipation"> | Date | string
    userId?: StringFilter<"VotingParticipation"> | string
    poolId?: StringFilter<"VotingParticipation"> | string
  }

  export type VotingOptionCreateWithoutVotingPoolInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
    votes?: VoteCreateNestedManyWithoutOptionInput
  }

  export type VotingOptionUncheckedCreateWithoutVotingPoolInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
    votes?: VoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type VotingOptionCreateOrConnectWithoutVotingPoolInput = {
    where: VotingOptionWhereUniqueInput
    create: XOR<VotingOptionCreateWithoutVotingPoolInput, VotingOptionUncheckedCreateWithoutVotingPoolInput>
  }

  export type VotingOptionCreateManyVotingPoolInputEnvelope = {
    data: VotingOptionCreateManyVotingPoolInput | VotingOptionCreateManyVotingPoolInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutVotingPoolInput = {
    id?: string
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutVotesInput
    option: VotingOptionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutVotingPoolInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    optionId: string
  }

  export type VoteCreateOrConnectWithoutVotingPoolInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutVotingPoolInput, VoteUncheckedCreateWithoutVotingPoolInput>
  }

  export type VoteCreateManyVotingPoolInputEnvelope = {
    data: VoteCreateManyVotingPoolInput | VoteCreateManyVotingPoolInput[]
    skipDuplicates?: boolean
  }

  export type VotingParticipationCreateWithoutVotingPoolInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutVotingParticipationInput
  }

  export type VotingParticipationUncheckedCreateWithoutVotingPoolInput = {
    id?: string
    timestamp?: Date | string
    userId: string
  }

  export type VotingParticipationCreateOrConnectWithoutVotingPoolInput = {
    where: VotingParticipationWhereUniqueInput
    create: XOR<VotingParticipationCreateWithoutVotingPoolInput, VotingParticipationUncheckedCreateWithoutVotingPoolInput>
  }

  export type VotingParticipationCreateManyVotingPoolInputEnvelope = {
    data: VotingParticipationCreateManyVotingPoolInput | VotingParticipationCreateManyVotingPoolInput[]
    skipDuplicates?: boolean
  }

  export type VotingOptionUpsertWithWhereUniqueWithoutVotingPoolInput = {
    where: VotingOptionWhereUniqueInput
    update: XOR<VotingOptionUpdateWithoutVotingPoolInput, VotingOptionUncheckedUpdateWithoutVotingPoolInput>
    create: XOR<VotingOptionCreateWithoutVotingPoolInput, VotingOptionUncheckedCreateWithoutVotingPoolInput>
  }

  export type VotingOptionUpdateWithWhereUniqueWithoutVotingPoolInput = {
    where: VotingOptionWhereUniqueInput
    data: XOR<VotingOptionUpdateWithoutVotingPoolInput, VotingOptionUncheckedUpdateWithoutVotingPoolInput>
  }

  export type VotingOptionUpdateManyWithWhereWithoutVotingPoolInput = {
    where: VotingOptionScalarWhereInput
    data: XOR<VotingOptionUpdateManyMutationInput, VotingOptionUncheckedUpdateManyWithoutVotingPoolInput>
  }

  export type VotingOptionScalarWhereInput = {
    AND?: VotingOptionScalarWhereInput | VotingOptionScalarWhereInput[]
    OR?: VotingOptionScalarWhereInput[]
    NOT?: VotingOptionScalarWhereInput | VotingOptionScalarWhereInput[]
    id?: StringFilter<"VotingOption"> | string
    text?: StringFilter<"VotingOption"> | string
    description?: StringNullableFilter<"VotingOption"> | string | null
    image?: BytesNullableFilter<"VotingOption"> | Uint8Array | null
    poolId?: StringFilter<"VotingOption"> | string
  }

  export type VoteUpsertWithWhereUniqueWithoutVotingPoolInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutVotingPoolInput, VoteUncheckedUpdateWithoutVotingPoolInput>
    create: XOR<VoteCreateWithoutVotingPoolInput, VoteUncheckedCreateWithoutVotingPoolInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutVotingPoolInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutVotingPoolInput, VoteUncheckedUpdateWithoutVotingPoolInput>
  }

  export type VoteUpdateManyWithWhereWithoutVotingPoolInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutVotingPoolInput>
  }

  export type VotingParticipationUpsertWithWhereUniqueWithoutVotingPoolInput = {
    where: VotingParticipationWhereUniqueInput
    update: XOR<VotingParticipationUpdateWithoutVotingPoolInput, VotingParticipationUncheckedUpdateWithoutVotingPoolInput>
    create: XOR<VotingParticipationCreateWithoutVotingPoolInput, VotingParticipationUncheckedCreateWithoutVotingPoolInput>
  }

  export type VotingParticipationUpdateWithWhereUniqueWithoutVotingPoolInput = {
    where: VotingParticipationWhereUniqueInput
    data: XOR<VotingParticipationUpdateWithoutVotingPoolInput, VotingParticipationUncheckedUpdateWithoutVotingPoolInput>
  }

  export type VotingParticipationUpdateManyWithWhereWithoutVotingPoolInput = {
    where: VotingParticipationScalarWhereInput
    data: XOR<VotingParticipationUpdateManyMutationInput, VotingParticipationUncheckedUpdateManyWithoutVotingPoolInput>
  }

  export type VotingPoolCreateWithoutOptionsInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    votes?: VoteCreateNestedManyWithoutVotingPoolInput
    participation?: VotingParticipationCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolUncheckedCreateWithoutOptionsInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    votes?: VoteUncheckedCreateNestedManyWithoutVotingPoolInput
    participation?: VotingParticipationUncheckedCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolCreateOrConnectWithoutOptionsInput = {
    where: VotingPoolWhereUniqueInput
    create: XOR<VotingPoolCreateWithoutOptionsInput, VotingPoolUncheckedCreateWithoutOptionsInput>
  }

  export type VoteCreateWithoutOptionInput = {
    id?: string
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutVotesInput
    votingPool: VotingPoolCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutOptionInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    poolId: string
  }

  export type VoteCreateOrConnectWithoutOptionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput>
  }

  export type VoteCreateManyOptionInputEnvelope = {
    data: VoteCreateManyOptionInput | VoteCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type VotingPoolUpsertWithoutOptionsInput = {
    update: XOR<VotingPoolUpdateWithoutOptionsInput, VotingPoolUncheckedUpdateWithoutOptionsInput>
    create: XOR<VotingPoolCreateWithoutOptionsInput, VotingPoolUncheckedCreateWithoutOptionsInput>
    where?: VotingPoolWhereInput
  }

  export type VotingPoolUpdateToOneWithWhereWithoutOptionsInput = {
    where?: VotingPoolWhereInput
    data: XOR<VotingPoolUpdateWithoutOptionsInput, VotingPoolUncheckedUpdateWithoutOptionsInput>
  }

  export type VotingPoolUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: VoteUpdateManyWithoutVotingPoolNestedInput
    participation?: VotingParticipationUpdateManyWithoutVotingPoolNestedInput
  }

  export type VotingPoolUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: VoteUncheckedUpdateManyWithoutVotingPoolNestedInput
    participation?: VotingParticipationUncheckedUpdateManyWithoutVotingPoolNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutOptionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutOptionInput, VoteUncheckedUpdateWithoutOptionInput>
    create: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutOptionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutOptionInput, VoteUncheckedUpdateWithoutOptionInput>
  }

  export type VoteUpdateManyWithWhereWithoutOptionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutOptionInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage?: Uint8Array | null
    role?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votingParticipation?: VotingParticipationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage?: Uint8Array | null
    role?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votingParticipation?: VotingParticipationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type VotingPoolCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    options?: VotingOptionCreateNestedManyWithoutVotingPoolInput
    participation?: VotingParticipationCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    options?: VotingOptionUncheckedCreateNestedManyWithoutVotingPoolInput
    participation?: VotingParticipationUncheckedCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolCreateOrConnectWithoutVotesInput = {
    where: VotingPoolWhereUniqueInput
    create: XOR<VotingPoolCreateWithoutVotesInput, VotingPoolUncheckedCreateWithoutVotesInput>
  }

  export type VotingOptionCreateWithoutVotesInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
    votingPool: VotingPoolCreateNestedOneWithoutOptionsInput
  }

  export type VotingOptionUncheckedCreateWithoutVotesInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
    poolId: string
  }

  export type VotingOptionCreateOrConnectWithoutVotesInput = {
    where: VotingOptionWhereUniqueInput
    create: XOR<VotingOptionCreateWithoutVotesInput, VotingOptionUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votingParticipation?: VotingParticipationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votingParticipation?: VotingParticipationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VotingPoolUpsertWithoutVotesInput = {
    update: XOR<VotingPoolUpdateWithoutVotesInput, VotingPoolUncheckedUpdateWithoutVotesInput>
    create: XOR<VotingPoolCreateWithoutVotesInput, VotingPoolUncheckedCreateWithoutVotesInput>
    where?: VotingPoolWhereInput
  }

  export type VotingPoolUpdateToOneWithWhereWithoutVotesInput = {
    where?: VotingPoolWhereInput
    data: XOR<VotingPoolUpdateWithoutVotesInput, VotingPoolUncheckedUpdateWithoutVotesInput>
  }

  export type VotingPoolUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    options?: VotingOptionUpdateManyWithoutVotingPoolNestedInput
    participation?: VotingParticipationUpdateManyWithoutVotingPoolNestedInput
  }

  export type VotingPoolUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    options?: VotingOptionUncheckedUpdateManyWithoutVotingPoolNestedInput
    participation?: VotingParticipationUncheckedUpdateManyWithoutVotingPoolNestedInput
  }

  export type VotingOptionUpsertWithoutVotesInput = {
    update: XOR<VotingOptionUpdateWithoutVotesInput, VotingOptionUncheckedUpdateWithoutVotesInput>
    create: XOR<VotingOptionCreateWithoutVotesInput, VotingOptionUncheckedCreateWithoutVotesInput>
    where?: VotingOptionWhereInput
  }

  export type VotingOptionUpdateToOneWithWhereWithoutVotesInput = {
    where?: VotingOptionWhereInput
    data: XOR<VotingOptionUpdateWithoutVotesInput, VotingOptionUncheckedUpdateWithoutVotesInput>
  }

  export type VotingOptionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    votingPool?: VotingPoolUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type VotingOptionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutVotingParticipationInput = {
    id?: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage?: Uint8Array | null
    role?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotingParticipationInput = {
    id?: string
    name: string
    cpf: string
    email: string
    password: string
    avatarImage?: Uint8Array | null
    role?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotingParticipationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotingParticipationInput, UserUncheckedCreateWithoutVotingParticipationInput>
  }

  export type VotingPoolCreateWithoutParticipationInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    options?: VotingOptionCreateNestedManyWithoutVotingPoolInput
    votes?: VoteCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolUncheckedCreateWithoutParticipationInput = {
    id?: string
    title: string
    description: string
    category: string
    image?: Uint8Array | null
    startDate: Date | string
    endDate: Date | string
    anonymous?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    options?: VotingOptionUncheckedCreateNestedManyWithoutVotingPoolInput
    votes?: VoteUncheckedCreateNestedManyWithoutVotingPoolInput
  }

  export type VotingPoolCreateOrConnectWithoutParticipationInput = {
    where: VotingPoolWhereUniqueInput
    create: XOR<VotingPoolCreateWithoutParticipationInput, VotingPoolUncheckedCreateWithoutParticipationInput>
  }

  export type UserUpsertWithoutVotingParticipationInput = {
    update: XOR<UserUpdateWithoutVotingParticipationInput, UserUncheckedUpdateWithoutVotingParticipationInput>
    create: XOR<UserCreateWithoutVotingParticipationInput, UserUncheckedCreateWithoutVotingParticipationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotingParticipationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotingParticipationInput, UserUncheckedUpdateWithoutVotingParticipationInput>
  }

  export type UserUpdateWithoutVotingParticipationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotingParticipationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VotingPoolUpsertWithoutParticipationInput = {
    update: XOR<VotingPoolUpdateWithoutParticipationInput, VotingPoolUncheckedUpdateWithoutParticipationInput>
    create: XOR<VotingPoolCreateWithoutParticipationInput, VotingPoolUncheckedCreateWithoutParticipationInput>
    where?: VotingPoolWhereInput
  }

  export type VotingPoolUpdateToOneWithWhereWithoutParticipationInput = {
    where?: VotingPoolWhereInput
    data: XOR<VotingPoolUpdateWithoutParticipationInput, VotingPoolUncheckedUpdateWithoutParticipationInput>
  }

  export type VotingPoolUpdateWithoutParticipationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    options?: VotingOptionUpdateManyWithoutVotingPoolNestedInput
    votes?: VoteUpdateManyWithoutVotingPoolNestedInput
  }

  export type VotingPoolUncheckedUpdateWithoutParticipationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    options?: VotingOptionUncheckedUpdateManyWithoutVotingPoolNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVotingPoolNestedInput
  }

  export type VoteCreateManyUserInput = {
    id?: string
    timestamp?: Date | string
    poolId: string
    optionId: string
  }

  export type VotingParticipationCreateManyUserInput = {
    id?: string
    timestamp?: Date | string
    poolId: string
  }

  export type VoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    votingPool?: VotingPoolUpdateOneRequiredWithoutVotesNestedInput
    option?: VotingOptionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    poolId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    poolId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VotingParticipationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    votingPool?: VotingPoolUpdateOneRequiredWithoutParticipationNestedInput
  }

  export type VotingParticipationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type VotingParticipationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type VotingOptionCreateManyVotingPoolInput = {
    id?: string
    text: string
    description?: string | null
    image?: Uint8Array | null
  }

  export type VoteCreateManyVotingPoolInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    optionId: string
  }

  export type VotingParticipationCreateManyVotingPoolInput = {
    id?: string
    timestamp?: Date | string
    userId: string
  }

  export type VotingOptionUpdateWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    votes?: VoteUpdateManyWithoutOptionNestedInput
  }

  export type VotingOptionUncheckedUpdateWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    votes?: VoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type VotingOptionUncheckedUpdateManyWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type VoteUpdateWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVotesNestedInput
    option?: VotingOptionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VotingParticipationUpdateWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVotingParticipationNestedInput
  }

  export type VotingParticipationUncheckedUpdateWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VotingParticipationUncheckedUpdateManyWithoutVotingPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyOptionInput = {
    id?: string
    timestamp?: Date | string
    userId?: string | null
    poolId: string
  }

  export type VoteUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVotesNestedInput
    votingPool?: VotingPoolUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}