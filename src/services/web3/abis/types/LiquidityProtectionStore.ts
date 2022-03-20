/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LiquidityProtectionStoreInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "addLockedBalance(address,uint256,uint256)": FunctionFragment;
    "addPoolToWhitelist(address)": FunctionFragment;
    "addProtectedLiquidity(address,address,address,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "decSystemBalance(address,uint256)": FunctionFragment;
    "incSystemBalance(address,uint256)": FunctionFragment;
    "isPoolWhitelisted(address)": FunctionFragment;
    "lockedBalance(address,uint256)": FunctionFragment;
    "lockedBalanceCount(address)": FunctionFragment;
    "lockedBalanceRange(address,uint256,uint256)": FunctionFragment;
    "newOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "protectedLiquidity(uint256)": FunctionFragment;
    "protectedLiquidityCount(address)": FunctionFragment;
    "protectedLiquidityId(address,uint256)": FunctionFragment;
    "protectedLiquidityIds(address)": FunctionFragment;
    "removeLockedBalance(address,uint256)": FunctionFragment;
    "removePoolFromWhitelist(address)": FunctionFragment;
    "removeProtectedLiquidity(uint256)": FunctionFragment;
    "systemBalance(address)": FunctionFragment;
    "totalProtectedPoolAmount(address)": FunctionFragment;
    "totalProtectedReserveAmount(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateProtectedLiquidityAmounts(uint256,uint256,uint256)": FunctionFragment;
    "whitelistedPool(uint256)": FunctionFragment;
    "whitelistedPoolCount()": FunctionFragment;
    "whitelistedPools()": FunctionFragment;
    "withdrawTokens(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLockedBalance",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addPoolToWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addProtectedLiquidity",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decSystemBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "incSystemBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPoolWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedBalanceCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedBalanceRange",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "newOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protectedLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protectedLiquidityCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "protectedLiquidityId",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protectedLiquidityIds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLockedBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removePoolFromWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeProtectedLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "systemBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalProtectedPoolAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalProtectedReserveAmount",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProtectedLiquidityAmounts",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedPoolCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLockedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPoolToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addProtectedLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decSystemBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incSystemBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPoolWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedBalanceCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedBalanceRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protectedLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protectedLiquidityCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protectedLiquidityId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protectedLiquidityIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLockedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePoolFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeProtectedLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "systemBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalProtectedPoolAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalProtectedReserveAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProtectedLiquidityAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedPoolCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {
    "BalanceLocked(address,uint256,uint256)": EventFragment;
    "BalanceUnlocked(address,uint256)": EventFragment;
    "OwnerUpdate(address,address)": EventFragment;
    "PoolWhitelistUpdated(address,bool)": EventFragment;
    "ProtectionAdded(address,address,address,uint256,uint256)": EventFragment;
    "ProtectionRemoved(address,address,address,uint256,uint256)": EventFragment;
    "ProtectionUpdated(address,uint256,uint256,uint256,uint256)": EventFragment;
    "SystemBalanceUpdated(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BalanceLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BalanceUnlocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolWhitelistUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtectionAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtectionRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtectionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SystemBalanceUpdated"): EventFragment;
}

export type BalanceLockedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { _provider: string; _amount: BigNumber; _expirationTime: BigNumber }
>;

export type BalanceLockedEventFilter = TypedEventFilter<BalanceLockedEvent>;

export type BalanceUnlockedEvent = TypedEvent<
  [string, BigNumber],
  { _provider: string; _amount: BigNumber }
>;

export type BalanceUnlockedEventFilter = TypedEventFilter<BalanceUnlockedEvent>;

export type OwnerUpdateEvent = TypedEvent<
  [string, string],
  { _prevOwner: string; _newOwner: string }
>;

export type OwnerUpdateEventFilter = TypedEventFilter<OwnerUpdateEvent>;

export type PoolWhitelistUpdatedEvent = TypedEvent<
  [string, boolean],
  { _poolAnchor: string; _added: boolean }
>;

export type PoolWhitelistUpdatedEventFilter =
  TypedEventFilter<PoolWhitelistUpdatedEvent>;

export type ProtectionAddedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    _provider: string;
    _poolToken: string;
    _reserveToken: string;
    _poolAmount: BigNumber;
    _reserveAmount: BigNumber;
  }
>;

export type ProtectionAddedEventFilter = TypedEventFilter<ProtectionAddedEvent>;

export type ProtectionRemovedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    _provider: string;
    _poolToken: string;
    _reserveToken: string;
    _poolAmount: BigNumber;
    _reserveAmount: BigNumber;
  }
>;

export type ProtectionRemovedEventFilter =
  TypedEventFilter<ProtectionRemovedEvent>;

export type ProtectionUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    _provider: string;
    _prevPoolAmount: BigNumber;
    _prevReserveAmount: BigNumber;
    _newPoolAmount: BigNumber;
    _newReserveAmount: BigNumber;
  }
>;

export type ProtectionUpdatedEventFilter =
  TypedEventFilter<ProtectionUpdatedEvent>;

export type SystemBalanceUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { _token: string; _prevAmount: BigNumber; _newAmount: BigNumber }
>;

export type SystemBalanceUpdatedEventFilter =
  TypedEventFilter<SystemBalanceUpdatedEvent>;

export interface LiquidityProtectionStore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidityProtectionStoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLockedBalance(
      _provider: string,
      _amount: BigNumberish,
      _expirationTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPoolToWhitelist(
      _poolAnchor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addProtectedLiquidity(
      _provider: string,
      _poolToken: string,
      _reserveToken: string,
      _poolAmount: BigNumberish,
      _reserveAmount: BigNumberish,
      _reserveRateN: BigNumberish,
      _reserveRateD: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    incSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPoolWhitelisted(
      _poolAnchor: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    lockedBalanceCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lockedBalanceRange(
      _provider: string,
      _startIndex: BigNumberish,
      _endIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    newOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    protectedLiquidity(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    protectedLiquidityCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    protectedLiquidityId(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    protectedLiquidityIds(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    removeLockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePoolFromWhitelist(
      _poolAnchor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeProtectedLiquidity(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    systemBalance(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalProtectedPoolAmount(
      _poolToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalProtectedReserveAmount(
      _poolToken: string,
      _reserveToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateProtectedLiquidityAmounts(
      _id: BigNumberish,
      _newPoolAmount: BigNumberish,
      _newReserveAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistedPool(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    whitelistedPoolCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    whitelistedPools(overrides?: CallOverrides): Promise<[string[]]>;

    withdrawTokens(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLockedBalance(
    _provider: string,
    _amount: BigNumberish,
    _expirationTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPoolToWhitelist(
    _poolAnchor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addProtectedLiquidity(
    _provider: string,
    _poolToken: string,
    _reserveToken: string,
    _poolAmount: BigNumberish,
    _reserveAmount: BigNumberish,
    _reserveRateN: BigNumberish,
    _reserveRateD: BigNumberish,
    _timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decSystemBalance(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  incSystemBalance(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPoolWhitelisted(
    _poolAnchor: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lockedBalance(
    _provider: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  lockedBalanceCount(
    _provider: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lockedBalanceRange(
    _provider: string,
    _startIndex: BigNumberish,
    _endIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[]]>;

  newOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  protectedLiquidity(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  protectedLiquidityCount(
    _provider: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  protectedLiquidityId(
    _provider: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  protectedLiquidityIds(
    _provider: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  removeLockedBalance(
    _provider: string,
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePoolFromWhitelist(
    _poolAnchor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeProtectedLiquidity(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  systemBalance(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalProtectedPoolAmount(
    _poolToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalProtectedReserveAmount(
    _poolToken: string,
    _reserveToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateProtectedLiquidityAmounts(
    _id: BigNumberish,
    _newPoolAmount: BigNumberish,
    _newReserveAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistedPool(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  whitelistedPoolCount(overrides?: CallOverrides): Promise<BigNumber>;

  whitelistedPools(overrides?: CallOverrides): Promise<string[]>;

  withdrawTokens(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    addLockedBalance(
      _provider: string,
      _amount: BigNumberish,
      _expirationTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addPoolToWhitelist(
      _poolAnchor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addProtectedLiquidity(
      _provider: string,
      _poolToken: string,
      _reserveToken: string,
      _poolAmount: BigNumberish,
      _reserveAmount: BigNumberish,
      _reserveRateN: BigNumberish,
      _reserveRateD: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    incSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isPoolWhitelisted(
      _poolAnchor: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    lockedBalanceCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedBalanceRange(
      _provider: string,
      _startIndex: BigNumberish,
      _endIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    newOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    protectedLiquidity(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    protectedLiquidityCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protectedLiquidityId(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protectedLiquidityIds(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    removeLockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removePoolFromWhitelist(
      _poolAnchor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeProtectedLiquidity(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    systemBalance(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalProtectedPoolAmount(
      _poolToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalProtectedReserveAmount(
      _poolToken: string,
      _reserveToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProtectedLiquidityAmounts(
      _id: BigNumberish,
      _newPoolAmount: BigNumberish,
      _newReserveAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistedPool(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    whitelistedPoolCount(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistedPools(overrides?: CallOverrides): Promise<string[]>;

    withdrawTokens(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BalanceLocked(address,uint256,uint256)"(
      _provider?: string | null,
      _amount?: null,
      _expirationTime?: null
    ): BalanceLockedEventFilter;
    BalanceLocked(
      _provider?: string | null,
      _amount?: null,
      _expirationTime?: null
    ): BalanceLockedEventFilter;

    "BalanceUnlocked(address,uint256)"(
      _provider?: string | null,
      _amount?: null
    ): BalanceUnlockedEventFilter;
    BalanceUnlocked(
      _provider?: string | null,
      _amount?: null
    ): BalanceUnlockedEventFilter;

    "OwnerUpdate(address,address)"(
      _prevOwner?: string | null,
      _newOwner?: string | null
    ): OwnerUpdateEventFilter;
    OwnerUpdate(
      _prevOwner?: string | null,
      _newOwner?: string | null
    ): OwnerUpdateEventFilter;

    "PoolWhitelistUpdated(address,bool)"(
      _poolAnchor?: string | null,
      _added?: null
    ): PoolWhitelistUpdatedEventFilter;
    PoolWhitelistUpdated(
      _poolAnchor?: string | null,
      _added?: null
    ): PoolWhitelistUpdatedEventFilter;

    "ProtectionAdded(address,address,address,uint256,uint256)"(
      _provider?: string | null,
      _poolToken?: string | null,
      _reserveToken?: string | null,
      _poolAmount?: null,
      _reserveAmount?: null
    ): ProtectionAddedEventFilter;
    ProtectionAdded(
      _provider?: string | null,
      _poolToken?: string | null,
      _reserveToken?: string | null,
      _poolAmount?: null,
      _reserveAmount?: null
    ): ProtectionAddedEventFilter;

    "ProtectionRemoved(address,address,address,uint256,uint256)"(
      _provider?: string | null,
      _poolToken?: string | null,
      _reserveToken?: string | null,
      _poolAmount?: null,
      _reserveAmount?: null
    ): ProtectionRemovedEventFilter;
    ProtectionRemoved(
      _provider?: string | null,
      _poolToken?: string | null,
      _reserveToken?: string | null,
      _poolAmount?: null,
      _reserveAmount?: null
    ): ProtectionRemovedEventFilter;

    "ProtectionUpdated(address,uint256,uint256,uint256,uint256)"(
      _provider?: string | null,
      _prevPoolAmount?: null,
      _prevReserveAmount?: null,
      _newPoolAmount?: null,
      _newReserveAmount?: null
    ): ProtectionUpdatedEventFilter;
    ProtectionUpdated(
      _provider?: string | null,
      _prevPoolAmount?: null,
      _prevReserveAmount?: null,
      _newPoolAmount?: null,
      _newReserveAmount?: null
    ): ProtectionUpdatedEventFilter;

    "SystemBalanceUpdated(address,uint256,uint256)"(
      _token?: null,
      _prevAmount?: null,
      _newAmount?: null
    ): SystemBalanceUpdatedEventFilter;
    SystemBalanceUpdated(
      _token?: null,
      _prevAmount?: null,
      _newAmount?: null
    ): SystemBalanceUpdatedEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLockedBalance(
      _provider: string,
      _amount: BigNumberish,
      _expirationTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPoolToWhitelist(
      _poolAnchor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addProtectedLiquidity(
      _provider: string,
      _poolToken: string,
      _reserveToken: string,
      _poolAmount: BigNumberish,
      _reserveAmount: BigNumberish,
      _reserveRateN: BigNumberish,
      _reserveRateD: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    incSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPoolWhitelisted(
      _poolAnchor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedBalanceCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedBalanceRange(
      _provider: string,
      _startIndex: BigNumberish,
      _endIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    protectedLiquidity(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protectedLiquidityCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protectedLiquidityId(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protectedLiquidityIds(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePoolFromWhitelist(
      _poolAnchor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeProtectedLiquidity(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    systemBalance(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalProtectedPoolAmount(
      _poolToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalProtectedReserveAmount(
      _poolToken: string,
      _reserveToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProtectedLiquidityAmounts(
      _id: BigNumberish,
      _newPoolAmount: BigNumberish,
      _newReserveAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistedPool(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistedPoolCount(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistedPools(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawTokens(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLockedBalance(
      _provider: string,
      _amount: BigNumberish,
      _expirationTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPoolToWhitelist(
      _poolAnchor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addProtectedLiquidity(
      _provider: string,
      _poolToken: string,
      _reserveToken: string,
      _poolAmount: BigNumberish,
      _reserveAmount: BigNumberish,
      _reserveRateN: BigNumberish,
      _reserveRateD: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    incSystemBalance(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPoolWhitelisted(
      _poolAnchor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedBalanceCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedBalanceRange(
      _provider: string,
      _startIndex: BigNumberish,
      _endIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protectedLiquidity(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protectedLiquidityCount(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protectedLiquidityId(
      _provider: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protectedLiquidityIds(
      _provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLockedBalance(
      _provider: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePoolFromWhitelist(
      _poolAnchor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeProtectedLiquidity(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    systemBalance(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalProtectedPoolAmount(
      _poolToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalProtectedReserveAmount(
      _poolToken: string,
      _reserveToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateProtectedLiquidityAmounts(
      _id: BigNumberish,
      _newPoolAmount: BigNumberish,
      _newReserveAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistedPool(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistedPoolCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistedPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawTokens(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
