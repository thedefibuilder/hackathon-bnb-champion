/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from 'react';

import type { TChain } from '@/lib/types/chain';
import type { Control, FieldValues, Path } from 'react-hook-form';

import Image from 'next/image';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { getChainConfig, mainnetChains, testnetChains } from '@/lib/chains';
import { cn } from '@/lib/utils';

type TControlledFormRadio<TFormSchema extends FieldValues> = {
  control: Control<TFormSchema>;
  name: Path<TFormSchema>;
  label: string;
  testnetMode?: boolean;
  toggleTestnetSwitch?: () => void;
  withCurrency?: boolean;
  chainOption: TChain[];
};

const CONTROLLED_FORM_CHAIN_SELECT_CLASS =
  'flex cursor-pointer items-center gap-2 rounded-[4px] border p-2 px-2 md:space-x-2 md:px-4';
const BG_CLASS = 'bg-primary-light';
const TEXT_XL_FONT_BOLD_CLASS = 'text-2xl font-bold';

export default function ControlledFormChainSelect<TFormSchema extends FieldValues>({
  control,
  name,
  label,
  testnetMode,
  toggleTestnetSwitch,
  withCurrency,
  chainOption
}: TControlledFormRadio<TFormSchema>) {
  const displayedChains = withCurrency ? chainOption : testnetMode ? testnetChains : mainnetChains;

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {withCurrency ? (
              <FormItem>
                <div className='flex items-center gap-x-1'>
                  <FormLabel className={TEXT_XL_FONT_BOLD_CLASS}>{label}</FormLabel>
                  <FormMessage className='leading-none' />
                </div>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={(newValue) => {
                      const parsedValue = Number.parseInt(newValue, 10);
                      const chainConfig = getChainConfig(parsedValue);
                      if (chainConfig) {
                        field.onChange({
                          ...field.value,
                          chainId: parsedValue,
                          currency: chainConfig.paymentCurrencies[0]?.address,
                          currencyDecimals: chainConfig.paymentCurrencies[0]?.decimals
                        });
                      }
                    }}
                    className='flex w-full flex-wrap items-center gap-3 pt-4 md:pb-12 md:pt-8'
                  >
                    {displayedChains.map((option) => (
                      <div
                        key={option.name}
                        onClick={() => {
                          const chainConfig = getChainConfig(option.network.id);
                          if (chainConfig) {
                            field.onChange({
                              ...field.value,
                              chainId: option.network.id,
                              currency: chainConfig.paymentCurrencies[0]?.address,
                              currencyDecimals: chainConfig.paymentCurrencies[0]?.decimals
                            });
                          }
                        }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const chainConfig = getChainConfig(option.network.id);
                            if (chainConfig) {
                              field.onChange({
                                ...field.value,
                                chainId: option.network.id,
                                currency: chainConfig.paymentCurrencies[0]?.address,
                                currencyDecimals: chainConfig.paymentCurrencies[0]?.decimals
                              });
                            }
                          }
                        }}
                        role='button'
                        tabIndex={0}
                        className={cn([
                          CONTROLLED_FORM_CHAIN_SELECT_CLASS,
                          field.value?.chainId === option.network.id ? BG_CLASS : ''
                        ])}
                      >
                        <Image
                          src={option.logoURL}
                          alt={`${option.name}'s logo`}
                          width={20}
                          height={20}
                          className='h-5 w-5 rounded-full'
                        />
                        {option.name}
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            ) : (
              <FormItem>
                <div className='flex items-center gap-3 sm:flex-col sm:items-start'>
                  <FormLabel className={TEXT_XL_FONT_BOLD_CLASS}>{label}</FormLabel>
                  <div className='h-8 w-[1px] bg-white sm:hidden' />
                  <div className={cn('flex items-center gap-3', withCurrency ? 'hidden' : 'flex')}>
                    <Switch
                      type='button'
                      checked={testnetMode}
                      onCheckedChange={toggleTestnetSwitch}
                    />
                    <p>Testnet Mode</p>
                  </div>
                </div>
                <FormMessage className='leading-none' />
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className='flex w-full flex-wrap items-center gap-3 pt-4 md:pb-12 md:pt-8'
                  >
                    {displayedChains.map((option) => (
                      <div
                        key={option.name}
                        onClick={() => field.onChange(option.network.id)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            field.onChange(option.network.id);
                          }
                        }}
                        role='button'
                        tabIndex={0}
                        className={cn([
                          CONTROLLED_FORM_CHAIN_SELECT_CLASS,
                          field.value === option.network.id ? BG_CLASS : ''
                        ])}
                      >
                        <Image
                          src={option.logoURL}
                          alt={`${option.name}'s logo`}
                          width={20}
                          height={20}
                          className='h-5 w-5 rounded-full'
                        />
                        {option.name}
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
            {withCurrency && field.value && (
              <FormItem>
                <div className='h-2' />
                <div className='flex items-center gap-x-1'>
                  <FormLabel className={TEXT_XL_FONT_BOLD_CLASS}>Choose CryptoCurrency</FormLabel>
                  <FormMessage className='leading-none' />
                </div>
                <FormControl>
                  <RadioGroup
                    value={field.value.currency}
                    onValueChange={(newValue) =>
                      field.onChange({ ...field.value, currency: newValue })
                    }
                    className='flex w-full flex-wrap items-center gap-3 pt-4 md:pb-12 md:pt-8'
                  >
                    {getChainConfig(field.value.chainId as number)?.paymentCurrencies.map(
                      (currency, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            field.onChange({
                              ...field.value,
                              currency: currency.address,
                              currencyDecimals: currency.decimals
                            })
                          }
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              field.onChange({
                                ...field.value,
                                currency: currency.address,
                                currencyDecimals: currency.decimals
                              });
                            }
                          }}
                          role='button'
                          tabIndex={0}
                          className={cn(
                            CONTROLLED_FORM_CHAIN_SELECT_CLASS,
                            field.value.currency === currency.address ? BG_CLASS : ''
                          )}
                        >
                          <Image
                            src={currency.logoURL}
                            alt={`${currency.name}'s logo`}
                            width={20}
                            height={20}
                            className='h-5 w-5 rounded-full'
                          />
                          {currency.name}
                        </div>
                      )
                    )}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          </>
        )}
      />
    </>
  );
}
