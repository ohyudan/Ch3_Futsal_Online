
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model rank
 * 
 */
export type rank = $Result.DefaultSelection<Prisma.$rankPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model player_deck
 * 
 */
export type player_deck = $Result.DefaultSelection<Prisma.$player_deckPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.rank`: Exposes CRUD operations for the **rank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ranks
    * const ranks = await prisma.rank.findMany()
    * ```
    */
  get rank(): Prisma.rankDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs>;

  /**
   * `prisma.player_deck`: Exposes CRUD operations for the **player_deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Player_decks
    * const player_decks = await prisma.player_deck.findMany()
    * ```
    */
  get player_deck(): Prisma.player_deckDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    users: 'users',
    rank: 'rank',
    inventory: 'inventory',
    player_deck: 'player_deck'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "rank" | "inventory" | "player_deck"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      rank: {
        payload: Prisma.$rankPayload<ExtArgs>
        fields: Prisma.rankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload>
          }
          findFirst: {
            args: Prisma.rankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload>
          }
          findMany: {
            args: Prisma.rankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload>[]
          }
          create: {
            args: Prisma.rankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload>
          }
          createMany: {
            args: Prisma.rankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload>
          }
          update: {
            args: Prisma.rankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload>
          }
          deleteMany: {
            args: Prisma.rankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rankPayload>
          }
          aggregate: {
            args: Prisma.RankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRank>
          }
          groupBy: {
            args: Prisma.rankGroupByArgs<ExtArgs>
            result: $Utils.Optional<RankGroupByOutputType>[]
          }
          count: {
            args: Prisma.rankCountArgs<ExtArgs>
            result: $Utils.Optional<RankCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      player_deck: {
        payload: Prisma.$player_deckPayload<ExtArgs>
        fields: Prisma.player_deckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.player_deckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.player_deckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload>
          }
          findFirst: {
            args: Prisma.player_deckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.player_deckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload>
          }
          findMany: {
            args: Prisma.player_deckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload>[]
          }
          create: {
            args: Prisma.player_deckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload>
          }
          createMany: {
            args: Prisma.player_deckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.player_deckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload>
          }
          update: {
            args: Prisma.player_deckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload>
          }
          deleteMany: {
            args: Prisma.player_deckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.player_deckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.player_deckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_deckPayload>
          }
          aggregate: {
            args: Prisma.Player_deckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer_deck>
          }
          groupBy: {
            args: Prisma.player_deckGroupByArgs<ExtArgs>
            result: $Utils.Optional<Player_deckGroupByOutputType>[]
          }
          count: {
            args: Prisma.player_deckCountArgs<ExtArgs>
            result: $Utils.Optional<Player_deckCountAggregateOutputType> | number
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    inventory: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | UsersCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    cash: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    cash: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    account: string | null
    password: string | null
    name: string | null
    cash: number | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    account: string | null
    password: string | null
    name: string | null
    cash: number | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    account: number
    password: number
    name: number
    cash: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    cash?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    cash?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    account?: true
    password?: true
    name?: true
    cash?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    account?: true
    password?: true
    name?: true
    cash?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    account?: true
    password?: true
    name?: true
    cash?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    account: string
    password: string
    name: string
    cash: number
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account?: boolean
    password?: boolean
    name?: boolean
    cash?: boolean
    created_at?: boolean
    rank?: boolean | users$rankArgs<ExtArgs>
    player_deck?: boolean | users$player_deckArgs<ExtArgs>
    inventory?: boolean | users$inventoryArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    id?: boolean
    account?: boolean
    password?: boolean
    name?: boolean
    cash?: boolean
    created_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rank?: boolean | users$rankArgs<ExtArgs>
    player_deck?: boolean | users$player_deckArgs<ExtArgs>
    inventory?: boolean | users$inventoryArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      rank: Prisma.$rankPayload<ExtArgs> | null
      player_deck: Prisma.$player_deckPayload<ExtArgs> | null
      inventory: Prisma.$inventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account: string
      password: string
      name: string
      cash: number
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rank<T extends users$rankArgs<ExtArgs> = {}>(args?: Subset<T, users$rankArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    player_deck<T extends users$player_deckArgs<ExtArgs> = {}>(args?: Subset<T, users$player_deckArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    inventory<T extends users$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, users$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly account: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly cash: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.rank
   */
  export type users$rankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    where?: rankWhereInput
  }

  /**
   * users.player_deck
   */
  export type users$player_deckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    where?: player_deckWhereInput
  }

  /**
   * users.inventory
   */
  export type users$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    cursor?: inventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model rank
   */

  export type AggregateRank = {
    _count: RankCountAggregateOutputType | null
    _avg: RankAvgAggregateOutputType | null
    _sum: RankSumAggregateOutputType | null
    _min: RankMinAggregateOutputType | null
    _max: RankMaxAggregateOutputType | null
  }

  export type RankAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    rankpoint: number | null
    rank: number | null
    win: number | null
    draw: number | null
    lose: number | null
  }

  export type RankSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    rankpoint: number | null
    rank: number | null
    win: number | null
    draw: number | null
    lose: number | null
  }

  export type RankMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    rankpoint: number | null
    rank: number | null
    tier: string | null
    win: number | null
    draw: number | null
    lose: number | null
  }

  export type RankMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    rankpoint: number | null
    rank: number | null
    tier: string | null
    win: number | null
    draw: number | null
    lose: number | null
  }

  export type RankCountAggregateOutputType = {
    id: number
    user_id: number
    rankpoint: number
    rank: number
    tier: number
    win: number
    draw: number
    lose: number
    _all: number
  }


  export type RankAvgAggregateInputType = {
    id?: true
    user_id?: true
    rankpoint?: true
    rank?: true
    win?: true
    draw?: true
    lose?: true
  }

  export type RankSumAggregateInputType = {
    id?: true
    user_id?: true
    rankpoint?: true
    rank?: true
    win?: true
    draw?: true
    lose?: true
  }

  export type RankMinAggregateInputType = {
    id?: true
    user_id?: true
    rankpoint?: true
    rank?: true
    tier?: true
    win?: true
    draw?: true
    lose?: true
  }

  export type RankMaxAggregateInputType = {
    id?: true
    user_id?: true
    rankpoint?: true
    rank?: true
    tier?: true
    win?: true
    draw?: true
    lose?: true
  }

  export type RankCountAggregateInputType = {
    id?: true
    user_id?: true
    rankpoint?: true
    rank?: true
    tier?: true
    win?: true
    draw?: true
    lose?: true
    _all?: true
  }

  export type RankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rank to aggregate.
     */
    where?: rankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranks to fetch.
     */
    orderBy?: rankOrderByWithRelationInput | rankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ranks
    **/
    _count?: true | RankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankMaxAggregateInputType
  }

  export type GetRankAggregateType<T extends RankAggregateArgs> = {
        [P in keyof T & keyof AggregateRank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRank[P]>
      : GetScalarType<T[P], AggregateRank[P]>
  }




  export type rankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rankWhereInput
    orderBy?: rankOrderByWithAggregationInput | rankOrderByWithAggregationInput[]
    by: RankScalarFieldEnum[] | RankScalarFieldEnum
    having?: rankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankCountAggregateInputType | true
    _avg?: RankAvgAggregateInputType
    _sum?: RankSumAggregateInputType
    _min?: RankMinAggregateInputType
    _max?: RankMaxAggregateInputType
  }

  export type RankGroupByOutputType = {
    id: number
    user_id: number
    rankpoint: number
    rank: number
    tier: string
    win: number
    draw: number
    lose: number
    _count: RankCountAggregateOutputType | null
    _avg: RankAvgAggregateOutputType | null
    _sum: RankSumAggregateOutputType | null
    _min: RankMinAggregateOutputType | null
    _max: RankMaxAggregateOutputType | null
  }

  type GetRankGroupByPayload<T extends rankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankGroupByOutputType[P]>
            : GetScalarType<T[P], RankGroupByOutputType[P]>
        }
      >
    >


  export type rankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rankpoint?: boolean
    rank?: boolean
    tier?: boolean
    win?: boolean
    draw?: boolean
    lose?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rank"]>


  export type rankSelectScalar = {
    id?: boolean
    user_id?: boolean
    rankpoint?: boolean
    rank?: boolean
    tier?: boolean
    win?: boolean
    draw?: boolean
    lose?: boolean
  }

  export type rankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $rankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rank"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      rankpoint: number
      rank: number
      tier: string
      win: number
      draw: number
      lose: number
    }, ExtArgs["result"]["rank"]>
    composites: {}
  }

  type rankGetPayload<S extends boolean | null | undefined | rankDefaultArgs> = $Result.GetResult<Prisma.$rankPayload, S>

  type rankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rankFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RankCountAggregateInputType | true
    }

  export interface rankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rank'], meta: { name: 'rank' } }
    /**
     * Find zero or one Rank that matches the filter.
     * @param {rankFindUniqueArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rankFindUniqueArgs>(args: SelectSubset<T, rankFindUniqueArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rank that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rankFindUniqueOrThrowArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rankFindUniqueOrThrowArgs>(args: SelectSubset<T, rankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rankFindFirstArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rankFindFirstArgs>(args?: SelectSubset<T, rankFindFirstArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rankFindFirstOrThrowArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rankFindFirstOrThrowArgs>(args?: SelectSubset<T, rankFindFirstOrThrowArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ranks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ranks
     * const ranks = await prisma.rank.findMany()
     * 
     * // Get first 10 Ranks
     * const ranks = await prisma.rank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rankWithIdOnly = await prisma.rank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rankFindManyArgs>(args?: SelectSubset<T, rankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rank.
     * @param {rankCreateArgs} args - Arguments to create a Rank.
     * @example
     * // Create one Rank
     * const Rank = await prisma.rank.create({
     *   data: {
     *     // ... data to create a Rank
     *   }
     * })
     * 
     */
    create<T extends rankCreateArgs>(args: SelectSubset<T, rankCreateArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ranks.
     * @param {rankCreateManyArgs} args - Arguments to create many Ranks.
     * @example
     * // Create many Ranks
     * const rank = await prisma.rank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rankCreateManyArgs>(args?: SelectSubset<T, rankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rank.
     * @param {rankDeleteArgs} args - Arguments to delete one Rank.
     * @example
     * // Delete one Rank
     * const Rank = await prisma.rank.delete({
     *   where: {
     *     // ... filter to delete one Rank
     *   }
     * })
     * 
     */
    delete<T extends rankDeleteArgs>(args: SelectSubset<T, rankDeleteArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rank.
     * @param {rankUpdateArgs} args - Arguments to update one Rank.
     * @example
     * // Update one Rank
     * const rank = await prisma.rank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rankUpdateArgs>(args: SelectSubset<T, rankUpdateArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ranks.
     * @param {rankDeleteManyArgs} args - Arguments to filter Ranks to delete.
     * @example
     * // Delete a few Ranks
     * const { count } = await prisma.rank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rankDeleteManyArgs>(args?: SelectSubset<T, rankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ranks
     * const rank = await prisma.rank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rankUpdateManyArgs>(args: SelectSubset<T, rankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rank.
     * @param {rankUpsertArgs} args - Arguments to update or create a Rank.
     * @example
     * // Update or create a Rank
     * const rank = await prisma.rank.upsert({
     *   create: {
     *     // ... data to create a Rank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rank we want to update
     *   }
     * })
     */
    upsert<T extends rankUpsertArgs>(args: SelectSubset<T, rankUpsertArgs<ExtArgs>>): Prisma__rankClient<$Result.GetResult<Prisma.$rankPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rankCountArgs} args - Arguments to filter Ranks to count.
     * @example
     * // Count the number of Ranks
     * const count = await prisma.rank.count({
     *   where: {
     *     // ... the filter for the Ranks we want to count
     *   }
     * })
    **/
    count<T extends rankCountArgs>(
      args?: Subset<T, rankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RankAggregateArgs>(args: Subset<T, RankAggregateArgs>): Prisma.PrismaPromise<GetRankAggregateType<T>>

    /**
     * Group by Rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rankGroupByArgs} args - Group by arguments.
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
      T extends rankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rankGroupByArgs['orderBy'] }
        : { orderBy?: rankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rank model
   */
  readonly fields: rankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the rank model
   */ 
  interface rankFieldRefs {
    readonly id: FieldRef<"rank", 'Int'>
    readonly user_id: FieldRef<"rank", 'Int'>
    readonly rankpoint: FieldRef<"rank", 'Int'>
    readonly rank: FieldRef<"rank", 'Int'>
    readonly tier: FieldRef<"rank", 'String'>
    readonly win: FieldRef<"rank", 'Int'>
    readonly draw: FieldRef<"rank", 'Int'>
    readonly lose: FieldRef<"rank", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rank findUnique
   */
  export type rankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * Filter, which rank to fetch.
     */
    where: rankWhereUniqueInput
  }

  /**
   * rank findUniqueOrThrow
   */
  export type rankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * Filter, which rank to fetch.
     */
    where: rankWhereUniqueInput
  }

  /**
   * rank findFirst
   */
  export type rankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * Filter, which rank to fetch.
     */
    where?: rankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranks to fetch.
     */
    orderBy?: rankOrderByWithRelationInput | rankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ranks.
     */
    cursor?: rankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ranks.
     */
    distinct?: RankScalarFieldEnum | RankScalarFieldEnum[]
  }

  /**
   * rank findFirstOrThrow
   */
  export type rankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * Filter, which rank to fetch.
     */
    where?: rankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranks to fetch.
     */
    orderBy?: rankOrderByWithRelationInput | rankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ranks.
     */
    cursor?: rankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ranks.
     */
    distinct?: RankScalarFieldEnum | RankScalarFieldEnum[]
  }

  /**
   * rank findMany
   */
  export type rankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * Filter, which ranks to fetch.
     */
    where?: rankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranks to fetch.
     */
    orderBy?: rankOrderByWithRelationInput | rankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ranks.
     */
    cursor?: rankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranks.
     */
    skip?: number
    distinct?: RankScalarFieldEnum | RankScalarFieldEnum[]
  }

  /**
   * rank create
   */
  export type rankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * The data needed to create a rank.
     */
    data: XOR<rankCreateInput, rankUncheckedCreateInput>
  }

  /**
   * rank createMany
   */
  export type rankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ranks.
     */
    data: rankCreateManyInput | rankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rank update
   */
  export type rankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * The data needed to update a rank.
     */
    data: XOR<rankUpdateInput, rankUncheckedUpdateInput>
    /**
     * Choose, which rank to update.
     */
    where: rankWhereUniqueInput
  }

  /**
   * rank updateMany
   */
  export type rankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ranks.
     */
    data: XOR<rankUpdateManyMutationInput, rankUncheckedUpdateManyInput>
    /**
     * Filter which ranks to update
     */
    where?: rankWhereInput
  }

  /**
   * rank upsert
   */
  export type rankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * The filter to search for the rank to update in case it exists.
     */
    where: rankWhereUniqueInput
    /**
     * In case the rank found by the `where` argument doesn't exist, create a new rank with this data.
     */
    create: XOR<rankCreateInput, rankUncheckedCreateInput>
    /**
     * In case the rank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rankUpdateInput, rankUncheckedUpdateInput>
  }

  /**
   * rank delete
   */
  export type rankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
    /**
     * Filter which rank to delete.
     */
    where: rankWhereUniqueInput
  }

  /**
   * rank deleteMany
   */
  export type rankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ranks to delete
     */
    where?: rankWhereInput
  }

  /**
   * rank without action
   */
  export type rankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rank
     */
    select?: rankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rankInclude<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
    count: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
    count: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
    count: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
    count: number | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    user_id: number
    player_id: number
    count: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
    count?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
    count?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
    count?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
    count?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
    count?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    user_id: number
    player_id: number
    count: number
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    player_id?: boolean
    count?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>


  export type inventorySelectScalar = {
    id?: boolean
    user_id?: boolean
    player_id?: boolean
    count?: boolean
  }

  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      player_id: number
      count: number
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
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
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the inventory model
   */ 
  interface inventoryFieldRefs {
    readonly id: FieldRef<"inventory", 'Int'>
    readonly user_id: FieldRef<"inventory", 'Int'>
    readonly player_id: FieldRef<"inventory", 'Int'>
    readonly count: FieldRef<"inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model player_deck
   */

  export type AggregatePlayer_deck = {
    _count: Player_deckCountAggregateOutputType | null
    _avg: Player_deckAvgAggregateOutputType | null
    _sum: Player_deckSumAggregateOutputType | null
    _min: Player_deckMinAggregateOutputType | null
    _max: Player_deckMaxAggregateOutputType | null
  }

  export type Player_deckAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
  }

  export type Player_deckSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
  }

  export type Player_deckMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
  }

  export type Player_deckMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    player_id: number | null
  }

  export type Player_deckCountAggregateOutputType = {
    id: number
    user_id: number
    player_id: number
    _all: number
  }


  export type Player_deckAvgAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
  }

  export type Player_deckSumAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
  }

  export type Player_deckMinAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
  }

  export type Player_deckMaxAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
  }

  export type Player_deckCountAggregateInputType = {
    id?: true
    user_id?: true
    player_id?: true
    _all?: true
  }

  export type Player_deckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_deck to aggregate.
     */
    where?: player_deckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_decks to fetch.
     */
    orderBy?: player_deckOrderByWithRelationInput | player_deckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: player_deckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned player_decks
    **/
    _count?: true | Player_deckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Player_deckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Player_deckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Player_deckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Player_deckMaxAggregateInputType
  }

  export type GetPlayer_deckAggregateType<T extends Player_deckAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer_deck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer_deck[P]>
      : GetScalarType<T[P], AggregatePlayer_deck[P]>
  }




  export type player_deckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_deckWhereInput
    orderBy?: player_deckOrderByWithAggregationInput | player_deckOrderByWithAggregationInput[]
    by: Player_deckScalarFieldEnum[] | Player_deckScalarFieldEnum
    having?: player_deckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Player_deckCountAggregateInputType | true
    _avg?: Player_deckAvgAggregateInputType
    _sum?: Player_deckSumAggregateInputType
    _min?: Player_deckMinAggregateInputType
    _max?: Player_deckMaxAggregateInputType
  }

  export type Player_deckGroupByOutputType = {
    id: number
    user_id: number
    player_id: number
    _count: Player_deckCountAggregateOutputType | null
    _avg: Player_deckAvgAggregateOutputType | null
    _sum: Player_deckSumAggregateOutputType | null
    _min: Player_deckMinAggregateOutputType | null
    _max: Player_deckMaxAggregateOutputType | null
  }

  type GetPlayer_deckGroupByPayload<T extends player_deckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Player_deckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Player_deckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Player_deckGroupByOutputType[P]>
            : GetScalarType<T[P], Player_deckGroupByOutputType[P]>
        }
      >
    >


  export type player_deckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    player_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player_deck"]>


  export type player_deckSelectScalar = {
    id?: boolean
    user_id?: boolean
    player_id?: boolean
  }

  export type player_deckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $player_deckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player_deck"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      player_id: number
    }, ExtArgs["result"]["player_deck"]>
    composites: {}
  }

  type player_deckGetPayload<S extends boolean | null | undefined | player_deckDefaultArgs> = $Result.GetResult<Prisma.$player_deckPayload, S>

  type player_deckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<player_deckFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Player_deckCountAggregateInputType | true
    }

  export interface player_deckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player_deck'], meta: { name: 'player_deck' } }
    /**
     * Find zero or one Player_deck that matches the filter.
     * @param {player_deckFindUniqueArgs} args - Arguments to find a Player_deck
     * @example
     * // Get one Player_deck
     * const player_deck = await prisma.player_deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends player_deckFindUniqueArgs>(args: SelectSubset<T, player_deckFindUniqueArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Player_deck that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {player_deckFindUniqueOrThrowArgs} args - Arguments to find a Player_deck
     * @example
     * // Get one Player_deck
     * const player_deck = await prisma.player_deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends player_deckFindUniqueOrThrowArgs>(args: SelectSubset<T, player_deckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Player_deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_deckFindFirstArgs} args - Arguments to find a Player_deck
     * @example
     * // Get one Player_deck
     * const player_deck = await prisma.player_deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends player_deckFindFirstArgs>(args?: SelectSubset<T, player_deckFindFirstArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Player_deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_deckFindFirstOrThrowArgs} args - Arguments to find a Player_deck
     * @example
     * // Get one Player_deck
     * const player_deck = await prisma.player_deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends player_deckFindFirstOrThrowArgs>(args?: SelectSubset<T, player_deckFindFirstOrThrowArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Player_decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_deckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Player_decks
     * const player_decks = await prisma.player_deck.findMany()
     * 
     * // Get first 10 Player_decks
     * const player_decks = await prisma.player_deck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const player_deckWithIdOnly = await prisma.player_deck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends player_deckFindManyArgs>(args?: SelectSubset<T, player_deckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Player_deck.
     * @param {player_deckCreateArgs} args - Arguments to create a Player_deck.
     * @example
     * // Create one Player_deck
     * const Player_deck = await prisma.player_deck.create({
     *   data: {
     *     // ... data to create a Player_deck
     *   }
     * })
     * 
     */
    create<T extends player_deckCreateArgs>(args: SelectSubset<T, player_deckCreateArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Player_decks.
     * @param {player_deckCreateManyArgs} args - Arguments to create many Player_decks.
     * @example
     * // Create many Player_decks
     * const player_deck = await prisma.player_deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends player_deckCreateManyArgs>(args?: SelectSubset<T, player_deckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player_deck.
     * @param {player_deckDeleteArgs} args - Arguments to delete one Player_deck.
     * @example
     * // Delete one Player_deck
     * const Player_deck = await prisma.player_deck.delete({
     *   where: {
     *     // ... filter to delete one Player_deck
     *   }
     * })
     * 
     */
    delete<T extends player_deckDeleteArgs>(args: SelectSubset<T, player_deckDeleteArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Player_deck.
     * @param {player_deckUpdateArgs} args - Arguments to update one Player_deck.
     * @example
     * // Update one Player_deck
     * const player_deck = await prisma.player_deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends player_deckUpdateArgs>(args: SelectSubset<T, player_deckUpdateArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Player_decks.
     * @param {player_deckDeleteManyArgs} args - Arguments to filter Player_decks to delete.
     * @example
     * // Delete a few Player_decks
     * const { count } = await prisma.player_deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends player_deckDeleteManyArgs>(args?: SelectSubset<T, player_deckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_deckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Player_decks
     * const player_deck = await prisma.player_deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends player_deckUpdateManyArgs>(args: SelectSubset<T, player_deckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player_deck.
     * @param {player_deckUpsertArgs} args - Arguments to update or create a Player_deck.
     * @example
     * // Update or create a Player_deck
     * const player_deck = await prisma.player_deck.upsert({
     *   create: {
     *     // ... data to create a Player_deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player_deck we want to update
     *   }
     * })
     */
    upsert<T extends player_deckUpsertArgs>(args: SelectSubset<T, player_deckUpsertArgs<ExtArgs>>): Prisma__player_deckClient<$Result.GetResult<Prisma.$player_deckPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Player_decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_deckCountArgs} args - Arguments to filter Player_decks to count.
     * @example
     * // Count the number of Player_decks
     * const count = await prisma.player_deck.count({
     *   where: {
     *     // ... the filter for the Player_decks we want to count
     *   }
     * })
    **/
    count<T extends player_deckCountArgs>(
      args?: Subset<T, player_deckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Player_deckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player_deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_deckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Player_deckAggregateArgs>(args: Subset<T, Player_deckAggregateArgs>): Prisma.PrismaPromise<GetPlayer_deckAggregateType<T>>

    /**
     * Group by Player_deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_deckGroupByArgs} args - Group by arguments.
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
      T extends player_deckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: player_deckGroupByArgs['orderBy'] }
        : { orderBy?: player_deckGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, player_deckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_deckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player_deck model
   */
  readonly fields: player_deckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player_deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__player_deckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the player_deck model
   */ 
  interface player_deckFieldRefs {
    readonly id: FieldRef<"player_deck", 'Int'>
    readonly user_id: FieldRef<"player_deck", 'Int'>
    readonly player_id: FieldRef<"player_deck", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * player_deck findUnique
   */
  export type player_deckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * Filter, which player_deck to fetch.
     */
    where: player_deckWhereUniqueInput
  }

  /**
   * player_deck findUniqueOrThrow
   */
  export type player_deckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * Filter, which player_deck to fetch.
     */
    where: player_deckWhereUniqueInput
  }

  /**
   * player_deck findFirst
   */
  export type player_deckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * Filter, which player_deck to fetch.
     */
    where?: player_deckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_decks to fetch.
     */
    orderBy?: player_deckOrderByWithRelationInput | player_deckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_decks.
     */
    cursor?: player_deckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_decks.
     */
    distinct?: Player_deckScalarFieldEnum | Player_deckScalarFieldEnum[]
  }

  /**
   * player_deck findFirstOrThrow
   */
  export type player_deckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * Filter, which player_deck to fetch.
     */
    where?: player_deckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_decks to fetch.
     */
    orderBy?: player_deckOrderByWithRelationInput | player_deckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_decks.
     */
    cursor?: player_deckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_decks.
     */
    distinct?: Player_deckScalarFieldEnum | Player_deckScalarFieldEnum[]
  }

  /**
   * player_deck findMany
   */
  export type player_deckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * Filter, which player_decks to fetch.
     */
    where?: player_deckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_decks to fetch.
     */
    orderBy?: player_deckOrderByWithRelationInput | player_deckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing player_decks.
     */
    cursor?: player_deckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_decks.
     */
    skip?: number
    distinct?: Player_deckScalarFieldEnum | Player_deckScalarFieldEnum[]
  }

  /**
   * player_deck create
   */
  export type player_deckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * The data needed to create a player_deck.
     */
    data: XOR<player_deckCreateInput, player_deckUncheckedCreateInput>
  }

  /**
   * player_deck createMany
   */
  export type player_deckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many player_decks.
     */
    data: player_deckCreateManyInput | player_deckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player_deck update
   */
  export type player_deckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * The data needed to update a player_deck.
     */
    data: XOR<player_deckUpdateInput, player_deckUncheckedUpdateInput>
    /**
     * Choose, which player_deck to update.
     */
    where: player_deckWhereUniqueInput
  }

  /**
   * player_deck updateMany
   */
  export type player_deckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update player_decks.
     */
    data: XOR<player_deckUpdateManyMutationInput, player_deckUncheckedUpdateManyInput>
    /**
     * Filter which player_decks to update
     */
    where?: player_deckWhereInput
  }

  /**
   * player_deck upsert
   */
  export type player_deckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * The filter to search for the player_deck to update in case it exists.
     */
    where: player_deckWhereUniqueInput
    /**
     * In case the player_deck found by the `where` argument doesn't exist, create a new player_deck with this data.
     */
    create: XOR<player_deckCreateInput, player_deckUncheckedCreateInput>
    /**
     * In case the player_deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<player_deckUpdateInput, player_deckUncheckedUpdateInput>
  }

  /**
   * player_deck delete
   */
  export type player_deckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
    /**
     * Filter which player_deck to delete.
     */
    where: player_deckWhereUniqueInput
  }

  /**
   * player_deck deleteMany
   */
  export type player_deckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_decks to delete
     */
    where?: player_deckWhereInput
  }

  /**
   * player_deck without action
   */
  export type player_deckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_deck
     */
    select?: player_deckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_deckInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    account: 'account',
    password: 'password',
    name: 'name',
    cash: 'cash',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RankScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    rankpoint: 'rankpoint',
    rank: 'rank',
    tier: 'tier',
    win: 'win',
    draw: 'draw',
    lose: 'lose'
  };

  export type RankScalarFieldEnum = (typeof RankScalarFieldEnum)[keyof typeof RankScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    player_id: 'player_id',
    count: 'count'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const Player_deckScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    player_id: 'player_id'
  };

  export type Player_deckScalarFieldEnum = (typeof Player_deckScalarFieldEnum)[keyof typeof Player_deckScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    account?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    cash?: IntFilter<"users"> | number
    created_at?: DateTimeFilter<"users"> | Date | string
    rank?: XOR<RankNullableRelationFilter, rankWhereInput> | null
    player_deck?: XOR<Player_deckNullableRelationFilter, player_deckWhereInput> | null
    inventory?: InventoryListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    account?: SortOrder
    password?: SortOrder
    name?: SortOrder
    cash?: SortOrder
    created_at?: SortOrder
    rank?: rankOrderByWithRelationInput
    player_deck?: player_deckOrderByWithRelationInput
    inventory?: inventoryOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    cash?: IntFilter<"users"> | number
    created_at?: DateTimeFilter<"users"> | Date | string
    rank?: XOR<RankNullableRelationFilter, rankWhereInput> | null
    player_deck?: XOR<Player_deckNullableRelationFilter, player_deckWhereInput> | null
    inventory?: InventoryListRelationFilter
  }, "id" | "account">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    account?: SortOrder
    password?: SortOrder
    name?: SortOrder
    cash?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    account?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    cash?: IntWithAggregatesFilter<"users"> | number
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type rankWhereInput = {
    AND?: rankWhereInput | rankWhereInput[]
    OR?: rankWhereInput[]
    NOT?: rankWhereInput | rankWhereInput[]
    id?: IntFilter<"rank"> | number
    user_id?: IntFilter<"rank"> | number
    rankpoint?: IntFilter<"rank"> | number
    rank?: IntFilter<"rank"> | number
    tier?: StringFilter<"rank"> | string
    win?: IntFilter<"rank"> | number
    draw?: IntFilter<"rank"> | number
    lose?: IntFilter<"rank"> | number
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type rankOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rankpoint?: SortOrder
    rank?: SortOrder
    tier?: SortOrder
    win?: SortOrder
    draw?: SortOrder
    lose?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type rankWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: rankWhereInput | rankWhereInput[]
    OR?: rankWhereInput[]
    NOT?: rankWhereInput | rankWhereInput[]
    rankpoint?: IntFilter<"rank"> | number
    rank?: IntFilter<"rank"> | number
    tier?: StringFilter<"rank"> | string
    win?: IntFilter<"rank"> | number
    draw?: IntFilter<"rank"> | number
    lose?: IntFilter<"rank"> | number
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type rankOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rankpoint?: SortOrder
    rank?: SortOrder
    tier?: SortOrder
    win?: SortOrder
    draw?: SortOrder
    lose?: SortOrder
    _count?: rankCountOrderByAggregateInput
    _avg?: rankAvgOrderByAggregateInput
    _max?: rankMaxOrderByAggregateInput
    _min?: rankMinOrderByAggregateInput
    _sum?: rankSumOrderByAggregateInput
  }

  export type rankScalarWhereWithAggregatesInput = {
    AND?: rankScalarWhereWithAggregatesInput | rankScalarWhereWithAggregatesInput[]
    OR?: rankScalarWhereWithAggregatesInput[]
    NOT?: rankScalarWhereWithAggregatesInput | rankScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rank"> | number
    user_id?: IntWithAggregatesFilter<"rank"> | number
    rankpoint?: IntWithAggregatesFilter<"rank"> | number
    rank?: IntWithAggregatesFilter<"rank"> | number
    tier?: StringWithAggregatesFilter<"rank"> | string
    win?: IntWithAggregatesFilter<"rank"> | number
    draw?: IntWithAggregatesFilter<"rank"> | number
    lose?: IntWithAggregatesFilter<"rank"> | number
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    id?: IntFilter<"inventory"> | number
    user_id?: IntFilter<"inventory"> | number
    player_id?: IntFilter<"inventory"> | number
    count?: IntFilter<"inventory"> | number
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    user_id?: IntFilter<"inventory"> | number
    player_id?: IntFilter<"inventory"> | number
    count?: IntFilter<"inventory"> | number
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id">

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventory"> | number
    user_id?: IntWithAggregatesFilter<"inventory"> | number
    player_id?: IntWithAggregatesFilter<"inventory"> | number
    count?: IntWithAggregatesFilter<"inventory"> | number
  }

  export type player_deckWhereInput = {
    AND?: player_deckWhereInput | player_deckWhereInput[]
    OR?: player_deckWhereInput[]
    NOT?: player_deckWhereInput | player_deckWhereInput[]
    id?: IntFilter<"player_deck"> | number
    user_id?: IntFilter<"player_deck"> | number
    player_id?: IntFilter<"player_deck"> | number
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type player_deckOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type player_deckWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: player_deckWhereInput | player_deckWhereInput[]
    OR?: player_deckWhereInput[]
    NOT?: player_deckWhereInput | player_deckWhereInput[]
    player_id?: IntFilter<"player_deck"> | number
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type player_deckOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    _count?: player_deckCountOrderByAggregateInput
    _avg?: player_deckAvgOrderByAggregateInput
    _max?: player_deckMaxOrderByAggregateInput
    _min?: player_deckMinOrderByAggregateInput
    _sum?: player_deckSumOrderByAggregateInput
  }

  export type player_deckScalarWhereWithAggregatesInput = {
    AND?: player_deckScalarWhereWithAggregatesInput | player_deckScalarWhereWithAggregatesInput[]
    OR?: player_deckScalarWhereWithAggregatesInput[]
    NOT?: player_deckScalarWhereWithAggregatesInput | player_deckScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"player_deck"> | number
    user_id?: IntWithAggregatesFilter<"player_deck"> | number
    player_id?: IntWithAggregatesFilter<"player_deck"> | number
  }

  export type usersCreateInput = {
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    rank?: rankCreateNestedOneWithoutUsersInput
    player_deck?: player_deckCreateNestedOneWithoutUsersInput
    inventory?: inventoryCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    rank?: rankUncheckedCreateNestedOneWithoutUsersInput
    player_deck?: player_deckUncheckedCreateNestedOneWithoutUsersInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: rankUpdateOneWithoutUsersNestedInput
    player_deck?: player_deckUpdateOneWithoutUsersNestedInput
    inventory?: inventoryUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: rankUncheckedUpdateOneWithoutUsersNestedInput
    player_deck?: player_deckUncheckedUpdateOneWithoutUsersNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
  }

  export type usersUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rankCreateInput = {
    rankpoint: number
    rank: number
    tier: string
    win: number
    draw: number
    lose: number
    users: usersCreateNestedOneWithoutRankInput
  }

  export type rankUncheckedCreateInput = {
    id?: number
    user_id: number
    rankpoint: number
    rank: number
    tier: string
    win: number
    draw: number
    lose: number
  }

  export type rankUpdateInput = {
    rankpoint?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    draw?: IntFieldUpdateOperationsInput | number
    lose?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutRankNestedInput
  }

  export type rankUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rankpoint?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    draw?: IntFieldUpdateOperationsInput | number
    lose?: IntFieldUpdateOperationsInput | number
  }

  export type rankCreateManyInput = {
    id?: number
    user_id: number
    rankpoint: number
    rank: number
    tier: string
    win: number
    draw: number
    lose: number
  }

  export type rankUpdateManyMutationInput = {
    rankpoint?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    draw?: IntFieldUpdateOperationsInput | number
    lose?: IntFieldUpdateOperationsInput | number
  }

  export type rankUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rankpoint?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    draw?: IntFieldUpdateOperationsInput | number
    lose?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryCreateInput = {
    player_id: number
    count: number
    users: usersCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    id?: number
    user_id: number
    player_id: number
    count: number
  }

  export type inventoryUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryCreateManyInput = {
    id?: number
    user_id: number
    player_id: number
    count: number
  }

  export type inventoryUpdateManyMutationInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type player_deckCreateInput = {
    player_id: number
    users: usersCreateNestedOneWithoutPlayer_deckInput
  }

  export type player_deckUncheckedCreateInput = {
    id?: number
    user_id: number
    player_id: number
  }

  export type player_deckUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutPlayer_deckNestedInput
  }

  export type player_deckUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_deckCreateManyInput = {
    id?: number
    user_id: number
    player_id: number
  }

  export type player_deckUpdateManyMutationInput = {
    player_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_deckUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type RankNullableRelationFilter = {
    is?: rankWhereInput | null
    isNot?: rankWhereInput | null
  }

  export type Player_deckNullableRelationFilter = {
    is?: player_deckWhereInput | null
    isNot?: player_deckWhereInput | null
  }

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput
    some?: inventoryWhereInput
    none?: inventoryWhereInput
  }

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    account?: SortOrder
    password?: SortOrder
    name?: SortOrder
    cash?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    cash?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    account?: SortOrder
    password?: SortOrder
    name?: SortOrder
    cash?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    account?: SortOrder
    password?: SortOrder
    name?: SortOrder
    cash?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    cash?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type rankCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rankpoint?: SortOrder
    rank?: SortOrder
    tier?: SortOrder
    win?: SortOrder
    draw?: SortOrder
    lose?: SortOrder
  }

  export type rankAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rankpoint?: SortOrder
    rank?: SortOrder
    win?: SortOrder
    draw?: SortOrder
    lose?: SortOrder
  }

  export type rankMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rankpoint?: SortOrder
    rank?: SortOrder
    tier?: SortOrder
    win?: SortOrder
    draw?: SortOrder
    lose?: SortOrder
  }

  export type rankMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rankpoint?: SortOrder
    rank?: SortOrder
    tier?: SortOrder
    win?: SortOrder
    draw?: SortOrder
    lose?: SortOrder
  }

  export type rankSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rankpoint?: SortOrder
    rank?: SortOrder
    win?: SortOrder
    draw?: SortOrder
    lose?: SortOrder
  }

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
  }

  export type player_deckCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
  }

  export type player_deckAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
  }

  export type player_deckMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
  }

  export type player_deckMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
  }

  export type player_deckSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
  }

  export type rankCreateNestedOneWithoutUsersInput = {
    create?: XOR<rankCreateWithoutUsersInput, rankUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rankCreateOrConnectWithoutUsersInput
    connect?: rankWhereUniqueInput
  }

  export type player_deckCreateNestedOneWithoutUsersInput = {
    create?: XOR<player_deckCreateWithoutUsersInput, player_deckUncheckedCreateWithoutUsersInput>
    connectOrCreate?: player_deckCreateOrConnectWithoutUsersInput
    connect?: player_deckWhereUniqueInput
  }

  export type inventoryCreateNestedManyWithoutUsersInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type rankUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<rankCreateWithoutUsersInput, rankUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rankCreateOrConnectWithoutUsersInput
    connect?: rankWhereUniqueInput
  }

  export type player_deckUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<player_deckCreateWithoutUsersInput, player_deckUncheckedCreateWithoutUsersInput>
    connectOrCreate?: player_deckCreateOrConnectWithoutUsersInput
    connect?: player_deckWhereUniqueInput
  }

  export type inventoryUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type rankUpdateOneWithoutUsersNestedInput = {
    create?: XOR<rankCreateWithoutUsersInput, rankUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rankCreateOrConnectWithoutUsersInput
    upsert?: rankUpsertWithoutUsersInput
    disconnect?: rankWhereInput | boolean
    delete?: rankWhereInput | boolean
    connect?: rankWhereUniqueInput
    update?: XOR<XOR<rankUpdateToOneWithWhereWithoutUsersInput, rankUpdateWithoutUsersInput>, rankUncheckedUpdateWithoutUsersInput>
  }

  export type player_deckUpdateOneWithoutUsersNestedInput = {
    create?: XOR<player_deckCreateWithoutUsersInput, player_deckUncheckedCreateWithoutUsersInput>
    connectOrCreate?: player_deckCreateOrConnectWithoutUsersInput
    upsert?: player_deckUpsertWithoutUsersInput
    disconnect?: player_deckWhereInput | boolean
    delete?: player_deckWhereInput | boolean
    connect?: player_deckWhereUniqueInput
    update?: XOR<XOR<player_deckUpdateToOneWithWhereWithoutUsersInput, player_deckUpdateWithoutUsersInput>, player_deckUncheckedUpdateWithoutUsersInput>
  }

  export type inventoryUpdateManyWithoutUsersNestedInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutUsersInput | inventoryUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutUsersInput | inventoryUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutUsersInput | inventoryUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type rankUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<rankCreateWithoutUsersInput, rankUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rankCreateOrConnectWithoutUsersInput
    upsert?: rankUpsertWithoutUsersInput
    disconnect?: rankWhereInput | boolean
    delete?: rankWhereInput | boolean
    connect?: rankWhereUniqueInput
    update?: XOR<XOR<rankUpdateToOneWithWhereWithoutUsersInput, rankUpdateWithoutUsersInput>, rankUncheckedUpdateWithoutUsersInput>
  }

  export type player_deckUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<player_deckCreateWithoutUsersInput, player_deckUncheckedCreateWithoutUsersInput>
    connectOrCreate?: player_deckCreateOrConnectWithoutUsersInput
    upsert?: player_deckUpsertWithoutUsersInput
    disconnect?: player_deckWhereInput | boolean
    delete?: player_deckWhereInput | boolean
    connect?: player_deckWhereUniqueInput
    update?: XOR<XOR<player_deckUpdateToOneWithWhereWithoutUsersInput, player_deckUpdateWithoutUsersInput>, player_deckUncheckedUpdateWithoutUsersInput>
  }

  export type inventoryUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput> | inventoryCreateWithoutUsersInput[] | inventoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUsersInput | inventoryCreateOrConnectWithoutUsersInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutUsersInput | inventoryUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: inventoryCreateManyUsersInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutUsersInput | inventoryUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutUsersInput | inventoryUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutRankInput = {
    create?: XOR<usersCreateWithoutRankInput, usersUncheckedCreateWithoutRankInput>
    connectOrCreate?: usersCreateOrConnectWithoutRankInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutRankNestedInput = {
    create?: XOR<usersCreateWithoutRankInput, usersUncheckedCreateWithoutRankInput>
    connectOrCreate?: usersCreateOrConnectWithoutRankInput
    upsert?: usersUpsertWithoutRankInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRankInput, usersUpdateWithoutRankInput>, usersUncheckedUpdateWithoutRankInput>
  }

  export type usersCreateNestedOneWithoutInventoryInput = {
    create?: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventoryInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventoryInput
    upsert?: usersUpsertWithoutInventoryInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInventoryInput, usersUpdateWithoutInventoryInput>, usersUncheckedUpdateWithoutInventoryInput>
  }

  export type usersCreateNestedOneWithoutPlayer_deckInput = {
    create?: XOR<usersCreateWithoutPlayer_deckInput, usersUncheckedCreateWithoutPlayer_deckInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlayer_deckInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPlayer_deckNestedInput = {
    create?: XOR<usersCreateWithoutPlayer_deckInput, usersUncheckedCreateWithoutPlayer_deckInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlayer_deckInput
    upsert?: usersUpsertWithoutPlayer_deckInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPlayer_deckInput, usersUpdateWithoutPlayer_deckInput>, usersUncheckedUpdateWithoutPlayer_deckInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type rankCreateWithoutUsersInput = {
    rankpoint: number
    rank: number
    tier: string
    win: number
    draw: number
    lose: number
  }

  export type rankUncheckedCreateWithoutUsersInput = {
    id?: number
    rankpoint: number
    rank: number
    tier: string
    win: number
    draw: number
    lose: number
  }

  export type rankCreateOrConnectWithoutUsersInput = {
    where: rankWhereUniqueInput
    create: XOR<rankCreateWithoutUsersInput, rankUncheckedCreateWithoutUsersInput>
  }

  export type player_deckCreateWithoutUsersInput = {
    player_id: number
  }

  export type player_deckUncheckedCreateWithoutUsersInput = {
    id?: number
    player_id: number
  }

  export type player_deckCreateOrConnectWithoutUsersInput = {
    where: player_deckWhereUniqueInput
    create: XOR<player_deckCreateWithoutUsersInput, player_deckUncheckedCreateWithoutUsersInput>
  }

  export type inventoryCreateWithoutUsersInput = {
    player_id: number
    count: number
  }

  export type inventoryUncheckedCreateWithoutUsersInput = {
    id?: number
    player_id: number
    count: number
  }

  export type inventoryCreateOrConnectWithoutUsersInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput>
  }

  export type inventoryCreateManyUsersInputEnvelope = {
    data: inventoryCreateManyUsersInput | inventoryCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type rankUpsertWithoutUsersInput = {
    update: XOR<rankUpdateWithoutUsersInput, rankUncheckedUpdateWithoutUsersInput>
    create: XOR<rankCreateWithoutUsersInput, rankUncheckedCreateWithoutUsersInput>
    where?: rankWhereInput
  }

  export type rankUpdateToOneWithWhereWithoutUsersInput = {
    where?: rankWhereInput
    data: XOR<rankUpdateWithoutUsersInput, rankUncheckedUpdateWithoutUsersInput>
  }

  export type rankUpdateWithoutUsersInput = {
    rankpoint?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    draw?: IntFieldUpdateOperationsInput | number
    lose?: IntFieldUpdateOperationsInput | number
  }

  export type rankUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    rankpoint?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    draw?: IntFieldUpdateOperationsInput | number
    lose?: IntFieldUpdateOperationsInput | number
  }

  export type player_deckUpsertWithoutUsersInput = {
    update: XOR<player_deckUpdateWithoutUsersInput, player_deckUncheckedUpdateWithoutUsersInput>
    create: XOR<player_deckCreateWithoutUsersInput, player_deckUncheckedCreateWithoutUsersInput>
    where?: player_deckWhereInput
  }

  export type player_deckUpdateToOneWithWhereWithoutUsersInput = {
    where?: player_deckWhereInput
    data: XOR<player_deckUpdateWithoutUsersInput, player_deckUncheckedUpdateWithoutUsersInput>
  }

  export type player_deckUpdateWithoutUsersInput = {
    player_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_deckUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryUpsertWithWhereUniqueWithoutUsersInput = {
    where: inventoryWhereUniqueInput
    update: XOR<inventoryUpdateWithoutUsersInput, inventoryUncheckedUpdateWithoutUsersInput>
    create: XOR<inventoryCreateWithoutUsersInput, inventoryUncheckedCreateWithoutUsersInput>
  }

  export type inventoryUpdateWithWhereUniqueWithoutUsersInput = {
    where: inventoryWhereUniqueInput
    data: XOR<inventoryUpdateWithoutUsersInput, inventoryUncheckedUpdateWithoutUsersInput>
  }

  export type inventoryUpdateManyWithWhereWithoutUsersInput = {
    where: inventoryScalarWhereInput
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutUsersInput>
  }

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
    OR?: inventoryScalarWhereInput[]
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
    id?: IntFilter<"inventory"> | number
    user_id?: IntFilter<"inventory"> | number
    player_id?: IntFilter<"inventory"> | number
    count?: IntFilter<"inventory"> | number
  }

  export type usersCreateWithoutRankInput = {
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    player_deck?: player_deckCreateNestedOneWithoutUsersInput
    inventory?: inventoryCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRankInput = {
    id?: number
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    player_deck?: player_deckUncheckedCreateNestedOneWithoutUsersInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRankInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRankInput, usersUncheckedCreateWithoutRankInput>
  }

  export type usersUpsertWithoutRankInput = {
    update: XOR<usersUpdateWithoutRankInput, usersUncheckedUpdateWithoutRankInput>
    create: XOR<usersCreateWithoutRankInput, usersUncheckedCreateWithoutRankInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRankInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRankInput, usersUncheckedUpdateWithoutRankInput>
  }

  export type usersUpdateWithoutRankInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_deck?: player_deckUpdateOneWithoutUsersNestedInput
    inventory?: inventoryUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRankInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_deck?: player_deckUncheckedUpdateOneWithoutUsersNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutInventoryInput = {
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    rank?: rankCreateNestedOneWithoutUsersInput
    player_deck?: player_deckCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInventoryInput = {
    id?: number
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    rank?: rankUncheckedCreateNestedOneWithoutUsersInput
    player_deck?: player_deckUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInventoryInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
  }

  export type usersUpsertWithoutInventoryInput = {
    update: XOR<usersUpdateWithoutInventoryInput, usersUncheckedUpdateWithoutInventoryInput>
    create: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInventoryInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInventoryInput, usersUncheckedUpdateWithoutInventoryInput>
  }

  export type usersUpdateWithoutInventoryInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: rankUpdateOneWithoutUsersNestedInput
    player_deck?: player_deckUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: rankUncheckedUpdateOneWithoutUsersNestedInput
    player_deck?: player_deckUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutPlayer_deckInput = {
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    rank?: rankCreateNestedOneWithoutUsersInput
    inventory?: inventoryCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPlayer_deckInput = {
    id?: number
    account: string
    password: string
    name: string
    cash: number
    created_at: Date | string
    rank?: rankUncheckedCreateNestedOneWithoutUsersInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPlayer_deckInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPlayer_deckInput, usersUncheckedCreateWithoutPlayer_deckInput>
  }

  export type usersUpsertWithoutPlayer_deckInput = {
    update: XOR<usersUpdateWithoutPlayer_deckInput, usersUncheckedUpdateWithoutPlayer_deckInput>
    create: XOR<usersCreateWithoutPlayer_deckInput, usersUncheckedCreateWithoutPlayer_deckInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPlayer_deckInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPlayer_deckInput, usersUncheckedUpdateWithoutPlayer_deckInput>
  }

  export type usersUpdateWithoutPlayer_deckInput = {
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: rankUpdateOneWithoutUsersNestedInput
    inventory?: inventoryUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPlayer_deckInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: rankUncheckedUpdateOneWithoutUsersNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type inventoryCreateManyUsersInput = {
    id?: number
    player_id: number
    count: number
  }

  export type inventoryUpdateWithoutUsersInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rankDefaultArgs instead
     */
    export type rankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rankDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inventoryDefaultArgs instead
     */
    export type inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use player_deckDefaultArgs instead
     */
    export type player_deckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = player_deckDefaultArgs<ExtArgs>

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