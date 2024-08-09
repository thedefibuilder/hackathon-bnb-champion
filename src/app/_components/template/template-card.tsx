import React from "react";

import { HandMetal, WandSparkles } from "lucide-react";
// import { useSession } from 'next-auth/react';
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { SignIn } from '@/components/user/dialog/sign-in';
import { type TTemplate } from "@/lib/templates";
import { cn } from "@/lib/utils";

type TTemplateCardProps = {
  title: string;
  description: string;
  image: string;
  template: TTemplate;
  isPro: boolean;
  onClick: () => void;
};

export default function TemplateCard({
  title,
  image,
  description,
  template,
  isPro,
  onClick,
}: TTemplateCardProps) {
  // const { status } = useSession();
  const modules =
    template.contracts.map((contract) => ({
      moduleName: contract.moduleName,
      features: contract.featureNames,
    })) ?? [];

  return (
    <div
      className={cn(
        "lg:hover:border-primary-light group relative w-full rounded-3xl border-2 p-3 lg:px-6",
        modules.length > 0
          ? "min-h-[620px] md:min-h-[600px] lg:min-h-[521px]"
          : "",
        isPro
          ? "border-secondary-dark lg:hover:bg-template-card-orange-gradient lg:hover:border-secondary"
          : "lg:hover:bg-template-card-gradient",
      )}
    >
      <div className="relative z-10">
        {isPro ? (
          <div className="flex items-center gap-3 lg:group-hover:opacity-0">
            <HandMetal className="text-secondary" />
            <h4 className="text-secondary">Pro Template</h4>
          </div>
        ) : (
          <h4 className="lg:group-hover:opacity-0">Template</h4>
        )}

        <div className="h-4" />
        <h2 className="text-xl font-bold lg:min-h-[50px] lg:group-hover:opacity-0">
          {title}
        </h2>
        <div className="h-4 lg:hidden" />
        <Image
          src={image}
          alt={title}
          width={318}
          height={220}
          className="h-auto w-full rounded transition-opacity duration-300 ease-in-out lg:group-hover:opacity-0"
        />
        <div className="group relative">
          <div
            className={cn(
              "z-40 transform transition-opacity transition-transform duration-300 ease-in-out lg:absolute lg:-top-[12rem] lg:left-0 lg:right-0 lg:min-h-[220px] lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100",
              isPro
                ? "bg-template-card-orange-gradient-test lg:opacity-0"
                : "lg:bg-template-card-gradient",
            )}
          >
            <div className="h-4 lg:h-8" />
            <p className="text-s sm:min-h-auto md:min-h-[90px] lg:min-h-[85px]">
              {description}
            </p>
            <div className="h-4" />
            {status === "authenticated" ? (
              <Button
                className={cn(
                  "flex w-full items-center gap-2 rounded",
                  isPro
                    ? "bg-secondary-dark hover:text-secondary-dark text-secondary hover:bg-secondary"
                    : "hover:bg-primary-light bg-primary",
                )}
                type="button"
                onClick={onClick}
              >
                <WandSparkles /> Create with template
              </Button>
            ) : (
              <div className="flex w-full">{/* <SignIn /> */}</div>
            )}
          </div>
        </div>

        <div className="h-6" />
        <h3 className="text-accent-medium">
          {modules.length > 0
            ? "Template Modules"
            : "Choose any modules you want"}
        </h3>
        <div className="h-2" />
        {modules.length > 0 ? (
          <Tabs defaultValue={modules[0]?.moduleName ?? ""}>
            <TabsList className="gap-3 bg-transparent px-0 py-1">
              {modules.map((module, index) => (
                <TabsTrigger
                  key={`${module.moduleName}-${index}`}
                  className="text-l !bg-secondary-medium rounded"
                  value={module.moduleName}
                >
                  {module.moduleName}
                </TabsTrigger>
              ))}
            </TabsList>
            {modules.map((module, index) => (
              <TabsContent
                key={`${module.moduleName}-content-${index}`}
                value={module.moduleName}
                className="min-h-[122px] w-full"
              >
                <div className="flex w-full flex-wrap gap-2 overflow-auto">
                  {module.features.map((feature, fIndex) => (
                    <span
                      key={`${feature}-${fIndex}`}
                      className={cn([
                        "text-l rounded px-2 py-1",
                        isPro
                          ? "!bg-secondary-dark !text-secondary"
                          : "!bg-primary-foreground !text-primary",
                      ])}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : null}
      </div>
    </div>
  );
}
