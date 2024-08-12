"use client";

import React, { useEffect, useState } from "react";

import type { ThemeColors } from "@/lib/hooks/use-dapp-colors";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { COMPANY_DETAILS, TOKENOMICS } from "@/lib/dapp-config";

import DappWalletButton from "./dapp-wallet-button";

type Props = {
  targetDate: string | Date;
  colors?: ThemeColors;
  fonts?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function DappCard({ targetDate, colors, fonts }: Props) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - Date.now();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const progressPercentage = 70;

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div
      className="w-full"
      style={{
        border: `1px solid ${colors?.primary}`,
        borderRadius: "16px",
        fontFamily: fonts,
      }}
    >
      <Card>
        <CardContent className="md:p-2 md:px-8">
          <div className="h-4" />

          <div
            className="mx-auto max-w-sm rounded-lg p-2 shadow-lg lg:p-6"
            style={{ backgroundColor: colors?.background }}
          >
            <h2
              className="mb-4 text-sm font-bold"
              style={{ color: colors?.muted }}
            >
              Starting in
            </h2>
            <div className="flex justify-between lg:space-x-4 md:gap-y-2">
              {timeLeft && Object.keys(timeLeft).length > 0 ? (
                <>
                  <div className="md:mb-3">
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      {timeLeft.days}
                    </span>
                    <span
                      className="block text-xs"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      Days
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      {timeLeft.hours}
                    </span>
                    <span
                      className="block text-xs"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      Hours
                    </span>
                  </div>
                  <div className="md:mb-3">
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      {timeLeft.minutes}
                    </span>
                    <span
                      className="block text-xs"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      Minutes
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      {timeLeft.seconds}
                    </span>
                    <span
                      className="block text-xs"
                      style={{
                        fontFamily: fonts,
                      }}
                    >
                      Seconds
                    </span>
                  </div>
                </>
              ) : (
                <span className="text-4xl font-bold">Time&apos;s up!</span>
              )}
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mx-auto mt-6 max-w-lg rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2
                  className="text-xs"
                  style={{
                    fontFamily: fonts,
                  }}
                >
                  Progress
                </h2>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: fonts,
                  }}
                >
                  {progressPercentage}%
                </span>
              </div>
            </div>
            <div className="mb-4">
              <Progress
                value={progressPercentage}
                className="h-4"
                style={{
                  backgroundColor: colors?.muted,
                  color: colors?.primary,
                }}
              />
            </div>
            <div className="flex justify-between">
              <span
                className="text-xs"
                style={{
                  fontFamily: fonts,
                }}
              >
                0.00 USD
              </span>
              <span
                className="text-xs"
                style={{
                  fontFamily: fonts,
                }}
              >
                8000.00 USD
              </span>
            </div>
          </div>

          <hr className="my-4 h-px bg-gray-300" />

          <div>
            <div className="mb-2 flex justify-between">
              <h3
                className="text-sm"
                style={{ color: colors?.muted, fontFamily: fonts }}
              >
                My Contribution
              </h3>
              <h3 className="text-sm font-semibold">
                0 {TOKENOMICS.tokenName}
              </h3>
            </div>
            <div className="mb-2 flex justify-between">
              <h3
                className="text-sm"
                style={{ color: colors?.muted, fontFamily: fonts }}
              >
                My Limit Contribution
              </h3>
              <h3 className="text-sm font-semibold">
                0 {TOKENOMICS.tokenName}
              </h3>
            </div>
            <div className="mb-2 flex justify-between">
              <h3
                className="text-sm"
                style={{ color: colors?.muted, fontFamily: fonts }}
              >
                My Reserved Tokens
              </h3>
              <h3 className="text-sm font-semibold">
                0 {TOKENOMICS.tokenName}
              </h3>
            </div>
            <div className="mb-2 flex justify-between">
              <h3
                className="text-sm"
                style={{ color: colors?.muted, fontFamily: fonts }}
              >
                Total Contributors
              </h3>
              <h3 className="text-sm font-semibold">300 Participants</h3>
            </div>
          </div>
        </CardContent>
        <div className="h-5" />

        <CardFooter className="md:pb-0">
          <DappWalletButton colors={colors} />
        </CardFooter>
      </Card>
    </div>
  );
}
